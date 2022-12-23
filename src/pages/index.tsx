import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { faker } from '@faker-js/faker';

import Layout from '@/components/layout';

const Home: NextPage = () => {
    return (
        <Layout>
            {faker.lorem
                .paragraphs(100)
                .split(/\n/)
                .map((p, idx) => (
                    <Typography key={idx} paragraph>
                        {p}
                    </Typography>
                ))}
        </Layout>
    );
};

export default Home;
