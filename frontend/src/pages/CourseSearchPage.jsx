import {useState, useEffect} from 'react';
import axios from 'axios'; 
import { toast } from 'react-hot-toast';
import CourseCard from '../components/CourseCard.jsx';
import RateLimitedUI from '../components/RateLimitedUI.jsx';


import StaticHeader from '../components/StaticHeader.jsx';
import StaticSider from '../components/StaticSider.jsx';


const CourseSearchPage = () => {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [loading, setLoading] = useState(true);
    const [courses, setCourses] = useState([]);

    // State to hold all filter values provided by user
    const [filters, setFilters] = useState(
        {
            searchQuery: "",
            school: [],
            eligibleYear: [],
            campus: [],
            language: [],
            level: [],
            season: [],
            session: [],
            day: [],
            period: []
        }
    );

    // Function to update filters state when a filter changes in StaticSider
    const updateFilter = (key, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [key]: value
        }));
    };
    
    // Fetch courses based on filters provided by user using the backend mongoDB aggregation pipeline
    const applyFilter = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                "http://localhost:5001/api/courses",
                {
                    params: filters
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

    // Update the filters from user's input everytime a filter changes
    useEffect(() => {
        applyFilter();
        console.log("Filters applied: ", filters);
    }, [filters]);

    return (
        <div className="flex flex-col min-h-screen">
            <StaticHeader />
            <div className="flex flex-1">
                <StaticSider filters={filters} updateFilter={updateFilter}/>
                <main className="flex-1 bg-[#f0f0f0]">
                    {isRateLimited && <RateLimitedUI />}
                    {loading && <div className="text-center text-primary py-10">Loading notes...</div>}
                    <div className="flex flex-col flex-1 gap-6 p-6 items-center text-center">
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