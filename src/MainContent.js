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
import MissingScreen from './screens/MissingScreen';
import RollScreen from './screens/Roll/RollScreen';
import CollectionScreen from './screens/Collection/CollectionScreen';

export default class MainContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let currentScreen = <MissingScreen/>;

        if (this.props.currentScreen.id === 'roll')
            currentScreen = <RollScreen onUserEnergySpent={this.props.onUserEnergySpent}/>;
        else if (this.props.currentScreen.id === 'collection')
            currentScreen = <CollectionScreen/>;

        return (
            <div>
                {currentScreen}
            </div>
        );
    }
}
