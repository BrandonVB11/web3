import {ProviderWrapper as ThemeProvider} from 'contexts/themeContext';
import App from 'components/App/App';

const AppLoader = () => {
    return (
        <ThemeProvider>
        <App />
        </ThemeProvider>
    );
    };

export default AppLoader;