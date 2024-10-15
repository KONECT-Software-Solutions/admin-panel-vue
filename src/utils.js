
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
    'Ç': 'C', 'ç': 'c',
    'Ğ': 'G', 'ğ': 'g',
    'İ': 'I', 'ı': 'i',
    'Ö': 'O', 'ö': 'o',
    'Ş': 'S', 'ş': 's',
    'Ü': 'U', 'ü': 'u'
  };

  return text
    .toString()
    .toLowerCase()
    .replace(/[ÇçĞğİıÖöŞşÜü]/g, char => turkishCharMap[char]) // Replace Turkish chars
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')        // Remove all non-word chars
    .replace(/--+/g, '-')           // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export { formatDate, slugify };
