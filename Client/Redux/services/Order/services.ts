import { order, orderRes } from '../types/orderResType';
import { order as api } from './api';

export const orderApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addOrder: builder.mutation<orderRes, order>({
            query: (orderData: order) => ({
                url: `/order`,
                method: 'POST',
                body: orderData,
                credentials: 'include',
            }),
        }),
    }),
});

export const { useAddOrderMutation } = orderApi;
