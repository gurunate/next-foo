import * as yup from 'yup';

const STANDARD_REQUIRED_FIELD_MESSAGE = 'Required field.';

export const registerFormSchema = yup.object().shape({
    insured: yup.object().shape({
        firstName: yup
            .string()
            .nullable()
            .required(STANDARD_REQUIRED_FIELD_MESSAGE),
        middleName: yup.string().nullable().optional(),
        lastName: yup
            .string()
            .nullable()
            .required(STANDARD_REQUIRED_FIELD_MESSAGE)
    })
});

export type RegisterFormFormValues = yup.InferType<typeof registerFormSchema>;
