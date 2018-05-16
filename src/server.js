"use strict";
//Vaibhav Negi WebEvaluation Day-1 Assignment...
exports.__esModule = true;
var express_1 = require("express");
var enitity_1 = require("./model/enitity");
var course_1 = require("./routes/course");
var subject_1 = require("./routes/subject");
var student_1 = require("./routes/student");
var teacher_1 = require("./routes/teacher");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
var routes = {
    course: course_1["default"],
    subject: subject_1["default"],
    student: student_1["default"],
    teacher: teacher_1["default"]
};
app.use('/course', routes.course);
app.use('/student', routes.student);
app.use('/teacher', routes.teacher);
app.use('/subject', routes.subject);
app.listen(3000, function () {
    enitity_1.db.sync();
    console.log("started at 3000");
});
