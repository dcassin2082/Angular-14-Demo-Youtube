import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrls: ['./parent-output.component.css']
})
export class ParentOutputComponent implements OnInit {

  constructor() { }

  isChecked: string = '';

  ngOnInit(): void {
  }

  childCheckboxChecked(isChecked: boolean) {
    if (isChecked)
      this.isChecked = 'Checkbox is checked';
    else
      this.isChecked = 'Checkbox is not checked';
  }
}
