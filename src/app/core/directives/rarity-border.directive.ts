import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appRarityBorder]'
})
export class RarityBorderDirective {
    @Input() public set rarity(value: string) {
        this.applyStyleBasedOnRarity(value);
    }

    public constructor(private el: ElementRef, private renderer: Renderer2) {
        this.applyStyleBasedOnRarity(this.rarity);
    }

    private applyStyleBasedOnRarity(rarity: string): void {
        if (rarity === 'common')
            this.renderer.setStyle(this.el.nativeElement, 'border', '#c0c0c0 5px solid');
        else if (rarity === 'uncommon')
            this.renderer.setStyle(this.el.nativeElement, 'border', '#0a6522 5px solid');
        else if (rarity === 'rare')
            this.renderer.setStyle(this.el.nativeElement, 'border', '#0000ff 5px solid');
        else if (rarity === 'epic')
            this.renderer.setStyle(this.el.nativeElement, 'border', '#c000aa 5px solid');
        else if (rarity === 'legendary')
            this.renderer.setStyle(this.el.nativeElement, 'border', '#dece00 5px solid');
    }
}
