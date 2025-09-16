import { Checkbox } from "antd";

const YearCheckbox = ({value, onChange, className}) => {
    const year = [
        {label: "1", value: 1},
        {label: "2", value: 2},
        {label: "3", value: 3},
        {label: "4", value: 4}
    ];

    return (
        <>
            <Checkbox.Group 
                options={year}
                value={value}
                onChange={onChange}
                className={className}
            />
        </>
        
    );
};

export default YearCheckbox;