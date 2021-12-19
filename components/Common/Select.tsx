/* eslint-disable no-nested-ternary */
import chroma from 'chroma-js';
import { GrSort } from 'react-icons/gr';
import Select, { components, StylesConfig } from 'react-select';

const ValueContainer = ({ children, ...props }: any) => (
    <components.ValueContainer {...props}>
        <p
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}
        >
            <GrSort style={{ color: 'green' }} /> {children}
        </p>
    </components.ValueContainer>
);
interface ColourOption {
    value: any;
    label: any;
}

const colourStyles: StylesConfig<ColourOption> = {
    control: (styles, state) => ({
        ...styles,
        backgroundColor: 'white',
        boxShadow: state.isFocused ? '0 0 0 0.2rem rgba(120, 194, 173, 0.25)' : '',
        borderColor: state.isFocused ? '#D0EAE2' : '#CED4DA',
        '&:hover': {
            borderColor: state.isFocused ? '#D0EAE2' : '#CED4DA',
        },
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
        const color = chroma('#3BB77E');
        return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                ? '#3BB77E'
                : isFocused
                ? color.alpha(0.1).css()
                : undefined,
            color: isDisabled
                ? '#ccc'
                : isSelected
                ? chroma.contrast(color, 'white') > 2
                    ? 'white'
                    : 'black'
                : 'green',
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? '#3BB77E'
                        : color.alpha(0.3).css()
                    : undefined,
            },
        };
    },
};

export default function MySelect({
    options,
    handleChange,
}: {
    options: ColourOption[];
    handleChange: any;
}) {
    return (
        <Select
            isSearchable={false}
            placeholder="Sort..."
            options={options}
            styles={colourStyles}
            components={{ ValueContainer }}
            onChange={(v) => handleChange(v)}
        />
    );
}
