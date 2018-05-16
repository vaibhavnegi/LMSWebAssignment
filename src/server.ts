//Vaibhav Negi WebEvaluation Day-1 Assignment...

import express from 'express'
import { Request, Response } from 'express'
import path from 'path'
import { db } from "./model/enitity"
import courseRoute from "./routes/course"
import subjectRoute from './routes/subject'
import studentRoute from './routes/student'
import teacherRoute from './routes/teacher'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, '../public')));

app.get("/", (req: Request, res: Response) => {
    res.sendFile('index.html');
}); 

const routes = {
    course: courseRoute,
    subject: subjectRoute,
    student: studentRoute,
    teacher: teacherRoute       
}

app.use('/course', routes.course);
app.use('/student', routes.student);
app.use('/teacher', routes.teacher);
app.use('/subject', routes.subject);


app.listen(process.env.PORT || 3000, () => {
    db.sync();
    console.log("started at 3000");
})

