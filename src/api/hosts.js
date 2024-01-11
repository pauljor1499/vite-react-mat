export class TeacherHost {
    teacherEndPoint() {
        return "http://localhost:8000/teacher";
    }

    classEndPoint() {
        return "http://localhost:8000/class";
    }

    // assignment_endpoint() {
    //     return "http://localhost:8000/assignment";
    // }

    // question_endpoint() {
    //     return "http://localhost:8001/question";
    // }
}

export class StudentHost {
    studentEndpoint() {
        return "http://localhost:8000/student";
    }

    classEndPoint() {
        return "http://localhost:8000/class";
    }
}
