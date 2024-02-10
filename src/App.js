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

import './App.css';
import Gacha from './Gacha';
import UserInfo from './controls/UserInfo';

function App() {
    return (
        <div>
            <header>
                <div className="dd-nav">
                    <a className="dd-header">Dragondelve</a>
                    <a className="dd-subheader">Gacha</a>
                    <UserInfo identity="TestUser" energyCount="5"/>
                </div>
            </header>
            <Gacha/>
        </div>
    );
}

export default App;
