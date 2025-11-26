import React from "react";
import styles from "./header.module.css";
import { Search, ShoppingCart } from "lucide-react";

const Header = () => {
    return (
        <header className={styles.header}>
            {/*Container do logo e do menu*/}
            <div className={styles.logoContainer}>
                <span className={styles.logoText}>DYSTOPIA</span>
                <span className={styles.logoSubtitle}>2000</span>
            </div>

            {/*Navegação Principal*/}
            <nav className={styles.nav}>
                <a href="#streetwear" className={styles.navLink}>Streetwear</a>
                <a href="#drops" className={styles.navLink}>Limited Drops</a>
                <a href="#acessorios" className={styles.navLink}>Acessórios</a>
                <a href="lookbook" className={styles.navLink}>Lookbook</a>
            </nav>

            {/*icones de ação*/}
            <div className={styles.actions}>
                <button className={styles.iconButton}>
                    <Search size={20} />
                </button>
                <button className={styles.iconButton}>
                    <ShoppingCart size={20} />
                </button>
            </div>

        </header>
    );
};

export default Header;