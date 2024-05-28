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

export default class CollectionTools extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const invisible = {opacity: '0%'};
        const visible = {opacity: '100%'};
        return (
            <div className='bottom-line'>
                <button
                    style={this.props.showBack ? visible : invisible}
                    className='action-button nav-small scale first-layer'
                    onClick={this.props.onBack}
                >
                    {'<'}
                </button>
                <div className='float-right' style={this.props.showBack ? invisible : visible}>
                    <div className='scale first-layer'>
                        <div className='roll-setting'>Collection Status</div>
                        <span>200 / 340</span>
                    </div>
                </div>

            </div>
        );
    }
}
