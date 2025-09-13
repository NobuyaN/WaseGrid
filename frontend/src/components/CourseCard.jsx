import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const CourseCard = ({course}) => {
    return (
        <Link to={`${course.url}`}>
            <Accordion>
                <AccordionSummary>
                    <Typography>Accordian 1</Typography>
                </AccordionSummary>
            </Accordion>
        </Link>
    )
};

export default CourseCard;