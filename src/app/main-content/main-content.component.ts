import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    let myHeight = event.target.innerHeight;
    document.querySelector(".carousel__viewport").setAttribute("style",`height:${myHeight + 17}px`);
  }


  onWheel(evt) {
    evt.preventDefault();
    let test = document.querySelector(".carousel__viewport");

    if(evt.deltaY < 0){
      test.scrollBy({
        top: -window.innerHeight,
        behavior: 'smooth',
      });
    }else{
      test.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  }

  ngOnInit(): void {
    (function() {
      window.onload = displayWindowSize;

      function displayWindowSize() {
        document.querySelector(".carousel__viewport").setAttribute("style",`height:${window.innerHeight + 17}px`);
      };
    })();
  }
}
