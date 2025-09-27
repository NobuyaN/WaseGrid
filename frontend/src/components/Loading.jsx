import styles from '../styles/loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            Fetching Courses . . .
        </div>
    );
};

export default Loading;