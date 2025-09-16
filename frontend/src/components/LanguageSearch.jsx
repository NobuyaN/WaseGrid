import { TreeSelect, ConfigProvider } from "antd";


const treeData = [
    {title: "English", value: "English"},
    {title: "Japanese", value: "Japanese"},
    {title: "Chinese", value: "Chinese"},
    {title: "French", value: "French"},
    {title: "German", value: "German"},
    {title: "Korean", value: "Korean"},
    {title: "Russian", value: "Russian"},
    {title: "Spanish", value: "Spanish"},
    {
        title: "Mix",
        value: "Mix",
        children: [
            {title: "Japanese/English", value: "Japanese/English"},
            {title: "Japanese/Chinese", value: "Japanese/Chinese"},
            {title: "Japanese/English/French", value: "Japanese/English/French"},
            {title: "Japanese/French", value: "Japanese/French"},
            {title: "Japanese/German", value: "Japanese/German"},
            {title: "Japanese/Korean", value: "Japanese/Korean"},
            {title: "Japanese/Portuguese", value: "Japanese/Portuguese"},
            {title: "Japanese/Spanish", value: "Japanese/Spanish"},
            {title: "Japanese/Sign Language", value: "Japanese/Sign Language"},
            {title: "English/French", value: "English/French"},
            {title: "English/German", value: "English/German"},
            {title: "English/Korean", value: "English/Korean"},
            {title: "English/Spanish", value: "English/Spanish"},
            {title: "Chinese/English", value: "Chinese/English"},
            {title: "中・英併用", value: "中・英併用"}
        ]
    },
    {
        title: "Others",
        value: "Others",
        children: [
            {title: "Language Course", value: "Language Course"},
            {title: "other", value: "other"},
        ]
    }
];

const LanguageSearch = ({value, onChange, className}) => {

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
                placeholder="Select Language"
                allowClear
                multiple
                treeCheckable
                onChange={onChange}
                treeData={treeData}
            />
        </ConfigProvider>
    );
};

export default LanguageSearch;
