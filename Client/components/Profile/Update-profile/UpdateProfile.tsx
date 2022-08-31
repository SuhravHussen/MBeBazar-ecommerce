import { Alert } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineUser } from 'react-icons/ai';
import { useToasts } from 'react-toast-notifications';
import styles from '../../../styles/components/profile/updateProfile/update-profile.module.scss';
import InputBox from '../../Common/Login-SignUp/InputBox';
import Dropzone from './Dropzone';

interface IFormInputs {
    name: string;
    address: string;
    phone: string;
    avatar: string;
}

export default function UpdateProfile() {
    const [avatar, setAvatar] = useState('');
    const [errorMessage, setErrorMsg] = useState('');

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IFormInputs>();
    const { addToast } = useToasts();
    const onSubmit = async (data: any) => {
        setErrorMsg('');
        try {
            const updatedProfile: any = new FormData();
            if (data.name) updatedProfile.append('name', data.name);
            if (data.address) updatedProfile.append('address', data.address);
            if (data.phone) updatedProfile.append('phone', data.phone);
            if (avatar) updatedProfile.append('files', avatar);

            const resData = await fetch(`${process.env.BASE_URL}/users/updateProfile`, {
                method: 'POST',
                headers: {
                    enctype: 'multipart/form-data',
                },
                body: updatedProfile,
                credentials: 'include',
            }).then((res) => res.json());

            if (resData.error) {
                setErrorMsg(resData?.message);
            } else {
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        _id: resData?.data?._id,
                        name: resData?.data?.name,
                        address: resData?.data?.address,
                        phone: resData?.data.phone,
                        avatar: resData?.data?.avatar,
                        toReview: resData?.data?.toReview,
                        email: resData?.data?.email,
                    })
                );
                localStorage.setItem(
                    'session',
                    JSON.stringify({
                        _id: resData?.data?._id,
                        name: resData?.data?.name,
                        address: resData?.data?.address,
                        phone: resData?.data.phone,
                        avatar: resData?.data?.avatar,
                        toReview: resData?.data?.toReview,
                        email: resData?.data?.email,
                    })
                );
                addToast('Profile updated successfully', {
                    appearance: 'success',
                });
            }
        } catch {
            setErrorMsg('Something went wrong');
        }
    };

    return (
        <div className={styles.updateProfileContainer}>
            <h3>Update Profile</h3>
            <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
                <Dropzone setAvatar={setAvatar} />

                <div className={styles.inputs}>
                    <div className={styles.inputBox}>
                        <InputBox
                            required={false}
                            control={control}
                            error={!!errors.name}
                            type="name"
                            helperText="Please input a valid name"
                            placeholder="Update Name"
                            icon={<AiOutlineUser style={{ fontSize: '18px' }} />}
                            validation={(v: any) => v && v.trim().length > 3}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <InputBox
                            required={false}
                            control={control}
                            error={!!errors.address}
                            type="address"
                            helperText="Please input a valid address"
                            placeholder="Update Address"
                            icon={<AiOutlineUser style={{ fontSize: '18px' }} />}
                            validation={(v: any) => v && v.trim().length > 5}
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <InputBox
                            required={false}
                            control={control}
                            error={!!errors.phone}
                            type="phone"
                            helperText="Please input a valid number"
                            placeholder="Update Number"
                            icon={<AiOutlineUser style={{ fontSize: '18px' }} />}
                            validation={(v: any) => v && v.trim().length > 10}
                        />
                    </div>
                </div>
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}
