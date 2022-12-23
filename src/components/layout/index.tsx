import React from 'react';
import { AppBar, Box, Collapse, Container, Toolbar } from '@mui/material';
import { useScrollDirection } from 'use-scroll-direction';

export type LayoutProps = {
    children: React.ReactNode;
};

const SCROLL_DOWN = 'DOWN';
const SCROLL_UP = 'UP';

/**
 * Layout component
 *
 * @param {LayoutProps} props
 * @returns {React.ReactElement}
 */
const Layout: React.FC<LayoutProps> = ({
    children
}: LayoutProps): React.ReactElement => {
    const { scrollDirection } = useScrollDirection();

    const [collapse, setCollapse] = React.useState(false);

    React.useEffect(() => {
        if ([SCROLL_DOWN, SCROLL_UP].includes(scrollDirection))
            setCollapse(scrollDirection === SCROLL_DOWN);
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
