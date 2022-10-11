export interface order {
 bookingInfo : {
    name : string,
    address : string,
    phone : string,
    totalPrice : number,
    shippingPrice : number,
    shippingMethod : 'Sundarban' | 'RedX' | 'Paperfly',
    status : 'pending' | 'processing' | 'delivered' | 'cancelled',
    payment: 'pending' | 'success' | 'failed',
    paymentMethod : 'COD' | 'CreditCard',
 }   
 user : string,
 items : {product : string, quantity : number , price: number}[],
}

export interface orderRes {
    data : order,
    message : string,
    error : boolean,
}