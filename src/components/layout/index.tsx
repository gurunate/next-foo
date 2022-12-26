import React from 'react';
import {
    AppBar,
    Box,
    Collapse,
    Container,
    Tab,
    Tabs,
    Toolbar,
    useTheme
} from '@mui/material';
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
    const theme = useTheme();
    const { scrollDirection } = useScrollDirection();

    const [collapse, setCollapse] = React.useState(false);

    React.useEffect(() => {
        if ([SCROLL_DOWN, SCROLL_UP].includes(scrollDirection))
            setCollapse(scrollDirection === SCROLL_DOWN);
    }, [scrollDirection]);

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`
        };
    };

    const value = 0;

    return (
        <>
            <AppBar position="fixed">
                <Collapse in={!collapse}>
                    <Toolbar>Search</Toolbar>
                </Collapse>
                <Toolbar
                    sx={{
                        backgroundColor: theme.palette.primary.light
                    }}
                >
                    <Container maxWidth="xl">
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs
                                value={value}
                                // onChange={handleChange}
                                aria-label="basic tabs example"
                            >
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                    </Container>
                </Toolbar>
            </AppBar>
            <Container maxWidth="xl">
                <Box mt={20}>{children}</Box>
            </Container>
        </>
    );
};

export default Layout;
