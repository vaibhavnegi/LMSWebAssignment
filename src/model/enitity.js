"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db = new sequelize_1["default"]('LearnMgmtSol', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.db = db;
var courseAttr = {
    id: { type: sequelize_1["default"].INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1["default"].STRING, allowNull: false }
};
exports.Course = db.define('course', courseAttr);
var batchAttr = {
    id: { type: sequelize_1["default"].INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1["default"].STRING, allowNull: false }
};
exports.Batch = db.define('batch', batchAttr);
var lectureAttr = {
    id: { type: sequelize_1["default"].INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1["default"].STRING, allowNull: false }
};
exports.Lecture = db.define('lecture', lectureAttr);
var studentAttr = {
    id: { type: sequelize_1["default"].INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1["default"].STRING, allowNull: false }
};
exports.Student = db.define('student', studentAttr);
var subjectAttr = {
    id: { type: sequelize_1["default"].INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1["default"].STRING, allowNull: false }
};
exports.Subject = db.define('subject', subjectAttr);
var teacherAttr = {
    id: { type: sequelize_1["default"].INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1["default"].STRING, allowNull: false }
};
exports.Teacher = db.define('teacher', teacherAttr);
exports.Course.hasMany(exports.Subject);
exports.Subject.belongsTo(exports.Course);
exports.Course.hasMany(exports.Batch);
exports.Batch.belongsTo(exports.Course);
exports.Batch.hasMany(exports.Lecture);
exports.Lecture.belongsTo(exports.Batch);
exports.Subject.hasMany(exports.Teacher);
exports.Teacher.belongsTo(exports.Subject);
exports.Lecture.belongsTo(exports.Subject, { as: 'subject' });
exports.Lecture.belongsTo(exports.Teacher, { as: 'teacher' });
exports.Student.belongsToMany(exports.Batch, { through: 'student_batch', onDelete: 'cascade', hooks: true });
exports.Batch.belongsToMany(exports.Student, { through: 'student_batch', onDelete: 'cascade', hooks: true });
db.sync().then(function () { return console.log("Database synched"); })["catch"](function (err) { return console.log("Couldn't create database"); });
