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

import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { RotateOnHoverDirective } from '../../../../core/directives/rotate-on-hover.directive';
import { ShadowOnHoverDirective } from '../../../../core/directives/shadow-on-hover.directive';
import { RollService } from '../../../../core/services/roll.service';
import { Character } from '../../../../core/interfaces/character';
import { apiUrl } from '../../../../core/utils/api-url';
import { RarityColorDirective } from '../../../../core/directives/rarity-color.directive';

@Component({
    selector: 'app-roll-scale',
    standalone: true,
    imports: [
        RotateOnHoverDirective,
        ShadowOnHoverDirective,
        RarityColorDirective
    ],
    templateUrl: './roll-scale.component.html',
    styleUrl: './roll-scale.component.css',
    animations: [
        trigger('rollAnimation', [
            state('idle', style({
                background: 'linear-gradient(120deg, #888888, #cccccc, #666666)',
                backgroundPosition: '0% 0%',
                backgroundSize: '200% 200%'
            })),
            state('rolling', style({
                background: 'linear-gradient(120deg, #888888, #cccccc, #666666)',
                backgroundPosition: '100% 100%',
                backgroundSize: '200% 200%'
            })),
            transition('idle => rolling', animate('2s ease-in-out')),
            transition('rolling => idle', animate('0.01ms ease-in-out'))
        ])

    ]
})
export class RollScaleComponent implements OnInit {
    protected readonly animationState: WritableSignal<string> = signal<string>('idle');
    protected readonly character: WritableSignal<Character | null> = signal<Character | null>(null);
    protected readonly showDescription: WritableSignal<boolean> = signal<boolean>(false);
    protected readonly apiUrl = apiUrl;

    public constructor(
        private readonly rollService: RollService
    ) {
    }

    public ngOnInit(): void {
        this.onRoll();
    }

    protected onAnimationDone(): void {
        this.animationState.set('idle');
    }

    protected onRoll(): void {
        const sub = this.rollService.roll();
        sub.subscribe((character) => {
            this.animationState.set('rolling');
            this.character.set(character);
        });
    }

    protected onHarvest(): void {
        console.log('harvest');
    }

    protected onShowDescription(): void {
        this.showDescription.set(true);
    }

    protected onHideDescription(): void {
        this.showDescription.set(false);
    }
}
