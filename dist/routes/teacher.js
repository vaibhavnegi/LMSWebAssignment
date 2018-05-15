"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teacherService_1 = require("../service/teacherService");
const route = express_1.default.Router();
route.get('/', (req, res) => {
    teacherService_1.getTeacher().then((Subject) => {
        res.status(200).send(Subject);
    });
});
route.post('/', (req, res) => {
    let newSubject = {
        id: 0,
        name: req.body.name
    };
    teacherService_1.addTeacher(newSubject, req.body.cid).then((subjects) => {
        res.status(200).send(subjects);
    });
});
route.get('/:id/batches', (req, res) => {
    teacherService_1.getbatches(req.params.id).then((Teacher) => {
        res.status(200).send(Teacher);
    });
});
route.get('/:id', (req, res) => {
    teacherService_1.getTeacherbyId(req.params.id).then((subject) => {
        res.status(200).send(subject);
    });
});
route.delete('/:id', (req, res) => {
    let id = req.params.id;
    try {
        teacherService_1.deleteUserById(id).then((result) => {
            if (result === 0)
                throw Error('TeacherId not found' + id);
            res.status(200).json({
                success: true,
                id: result
            });
        }).catch(err => {
            res.status(400);
        });
    }
    catch (err) {
        res.status(400);
    }
});
route.put('/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    teacherService_1.updateTeacher(id, name).then((result) => {
        console.log(result);
        if (result == 0)
            throw Error("Update failed No teacher found for id" + id);
        res.status(200).json(result);
    }).catch(err => {
        res.status(400);
    });
});
exports.default = route;
