import { TreeSelect, ConfigProvider } from "antd";


const treeData = [
    {title: "Mon", value: "Mon"},
    {title: "Tue", value: "Tue"},
    {title: "Wed", value: "Wed"},
    {title: "Thur", value: "Thur"},
    {title: "Fri", value: "Fri"},
    {title: "Sat", value: "Sat"},
    {title: "Sun", value: "Sun"},
    {title: "others", value: "others"}
];

const DaySearch = ({value, onChange, className}) => {

    return (
        <ConfigProvider
            theme={{
                components: {
                    nodeSelectedBg: "#891623",
                },
                token: {
                    borderRadius: 10
                }
            }}
        >
            <TreeSelect 
                showSearch
                className={className}
                value={value}
                placeholder="Select Day"
                allowClear
                multiple
                treeCheckable
                onChange={onChange}
                treeData={treeData}
            />
        </ConfigProvider>
    );
};

export default DaySearch;
