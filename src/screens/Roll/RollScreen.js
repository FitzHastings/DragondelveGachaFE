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

export default class RollScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isFresh: true, isRolling: false};
    }

    onRoll = () => {
        if (this.state.isRolling)
            return;

        this.setState({isRolling: true});
        if (this.props.onUserEnergySpent(1)) {
            fetch(
                `${process.env.REACT_APP_API_URL}/roll`,
                {
                    method: 'GET',
                    credentials: 'include',
                }
            ).then(async (res) => {
                this.setState({isFresh: false, isRolling: false, rollResult: await res.json()});
            }).catch((err) => {
                console.error(err);
                this.setState({isRolling: false});
            });
        }
    };

    render() {
        const innerScreen = this.state.isFresh ? (
            <FreshContent onUserEnergySpent={this.onRoll}/>
        ) : (
            <RerollContent onUserEnergySpent={this.onRoll} rollResult={this.state.rollResult}/>
        );

        return (
            <div className="scale full-width full-height first-layer">
                {innerScreen}
            </div>
        );
    }
}

class FreshContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="roll-center">
                <button className="action-button second-layer" onClick={() => this.props.onUserEnergySpent(1)}>
                    <a className="button-label">Roll 1 ⚡</a>
                </button>
            </div>
        );
    }
}

class RerollContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        console.log(this.props.rollResult.template);
        const rollStyle = {
            backgroundImage: `url(${process.env.REACT_APP_API_URL}/${this.props.rollResult.template.id}/full.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        };

        return (
            <div className="reroll-center">
                <div className="reroll-title">
                    <span>{this.props.rollResult.name}</span>
                    <span className={`rarity-text text-${this.props.rollResult.template.rarity}`}>
                        {this.props.rollResult.template.rarity}
                    </span>
                    <span className="roll-setting">Setting: {this.props.rollResult.template.setting}</span>
                </div>
                <div className="character-card-container">
                    <div
                        className={`scale second-layer character-card rarity-${this.props.rollResult.template.rarity}`}
                        style={rollStyle}
                    />
                </div>
                <button className="action-button second-layer float-right" onClick={() => this.props.onUserEnergySpent(1)}>
                    <a className="button-label">Roll Again 1 ⚡</a>
                </button>
            </div>
        );
    }
}
