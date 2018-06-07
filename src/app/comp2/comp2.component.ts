import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux, select, dispatch, WithSubStore } from "@angular-redux/store";

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp2Component implements OnInit {

  @Output() getSearchStatusChange = new EventEmitter<String>();
  @select(['display', 'show']) readonly show: boolean;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  goToComp1() {
    this.getSearchStatusChange.emit("from comp2");
    console.log("hide");
    this.ngRedux.dispatch({ type: 'HIDE(' });
  }
}
