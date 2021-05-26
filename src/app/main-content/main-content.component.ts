import { Component, ViewChild, AfterViewInit, ElementRef, HostListener} from '@angular/core';



@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements AfterViewInit {

  constructor() {}

  @ViewChild('scrollHeight') scrollHeight;
  onWheel(evt) {
    evt.preventDefault();
    let scrollHeight = this.scrollHeight.nativeElement

    if(evt.deltaY < 0){
      scrollHeight.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth',
      });
    }else{
      scrollHeight.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  }

  ngAfterViewInit(): void {

  }
}
