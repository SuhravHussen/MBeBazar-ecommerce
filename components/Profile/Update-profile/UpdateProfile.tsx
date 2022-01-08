import styles from '../../../styles/components/profile/updateProfile/update-profile.module.scss';
import { useState } from '../../../utils/commonImports';
import InputBox from '../../Common/Login-SignUp/InputBox';
import Dropzone from './Dropzone';

export default function UpdateProfile() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    return (
        <div className={styles.updateProfileContainer}>
            <h3>Update Profile</h3>
            <Dropzone />
            <div className={styles.inputs}>
                <div className={styles.inputBox}>
                    <InputBox
                        error={nameError}
                        type="Full Name"
                        setValue={setName}
                        placeholder="your name"
                        helperText="input a valid name"
                    />
                </div>
                <div className={styles.inputBox}>
                    <InputBox
                        error={addressError}
                        type="Your Address"
                        setValue={setAddress}
                        placeholder="Address"
                        helperText="input a valid address"
                    />
                </div>
                <div className={styles.inputBox}>
                    <InputBox
                        error={phoneError}
                        type="Phone/Mobile"
                        setValue={setPhone}
                        placeholder="your phone number"
                        helperText="input a valid number"
                    />
                </div>
                <div className={styles.inputBox}>
                    <InputBox
                        error={emailError}
                        type="Email Address"
                        setValue={setEmail}
                        placeholder="your email"
                        helperText="input a valid email"
                    />
                </div>
            </div>
            <button type="button">Update Profile</button>
        </div>
    );
}
