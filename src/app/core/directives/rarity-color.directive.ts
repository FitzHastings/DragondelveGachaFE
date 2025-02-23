import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appRarityColor]'
})
export class RarityColorDirective {
    @Input() public set rarity(value: string) {
        this.applyStyleBasedOnRarity(value);
    }


    public constructor(private el: ElementRef, private renderer: Renderer2) {
        this.applyStyleBasedOnRarity(this.rarity);
    }

    private applyStyleBasedOnRarity(rarity: string): void {
        if (rarity === 'common')
            this.renderer.setStyle(this.el.nativeElement, 'color', '#c0c0c0');
        else if (rarity === 'uncommon')
            this.renderer.setStyle(this.el.nativeElement, 'color', '#0a6522');
        else if (rarity === 'rare')
            this.renderer.setStyle(this.el.nativeElement, 'color', '#0000ff');
        else if (rarity === 'epic')
            this.renderer.setStyle(this.el.nativeElement, 'color', '#c000aa');
        else if (rarity === 'legendary')
            this.renderer.setStyle(this.el.nativeElement, 'color', '#dece00');
    }
}
