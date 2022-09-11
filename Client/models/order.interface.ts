export interface Order<T = string> {
    _id?: string;
    bookingInfo: {
        name: string;
        address: string;
        phone: string;
        totalPrice: number;
        shippingPrice: number;
        shippingMethod: 'Sundarban' | 'RedX' | 'Paperfly';
        status: 'pending' | 'processing' | 'cancelled' | 'delivered';
        payment: 'pending' | 'success' | 'failed';
        paymentMethod: 'COD' | 'CreditCard';
    };
    user?: string;
    items: {
        product: T;
        quantity: number;
        price: number;
    }[];
    createdAt?: string;
}
