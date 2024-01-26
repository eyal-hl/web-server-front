import { Routes, Route, BrowserRouter } from 'react-router-dom'
import styles from './App.module.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import SignUp from './components/SignUp/SignUp'
const App = () => {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
