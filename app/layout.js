// app/layout.js
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { Inter } from 'next/font/google'; // Ensure correct import
import './globals.css'; // Import global CSS
import theme from './theme'; // Import theme from the client-side file

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pantry Tracker',
  description: 'Manage your pantry inventory with ease',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ display: 'flex' }}>
            <aside style={{ width: 240, backgroundColor: '#004d40', color: '#ffffff', height: '100vh', padding: '16px' }}>
              <Typography variant="h6">Dashboard</Typography>
              {/* Add sidebar links here */}
            </aside>
            <main style={{ flex: 1, padding: '16px', backgroundColor: '#f5f5f5' }}>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
