export const maxValueOfArray = (array) => {
  return array.reduce((a, b) => (a > b ? a : b));
};

export const minValueOfArray = (array) => {
  return array.reduce((a, b) => (a < b ? a : b));
};
