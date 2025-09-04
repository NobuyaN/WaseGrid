import mongoose from "mongoose";

const {Schema, model} = mongoose;

const FlagsSchema = new Schema(
    {
        others: {type: Boolean, default: false},
        on_demand: {type: Boolean, default: false},
        time_unknown: {type: Boolean, default: false}
    },
    { _id : false }
);

const SlotSchema = new Schema(
    {
        season: {type: String, required: true},
        session: {type: String, default: null},
        day: {type: String, default: null},
        start_time: {type: Number, default: null},
        end_time: {type: Number, default: null},
        flags: {type: FlagsSchema, default: () => ({})}
    },
    { _id : false }
);

const TermSchema = new Schema(
    {
        season: {type: String, required: true},
        session: {type: String, default: null},
        position: {type: Number, required: true}
    },
    { _id : false }
);

const ScheduleSchema = new Schema(
    {
        seq: {type: Number, required: true},
        day: {type: String, default: null},
        period: {type: String, default: null},
        start_time: {type: Number, default: null},
        end_time: {type: Number, default: null},
        note: {type: String, default: null},
        flags: {type: FlagsSchema, default: () => ({})}
    },
    { _id : false }
);

const TermDayPeriodSchema = new Schema(
    {
        terms: {type: [TermSchema], default: () => []},
        schedules: {type: [ScheduleSchema], default: () => []},
    },
    { _id : false }
);

const CourseSchema = new Schema(
    {
        pKey_id: {type: String, required: true},
        url: {type: String, required: true},
        year: {type: Number, required: true},
        school: {type: String, default: null},
        course_title: {type: String, required: true},
        instructor: {type: [String], default: () => []},
        term_day_period: {type: TermDayPeriodSchema, default: () => ({})},
        category: {type: String, default: null},
        eligible_year: {type: Number, default: null},
        credits: {type: Number, default: null},
        classroom: {type: String, default: null},
        campus: {type: String, default: null},
        main_language: {type: String, default: null},
        class_modality_categories: {type: String, default: null},
        level: {type: String, default: null},
        types_of_lesson: {type: String, default: null},
        exam_contrib_prcnt: {type: Number, default: null},
        papers_contrib_prcnt: {type: Number, default: null},
        class_participation_contrib_prcnt: {type: Number, default: null},
        others_contrib_prcnt: {type: Number, default: null},
        slots: {type: [SlotSchema], default: () => []},
    },
    {
        timestamps: true,
        strict: true
    }
);

const Course = model("Course", CourseSchema, "courses");

export default Course;
