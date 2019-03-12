import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  public items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  load: boolean = false;
  constructor() {

  }

  ngOnInit() {

  }

  addElements() {
    for (var i = 0; i < 40; i++) {
      this.items.push(21);
    }
  }
  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("end reach")
      setTimeout(() => {

        this.load = true;
        this.addElements();
      }
        , 2000);
    }

  }

}
