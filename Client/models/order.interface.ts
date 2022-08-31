export interface Order {
    _id: string;
    bookingInfo: {
        name: string;
        address: string;
        phone: string;
        totalPrice: number;
        shippingPrice: number;
        shippingMethod: 'Sundarban' | 'RedX' | 'Paperfly';
        status: 'Pending' | 'Processing' | 'Cancelled' | 'Delivered';
        payment: 'pending' | 'success' | 'failed';
        paymentMethod: 'COD' | 'CreditCard';
    };
    user: string;
    items: {
        product: string;
        quantity: number;
        price: number;
    }[];
    createdAt: string;
}
