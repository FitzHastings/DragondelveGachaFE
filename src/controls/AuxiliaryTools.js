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

export default class AuxiliaryTools extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSettingChange = (event) => {
        this.props.onSettingChange(event.target.value);
    }

    handleSortingChange = (event) => {
        this.props.onSortingChange(event.target.value);
    }

    render() {
        if (this.props?.show) {
            return (
                <div className='auxtool-container'>
                    <div className='scale first-layer'>
                        <div className='roll-setting'>Sort By</div>
                        <select onChange={this.handleSortingChange} className="scale second-layer full-width">
                            <option value="default">Default</option>
                            <option value="name">Name</option>
                            <option value="rarity">Rarity</option>
                        </select>
                    </div>
                    <div className='scale first-layer'>
                        <div className='roll-setting'>Setting</div>
                        <select onChange={this.handleSettingChange} className="scale second-layer full-width">
                            <option value="all">All</option>
                            <option value="TWINT">TWINT</option>
                            <option value="Aether Storm">Aether Storm</option>
                            <option value="Fluxmill">Fluxmill</option>
                            <option value="Baselard">Baselard</option>
                        </select>
                    </div>
                </div>
            );
        } else {
            return (<div></div>)
        }
    }
}
