import {Giftcard} from './Giftcard';

export class GiftcardBuilder {

  private instance; Giftcard;

  constructor() {
    this.instance = new Giftcard();
  }

  number(number: String): GiftcardBuilder {
    this.instance.number = number;
    return this;
  }

  bin(bin: String): GiftcardBuilder {
    this.instance.bin = bin;
    return this;
  }

  amount(amount: String): GiftcardBuilder {
    this.instance.amount = amount;
    return this;
  }

  build(): Giftcard {
    return this.instance;
  }
}
