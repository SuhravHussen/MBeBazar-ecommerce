import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import { BsCashStack, BsCreditCard } from 'react-icons/bs';

import RadioInput from '../../Common/Inputs/Radio';
import DetailsContainer from '../Common/DetailsContainer.tsx/DetailsContainer';

export default function PaymentDetails({ register }: any) {
    return (
        <DetailsContainer heading="Payment Details" number="03">
            <FormControl>
                <RadioGroup sx={{ gap: '10px', margin: '10px' }} defaultValue="creditCard" row>
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
                                value="creditCard"
                                label="Credit Card"
                                type="paymentMethod"
                            />
                        }
                    />
                </RadioGroup>
            </FormControl>
        </DetailsContainer>
    );
}
