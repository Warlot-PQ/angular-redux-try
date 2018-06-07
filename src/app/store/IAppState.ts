interface IAppState {
  cart:{
    totalPrice:number,
    articles:Array<Article>
  },
  display: {
    show: boolean
  }
}
