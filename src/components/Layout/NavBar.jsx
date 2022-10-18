import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeProvider';

export default function NavBar() {
  const { theme, setTheme } = useTheme();

  const handleClick = (e) => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <header>
      <NavLink to="">Home</NavLink>
      <NavLink to="blog">Blog</NavLink>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <button onClick={(e) => handleClick(e)}>
        <img src="./images/5558220.png"></img>
      </button>
    </header>
  );
}
