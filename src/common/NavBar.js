import '../styles/NavBar.css'

const NavBar = (props) => {

  const handleClick = (section) => {
    props.setActiveSection(section);
    // console.log(section)
  };

  return (
    <nav id='nav-main'>
        <p><a onClick={() => handleClick('home')}>Home</a></p>
        <p><a onClick={() => handleClick('education')}>Education</a></p>
        <p><a onClick={() => handleClick('miniGames')}>miniGames</a></p>
        <p><a onClick={() => handleClick('projects')}>Projects</a></p>
        <p><a onClick={() => handleClick('miniProjects')}>miniProjects</a></p>
        <p><a onClick={() => handleClick('contact')}>Contact</a></p>
    </nav>
  );
};

export default NavBar;