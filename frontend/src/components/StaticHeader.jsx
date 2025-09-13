import { NavLink } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const StaticHeader = () => {
    return (
        <header>
            <div className={styles.header_logo}>
                WaseGrid
            </div>
            <div className="flex gap-8 justify-center items-center">
                <NavLink to="/courses" activeClassName="selected">
                    <div className={styles.header_page_links}>
                        Search
                    </div>
                </NavLink>
                <NavLink to="/timegrid" activeClassName="selected">
                    <div className={styles.header_page_links}>
                        Grid
                    </div>
                </NavLink>
            </div>
            <div className={styles.header_account_links}>
                Acc
            </div>
        </header>
    );
};

export default StaticHeader;