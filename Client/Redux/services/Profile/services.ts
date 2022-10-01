import { ProfileRes } from './../types/profileResType';

import { profile } from "./api";

export const  profileApi = profile.injectEndpoints({
    endpoints: (builder) => ({
    
        updateProfile: builder.mutation<ProfileRes , FormData>({
            query: (data : FormData) => ({
                url: `/users/updateProfile`,
                method: 'POST',
                body: data,
                headers: {
                     enctype: 'multipart/form-data',
                    },
                credentials: 'include',    
            }),
        }),
        getUserOrders : builder.query<any , void>({
            query: () => ({
                url: `/users/orders`,
                credentials: 'include',
            }),
        }),
})
});

export const {useUpdateProfileMutation , useGetUserOrdersQuery} = profileApi;