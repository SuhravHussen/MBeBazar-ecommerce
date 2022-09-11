import { Alert, FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { BsCashStack, BsCreditCard } from 'react-icons/bs';

import RadioInput from '../../Common/Inputs/Radio';
import DetailsContainer from '../Common/DetailsContainer.tsx/DetailsContainer';

export default function PaymentDetails({ register }: any) {
    return (
        <DetailsContainer heading="Payment Details" number="03">
            <FormControl>
                <RadioGroup sx={{ gap: '10px', margin: '10px' }} defaultValue="CreditCard" row>
                    <FormControlLabel
                        label=""
                        control={
                            <RadioInput
                                register={register}
                                icon={<BsCashStack />}
                                required
                                type="paymentMethod"
                                value="COD"
                                label="Cash on delivery"
                            />
                        }
                    />
                    <FormControlLabel
                        label=""
                        control={
                            <RadioInput
                                register={register}
                                icon={<BsCreditCard />}
                                required
                                value="CreditCard"
                                label="Credit Card"
                                type="paymentMethod"
                            />
                        }
                    />
                </RadioGroup>
            </FormControl>
            <Alert severity="info" sx={{ margin: '10px' }}>
                Please note that you will be redirected to a secure payment gateway to complete your
                payment. Use 4242 4242 4242 4242 as the card number, any future date for the expiry
            </Alert>
        </DetailsContainer>
    );
}
