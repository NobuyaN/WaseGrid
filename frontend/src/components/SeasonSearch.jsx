import { TreeSelect, ConfigProvider } from "antd";


const treeData = [
    {title: "Spring", value: "Spring"},
    {title: "Summer", value: "Summer"},
    {title: "Fall", value: "Fall"},
    {title: "Winter", value: "Winter"},
];

const SeasonSearch = ({value, onChange, className}) => {


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
                placeholder="Select Season"
                allowClear
                multiple
                treeCheckable
                onChange={onChange}
                treeData={treeData}
            />
        </ConfigProvider>
    );
};

export default SeasonSearch;
