export class Shopping{
    img : string;
    name : string;
    qty : number;
    price : string;
  static sQty: number;

    constructor(sImg : string , sName :string, sQty :number , sPrice:string){
        this.img = sImg;
        this.name = sName;
        this.qty = sQty;
        this.price = sPrice
    }
}