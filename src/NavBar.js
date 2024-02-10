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

import NavButton from './controls/NavButton';
import React from 'react';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        const navButtons = this.props.screens.map(screen => Object.assign({}, screen, {isToggled: false}));
        navButtons[0].isToggled = true;
        this.state = {navButtons};
    }

    onToggle = (id) => {
        const newButtons = this.state.navButtons.map(navButton => {
            if (navButton.id === id) return Object.assign({}, navButton, {isToggled: true});
            return Object.assign({}, navButton, {isToggled: false});
        });
        this.props.onChangeScreen(id);
        this.setState({navButtons: newButtons});
    };

    render() {
        const navComponents = this.state.navButtons.map((navButton) => (
            <div key={'nav-' + navButton.id}>
                <NavButton
                    id={navButton.id}
                    text={navButton.name}
                    isToggled={navButton.isToggled}
                    onToggle={this.onToggle}
                />
            </div>
        ));

        return (
            <div className="padded-container">
                {navComponents}
            </div>
        );
    }
}
