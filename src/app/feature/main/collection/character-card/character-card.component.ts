/* Copyright 2025 Prokhor Kalinin

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

import { Component, input, InputSignal } from '@angular/core';

import { Character } from '../../../../core/interfaces/character';
import { apiUrl } from '../../../../core/utils/api-url';
import { RarityBorderDirective } from '../../../../core/directives/rarity-border.directive';

@Component({
    selector: 'app-character-card',
    standalone: true,
    imports: [
        RarityBorderDirective
    ],
    templateUrl: './character-card.component.html',
    styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
    public character: InputSignal<Character> = input.required<Character>();
    protected readonly apiUrl = apiUrl;
}
