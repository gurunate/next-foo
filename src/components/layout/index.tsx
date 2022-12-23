import React from 'react';
import { Container } from '@mui/material';

export type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <Container>{children}</Container>;
};

export default Layout;
