import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  imageToDisplay = '';

  ngOnInit(): void {
  }

  showChild(item: string) {
    switch (item) {
      case 'laptop':
        this.imageToDisplay = "../../assets/img/laptop.png";
        break;
      case 'car':
        this.imageToDisplay = "../../assets/img/racecar.jpg";
        break;
      case 'dubai':
        this.imageToDisplay = "../../assets/img/dubaivegas2_2_80.jpg";
        break;
    }
  }

}
