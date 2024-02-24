import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import RootComponent from './RootComponent';
import LoginScreen from './login/LoginScreen';
import RegisterScreen from './login/RegisterScreen';


ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<RootComponent/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/register" element={<RegisterScreen/>}/>
        </Routes>
    </Router>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
