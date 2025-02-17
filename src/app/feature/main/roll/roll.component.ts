import { Component, signal, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-roll',
    standalone: true,
    imports: [],
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
