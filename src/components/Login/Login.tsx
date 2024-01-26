import * as React from 'react'
import styles from './Login.module.css'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    const [emailState, setEmailState] = React.useState('')
    const [passwordState, setPasswordState] = React.useState('')
    const handleSubmit = () => {
        // const data = new FormData(event.currentTarget)
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // })
    }

    return (
        <div className={styles.login}>
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.headerText}>Sign in</div>
                    <input
                        name="email"
                        placeholder="Email"
                        type="text"
                        value={emailState}
                        className={classNames(styles.input, styles.email)}
                        onChange={(e) => setEmailState(e.target.value)}
                    />
                    <input
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={passwordState}
                        className={classNames(styles.input, styles.password)}
                        onChange={(e) => setPasswordState(e.target.value)}
                    />
                    <input
                        type="submit"
                        value="Sign in"
                        className={styles.generalButton}
                    />
                </form>
                <div className={styles.otherButtons}>
                    <Link to={'/signup'}>
                        <button className={styles.generalButton}>
                            Sign up
                        </button>
                    </Link>
                    <button className={styles.google}>
                        <div className={styles.googleText}>
                            <FcGoogle /> Sign in with Google
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
