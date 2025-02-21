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

import { Component, signal, WritableSignal } from '@angular/core';

import { RotateOnHoverDirective } from '../../../core/directives/rotate-on-hover.directive';
import { ShadowOnHoverDirective } from '../../../core/directives/shadow-on-hover.directive';

@Component({
    selector: 'app-roll',
    standalone: true,
    imports: [
        RotateOnHoverDirective,
        ShadowOnHoverDirective
    ],
    templateUrl: './roll.component.html',
    styleUrl: './roll.component.css'
})
export class RollComponent {
    protected readonly isRolling: WritableSignal<boolean> = signal<boolean>(false);

    protected onRoll(): void {
        this.isRolling.set(true);
    }

    protected onHarvest(): void {
        console.log('harvest');
    }
}
