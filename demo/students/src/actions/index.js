import studentAPI from "../api/studentsAPI";

export const fetchStudent = () => {
    return async (dispatch) => {
        const response = await studentAPI.get('/student');
        console.log(response.data);
        dispatch({ type: 'FETCH_STUDENTS', payload: response.data })
    }
};
