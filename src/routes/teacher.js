"use strict";
exports.__esModule = true;
var express_1 = require("express");
var teacherService_1 = require("../service/teacherService");
var route = express_1["default"].Router();
route.get('/', function (req, res) {
    teacherService_1.getTeacher().then(function (Subject) {
        res.status(200).send(Subject);
    });
});
route.post('/', function (req, res) {
    var newSubject = {
        id: 0,
        name: req.body.name
    };
    teacherService_1.addTeacher(newSubject, req.body.cid).then(function (subjects) {
        res.status(200).send(subjects);
    });
});
route.get('/:id/batches', function (req, res) {
    teacherService_1.getbatches(req.params.id).then(function (Teacher) {
        res.status(200).send(Teacher);
    });
});
route.get('/:id', function (req, res) {
    teacherService_1.getTeacherbyId(req.params.id).then(function (subject) {
        res.status(200).send(subject);
    });
});
route["delete"]('/:id', function (req, res) {
    var id = req.params.id;
    try {
        teacherService_1.deleteUserById(id).then(function (result) {
            if (result === 0)
                throw Error('TeacherId not found' + id);
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
    teacherService_1.updateTeacher(id, name).then(function (result) {
        console.log(result);
        if (result == 0)
            throw Error("Update failed No teacher found for id" + id);
        res.status(200).json(result);
    })["catch"](function (err) {
        res.status(400);
    });
});
exports["default"] = route;
