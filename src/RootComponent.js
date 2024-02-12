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
        if (newEnergyCount >= 0)
            this.setState({ energyCount: newEnergyCount });
    }

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
        )
    }
}
