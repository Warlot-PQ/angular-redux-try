import {GiftcardBuilder} from './GiftcardBuilder';

export class Giftcard {

  private _number: String;
  private _bin: String;
  private _amount: String;

  constructor() {
    //
  }

  get number(): String {
    return this._number;
  }

  set number(value: String) {
    this._number = value;
  }

  get bin(): String {
    return this._bin;
  }

  set bin(value: String) {
    this._bin = value;
  }

  get amount(): String {
    return this._amount;
  }

  set amount(value: String) {
    this._amount = value;
  }

  static build(): GiftcardBuilder {
    return new GiftcardBuilder();
  }
}
