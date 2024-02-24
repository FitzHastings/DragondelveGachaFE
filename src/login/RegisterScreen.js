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

export default class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            doNotMatch: false,
        };
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    };

    handleConfirmPasswordChange = (event) => {
        this.setState({confirmPassword: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.password !== this.state.confirmPassword) {
            this.setState({doNotMatch: true});
            return;
        }

        fetch(`${apiUrl}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({identity: this.state.username, password: this.state.password})
        }).then(response => {
            if (!response.ok) {
                console.log('Network response was not ok');
                return;
            }
            window.location.href = '/login';
        });
    };

    render() {
        const invisible = {opacity: '0%'};
        const visible = {color: '', opacity: '100%'};
        return (
            <div>
                <form className="scale first-layer" onSubmit={this.handleSubmit}>
                    <span className="scale-title-label">Sign Up</span>
                    <div>
                        <p>Identity</p>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <div>
                        <span style={this.state.doNotMatch ? visible : invisible}>Do not Match</span>
                        <p>Confirm Password</p>
                        <input type="password" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
                    </div>
                    <button className="action-button scale second-layer" type="submit"><span>Sign Up</span></button>
                    <hr/>
                    <a className="roll-setting" href="/login">login instead?</a>
                </form>
            </div>
        );
    }
}
