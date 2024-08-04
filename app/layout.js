// app/layout.js

import { CssBaseline, ThemeProvider } from '@mui/material';
import { Inter } from 'next/font/google'; // Ensure correct import
import Admin from '../layouts/Admin'; // Adjust path if needed
import '../styles/globals.css'; // Import global CSS
import theme from './theme'; // Import theme from the client-side file


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pantry Tracker',
  description: 'Manage your pantry inventory with ease',
};

export default function RootLayout({ children }) {
  const router = useRouter();

  if (router.pathname.startsWith('/admin')) {
    return (
      <Admin>
        {children}
      </Admin>
    );
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
