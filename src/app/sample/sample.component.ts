import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sample.component.html',
})
export class SampleComponent implements OnInit {
  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit() {
  }

  displayName(): void {
    alert(this.firstName + " " + this.lastName);
  }

}
