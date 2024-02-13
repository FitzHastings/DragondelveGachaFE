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
import {mockCollection} from '../../mocks';

export default class CollectionScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {characters: mockCollection};
    }

    render() {
        const collectionCards = this.state.characters.map(character => {
            return <CollectionCard character={character} key={character.id}/>;
        });

        return (
            <div className="collection-container">
                {collectionCards}
            </div>
        );
    }
}

class CollectionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const cardStyle = {
            backgroundImage: `url(/${this.props.character.template.id}/full.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        };

        return (
            <div className="card-container">
                <div
                    className={`scale rarity-${this.props.character.template.rarity} collection-card`}
                    style={cardStyle}
                >
                    <a className="scale-title-label card-title-label">{this.props.character.name}</a>
                </div>
            </div>
        );
    }
}
