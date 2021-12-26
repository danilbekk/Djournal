import '../styles/globals.css';
import 'macro-css';
import { theme } from '../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
