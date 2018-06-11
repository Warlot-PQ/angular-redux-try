import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { combineReducers, createStore } from 'redux';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { jokeReducer } from './joke/joke.reducer';
import { displayReducer } from './comp1/comp.reducer';
import { CompComponent } from './comp/comp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    Comp1Component,
    Comp2Component,
    CompComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the
    // events.
    ngRedux.provideStore(createStore(
      combineReducers({
        cart: jokeReducer,
        display: displayReducer
      })));
  }
}
