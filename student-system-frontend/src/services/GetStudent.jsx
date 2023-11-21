import axios from "axios";

const api_get_url = "http://localhost:8080/student/getAllStudent"

export default function getAllStudent() {
    console.log("Getting all Student Information");
    return axios.get(api_get_url)
}