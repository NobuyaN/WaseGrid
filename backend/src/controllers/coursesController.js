import Course from '../models/Course.js';

export async function getCourses(req, res) {
    try {
        const {
            searchQuery, 
            school, 
            eligibleYear, 
            campus, 
            language, 
            level, 
            season, 
            session, 
            day, 
            period
        } = req.query;

        const filters = [];
        if (school) filters.push({"equals": {"path": "school", "value": school}});
        if (eligibleYear) filters.push({"equals": {"path": "eligible_year", "value": Number(eligibleYear)}});
        if (campus) filters.push({"equals": {"path": "campus", "value": campus}});
        if (language) filters.push({"equals": {"path": "main_language", "value": language}});
        if (level) filters.push({"equals": {"path": "level", "value": level}});
        if (season) filters.push({"equals": {"path": "term_day_period.terms.season", "value": season}});
        if (session) filters.push({"equals": {"path": "term_day_period.terms.session", "value": session}});
        if (day) filters.push({"equals": {"path": "term_day_period.schedules.day", "value": day}});
        if (period) filters.push({"equals": {"path": "term_day_period.schedules.period", "value": period}});


        Course.aggregate([
            {
                $search: {
                    "index": "course_search",
                    "compound": {
                        "must": [
                            {
                                "autocomplete": {
                                    "query": searchQuery,
                                    "path": ["course_title", "instructor"],
                                    "fuzzy": { "maxEdits": 1 }
                                }
                            },
                            {
                                "text": {
                                    "query": searchQuery,
                                    "path": ["course_title", "instructor"],
                                    "fuzzy": { "maxEdits": 1 }
                                }
                            },
                        ],
                        "minimumShouldMatch": 1,
                        filter: filters
                    }
                }
            }
        ]);

        res.status(200).json({message: "successfully fetched courses"});
    } catch (error) {
        console.error("Error in getAllCourses controller", error);
        res.status(500).json({message: "Server error"});
    }
};
