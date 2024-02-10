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

        this.state = {isFresh: true};
    }

    render() {
        const innerScreen = this.state.isFresh ? (<FreshContent></FreshContent>) : (<RerollContent></RerollContent>);
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
        return (<a className="scale-title-label">Roll For Character</a>);
    }
}

class RerollContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<a className="scale-title-label">Fresh Screen</a>);
    }
}
