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
    if(evt.deltaY < 0){
      console.log("up");
    }else{
      console.log('Down');
    }
  }

  ngOnInit(): void {
    (function() {
      window.onload = displayWindowSize;

      function displayWindowSize() {
        document.querySelector(".carousel__viewport").setAttribute("style",`height:${window.innerHeight + 17}px`);
      };
    })();

    let test = document.querySelector(".carousel__viewport");
    test.addEventListener("wheel", function(e){
      handleMouseWheelDirection( detectMouseWheelDirection( e ) );
    });

    function detectMouseWheelDirection( e ){
      e.preventDefault()
      let delta = null,
      direction:any = false;

      if ( e.wheelDelta ) {
          delta = e.wheelDelta / 60;
      } else if ( e.detail ) {
          delta = -e.detail / 2;
      }
      if ( delta !== null ) {
          direction = delta > 0 ? 'up' : 'down';
      }
      return direction;
    }

    function handleMouseWheelDirection( direction ){
      if ( direction == 'down' ) {
        test.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      } else if ( direction == 'up' ) {
        test.scrollBy({
          top: -window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  }
}
