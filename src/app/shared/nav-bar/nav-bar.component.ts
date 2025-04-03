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

import { Component } from '@angular/core';

import { NavButtonComponent } from './nav-button/nav-button.component';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [
        NavButtonComponent,
        UserInfoComponent
    ],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
    public isDropdownHidden: boolean = true; // Dropdown is initially hidden

    protected toggleDropdown() {
        this.isDropdownHidden = !this.isDropdownHidden; // Toggle visibility of the dropdown
    }
}
