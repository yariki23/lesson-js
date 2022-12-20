//input: first arg array all students, second arg array students who failed the test
//return: array with students who passed the test and congratulations

//algo
//1. use method filter with include
//2. create new arr messages and use method map
//3. return messages

const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const passedStudents = allStudentsList.filter(
    (name) => !studentsForRetake.includes(name)
  );

  const messages = passedStudents.map((name) => `Good job, ${name}`);
  return messages;
};

// examples
const allStudTest1 = ["Den", "John", "Ann", "Mike"];
const retakeStudTest1 = ["John", "Mike"];
getMessagesForBestStudents(allStudTest1, retakeStudTest1); // ===> ['Good job, Den', 'Good job, Ann']

const allStudTest2 = ["Den", "John", "Ann", "Mike"];
const retakeStudTest2 = ["Den", "John", "Ann", "Mike"];
getMessagesForBestStudents(allStudTest2, retakeStudTest2); // ===> []
