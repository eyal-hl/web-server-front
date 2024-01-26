import * as React from 'react'
import styles from './SignUp.module.css'
import classNames from 'classnames'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [emailState, setEmailState] = React.useState('')
    const [passwordState, setPasswordState] = React.useState('')
    const [confirmPasswordState, setConfirmPasswordState] = React.useState('')
    const [usernameState, setUsernameState] = React.useState('')
    const [imageState, setImageState] = React.useState('')
    const [previewImage, setPreviewImage] = React.useState('')

    const handleSubmit = () => {
        // const data = new FormData(event.currentTarget)
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // })
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader()
            reader.onload = (e) => {
                if (e.target) {
                    setImageState(e.target.result as string)
                    setPreviewImage(e.target.result as string)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <div className={styles.signUp}>
            <div className={styles.wrapper}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.headerText}>Sign up</div>
                    <div>
                        <input
                            name="username"
                            placeholder="Username"
                            type="text"
                            value={usernameState}
                            className={classNames(styles.input, styles.email)}
                            onChange={(e) => setUsernameState(e.target.value)}
                        />
                        <input
                            name="email"
                            placeholder="Email"
                            type="text"
                            value={emailState}
                            className={classNames(styles.input, styles.email)}
                            onChange={(e) => setEmailState(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={passwordState}
                            className={classNames(
                                styles.input,
                                styles.password
                            )}
                            onChange={(e) => setPasswordState(e.target.value)}
                        />
                        <input
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            type="password"
                            value={confirmPasswordState}
                            className={classNames(
                                styles.input,
                                styles.password
                            )}
                            onChange={(e) =>
                                setConfirmPasswordState(e.target.value)
                            }
                        />
                    </div>
                    <div className={styles.imageInputWrapper}>
                        <div className={styles.imageInputText}>
                            Pick an image:
                        </div>
                        <input
                            name="profileImage"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className={styles.imageInput}
                        />
                    </div>
                    {previewImage && (
                        <img
                            src={previewImage}
                            alt="Preview"
                            className={styles.previewImage}
                        />
                    )}

                    <input
                        type="submit"
                        value="Sign up"
                        className={styles.generalButton}
                    />
                </form>
                <div className={styles.otherButtons}>
                    <Link to={'/login'}>
                        <button className={styles.generalButton}>
                            Already have an account?
                        </button>
                    </Link>
                    <button className={styles.google}>
                        <div className={styles.googleText}>
                            <FcGoogle /> Sign up with Google
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
