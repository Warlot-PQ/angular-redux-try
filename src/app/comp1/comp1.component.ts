import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux, select, dispatch, WithSubStore } from '@angular-redux/store';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp1Component implements OnInit {

  @Output() getSearchStatusChange = new EventEmitter<String>();
  @select(['display', 'show']) readonly show: boolean;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  goToComp2() {
    this.getSearchStatusChange.emit('from comp1');
    console.log('show');
    this.ngRedux.dispatch({ type: 'SHOW' });
  }
}
