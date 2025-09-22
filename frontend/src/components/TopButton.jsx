import { FloatButton, ConfigProvider } from "antd";

const TopButton = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorBgElevated: "#891623",
                    colorText: "#ffffff"
                }
            }}
        >
            <FloatButton.BackTop />
        </ConfigProvider>
    );
};

export default TopButton;