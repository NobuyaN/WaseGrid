import styles from '../styles/sider.module.css';
import SchoolSearch from './SchoolSearch';
import YearCheckbox from './YearCheckbox';
import CampusSearch from './CampusSearch';
import LanguageSearch from './LanguageSearch';
import SeasonSearch from './SeasonSearch';
import SessionSearch from './SessionSearch';
import DaySearch from './DaySearch';
import PeriodSearch from './PeriodSearch';

const StaticSider = ({filters, updateFilter}) => {
    return (
        <aside className={styles.sider}>
            <div className={styles.siderContent}>
                <input 
                    value={filters.searchQuery}
                    onChange={e => updateFilter("searchQuery", e.target.value)}
                    className={styles.searchBar} 
                    placeholder=" E.g. General Physics C Junjun Jia"
                />
                <SchoolSearch 
                    value={filters.school}
                    onChange={value => updateFilter("school", value)}
                    className={styles.schoolSearch} 
                />
                <YearCheckbox 
                    value={filters.eligibleYear}
                    onChange={value => updateFilter("eligibleYear", value)}
                    className={styles.yearCheckbox}
                />
                <CampusSearch 
                    value={filters.campus}
                    onChange={value => updateFilter("campus", value)}
                    className={styles.campusSearch}
                />
                <LanguageSearch 
                    value={filters.language}
                    onChange={value => updateFilter("language", value)}
                    className={styles.languageSearch}
                />
                <div className="flex justify-evenly w-[100%]">
                    <SeasonSearch 
                        value={filters.season}
                        onChange={value => updateFilter("season", value)}
                        className={styles.seasonSearch}
                    />
                    <SessionSearch 
                        value={filters.session}
                        onChange={value => updateFilter("session", value)}
                        className={styles.sessionSearch}
                    />
                </div>
                <div className="flex justify-evenly w-[100%]">
                    <DaySearch 
                        value={filters.day}
                        onChange={value => updateFilter("day", value)}
                        className={styles.daySearch}
                    />
                    <PeriodSearch  
                        value={filters.period}
                        onChange={value => updateFilter("period", value)}
                        className={styles.periodSearch}
                    />
                </div>
            </div>
        </aside>
    );
};

export default StaticSider;