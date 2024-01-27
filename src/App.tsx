import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import styles from './App.module.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NavBar from './components/NavBar/NavBar';
import SignUp from './components/SignUp/SignUp';
import classNames from 'classnames';
const App = () => {
    const [backgroungState, setBackgroundState] = React.useState(false);
    return (
        <div
            className={classNames(styles.app, {
                [styles.background]: backgroungState,
            })}
        >
            <BrowserRouter>
                <NavBar
                    toggleBackground={() => {
                        setBackgroundState((prev) => !prev);
                    }}
                    toggleImg={
                        backgroungState
                            ? '../assets/happyCricket.png'
                            : '../assets/sadCricket.png'
                    }
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
