import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {ServiceTestService} from '../service/service-test.service';
import { NgRedux, select, dispatch, WithSubStore } from '@angular-redux/store';
// import { jokeReducer } from './joke.reducer';
import { jokeComponentReducer } from './joke.component.reducer';
import {IAppState} from '../store/IAppState';

@WithSubStore({
  basePathMethodName: 'getBasePath',
  localReducer: jokeComponentReducer
})
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  providers: [ServiceTestService],
  styleUrls: ['./joke.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // render component on immutability change (reference changed)
})
export class JokeComponent {

  @select() readonly totalPrice;
  @select() readonly articles;

  constructor(private serviceTestService: ServiceTestService, private ngRedux: NgRedux<IAppState>) {
  }

  getBasePath = () => ['cart'];

  @dispatch()
  keyUpButton(e: any) {
    if (e.keyCode === 13) {
      return this.serviceTestService.updateArticles(e.target.value);
    }
    return { type: 'NONE' };
  }
}
