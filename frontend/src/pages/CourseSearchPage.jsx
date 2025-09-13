import {useState, useEffect} from 'react';
import axios from 'axios'; 
import { toast } from 'react-hot-toast';
import CourseCard from '../components/CourseCard.jsx';
import RateLimitedUI from '../components/RateLimitedUI.jsx';


import SearchBar from '../components/SearchBar.jsx';
import StaticHeader from '../components/StaticHeader.jsx';
import StaticSider from '../components/StaticSider.jsx';


const CourseSearchPage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");
    const [school, setSchool] = useState("");
    const [eligibleYear, setEligibleYear] = useState("");
    const [campus, setCampus] = useState("");
    const [language, setLanguage] = useState("");
    const [level, setLevel] = useState("");
    const [season, setSeason] = useState("");   
    const [session, setSession] = useState("");
    const [day, setDay] = useState("");
    const [period, setPeriod] = useState("");                                               
    const applyFilter = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                "http://localhost:5001/api/courses",
                {
                    params: {
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
                    }
                }
            );
            setCourses(res.data.results);
            setIsRateLimited(false);
        } catch (error) {
            console.error("Error fetching courses", error);
            if (error.response.status === 429) {
                setIsRateLimited(true);
            } else {
                toast.error("Error fetching courses");
            };
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        applyFilter();
    }, [school, eligibleYear, campus, language, level, season, session, day, period]);

    return (
        <div className="flex flex-col min-h-screen">
            <StaticHeader />
            <div className="flex flex-1">
                <StaticSider />
                <main className="flex-1 bg-[#f0f0f0]">
                    {isRateLimited && <RateLimitedUI />}
                    {loading && <div className="text-center text-primary py-10">Loading notes...</div>}
                    <div className="flex flex-col flex-1 gap-6 p-6 items-center text-center">
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        <div>Course 1</div>
                        {/* {courses.length > 0 && !isRateLimited && (
                            <div className="flex flex-col items-center justify-center gap-6">
                                {courses.map(course => (
                                    <CourseCard key={course.pKey} note={course}/>
                                ))}
                            </div>
                        )}  */}
                    </div>
                </main>
            </div>
        </div>  
    )
};

export default CourseSearchPage;