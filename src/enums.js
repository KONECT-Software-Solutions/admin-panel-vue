export const MeetingStatus = Object.freeze({
  REQUESTED: { id: 0, label: "Onay Bekliyor!", color: "blue" },
  APPROVED: { id: 1, label: "Onaylandı!", color: "green" },
  COMPLETED: { id: 2, label: "Tamamlandı", color: "gray" },
  REJECTED: { id: 3, label: "İptal ettiniz", color: "red" },
  AWATING: { id: 4, label: "Müşteri Onayında", color: "orange" },
  EDITED: { id: 5, label: "Müşteri Değişikliği!", color: "orange" },
  CANCELLEDW: { id: 6, label: "Müşteri İptal etti", color: "black" },
  CANCELLEDWO: { id: 7, label: "Müşteri İptal etti", color: "black" },
});
