import styles from '../../../styles/components/profile/update-password/updatePassword.module.scss';
import { useState } from '../../../utils/commonImports';
import InputBox from '../../Common/Login-SignUp/InputBox';

export default function UpdatePassword() {
    const [, setCurrentPass] = useState('');
    const [currentPassError] = useState(false);
    const [, setNewPass] = useState('');
    const [newPassError] = useState(false);
    return (
        <div className={styles.updatePassContainer}>
            <h3>Update Password</h3>
            <div className={styles.inputs}>
                <InputBox
                    placeholder="your password"
                    type="Current Password"
                    error={currentPassError}
                    helperText="Incorrect Password"
                    setValue={setCurrentPass}
                />
            </div>
            <div className={styles.inputs}>
                <InputBox
                    placeholder="enter new password"
                    type="New Password"
                    error={newPassError}
                    helperText="Input a valid password"
                    setValue={setNewPass}
                />
            </div>
            <button type="button">Submit</button>
        </div>
    );
}
