export class Books {
    id:number;
    title:string;
    
    price:number;
    comments:string[]=[];
    constructor(id , title, price,){
        this.id=id;
        this.title=title;
        
        this.price=price;
        

    }
}

