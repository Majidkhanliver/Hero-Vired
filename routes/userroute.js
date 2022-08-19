const express = require('express');
const router= express.Router();
const upload = require('../Middleware/Upload');
const authenticate= require('../Middleware/authenticate')

const {create ,all,find,findAndDelete,deleteCourse,
    updateCourse,login}= require('../Controller/CourseController')
router.post('/Create',upload.single('img'),create);
router.post('/login',login)
router.get('/all',authenticate,all)
router.get('/find',authenticate,find)
router.get('/findAndDelete/:id',authenticate,findAndDelete)
router.put('/updateCourse/:id',authenticate,updateCourse);
router.delete('/delete',authenticate,deleteCourse);

module.exports=router;
