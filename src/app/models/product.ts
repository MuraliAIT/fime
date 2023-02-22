class Product{
    name:string;
    imgName:string;
    desc:string;
    originalPrice:number;
    dicountedPrice:number;
    constructor(pName:string,iName:string,PDesc:string,poPrice:number,pdPrice:number){
        this.name = pName;
        this.imgName = iName; 
        this.desc = PDesc;
        this.originalPrice = poPrice;   
        this.dicountedPrice = pdPrice; 
    }
}
export default Product