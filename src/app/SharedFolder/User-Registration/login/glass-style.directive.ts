import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appGlassStyle]'
})
export class GlassStyleDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background', 'url("/assets/mountains.jpg")');
    this.renderer.setStyle(this.el.nativeElement, 'background-size', 'cover');
    this.renderer.setStyle(this.el.nativeElement, 'background-position', 'center');

    // Remove fixed position
    // this.renderer.setStyle(this.el.nativeElement, 'position', 'fixed');

    // Add full height
    this.renderer.setStyle(this.el.nativeElement, 'min-height', '100vh');
  }

}
