import styles from './animation.module.css';

export function Animation() {
    return (
        <div className={styles.animation_background}>
            <div className={styles.animation_reel}></div>
            <div className={styles.animation_check}></div>
            <div className={styles.animation_open}></div>
            <div className={styles.animation_settings}></div>
            <div className={styles.animation_projector}></div>
            <div className={styles.animation_regular}></div>
        </div>
    );
}
