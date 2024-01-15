import styles from "./Footer.module.css"
import img from "../assets/img/logos/Magus Pocus No BG.png"

export const Footer_Br = () => {
    return (
        <footer className={styles.footer}>
            <img src={img} />
            <p>© 2024 Storm Wizard. Todos os direitos reservados.</p>
        </footer>
    )
};