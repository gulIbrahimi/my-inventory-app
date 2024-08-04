    // app/themeClient.js
    'use client'; // Ensure this file is treated as a client component

    import { createTheme } from '@mui/material/styles';

    const theme = createTheme({
    palette: {
        primary: {
        main: '#004d40', // Dark teal for primary actions
        },
        secondary: {
        main: '#d32f2f', // Red for secondary actions
        },
        background: {
        default: '#f5f5f5', // Light gray background for the whole page
        paper: '#ffffff', // White background for paper elements
        },
        text: {
        primary: '#212121', // Dark gray for primary text
        secondary: '#757575', // Medium gray for secondary text
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#004d40', // Dark teal for headings
        },
        h2: {
        fontSize: '2rem',
        fontWeight: 600,
        color: '#004d40', // Dark teal for subheadings
        },
        h3: {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: '#004d40', // Dark teal for smaller headings
        },
        body1: {
        fontSize: '1rem',
        color: '#212121', // Dark gray for body text
        },
        button: {
        textTransform: 'none', // Avoid uppercasing button text
        fontWeight: 600, // Bold button text
        fontSize: '1rem', // Slightly larger text for buttons
        },
    },
    components: {
        MuiButton: {
        styleOverrides: {
            root: {
            borderRadius: '8px', // Rounded corners for buttons
            padding: '12px 24px', // Padding for buttons
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
            '&:hover': {
                backgroundColor: '#003d34', // Darker teal on hover
            },
            },
        },
        },
        MuiTextField: {
        styleOverrides: {
            root: {
            borderRadius: '4px', // Rounded corners for text fields
            marginBottom: '16px', // Space below text fields
            backgroundColor: '#ffffff', // White background for text fields
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
            },
        },
        },
        MuiListItem: {
        styleOverrides: {
            root: {
            marginBottom: '12px', // Space between list items
            backgroundColor: '#ffffff', // White background for list items
            borderRadius: '4px', // Rounded corners for list items
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)', // Subtle shadow
            },
        },
        },
        MuiCard: {
        styleOverrides: {
            root: {
            borderRadius: '8px', // Rounded corners for cards
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
            padding: '16px', // Padding inside cards
            marginBottom: '16px', // Space below cards
            },
        },
        },
        MuiAppBar: {
        styleOverrides: {
            root: {
            borderBottom: `1px solid #e0e0e0`, // Light gray border
            boxShadow: 'none', // Remove default shadow
            },
        },
        },
        MuiDrawer: {
        styleOverrides: {
            paper: {
            width: 240, // Sidebar width
            backgroundColor: '#004d40', // Dark teal background for sidebar
            color: '#ffffff', // White text in sidebar
            },
        },
        },
    },
    });

    export default theme;
