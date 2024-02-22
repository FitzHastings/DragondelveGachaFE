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

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        // perform login logic here
    };

    render() {
        return (
            <div>
                <form className="scale first-layer" onSubmit={this.handleSubmit}>
                    <span className="scale-title-label">Login</span>
                    <div>
                        <p>Login</p>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <button className='action-button scale second-layer' type="submit"><span>Login</span></button>
                </form>
            </div>
        );
    }
}
