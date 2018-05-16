"use strict";
exports.__esModule = true;
var express_1 = require("express");
var studentService_1 = require("../service/studentService");
var courseService_1 = require("../service/courseService");
var route = express_1["default"].Router();
route.get('/', function (req, res) {
    studentService_1.getStudents().then(function (students) {
        res.status(200).json(students);
    });
});
route.post('/', function (req, res) {
    var cid = req.body.cid;
    var bid = req.body.bid;
    var name = req.body.name;
    courseService_1.getBatchById(cid, bid).then(function (batch) {
        studentService_1.addStudent(name, batch).then(function (student) {
            res.status(200).json(student);
        });
    });
});
route.get('/:id', function (req, res) {
    var id = req.params.id;
    studentService_1.getStudentbyId(id).then(function (student) {
        res.status(200).json(student);
    });
});
route.get("/:id/batches", function (req, res) {
    var id = req.params.id;
    studentService_1.getStudentBatches(id).then(function (student) {
        res.status(200).json(student);
    });
});
route.post("/:id/courses/:cid/batches/:bid", function (req, res) {
    var id = req.params.id;
    var bid = req.params.bid;
    var cid = req.params.cid;
    courseService_1.getBatchById(cid, bid).then(function (batch) {
        studentService_1.getStudentbyId(id).then(function (student) {
            studentService_1.addStudentToBatch(student, batch).then(function (result) {
                console.log(result);
                res.json(result);
            });
        });
    });
});
route["delete"]('/:id', function (req, res) {
    var id = req.params.id;
    try {
        studentService_1.deleteUserById(id).then(function (result) {
            if (result === 0)
                throw Error('StudentId not found' + id);
            res.status(200).json({
                success: true,
                id: result
            });
        })["catch"](function (err) {
            res.status(400);
        });
    }
    catch (err) {
        res.status(400);
    }
});
route.put('/:id', function (req, res) {
    var id = req.params.id;
    var name = req.body.name;
    studentService_1.updateStudent(id, name).then(function (result) {
        console.log(result);
        if (result == 0)
            throw Error("Update failed No Student found for id" + id);
        res.status(200).json(result);
    })["catch"](function (err) {
        res.status(400);
    });
});
exports["default"] = route;
