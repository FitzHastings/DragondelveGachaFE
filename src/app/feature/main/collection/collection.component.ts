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

import { CollectionService } from '../../../core/services/collection.service';
import { Character } from '../../../core/interfaces/character';
import { RotateOnHoverDirective } from '../../../core/directives/rotate-on-hover.directive';

import { CharacterCardComponent } from './character-card/character-card.component';


@Component({
    selector: 'app-collection',
    standalone: true,
    imports: [
        CharacterCardComponent,
        RotateOnHoverDirective
    ],
    templateUrl: './collection.component.html',
    styleUrl: './collection.component.css'
})
export class CollectionComponent implements OnInit {
    protected collection: WritableSignal<Character[] | null> = signal<Character[] | null>(null);

    public constructor(
        private readonly collectionService: CollectionService
    ) {
    }

    public ngOnInit(): void {
        this.collectionService.fetchCollection().subscribe((characters) => {
            this.collection.set(characters);
        });
    }
}
