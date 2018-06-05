class Article {
  private _desc: String;
  private _price: number;

  constructor(desc: String) {
    this._desc = desc;
    this._price = parseFloat((Math.random() * 100).toFixed(2));
  }

  get desc():String{
      return this._desc;
      }

  get price():number{
      return this._price;
      }
}

export {Article}
