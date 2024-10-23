import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import { getStorage, ref as storageRef, deleteObject } from "firebase/storage";

async function deleteFiles(customer_documents) {
  const storage = getStorage();

  if (!customer_documents) {
    console.log("no files");
    return;
  }

  for (const document of customer_documents) {
    try {
      // Extract file path from URL
      const url = new URL(document.file_url);
      const filePath = decodeURIComponent(
        url.pathname.split("/o/")[1].split("?")[0]
      );

      // Reference to the file in storage
      const fileRef = storageRef(storage, filePath);

      // Delete the file
      await deleteObject(fileRef);
      console.log(`Successfully deleted: ${document.name}`);
    } catch (error) {
      console.error(`Error deleting file: ${document.name}`, error);
    }
  }
}

const deleteException = async (exceptionData) => {
  console.log("Exception data to delete:", exceptionData);
  try {
    const attorneyDocRef = doc(db, "attorneys", exceptionData.attorney_id);
    const attorneyDoc = await getDoc(attorneyDocRef);
    if (attorneyDoc.exists()) {
      const attorneyData = attorneyDoc.data();
      const exceptions = attorneyData.exceptions || [];
      const updatedExceptions = exceptions.filter(
        (exception) => exception.meeting_id !== exceptionData.meeting_id
      );
      await updateDoc(attorneyDocRef, { exceptions: updatedExceptions });
    }
  } catch (error) {
    console.error("Error fetching attorney by ID:", error);
  }
};

async function updateMeeting(meetingDataToUpdate) {
  try {
    console.log("Updating document with ID:", meetingDataToUpdate.id);
    await updateDoc(
      doc(db, "meetings", meetingDataToUpdate.id),
      meetingDataToUpdate
    ); // Ensure updateDoc is awaited

    // Update cachedBlogs in local storage
    localStorage.setItem("cachedMeetings", JSON.stringify(meetingsData.value));
  } catch (error) {
    console.error("Error updating meeting document:", error);
  }
}

const checkDeadline = (meeting) => {
  const deadline = new Date(meeting.deadline.seconds * 1000);
  const currentDate = new Date();
  if (
    currentDate > deadline &&
    meeting.status === "0" &&
    meeting.payment_status !== "1"
  ) {
    console.log("Deadline exceeded for meeting:", meeting);
    // find this meeting in the firestore and update the status to 6
    const docRef = doc(db, "meetings", meeting.id);
    if (meeting.customer_documents.length > 0) {
      console.log("Deleting files:", meeting.customer_documents);
      deleteFiles(meeting.customer_documents);
    }
    else console.log("No files to delete");
    console.log("Updating documents of the meeting:");
    updateDoc(docRef, {
      status: "7",
      cancel_reason: "Ödeme süresi geçti.",
      payment_status: "2",
      customer_documets: [],
    });
    console.log("Deleting exception of the meeting:");
    deleteException({
      attorney_id: meeting.attorney_id,
      meeting_id: meeting.id,
    });
    return true;
  } else {
    return false;
  }
};

const checkFinalized = (meeting) => {
  // in order to count meeting as finalized. it should have status 2 and payment status 1 and the date should be passed by 2 hour
  const date = new Date(meeting.date_time.seconds * 1000 + 2 * 60 * 60 * 1000);
  const currentDate = new Date();
  if (
    currentDate > date &&
    meeting.status === "1" &&
    meeting.payment_status === "1"
  ) {
    console.log("Finalizing meeting:", meeting);
    const docRef = doc(db, "meetings", meeting.id);
    if (meeting.customer_documents.length > 0) {
      console.log("Deleting files:", meeting.customer_documents);
      deleteFiles(meeting.customer_documents);
    }
    else console.log("No files to delete");
    console.log("Updating documents of the finalized meeting:");
    updateDoc(docRef, {
      status: "2",
      customer_documets: [],
    });
    console.log("Deleting exception of the finalized meeting:");
    deleteException({
      attorney_id: meeting.attorney_id,
      meeting_id: meeting.id,
    });
    return true;
  } else {
    return false;
  }
}

function sortMeetings(meetings) {
  // Define the status priorities
  const statusPriority = {
    1: 1, // Kabul edildi
    0: 2, // İstek
    4: 3, // Müşteri onayı
    5: 3, // Avukat onayı
    2: 4, // Tamamlandı
    3: 5, // Reddedildi
    6: 6, // İptal edildi
    7: 7, // Süresi Geçti
  };

  // Convert Firestore timestamps to Date objects and sort the meetings
  return meetings.sort((a, b) => {
    const statusComparison =
      statusPriority[a.status] - statusPriority[b.status];
    if (statusComparison !== 0) {
      return statusComparison;
    } else {
      // Convert Firestore timestamps to Date objects
      const dateA = new Date(a.date_time.seconds * 1000);
      const dateB = new Date(b.date_time.seconds * 1000);
      return dateA - dateB;
    }
  });
}

function formatDate(timestamp, format = "all") {
  if (!timestamp) return "";
  if (timestamp.seconds) {
    // Firestore timestamp
    const date = new Date(timestamp.seconds * 1000);

    // Get date in "DD/MM/YYYY" format
    const formattedDate = date.toLocaleDateString("tr-TR");

    // Get time in "HH:mm" format
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;

    // Get month abbreviation and day name in Turkish
    const monthAbbr = date
      .toLocaleDateString("tr-TR", { month: "short" })
      .toUpperCase();
    const dayNumber = date.getDate();
    const dayName = date.toLocaleDateString("tr-TR", { weekday: "long" });

    // Return based on the format choice
    switch (format) {
      case "date":
        return formattedDate;
      case "time":
        return formattedTime;
      case "month":
        return monthAbbr;
      case "day-number":
        return dayNumber;
      case "day-name":
        return dayName;
      case "all":
      default:
        return {
          date: formattedDate,
          time: formattedTime,
          month: monthAbbr,
          dayNumber: dayNumber,
          dayName: dayName,
        };
    }
  }
}

function slugify(text) {
  const turkishCharMap = {
    Ç: "C",
    ç: "c",
    Ğ: "G",
    ğ: "g",
    İ: "I",
    ı: "i",
    Ö: "O",
    ö: "o",
    Ş: "S",
    ş: "s",
    Ü: "U",
    ü: "u",
  };

  return text
    .toString()
    .toLowerCase()
    .replace(/[ÇçĞğİıÖöŞşÜü]/g, (char) => turkishCharMap[char]) // Replace Turkish chars
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export {
  formatDate,
  slugify,
  deleteException,
  updateMeeting,
  checkDeadline,
  sortMeetings,
  checkFinalized,
};
