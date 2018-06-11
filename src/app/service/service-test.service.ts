/**
 *  Angular services communicate with AppStore in both ways. They dispatch actions and they read data from the store.
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // singleton
})
export class ServiceTestService {

  updateArticles(article: String) {
    return { type: 'ADD_ITEM', payload: article };
  }
}
