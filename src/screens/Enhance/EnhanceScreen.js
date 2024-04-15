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
import CollectionTools from '../Collection/CollectionTools';
import CharacterView from '../Collection/CharacterView';

export default class EnhanceScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {characters: [], details: false, displaying: null};
    }

    componentDidMount() {
        fetch(
            `${process.env.REACT_APP_API_URL}/collection`,
            {
                method: 'GET',
                credentials: 'include',
            }
        ).then(async (res) => {
            const collection = await res.json();
            this.setState({characters: collection});
        }).catch((err) => {
            console.error(err);
        });
    }

    handleBack = () => {
        this.setState({details: false});
    }

    handleDetails = (character) => {
        this.setState({displaying: character, details: true});
    }

    render() {
        if (this.state.details) {
            return (
                <div>
                    <CollectionTools showBack={this.state.details} onBack={this.handleBack}/>
                    <div className='scale first-layer'>
                    <CharacterView character={this.state.displaying} ></CharacterView>
                    </div>
                </div>
            )
        }
        const collectionCards = this.state.characters.map(character => {
            return <CollectionCard onDetails={this.handleDetails} character={character} key={character.id}/>;
        });

        return (
            <div>
                <CollectionTools showBack={this.state.details} onBack={this.handleBack}></CollectionTools>
                <div className="collection-container">
                    {collectionCards}
                </div>
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
            backgroundImage: `url(${process.env.REACT_APP_API_URL}/${this.props.character.template.id}/small.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        };

        return (
            <div className="card-container">
                <div onClick={() => this.props.onDetails(this.props.character)}
                    className={`scale rarity-${this.props.character.template.rarity} collection-card`}
                    style={cardStyle}
                >
                    <a className="scale-title-label card-title-label">{this.props.character.name}</a>
                </div>
            </div>
        );
    }
}
