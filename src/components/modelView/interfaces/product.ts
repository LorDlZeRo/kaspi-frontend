export interface Product {
    _id:string;
    name: Object;
    price:number;
}

export interface ProductDetails {
    _id:string;
    name: Object;
    price:number;
    photo: Array<any>;
    characteristics: Array<any>;
}