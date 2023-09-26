import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import {TbHome2} from "react-icons/tb"
import {RiCodeSSlashFill } from "react-icons/ri"
import { BsPersonCircle } from "react-icons/bs"
import './styles.css'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  const handleClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
  };

  return (
    <div className="navigation">
      <ul>
        <li className={`list ${activeLink === "/" && "active"}`}>
          <Link to="/" onClick={(e) => handleClick(e, "/")}>
            <span className="icon">
              <TbHome2 />
            </span>
            <span className="text"> Home </span>
          </Link>
        </li>
        <li className={`list ${activeLink === "/about" && "active"}`}>
          <Link to="/about" onClick={(e) => handleClick(e, "/about")}>
            <span className="icon">
              <BsPersonCircle />
            </span>
            <span className="text"> About </span>
          </Link>
        </li>

        <li className={`list ${activeLink === "/works" && "active"}`}>
          <Link to="/works" onClick={(e) => handleClick(e, "/works")}>
            <span className="icon">
            <RiCodeSSlashFill />
            </span>
            <span className="text"> Works </span>
          </Link>
        </li>
        <div className="indicatore"></div>
      </ul>
    </div>
  );
};

export default Navbar;


/* const Navbar = () =>{

    useEffect(() => {
      highlightActiveLink();  
    }, []);
  
    const highlightActiveLink = () => {
      const links = document.querySelectorAll('.list');
      links.forEach(link => {
        link.classList.remove('active');
      });
  
      const activeLink = document.querySelector(
        `.list a[href="${window.location.pathname}"]`
      );
      activeLink.classList.add('active');
    };


    return(
        <div className="navigation">
          <ul>
            <li className="list active">
              <Link to="/" >
              <span className="icon">
                <TbHome2 />
              </span>
              <span className="text"> Home </span>
              </Link>
            </li>
            <li className="list">
              <Link to="/" >
              <span className="icon">
                <BsPersonCircle />
              </span>
              <span className="text"> About </span>
              </Link>
            </li>

            <li className="list">
              <Link to="/" >
              <span className="icon">
              <RiCodeSSlashFill />
              </span>
              <span className="text"> Works </span>
              </Link>
            </li>
            <div className="indicatore"></div>
          </ul>
        </div>
    )
}
export default Navbar */