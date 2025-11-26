import styles from "./header.module.css";
import { Search, ShoppingCart, User } from "lucide-react";
import dystopiaLogo from '../../../assets/images/Logo/Logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={dystopiaLogo} alt="Logo DYSTOPIA" className={styles.logoImage} />
            </div>

            <nav className={styles.nav}>
                <a href="#streetwear" className={styles.navLink}>Streetwear</a>
                <a href="#drops" className={styles.navLink}>Limited Drops</a>
                <a href="#acessorios" className={styles.navLink}>Acessórios</a>
                <a href="lookbook" className={styles.navLink}>Lookbook</a>
            </nav>

            <div className={styles.actions}>
                <button className={styles.iconButton}>
                    <Search size={20} />
                </button>
                <button className={styles.iconButton}>
                    <User size={20} />
                </button>
                <button className={styles.iconButton}>
                    <ShoppingCart size={20} />
                </button>
            </div>

        </header>
    );
};

export default Header;