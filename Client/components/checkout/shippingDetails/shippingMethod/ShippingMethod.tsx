import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { BsTruck } from 'react-icons/bs';
import styles from '../../../../styles/components/checkout/shippingDetails/shippingMethod/shippngMethod.module.scss';
import RadioInput from '../../../Common/Inputs/Radio';

export default function ShippingMethod({ register }: any) {
    return (
        <div className={styles.shippingMethods}>
            <FormControl>
                <RadioGroup sx={{ gap: '10px' }} defaultValue="Sundarban" row>
                    <FormControlLabel
                        label=""
                        value="Sundarban"
                        control={
                            <RadioInput
                                register={register}
                                icon={<BsTruck />}
                                required
                                type="shippingMethod"
                                value="Sundarban"
                                label="Sundarban"
                                additionalText="Shipping fee: 2$"
                            />
                        }
                    />
                    <FormControlLabel
                        label=""
                        control={
                            <RadioInput
                                register={register}
                                icon={<BsTruck />}
                                required
                                value="Paperfly"
                                label="Paperfly"
                                type="shippingMethod"
                                additionalText="Shipping fee: 3$"
                            />
                        }
                    />
                    <FormControlLabel
                        label=""
                        control={
                            <RadioInput
                                register={register}
                                icon={<BsTruck />}
                                required
                                value="RedX"
                                label="RedX"
                                type="shippingMethod"
                                additionalText="Shipping fee: 3$"
                            />
                        }
                    />
                </RadioGroup>
            </FormControl>
        </div>
    );
}
