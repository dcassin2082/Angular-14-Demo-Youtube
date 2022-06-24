import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent implements OnInit {

  isChecked: boolean = false;
  @Output() onChecked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  checkValue() {
    this.isChecked = !this.isChecked;
    this.onChecked.emit(this.isChecked);
  }

}
