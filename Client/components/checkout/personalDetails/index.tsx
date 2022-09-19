import { Control, FieldErrorsImpl } from 'react-hook-form';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { iUser } from '../../../models/user.interface';
import InputBox from '../../Common/Inputs/InputBox';
import { IFormInputs } from '../Checkout';
import DetailsContainer from '../Common/DetailsContainer.tsx/DetailsContainer';

interface iProps {
  control: Control<IFormInputs, any>;
  errors: FieldErrorsImpl<IFormInputs>;
  user: iUser;
}

export default function PersonalDetails({ control, errors, user }: iProps) {
  return (
    <DetailsContainer heading="Personal Details" number="01">
      <InputBox
        required="Valid name is required"
        control={control}
        placeholder={user.name ? user.name : 'your name'}
        error={!!errors.name}
        type="name"
        helperText="Please input a valid name"
        icon={<AiOutlineUser style={{ fontSize: '18px' }} />}
        validation={(v: any) => v.trim().length > 3}
      />
      <InputBox
        required
        control={control}
        placeholder={user.email ? user.email : 'your email'}
        error={!!errors.email}
        type="email"
        validation={(v: any) => {
          const reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
          return reg.test(v);
        }}
        helperText="Please input a valid email!"
        icon={<AiOutlineMail style={{ fontSize: '18px' }} />}
      />
      <InputBox
        required
        control={control}
        placeholder={user.phone ? user.phone : 'your phone'}
        error={!!errors.phone}
        type="phone"
        helperText="Please input a valid number"
        icon={<AiOutlineUser style={{ fontSize: '18px' }} />}
        validation={(v: any) => v && v.trim().length > 10}
      />
    </DetailsContainer>
  );
}
