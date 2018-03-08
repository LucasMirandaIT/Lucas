import { Directive, ElementRef, Renderer,HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appAlterarCor]'
})
export class AlterarCorDirective {

  @HostBinding('style.background-color')
    cor : string;

@HostListener('mouseover') mouseOver(){
  this.cor= 'yellow';
//  this.renderer.setElementStyle (
//    this.elementRef.nativeElement,
//    'background-color',
//    this.backgroundColor
//  );
}

@HostListener('mouseout') mouseOut(){
  this.cor= 'blue   ';
  // this.renderer.setElementStyle (
  //   this.elementRef.nativeElement,
  //   'background-color',
  //   'white'
  // );
}

@HostListener('click') mouseClick(){
alert ('Clique');
}

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
   let color :string;

    switch (Math.floor(Math.random()  * 10)  ){
      case 0: color = 'blue'; break;
      case 1: color = 'green'; break;
      case 2: color = 'red'; break;
      case 3: color = 'yellow'; break;
      case 4: color = 'gray'; break;
      case 5: color = 'orange'; break;
      case 6: color = 'purple'; break;
      case 7: color = 'black'; break;
      case 8: color = 'brown'; break;
      case 9: color = 'pink'; break;
      //case 10: color = 'white'; break;

    }

    // renderer.setElementStyle (
    //   elementRef.nativeElement,
    //   'background-color',
    //   color
    // );
    this.cor = color;

  }

}
