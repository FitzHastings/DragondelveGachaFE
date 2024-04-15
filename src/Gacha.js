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
import NavBar from './NavBar';
import MainContent from './MainContent';

export default class Gacha extends React.Component {
    constructor(props) {
        super(props);

        const screens = [
            {id: 'collection', name: 'My Collection'},
            {id: 'roll', name: 'Roll'},
            {id: 'enhance', name: 'Enhance'},
        ];

        this.state = {
            currentScreen: screens[0],
            screens
        };
    }

    onChangeScreen = (id) => {
        let newCurrentScreen = 'collection';
        for (const sc of this.state.screens) {
            if (sc.id === id) {
                newCurrentScreen = sc;
                break;
            }
        }
        this.setState({currentScreen: newCurrentScreen, screens: this.state.screens});
    };

    render() {
        return (
            <div className="column-container">
                <div className="left-nav flex-column">
                    <NavBar
                        screens={this.state.screens}
                        onChangeScreen={this.onChangeScreen}
                    />
                </div>
                <div className="main-content flex-column">
                    <MainContent
                        currentScreen={this.state.currentScreen}
                        onUserEnergySpent={this.props.onUserEnergySpent}
                    />
                </div>
                <div className="right-pad flex-column">
                </div>
            </div>
        );
    }
}
