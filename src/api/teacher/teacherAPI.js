import axios from "axios";
import { TeacherHost } from "../hosts";

const TEACHER_URL = TeacherHost.prototype.teacherEndPoint();
axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));

export default class teacherAPI {
    async teacherLogin(payload) {
        const request = await axios.post(TEACHER_URL + "/login", payload);
        return request;
    }

    async teacherRegister(payload) {
        const request = await axios.post(TEACHER_URL + "/register", payload);
        return request;
    }

    async teacherGetData() {
        axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.getItem("token"));
        const user = await axios.get(TEACHER_URL + "/fetch/account_data");
        return user;
    }

    // async update_user_details(updated_details) {
    //     const user = await axios.put(url + "/update/user_details", updated_details);
    //     return user;
    // }

    // async change_password(updated_data) {
    //     const user = await axios.patch(url + "/update/user_password", updated_data);
    //     return user;
    // }

    // async update_profile_photo(photo) {
    //     const user = await axios.patch(url + "/update/user_profile_picture", photo);
    //     return user;
    // }

    // async remove_profile_photo() {
    //     const user = await axios.delete(url + "/delete/user_profile_picture");
    //     return user;
    // }

    // async add_education(data) {
    //     const user = await axios.post(url + "/add/user_education", data);
    //     return user;
    // }

    // async update_education(new_data) {
    //     const user = await axios.patch(url + "/update/user_education", new_data);
    //     return user;
    // }

    // async delete_education(uuid) {
    //     const user = await axios.delete(url + "/delete/user_education/" + uuid);
    //     return user;
    // }
}
