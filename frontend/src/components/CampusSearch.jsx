import { TreeSelect, ConfigProvider } from "antd";

const treeData = [
    {title: "Waseda", value: "Waseda"},
    {title: "Toyama", value: "Toyama"},
    {title: "Nishi-Waseda", value: "Nishi-Waseda"},
    {title: "Tokorozawa", value: "Tokorozawa"},
    {title: "Kitakyusyu", value: "Kitakyusyu"},
    {title: "Shibuya", value: "Shibuya"},
    {title: "TWIns", value: "TWIns"},
    {title: "Kamiigusa", value: "Kamiigusa"},
    {title: "Higashifushimi", value: "Higashifushimi"},
    {title: "Kikui-cho", value: "Kikui-cho"},
    {title: "Kamishakujii", value: "Kamishakujii"},
    {title: "Fucyu", value: "Fucyu"},
    {title: "Other", value: "Other"}
];

const CampusSearch = ({value, onChange, className}) => {

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
                placeholder="Select Campus"
                allowClear
                multiple
                treeCheckable
                onChange={onChange}
                treeData={treeData}
            />
        </ConfigProvider>
    );
};

export default CampusSearch;
