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
import {fusionMocks, mockRoll} from '../../mocks';
import FusionResultScreen from './FusionResultScreen';

export default class FusionScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = { fusions: fusionMocks, fusionDone: false};
    }

    componentDidMount() {
        /*fetch(
            `${process.env.REACT_APP_API_URL}/fusions`,
            {
                method: 'GET',
                credentials: 'include',
            }
        ).then(async (res) => {
            const collection = await res.json();
            this.setState({characters: collection});
        }).catch((err) => {
            console.error(err);
        }); */
    }

    onFusion = (id) => {
        console.log(id);
        this.setState({ fusionDone: true, character: mockRoll });
    }

    render() {
        const fusionCards = this.state.fusions.map(fusion => {
            return <FusionScale onFusion={this.onFusion} fusion={fusion}/>;
        });

        if(!this.state.fusionDone) return (
            <div>
                {fusionCards}
            </div>
        );
        else return (
            <div className='scale first-layer'>
                <FusionResultScreen character={this.state.character}></FusionResultScreen>
            </div>
        )
    }
}

class FusionScale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const templateCards = this.props.fusion.templates.map(template => {
            return <TemplateCard template={template}/>;
        });
        return (
            <div className='scale first-layer'>
                <div className='scale-title-label'>{this.props.fusion.name}</div>
                <div className='collection-container'>
                    {templateCards}
                </div>
                <button onClick={() => this.props.onFusion(this.props.fusion.id)} className='action-button second-layer scale'>
                    <span className='button-label'>Fuse - ✨ {this.props.fusion.cost}</span>
                </button>
            </div>
        )
    }
}

class TemplateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        if (this.props.template.id === 'unknown-template')
            return (<UnknownTemplateCard template={this.props.template}/>)
        else
            return (<KnownTemplateCard template={this.props.template}/>)
    }
}

class UnknownTemplateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="card-container">
                <div className={`scale rarity-${this.props.template.rarity} collection-card second-layer`}>
                    <a className="scale-title-label card-title-label">Unknown Template from {this.props.template.setting}</a>
                    <div className='huge-question-mark'>?</div>
                </div>
            </div>
        );
    }
}

class KnownTemplateCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const cardStyle = {
            backgroundImage: `url(${process.env.REACT_APP_API_URL}/${this.props.template.id}/small.png)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        };

        return (
            <div className="card-container">
                <div
                    className={`scale rarity-${this.props.template.rarity} collection-card`}
                    style={cardStyle}
                >
                    <a className="scale-title-label card-title-label">{this.props.template.name}</a>
                </div>
            </div>
        );
    }
}
