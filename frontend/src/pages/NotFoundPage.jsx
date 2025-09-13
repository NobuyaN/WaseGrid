import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center select-none">
            <h1 className="text-3xl font-bold mb-8">404 - Page Not Found</h1>
            <Link 
                to={"/courses"} 
                className="btn btn-outline mb-6 btn-lg text-lg"
                draggable={false}
            >
                <ArrowLeftIcon className="size-5"/>
                Back to Courses
            </Link>
        </div>
    );
};

export default NotFoundPage;