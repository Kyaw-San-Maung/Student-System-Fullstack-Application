
import axios from "axios";

const Api_url = "http://localhost:8080/student/add"

export default function addStudent(studentinfo) {
    console.log("Adding Student");
    return axios.post(Api_url, studentinfo)
}

