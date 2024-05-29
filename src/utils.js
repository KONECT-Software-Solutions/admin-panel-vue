// Custom sorting function
function customSortByDate(a, b) {
    // Convert date strings to Date objects for comparison
    var dateA = new Date(a.created_date.split('.').reverse().join('.'));
    var dateB = new Date(b.created_date.split('.').reverse().join('.'));
    
    // Compare the dates
    return dateB - dateA; // Sort in descending order
  }

export { customSortByDate };