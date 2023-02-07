import { FieldErrors, FormProvider, useForm } from 'react-hook-form';
import RegisterForm, { registerFormSchema } from '@/components/register-form';

import { Button } from '@mui/material';
import Layout from '@/components/layout';
import { yupResolver } from '@hookform/resolvers/yup';

const Page = () => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(registerFormSchema)
    });

    const { handleSubmit, setError } = methods;

    const onSubmit = async (data: unknown) => {
        console.log('onSubmit', data);
    };

    const onError = (errors: FieldErrors) => {
        console.error(errors);
    };

    const handleDoIt = () => {
        setError('insured.firstName', {
            message: 'foo bar'
        });
        setError('insured.lastName', {
            message: "That didn't work"
        });
    };

    return (
        <Layout>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <RegisterForm />
                </form>
            </FormProvider>
            <Button onClick={handleDoIt} color="secondary" variant="contained">
                Do it
            </Button>
        </Layout>
    );
};

export default Page;
