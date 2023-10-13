import { useContext} from 'react';
import { Context as ThemeColor} from 'contexts/themeContext';

const ChangeButton = () => {
    const { toggleTheme } = useContext(ThemeColor);
    
    return (
        <button onClick={toggleTheme}>Change Theme</button>
    );
    };

export default ChangeButton;