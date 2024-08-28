import React from "react";
import styles from "./styles.module.css";

import logo_icon from "../../assets/icons/logo_icon.svg";

function Header() {
  return (
    <header className={styles.header_container}>
      <img src={logo_icon} alt="Логотип" />
      <a href="/link">Главная</a>
      <a href="/link">Музыка</a>
      <a href="/link">Сообщества</a>
      <a href="/link">Друзья</a>
    </header>
  );
}

export default Header;
