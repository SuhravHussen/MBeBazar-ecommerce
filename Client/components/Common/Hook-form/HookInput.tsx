import { Controller, useForm } from 'react-hook-form';

export default function HookInput() {
    const { handleSubmit, reset, control } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <Controller
            name="textValue"
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value} label="Text Value" />
            )}
        />
    );
}
