import Course from '../models/Course.js';

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error("Error in getAllCourses controller", error);
        res.status(500).json({message: "Server error"});
    }
};

export const createCourse = async (req, res) => {
    try {
        const {title, content} = req.body;
        const newCourse = new Course({title, content})
        await newCourse.save();
        res.status(201).json({message: "Note created successfully"});
    } catch (error) {
        console.error("Error in createCourse controller", error);
        res.status(500).json({message: "Server error"});
    }
};

export const updateCourse = (req, res) => {
    res.status(200).json({message: "Note updated successfully"});
};

export const deleteCourse = (req, res) => {
    res.status(200).json({message: "Note deleted successfully"});
};