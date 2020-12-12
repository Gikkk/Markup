import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    // window.addEventListener('wheel', function(event){
    //   if (event.deltaY < 0){
    //     console.log('scrolling up');
    //   }
    //   else if (event.deltaY > 0)
    //   {
    //     console.log('scrolling down');
    //   }
    // });

    (function() {
      window.onresize = displayWindowSize;
      window.onload = displayWindowSize;

      function displayWindowSize() {
        let myHeight = window.innerHeight;
        document.querySelector(".carousel__viewport").setAttribute("style",`height:${myHeight + 17}px`);
      };
    })();
  }
}
