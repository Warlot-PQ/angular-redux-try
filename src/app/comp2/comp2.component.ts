import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  @Output() getSearchStatusChange = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  goToComp1() {
    this.getSearchStatusChange.emit("from comp2")
  }
}
