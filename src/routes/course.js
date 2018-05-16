"use strict";
exports.__esModule = true;
var express_1 = require("express");
var courseService_1 = require("../service/courseService");
var route = express_1["default"].Router();
route.get('/', function (req, res) {
    courseService_1.getCourses().then(function (courses) {
        res.status(200).send(courses);
    });
});
route.get('/:id', function (req, res) {
    courseService_1.getCoursesbyId(req.params.id).then(function (courses) {
        res.status(200).send(courses);
    });
});
route.post('/', function (req, res) {
    var newCourse = {
        id: 0,
        name: req.body.name
    };
    courseService_1.addCourses(newCourse).then(function (course) {
        res.status(200).send(course);
    });
});
route.get('/:id/batches', function (req, res) {
    courseService_1.getBatches(req.params.id).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.post('/:id/batches', function (req, res) {
    var newBatch = {
        id: 0,
        name: req.body.name
    };
    courseService_1.addBatch(req.params.id, newBatch).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:id/batches/:bid', function (req, res) {
    courseService_1.getBatchById(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:id/batches/:bid/students', function (req, res) {
    courseService_1.getBatchStudents(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch);
    });
});
route.get('/:id/batches/:bid/teachers', function (req, res) {
    courseService_1.getBatchTeachers(req.params.id, req.params.bid).then(function (batch) {
        res.status(200).send(batch);
    });
});
route["delete"]('/:id', function (req, res) {
    var id = req.params.id;
    try {
        courseService_1.deleteCourseById(id).then(function (result) {
            if (result === 0)
                throw Error('CourseId not found' + id);
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
exports["default"] = route;
