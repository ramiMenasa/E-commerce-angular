export interface Product {
    
        category:string,
        title:string,
        image:string,
        description:string,
        price:number,
        id:number,
        rating :{
                rate:number,
                count:number
        },
        quantity:number,
        overAllPrice:number
}
