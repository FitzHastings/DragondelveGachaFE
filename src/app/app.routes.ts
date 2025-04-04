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

import { Routes } from '@angular/router';

import { LoginComponent } from './feature/auth/login/login.component';
import { SignupComponent } from './feature/auth/signup/signup.component';
import { MainComponent } from './feature/main/main.component';
import { RollComponent } from './feature/main/roll/roll.component';
import { CollectionComponent } from './feature/main/collection/collection.component';
import { CharacterViewComponent } from './feature/main/character-view/character-view.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                redirectTo: 'collection',
                pathMatch: 'full'
            },
            {
                path: 'roll',
                component: RollComponent
            },
            {
                path: 'collection',
                component: CollectionComponent
            },
            {
                path: 'collection/:id',
                component: CharacterViewComponent
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
