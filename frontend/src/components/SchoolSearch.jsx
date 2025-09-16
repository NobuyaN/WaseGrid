import { TreeSelect, ConfigProvider } from "antd";


const treeData = [
    {
        title: "Politics, Law, and Business",
        value: "Politics, Law, and Business",
        children: [
            {
                title: "Undergraduate", 
                value: "Undergraduate - Politics, Law, and Business", 
                children: [
                    {title: "School of Political Science and Economics", value: "School of Political Science and Economics"},
                    {title: "School of Law", value: "School of Law"},
                    {title: "School of Commerce", value: "School of Commerce"},
                    {title: "School of Social Sciences", value: "School of Social Sciences"},
                    {title: "School of Education", value: "School of Education"}
                ]
            },
            {
                title: "Graduate", 
                value: "Graduate - Politics, Law, and Business",
                children: [
                    {title: "Graduate School of Political Science", value: "Graduate School of Political Science"},
                    {title: "Graduate School of Law", value: "Graduate School of Law"},
                    {title: "Graduate School of Commerce", value: "Graduate School of Commerce"},
                    {title: "Graduate School of Social Sciences", value: "Graduate School of Social Sciences"},
                    {title: "Graduate School of Education", value: "Graduate School of Education"},
                    {title: "Graduate School of Economics", value: "Graduate School of Economics"},
                    {title: "Graduate School of Accountancy", value: "Graduate School of Accountancy"},
                    {title: "Graduate School of Business and Finance", value: "Graduate School of Business and Finance"}
                ]
            }
        ]
        
    },
    {
        title: "Humanities, Culture, and International Studies",
        value: "Humanities, Culture, and International Studies",
        children: [
            {
                title: "Undergraduate", 
                value: "Undergraduate - Humanities, Culture, and International Studies", 
                children: [
                    {title: "School of International Liberal Studies", value: "School of International Liberal Studies"},
                    {title: "School of Humanities and Social Sciences", value: "School of Humanities and Social Sciences"},
                    {title: "School of Culture, Media and Society", value: "School of Culture, Media and Society"},
                ]
            },
            {
                title: "Graduate", 
                value: "Graduate - Humanities, Culture, and International Studies",
                children: [
                    {title: "Graduate School of Letters, Arts and Sciences", value: "Graduate School of Letters, Arts and Sciences"},
                    {title: "Graduate School of International Culture and Communication Studies", value: "Graduate School of International Culture and Communication Studies"},
                    {title: "Graduate School of Asia-Pacific Studies", value: "Graduate School of Asia-Pacific Studies"},
                    {title: "Graduate School of Japanese Applied Linguistics", value: "Graduate School of Japanese Applied Linguistics"}
                ]
            }
        ]
    },
    {
        title: "Science and Technology",
        value: "Science and Technology",
        children: [
            {
                title: "Undergraduate", 
                value: "Undergraduate - Science and Technology", 
                children: [
                    {title: "School of Fundamental Science and Engineering", value: "School of Fundamental Science and Engineering"},
                    {title: "School of Creative Science and Engineering", value: "School of Creative Science and Engineering"},
                    {title: "School of Advanced Science and Engineering", value: "School of Advanced Science and Engineering"}
                ]
            },
            {
                title: "Graduate",
                value: "Graduate - Science and Technology",
                children: [
                    {title: "Graduate School of Fundamental Science and Engineering", value: "Graduate School of Fundamental Science and Engineering"},
                    {title: "Graduate School of Creative Science and Engineering", value: "Graduate School of Creative Science and Engineering"},
                    {title: "Graduate School of Advanced Science and Engineering", value: "Graduate School of Advanced Science and Engineering"},
                    {title: "Graduate School of Environment and Energy Engineering", value: "Graduate School of Environment and Energy Engineering"},
                    {title: "Graduate School of Information, Production and Systems", value: "Graduate School of Information, Production and Systems"}
                ]
            }
        ]
    },
    {
        title: "Human and Sport Sciences",
        value: "Human and Sport Sciences",
        children: [
            {
                title: "Undergraduate",
                value: "Undergraduate - Human and Sport Sciences",
                children: [
                    {title: "School of Sport Sciences", value: "School of Sport Sciences"},
                    {title: "School of Human Sciences", value: "School of Human Sciences"},
                    {title: "School of Human Sciences (Online Degree Program)", value: "School of Human Sciences (Online Degree Program)"}
                ]
            },
            {
                title: "Graduate",
                value: "Graduate - Human and Sport Sciences",
                children: [
                    {title: "Graduate School of Sport Sciences", value: "Graduate School of Sport Sciences"},
                    {title: "Graduate School of Human Sciences", value: "Graduate School of Human Sciences"}
                ]
            }
        ]
    },
    {
        title: "Special",
        value: "Special",
        children: [
            {title: "Center for Japanese Language", value: "Center for Japanese Language"},
            {title: "Global Education Center", value: "Global Education Center"},
            {title: "Center for International Education", value: "Center for International Education"},
            {title: "Art and Architecture School", value: "Art and Architecture School"}
        ]
    }
];

const SchoolSearch = ({value, onChange, className}) => {
    
    return (
        <ConfigProvider
            theme={{
                components: {
                    TreeSelect: {
                        nodeSelectedBg: "#891623",
                    }
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
                placeholder="Select School"
                allowClear
                multiple
                treeCheckable
                onChange={onChange}
                treeData={treeData}
            />
        </ConfigProvider>

    );
}

export default SchoolSearch;