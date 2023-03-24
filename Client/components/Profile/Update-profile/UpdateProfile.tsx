import { Alert } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useUpdateProfileMutation } from '../../../Redux/services/Profile/services';
import { updateUser } from '../../../Redux/Slices/userSlice';
import styles from '../../../styles/components/profile/updateProfile/update-profile.module.scss';
import localStorageManager from '../../../utils/localstorageManager';
import PrimaryButton from '../../Common/Button/PrimaryButton';
import InputBox from '../../Common/Inputs/InputBox';
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
    const dispatch = useDispatch();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IFormInputs>();
    const { addToast } = useToasts();

    const [updateProfile, { isLoading }] = useUpdateProfileMutation();

    const onSubmit = async (data: any) => {
        try {
            const jwt = localStorageManager('jwt-token');
            const refreshToken = localStorageManager('refresh-token');
            const tokens = {
                'refresh-token': refreshToken,
                'jwt-token': jwt,
            };
            setErrorMsg('');
            const updatedProfile: any = new FormData();
            if (data.name) updatedProfile.append('name', data.name);
            if (data.address) updatedProfile.append('address', data.address);
            if (data.phone) updatedProfile.append('phone', data.phone);
            if (avatar) updatedProfile.append('files', avatar);
            if (jwt || refreshToken) updatedProfile.append('tokens', JSON.stringify(tokens));
            const res: any = await updateProfile(updatedProfile);
            if ('error' in res) {
                setErrorMsg(
                    res?.error?.data?.message ??
                        'Something went wrong ! please check your internet connection'
                );
            }
            let resData;
            if ('data' in res) {
                resData = res.data;
                if (resData.error) {
                    setErrorMsg(resData?.message);
                } else {
                    const updatedUser = {
                        _id: resData?.data?._id,
                        name: resData?.data?.name,
                        address: resData?.data?.address,
                        phone: resData?.data.phone,
                        avatar: resData?.data?.avatar,
                        toReview: resData?.data?.toReview,
                        email: resData?.data?.email,
                    };
                    localStorage.setItem('user', JSON.stringify(updatedUser));
                    localStorage.setItem('session', JSON.stringify(updatedUser));
                    dispatch(updateUser(updatedUser));
                    addToast('Profile updated successfully', {
                        appearance: 'success',
                    });
                }
                if (resData.tokenChanged) {
                    localStorageManager('jwt-token', resData?.data?.token);
                    localStorageManager('refresh-token', resData?.data?.refreshToken);
                }
            }
        } catch (err) {
            setErrorMsg('Something went wrong! please try again with internet connection');
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

                <PrimaryButton loading={isLoading} type="submit" text="Update" />
            </form>
        </div>
    );
}
