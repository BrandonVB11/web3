import {Link} from 'react-router-dom';
import { Button } from 'antd';

const Menu = () => {
  const padding = {
    paddingRight: 5,
  };
  return (
    <div>
      <Button type="link"><Link style={padding} to="/">anecdotes</Link></Button>

      <Button type="link"><Link style={padding} to="/create">create new</Link></Button>
  
      <Button type="link"><Link style={padding} to="/about">about</Link></Button>
      
    </div>
  );
};

export default Menu;
