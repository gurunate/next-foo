import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Collapse,
    Container,
    Toolbar
} from '@mui/material';
import { useScrollDirection } from 'use-scroll-direction';

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { scrollDirection } = useScrollDirection();

    const [collapse, setCollapse] = React.useState(false);

    const toggle = () => {
        setCollapse(prev => !prev);
    };

    React.useEffect(() => {
        if (['DOWN', 'UP'].includes(scrollDirection))
            setCollapse(scrollDirection === 'DOWN');
    }, [scrollDirection]);

    return (
        <>
            <AppBar position="fixed">
                <Collapse in={!collapse}>
                    <Toolbar>Search</Toolbar>
                </Collapse>
                <Toolbar sx={{ backgroundColor: 'grey' }}>Nav</Toolbar>
            </AppBar>
            <Container>
                <Box mt={20}>{children}</Box>
            </Container>
        </>
    );
};

export default Layout;
