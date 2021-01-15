import React from 'react';

const Header = () => {

  // const [prevScrollPos, setPrevScrollPos] = useState(0); 
  // const [visible, setVisible] = useState(true);  

  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;

  //   setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

  //   setPrevScrollPos(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);

  // }, [prevScrollPos, visible, handleScroll]);
  
  return (

  <header className="header" id="header">
    <input id="menu" type="checkbox" />
    <label for="menu">
      <div className="header__logo">😊</div>
    </label>

    <nav>
    <ul>
      <li className="menu-item"><a href="#">Projects</a></li>
      <li className="menu-item"><a href="#">Skills</a></li>
      <li className="menu-item"><a href="#">About me</a></li>
    </ul>
  </nav>
  </header>

  );
};

export default Header;
