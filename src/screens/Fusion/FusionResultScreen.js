import React from 'react';

export default class FusionResultScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDescription: false
        };
    }

    showDescription = () => this.setState({showDescription: true});

    hideDescription = () => this.setState({ showDescription: false });

    onHarvest = () => this.props.onHarvest(this.props.character.id);

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
                            <div onMouseLeave={this.hideDescription} onMouseEnter={this.showDescription} className="description-button">?
                            </div>
                            <div onClick={this.downloadImage} className="download-button">v</div>
                        </div>
                        {this.state.showDescription && (
                            <div className='description-tooltip-container scale second-layer'>
                                <span className='description-tooltip'>{this.props.character.template.description}</span>
                            </div>
                        )}
                        <div className='quote-box'>
                            <span className='quote-text'>"{this.props.character.template.quote}"</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
