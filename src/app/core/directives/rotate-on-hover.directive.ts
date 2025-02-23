import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[appRotateOnHover]'
})
export class RotateOnHoverDirective {
    @Input() public intensity: number = 5;

    public constructor(private el: ElementRef, private renderer: Renderer2) {}

    @HostListener('mousemove', ['$event'])
    protected onMouseMove(event: MouseEvent): void {
        const rect = this.el.nativeElement.getBoundingClientRect();

        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;

        const rotateX = -(offsetY / rect.height) * this.intensity;
        const rotateY = (offsetX / rect.width) * this.intensity;

        // Apply the transform
        const transformStyle = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        this.renderer.setStyle(this.el.nativeElement, 'transform', transformStyle);
    }

    @HostListener('mouseleave')
    protected onMouseLeave(): void {
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s cubic-bezier(0.25, 2.0, 0.5, 1)');
        this.renderer.setStyle(this.el.nativeElement, 'transform', 'perspective(1000px) rotateX(0) rotateY(0)');
    }
}
