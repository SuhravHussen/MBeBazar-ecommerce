import { Control, FieldErrorsImpl } from 'react-hook-form';
import { GoLocation } from 'react-icons/go';
import { iUser } from '../../../models/user.interface';
import InputBox from '../../Common/Login-SignUp/InputBox';
import { IFormInputs } from '../Checkout';
import DetailsContainer from '../Common/DetailsContainer.tsx/DetailsContainer';
import ShippingMethod from './shippingMethod/ShippingMethod';

interface iProps {
    control: Control<IFormInputs, any>;
    errors: FieldErrorsImpl<IFormInputs>;
    user: iUser;
    register: any;
    setShippingMethod: (method: string) => void;
}

export default function ShippingDetails({
    control,
    errors,
    user,
    register,
    setShippingMethod,
}: iProps) {
    return (
        <DetailsContainer heading="Shipping Details" number="02">
            <InputBox
                required="street address is required"
                control={control}
                placeholder={user.address ? user.address : 'street address'}
                error={!!errors['street address']}
                type="street address"
                helperText="Please input a valid address"
                icon={<GoLocation style={{ fontSize: '18px' }} />}
                validation={(v: any) => v.trim().length > 8}
            />

            <InputBox
                required="city is required"
                control={control}
                placeholder="city"
                error={!!errors.city}
                type="city"
                helperText="Please input a valid city"
                icon={<GoLocation style={{ fontSize: '18px' }} />}
                validation={(v: any) => v.trim().length > 4}
            />
            <ShippingMethod
                setShippingMethod={setShippingMethod}
                register={register}
                control={control}
            />
        </DetailsContainer>
    );
}
