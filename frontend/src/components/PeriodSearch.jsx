import { TreeSelect, ConfigProvider } from "antd";


const treeData = [
    {title: "1", value: 1},
    {title: "2", value: 2},
    {title: "3", value: 3},
    {title: "4", value: 4},
    {title: "5", value: 5},
    {title: "6", value: 6},
    {title: "7", value: 7}
];

const PeriodSearch = ({value, onChange, className}) => {

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
                placeholder="Select Period"
                allowClear
                multiple
                treeCheckable
                onChange={onChange}
                treeData={treeData}
            />
        </ConfigProvider>
    );
};

export default PeriodSearch;
