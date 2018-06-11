import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  private _hideComp1: boolean;
  private _hideComp2: boolean;
  private _hideButton: boolean;

  constructor() { }

  ngOnInit() {
  }

  statusChangeHandler(e: any) {
    console.log('event received:');
    if (e === 'from comp2') {
      console.log('showing comp1');
      this._hideComp1 = false;
      this._hideComp2 = true;
      this._hideButton = true;
    } else {
      console.log('showing comp2');
      this._hideComp1 = true;
      this._hideComp2 = false;
      this._hideButton = false;
    }
  }
}
