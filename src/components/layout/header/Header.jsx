import "./Header.scss";
import headLogo from "../../../assets/images/headLogo.svg";
import { NavLink } from "react-router-dom";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { LuSun, LuSunMoon } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { darkTheme, whiteTheme } from "../../../redux/productSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { TbSunMoon } from "react-icons/tb";

const Header = () => {
  const { theme } = useSelector((s) => s.productApp);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const changeTheme = () => {
    if (theme === "white") {
      dispatch(darkTheme());
    } else {
      dispatch(whiteTheme());
    }
  };

  useEffect(() => {
    document.body.className = theme; // применяет тему как класс
  }, [theme]);
  const btnStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    background: "none",
    color: "white",
  };

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={headLogo} alt="img" />
          <div className="header--nav">
            <NavLink to={"/"}>Main</NavLink>
            <NavLink to={"/popular"}>Popular</NavLink>
            <NavLink to={"/topRated"}>Top Rated</NavLink>
            <div className="header--nav__form">
              <input type="text" placeholder="Search Movie..." />
              <button>
                <IoIosSearch />
              </button>
            </div>
          </div>
          <div className="header--btns">
            {menu ? (
              <button
                onClick={() => setMenu(false)}
                className="header--btns__close"
              >
                <IoCloseOutline />
              </button>
            ) : (
              <button
                onClick={() => setMenu(true)}
                className="header--btns__menu"
              >
                <IoIosMenu />
              </button>
            )}
            <button
              onClick={() => changeTheme()}
              className="header--btn__sun"
              style={btnStyle}
            >
              {!theme === "dark" ? <TbSunMoon /> : <TbSunMoon />}
            </button>
          </div>
        </div>
        <div
          style={{
            right: menu ? "0" : "-300px",
          }}
          className="menu"
        >
          <div className="menu--nav">
            <NavLink to={"/"}>Main</NavLink>
            <NavLink to={"/popular"}>Popular</NavLink>
            <NavLink to={"/topRated"}>Top Rated</NavLink>
            <div className="menu--nav__form">
              <input type="text" placeholder="Search Movie..." />
              <button>
                <IoIosSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
