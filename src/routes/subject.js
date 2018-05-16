"use strict";
exports.__esModule = true;
var express_1 = require("express");
var subjectService_1 = require("../service/subjectService");
var route = express_1["default"].Router();
route.get('/', function (req, res) {
    subjectService_1.getSubject().then(function (Subject) {
        res.status(200).send(Subject);
    });
});
route.post('/', function (req, res) {
    var newSubject = {
        id: 0,
        name: req.body.name
    };
    subjectService_1.addSubjects(newSubject, req.body.cid).then(function (subjects) {
        res.status(200).send(subjects);
    });
});
route.get('/:id/teachers', function (req, res) {
    subjectService_1.getTeachers(req.params.id).then(function (Teacher) {
        res.status(200).send(Teacher);
    });
});
route.get('/:id', function (req, res) {
    subjectService_1.getSubjectbyId(req.params.id).then(function (subject) {
        res.status(200).send(subject);
    });
});
exports["default"] = route;
