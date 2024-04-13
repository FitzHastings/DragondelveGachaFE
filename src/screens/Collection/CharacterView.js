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

export default class CharacterView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDescription: false
        };
    }

    showDescription = () => this.setState({showDescription: true});

    hideDescription = () => this.setState({ showDescription: false });

    downloadImage = () => {
        window.open(`${process.env.REACT_APP_API_URL}/${this.props.character.template.id}/full.png`)
    }
    render() {
        const rollStyle = {
            backgroundImage: `url(${process.env.REACT_APP_API_URL}/${this.props.character.template.id}/full.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        };

        return (
            <div className="reroll-center">
                <div className="reroll-title">
                    <span>{this.props.character.name}</span>
                    <span className={`rarity-text text-${this.props.character.template.rarity}`}>
                        {this.props.character.template.rarity}
                    </span>
                    <span className="roll-setting">Setting: {this.props.character.template.setting}</span>
                </div>
                <div className="character-card-container">
                    <div
                        className={`scale second-layer character-card rarity-${this.props.character.template.rarity}`}
                        style={rollStyle}
                    >
                        <div className="float-right">
                            <div onMouseLeave={this.hideDescription} onMouseEnter={this.showDescription} className="description-button">?</div>
                            <div onClick={this.downloadImage} className="download-button">v</div>
                        </div>
                        {this.state.showDescription && (
                            <div className='description-tooltip-container scale second-layer'>
                                <span className='description-tooltip'>{this.props.character.template.description}</span>
                            </div>
                        )}
                        {/*<div className='quote-box'>*/}
                        {/*    <span className='quote-text'>"{this.props.character.template.quote}"</span>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}
