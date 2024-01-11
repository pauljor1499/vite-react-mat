const getCurrentSemester = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1; // Note: January is 0

  let semester;

  if (currentMonth >= 1 && currentMonth <= 5) {
    semester = "Spring";
  } else if (currentMonth >= 6 && currentMonth <= 8) {
    semester = "Summer";
  } else {
    semester = "Fall";
  }

  return `${currentYear}-${semester}`;
};

export default getCurrentSemester;
