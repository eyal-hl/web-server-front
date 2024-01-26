import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <Link className={styles.home} to="/">
                <img
                    className={styles.homeImg}
                    src="../../../assets/cricketNoBackGround.png"
                />
            </Link>
            <Link className={styles.login} to="/login">
                Login
            </Link>
        </div>
    )
}

export default NavBar
