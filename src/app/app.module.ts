import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { combineReducers, createStore } from 'redux';

import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { IAppState } from './store/IAppState';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { GiftcardSmartComponent } from './giftcard-smart/giftcard-smart.component';
import {displayReducer} from './store/display.reducer';
import {paymentReducer} from './store/payment.reducer';

@NgModule({
  declarations: [
    AppComponent,
    GiftcardComponent,
    GiftcardSmartComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    ReactiveFormsModule,
    // NgReduxFormModule,
    TooltipModule.forRoot()
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
      // composeReducers(
      //   defaultFormReducer(),
        combineReducers({
          display: displayReducer,
          payment: paymentReducer,
        })));
    // provideReduxForms(ngRedux);
  }
}
