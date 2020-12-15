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

  // @ViewChild("testDiv", { static: false }) private testDiv: ElementRef<
  //   HTMLDivElement
  // >;

  // @HostListener("window:scroll", ["$event"])
  // isScrolledIntoView() {
  //   if (this.testDiv) {
  //     const rect = this.testDiv.nativeElement.getBoundingClientRect();
  //     // const topShown = rect.top >= 0;
  //     // const bottomShown = rect.bottom <= window.innerHeight;
  //     console.log("in view");
  //   }
  // }

  ngAfterViewInit(): void {

  }
}
