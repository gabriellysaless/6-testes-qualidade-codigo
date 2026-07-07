import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.logo}>
                    <Link href="/">
                        Cinelista
                    </Link>
                </h1>
                <nav className={styles.nav}>
                    <Link href="/">Início</Link>
                    <Link href="/filmes/em-alta">Em alta</Link>
                    <Link href="/filmes/populares">Populares</Link>
                    <Link href="/filmes/top-filmes">Top Filmes</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;