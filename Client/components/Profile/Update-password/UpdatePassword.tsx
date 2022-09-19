import { Alert } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AiOutlineLock } from 'react-icons/ai';
import { useToasts } from 'react-toast-notifications';
import styles from '../../../styles/components/profile/update-password/updatePassword.module.scss';
import { useState } from '../../../utils/commonImports';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import InputBox from '../../Common/Inputs/InputBox';

interface IFormInputs {
  'old password': string;
  'new password': string;
}

export default function UpdatePassword() {
  const [errorMessage, setErrorMsg] = useState('');
  const { addToast } = useToasts();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>();
  const onSubmit = async (data: any) => {
    setErrorMsg('');
    try {
      const resData = await fetch(`${process.env.BASE_URL}/auth/updatePassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oldPassword: data['old password'],
          newPassword: data['new password'],
        }),
        credentials: 'include',
      }).then(res => res.json());
      if (resData.error) {
        setErrorMsg(resData.message);
      } else {
        addToast('password updated successfully', {
          appearance: 'success',
        });
      }
    } catch {
      setErrorMsg('Something went wrong');
    }
  };

  return (
    <div className={styles.updatePassContainer}>
      <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <h3>Update Password</h3>
        <div className={styles.inputs}>
          <InputBox
            required
            control={control}
            showEye
            placeholder="your old password"
            error={!!errors['old password']}
            helperText="Input a valid password"
            type="old password"
            validation={(v: any) => {
              const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
              return reg.test(v);
            }}
            icon={<AiOutlineLock style={{ fontSize: '18px' }} />}
          />
        </div>
        <div className={styles.inputs}>
          <InputBox
            required
            control={control}
            showEye
            placeholder="your new password"
            error={!!errors['new password']}
            helperText="Input a valid password"
            type="new password"
            validation={(v: any) => {
              const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
              return reg.test(v);
            }}
            icon={<AiOutlineLock style={{ fontSize: '18px' }} />}
          />
        </div>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <PrimaryButton type="submit" text="Update Password" />
      </form>
    </div>
  );
}
