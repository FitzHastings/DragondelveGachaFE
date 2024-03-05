/* Copyright 2024 Prokhor Kalinin

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import React from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            doNotMatch: false,
        };
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({identity: this.state.username, password: this.state.password})
        }).then(response => {
            if (!response.ok) {
                console.log('Network response was not ok');
                return;
            } else {
                this.setState({ doNotMatch: true })
            }
            window.location.href = '/';
        });
    };

    render() {
        const invisible = {opacity: '0%'};
        const visible = {color: '#F8AE2C', opacity: '100%'};
        return (
            <div className='login-container-form'>
                <form className="scale first-layer login-form" onSubmit={this.handleSubmit}>
                    <span className="scale-title-label">Login</span>
                    <div>
                        <p>Login</p>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <div style={this.state.doNotMatch ? visible : invisible}>Incorrect Login or Password</div>
                    <button className="action-button scale second-layer" type="submit"><span>Login</span></button>
                    <hr/>
                    <a className="roll-setting" href="/register">sign up</a>
                </form>
            </div>
        );
    }
}
