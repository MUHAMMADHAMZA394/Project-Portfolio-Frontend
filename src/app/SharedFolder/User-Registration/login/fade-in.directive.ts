import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Glass effect styles
    this.renderer.setStyle(this.el.nativeElement, 'background', 'rgba(255, 255, 255, 0.15)');
    this.renderer.setStyle(this.el.nativeElement, 'backdrop-filter', 'blur(12px)');
    this.renderer.setStyle(this.el.nativeElement, '-webkit-backdrop-filter', 'blur(12px)');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '15px');
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid rgba(255, 255, 255, 0.18)');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 8px 32px 0 rgba(31, 38, 135, 0.15)');

    // Animation styles
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(20px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)');

    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
    }, 100);
  }
}
