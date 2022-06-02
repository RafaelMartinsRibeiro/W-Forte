import Link from "next/link";
import styles from "../styles/components/Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <Link href="/">
        <a>
          <div className={styles.navbarTitle}>
            <img src="/favicon.png" alt="header icon" />
            <div>
              <h1>W FORTE Fitness</h1>
              <span>AQUI VOCÊ É ÚNICO</span>
            </div>
          </div>
        </a>
      </Link>

      <div className={styles.navbarMenu}>
        <ul>
          <li onClick={() => window.scrollTo(0, 0)}>
            <a>Horários</a>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <a>Estrutura</a>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <a>Modalidades</a>
          </li>
          <li onClick={() => window.scrollTo(0, 0)}>
            <a>Informações</a>
          </li>

          <li>
            <a>Agende seu treino</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
