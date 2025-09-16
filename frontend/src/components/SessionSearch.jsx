import { TreeSelect, ConfigProvider } from "antd";


const treeData = [
    {title: "Semester", value: "Semester"},
    {title: "Quarter", value: "Quarter"},
    {title: "term", value: "term"}
];

const SessionSearch = ({value, onChange, className}) => {

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
                placeholder="Select Session"
                allowClear
                multiple
                treeCheckable
                onChange={onChange}
                treeData={treeData}
            />
        </ConfigProvider>
    );
};

export default SessionSearch;
