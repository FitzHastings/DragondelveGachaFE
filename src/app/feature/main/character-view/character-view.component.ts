import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RarityColorDirective } from '../../../core/directives/rarity-color.directive';
import { apiUrl } from '../../../core/utils/api-url';
import { Character } from '../../../core/interfaces/character';
import { CollectionService } from '../../../core/services/collection.service';
import { RotateOnHoverDirective } from '../../../core/directives/rotate-on-hover.directive';
import { ShadowOnHoverDirective } from '../../../core/directives/shadow-on-hover.directive';

@Component({
    selector: 'app-character-view',
    standalone: true,
    imports: [
        RarityColorDirective,
        RotateOnHoverDirective,
        ShadowOnHoverDirective
    ],
    templateUrl: './character-view.component.html',
    styleUrl: './character-view.component.css'
})
export class CharacterViewComponent implements OnInit {
    protected readonly character: WritableSignal<Character | null> = signal<Character | null>(null);
    protected readonly apiUrl = apiUrl;
    protected readonly showDescription: WritableSignal<boolean> = signal<boolean>(false);

    public constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        private readonly collectionService: CollectionService
    ) {
    }

    public ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id) {
                this.character.set(null);
                this.router.navigate(['/character', id]);
            }

            this.collectionService.fetchCharacter(parseInt(id!)).subscribe((character) => {
                this.character.set(character);
            });
        });
    }

    protected onShowDescription(): void {
        this.showDescription.set(true);
    }

    protected onHideDescription(): void {
        this.showDescription.set(false);
    }
}
