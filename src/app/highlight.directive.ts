import { Directive ,ElementRef,Input,Output,HostListener} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
    //el.nativeElement.style.backgroundColor ="Red";

   }

   
   @Input('appHighlight') highlightColor: string;
   @Input() Default: string;
    @Output() out:string="appHighlight";

    @HostListener('mouseenter') onMEnter (){
      this.color(this.highlightColor|| this.Default || 'Red');
    }
    @HostListener('mouseleave') onMouseLeave() {
      this.color(null);
    }

   color(color:string){
        this.el.nativeElement.style.backgroundColor=color;
   }
}
