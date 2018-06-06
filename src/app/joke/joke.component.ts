import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {ServiceTestService} from "../service/service-test.service";
import { NgRedux, select } from "@angular-redux/store";

// @WithSubStore({
//   basePathMethodName: 'getBasePath',
//   localReducer: jokeReducer
// })
@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  providers: [ServiceTestService],
  styleUrls: ['./joke.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // render component on immutability change (reference changed)
})
export class JokeComponent {

  @select() readonly totalPrice;
  @select() readonly  articles;

  constructor(private serviceTestService: ServiceTestService, private ngRedux: NgRedux<Cart>) {
  }

  // getBasePath = () => "424";

  keyUpButton(e: any) {
    if (e.keyCode === 13) {
      this.ngRedux.dispatch(this.serviceTestService.updateArticles(e.target.value));
    }
  }
}
