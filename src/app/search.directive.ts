import { CommonserviceService } from './commonservice.service';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {
  // @Input () searchQuery:any

  constructor(private cs: CommonserviceService) { }

  // ngOnChanges(changes:any) {
  //   if(!this.searchQuery || this.searchQuery === ' ') return this.cs.searchData = this.cs.cards

  //   this.cs.searchData = this.cs.cards.filter((e:any)=> e.name.toLowerCase().includes(this.searchQuery.toLowerCase()))

  //   console.log(changes);  
  // }
 
  

  

}
