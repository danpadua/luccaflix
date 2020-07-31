import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField'

export const ContainerRow = styled.div`
    display: flex;
    padding: 2px 0;
`;

export const FormInput = styled(TextField)`
    width: 100%;
    background-color: var(--white);

    .MuiFormLabel-root.Mui-focused {
        color: var(--black);
    }

    .MuiFilledInput-underline:after {
        border-bottom: 2px solid var(--black) !important;
    }   
`;

function FormField({ label, type, name, value, onChange, required }) {
    return (
        <ContainerRow>
            <FormInput
                label={label}
                required={required}
                type={type}
                name={name}
                onChange={onChange}
                value={value}
                variant="filled"
            />
        </ContainerRow>
    )
}

export default FormField;