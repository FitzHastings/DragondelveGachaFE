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
import {mockUser} from './mocks';

export default class RootComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            identity: mockUser.identity,
            energyCount: mockUser.energyCount,
            userId: mockUser.id,
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

    render() {
        return (
            <div>
                <header>
                    <div className="dd-nav">
                        <a className="dd-header">Dragondelve</a>
                        <a className="dd-subheader">Gacha</a>
                        <UserInfo identity={this.state.identity} energyCount={this.state.energyCount} userId={this.state.userId}/>
                    </div>
                </header>
                <Gacha userId={this.state.userId} onUserEnergySpent={this.onUserEnergySpent}/>
            </div>
        );
    }
}
