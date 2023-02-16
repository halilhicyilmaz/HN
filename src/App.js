// Libraries

// i18n
import './utils/i18n'; // available for all components through context api

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'

// Utils
import AppRouter from './router/AppRouter';

// MUI
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


// Custom
import { useThemes } from './utils/useThemes';

function App() {
  const getTheme = useThemes()

  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />

        <AppRouter />

      </ThemeProvider>
    </Provider>
  );
}

export default App;
