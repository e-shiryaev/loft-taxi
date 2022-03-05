import React from "react";

const menus = [{key: 'Map', name: 'Карта'}, {key: 'Profile', name: 'Профиль'}, {key: 'Login', name: 'Выйти'}];

class Header extends React.Component {
  redirect = (event) => {
    this.props.redirect(event.target.parentElement.id);
  }

  render() {

    return (
      <header className={this.props.isVertical ? 'header-vertical' : 'header'}>
        <div className="logo">Логотип-картинка</div>

        <div className="navigation">
          {menus.map(menu => (
            <div className="navigation-button" id={menu.key} key={menu.key} onClick={this.redirect}>
              <div>{menu.name}</div>
            </div>
          ))}
        </div>

      </header>
    );
  }
}

export default Header;
