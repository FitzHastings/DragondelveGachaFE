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

import { Component, Signal, signal, WritableSignal } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';

import { RollScaleComponent } from './roll-scale/roll-scale.component';

@Component({
    selector: 'app-roll',
    standalone: true,
    templateUrl: './roll.component.html',
    imports: [
        RollScaleComponent
    ],
    styleUrl: './roll.component.css'
})
export class RollComponent {
    protected readonly hasRolled: WritableSignal<boolean> = signal<boolean>(false);
    protected readonly energy: Signal<number>;

    public constructor(
        private readonly authService: AuthService
    ) {
        this.energy = authService.energy$;
    }

    protected onRoll(): void {
        this.hasRolled.set(true);
    }
}
