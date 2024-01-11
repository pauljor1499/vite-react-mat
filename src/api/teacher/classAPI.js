import axios from "axios";
import { TeacherHost } from "../hosts";

const CLASS_URL = TeacherHost.prototype.classEndPoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export default class classAPI {
    async fetchAllClasses() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));
        const request = await axios.get(CLASS_URL + "/teacher/fetch/all");
        return request;
    }

    async createNewClass(payload) {
        const response = await axios.post(CLASS_URL + "/create", payload);
        return response;
    }

    async deleteClass(classUUID) {
        const response = await axios.delete(CLASS_URL + "/delete/" + classUUID);
        return response;
    }

    async updateClass(classUUID, classDetails) {
        const response = await axios.put(CLASS_URL + "/update/" + classUUID, classDetails);
        return response;
    }

    async fetchSpecificClass(classUUID) {
        const response = await axios.get(CLASS_URL + "/teacher/fetch/" + classUUID);
        return response;
    }

    // async accept_student(class_uuid, student_id) {
    //     const response = await axios.patch(url + "/accept/student/" + class_uuid + "/" + student_id);
    //     return response;
    // }

    // async reject_student(class_uuid, student_id) {
    //     const response = await axios.delete(url + "/remove/student/" + class_uuid + "/" + student_id);
    //     return response;
    // }
}
