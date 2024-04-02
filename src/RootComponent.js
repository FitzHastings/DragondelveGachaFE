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
import UserInfo from './controls/UserInfo';
import Gacha from './Gacha';

export default class RootComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            identity: '',
            energyCount: 0,
        };
    }

    onUserEnergySpent = (amount) => {
        const newEnergyCount = this.state.energyCount - amount;
        if (newEnergyCount >= 0) {
            this.setState({energyCount: newEnergyCount});
            return true;

        }
        return false;
    };

    componentDidMount() {
        fetch(
            `${process.env.REACT_APP_API_URL}/user`,
            {
                method: 'GET',
                credentials: 'include',
            }
        ).then(async (res) => {
            const user = await res.json();
            if (!res.ok) {
                window.location.href = '/login';
                return;
            }
            console.log(user);
            this.setState({identity: user.identity, energyCount: user.currentEnergy});
        }).catch((err) => {
            console.error(err);
            window.location.href = '/login';
        });
    }

    render() {
        return (
            <div>
                <header>
                    <div className="dd-nav">
                        <img className='dd-header' src='/dd-small-banner.png'  alt='Dragondelve Logo' ></img>
                        <a className="dd-subheader">Gacha</a>
                        <UserInfo identity={this.state.identity} energyCount={this.state.energyCount} userId={this.state.userId}/>
                    </div>
                </header>
                <Gacha userId={this.state.userId} onUserEnergySpent={this.onUserEnergySpent}/>
            </div>
        );
    }
}
