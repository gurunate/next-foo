import React from 'react';
import { AppBar, Box, Container, Toolbar } from '@mui/material';

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>Heading</Toolbar>
            </AppBar>
            <Container>
                <Box mt={10}>{children}</Box>
            </Container>
        </>
    );
};

export default Layout;
