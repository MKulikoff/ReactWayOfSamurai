import styles from './Navbar.module.css'; 

function Navbar() {
    return (
        <nav className={styles.nav}>
            <a className={styles.profileActive}>Profile</a>
            <a>Messages</a>
            <a>News</a>
            <a>Music</a>
            <a>Settings</a>
        </nav>
    )
}

export default Navbar; 