import { Button, Grid, TextField, Typography } from '@mui/material';
import {
    FieldErrors,
    useController,
    useForm,
    useFormContext
} from 'react-hook-form';

import { DevTool } from '@hookform/devtools';
import { get } from 'lodash';

export { registerFormSchema } from './schema';
export type { RegisterFormFormValues } from './schema';

const RegisterForm = () => {
    const {
        control,
        formState: { errors },
        getValues,
        setValue
    } = useFormContext();

    const { field: firstNameField } = useController({
        name: 'insured.firstName',
        defaultValue: null
    });

    const { field: middleNameField } = useController({
        name: 'insured.middleName',
        defaultValue: null
    });

    const { field: lastNameField } = useController({
        name: 'insured.lastName',
        defaultValue: null
    });

    return (
        <>
            <Typography variant="h2" gutterBottom>
                Register
            </Typography>

            <DevTool control={control} placement="top-right" />
            <Grid container spacing={2}>
                <Grid item>
                    <TextField
                        {...firstNameField}
                        id={firstNameField.name}
                        label="First name"
                        error={Boolean(get(errors, firstNameField.name))}
                        helperText={
                            get(
                                errors,
                                `${firstNameField.name}.message`,
                                ''
                            ) as string
                        }
                    />
                </Grid>
                <Grid item>
                    <TextField
                        {...middleNameField}
                        id={middleNameField.name}
                        label="Middle name"
                        error={Boolean(get(errors, middleNameField.name))}
                        helperText={
                            get(
                                errors,
                                `${middleNameField.name}.message`,
                                ''
                            ) as string
                        }
                    />
                </Grid>
                <Grid item>
                    <TextField
                        {...lastNameField}
                        id={lastNameField.name}
                        label="Last name"
                        error={Boolean(get(errors, lastNameField.name))}
                        helperText={
                            get(
                                errors,
                                `${lastNameField.name}.message`,
                                ''
                            ) as string
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit">Submit</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default RegisterForm;
