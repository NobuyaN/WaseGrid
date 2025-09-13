import styles from '../styles/sider.module.css';

const StaticSider = () => {
    return (
        <aside className={styles.sider}>
            <div className={styles.siderContent}>
                <input className={styles.searchBar} placeholder=" E.g. General Physics C Junjun Jia"/>
                <div>School</div>
                <div>Year</div>
                <div>Campus</div>
                <div>Language</div>
                <div>Season</div>
                <div>Session</div>
                <div>Day</div>
                <div>Period</div>
            </div>
        </aside>
    );
};

export default StaticSider;