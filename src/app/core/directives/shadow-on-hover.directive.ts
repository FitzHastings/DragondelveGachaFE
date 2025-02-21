import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appShadowOnHover]'
})
export class ShadowOnHoverDirective {
    public constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter')
    protected onMouseEnter(): void {
        this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '10px 10px 30px rgba(0, 0, 0, 0.5)');
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.2s ease, box-shadow 0.2s ease');
    }

    @HostListener('mouseleave')
    protected onMouseLeave(): void {
        this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
        this.renderer.setStyle(this.el.nativeElement, 'transition', '250ms ease-in-out');
    }
}
