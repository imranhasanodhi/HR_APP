// Utility function to calculate years worked
export const calculateYearsWorked = (startDate) => {
    const currentDate = new Date();
    const startDateObj = new Date(startDate);
  
    let yearsWorked = currentDate.getFullYear() - startDateObj.getFullYear();
    const monthDiff = currentDate.getMonth() - startDateObj.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < startDateObj.getDate())) {
      yearsWorked--; // Subtract a year if the current date hasn't reached the start date yet this year
    }
  
    return yearsWorked;
  };
  