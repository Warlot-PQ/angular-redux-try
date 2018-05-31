import {Article} from "./article";

export default class Cart {
  private _totalPrice: number;
  private _articles: Array<Article>;

  constructor() {
    this._totalPrice = 0;
  }

  get totalPrice():number {
      return this._totalPrice;
    }

  set totalPrice(value:number){
      this._totalPrice=value;
      }

  get articles():Array<Article>{
      return this._articles;
      }

  set articles(value:Array<Article>){
      this._articles=value;
      // recalculate totals
      this._totalPrice = 0;
      for (let article of this._articles) {
        this._totalPrice += article.price;
      }
      }
}
