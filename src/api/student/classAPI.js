import axios from "axios";
import { StudentHost } from "../hosts";

const CLASS_URL = StudentHost.prototype.classEndPoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export default class classAPI {
    async enrollClassByUUID(classUUID) {
        const response = await axios.patch(CLASS_URL + "/join/" + classUUID);
        return response;
    }

    async fetchAllClasses() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));
        const response = await axios.get(CLASS_URL + "/student/fetch/all");
        return response;
    }

    async viewClassByUUID(classUUID) {
        const response = await axios.get(CLASS_URL + "/student/fetch/" + classUUID);
        return response;
    }

    async searchClassByUUID(classUUID) {
        const response = await axios.get(CLASS_URL + "/student/search/" + classUUID);
        return response;
    }
}
