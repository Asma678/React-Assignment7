const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";

const addStudent = (path) => {
   return {
       type: ADD_STUDENT,
       payload: path
   }
}

const editStudent = (path1, path2, path3, path4, ind) => {
   return {
       type: EDIT_STUDENT,
       payload1: path1,
       payload2: path2,
       payload3: path3,
       payload4: path4,
       index: ind
   }
}

export {addStudent};
export {editStudent};