import Logo from "../images/logo.svg";
import Avatar from "../images/Avatar.jpg";

function Header() {
  return (
    <header className={"header"}>
      <img src={Logo} className={"header__logo"} alt={"logo"} />
      <div className={"header__items"}>
        <div className={"header__toggle"}>
          <input type="radio" name="balance" value="yin" id="yin" className="header__toggle-input"/>
          <label htmlFor="yin" className="header__toggle-label header__toggle-label_week">Неделя</label>
          <input type="radio" name="balance" value="yang" id="yang" className="header__toggle-input header__toggle-input_move" checked/>
          <label htmlFor="yang" className="header__toggle-label header__toggle-label_day">День</label>
          <span className="header__toggle-switcher"></span>
        </div>
          <button className="header__btn-add">Добавить</button>
          <button className="header__btn-profile">Билли <img className={"header__btn-profile_avatar"} src={Avatar} alt="Аватар"/></button>
        <div className={"header__profile"}>

        </div>
      </div>
    </header>
  )
}

export default Header;
