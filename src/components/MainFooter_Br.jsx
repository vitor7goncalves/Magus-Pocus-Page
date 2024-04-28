import styles from "./Footer.module.css"
import img from "../assets/img/logos/Storm Wizard fundo transparente raio dourado.webp"

export const MainFooter_Br = () => {

    let home = "/"

    return (
        <footer className={styles.footer_main_page}>
            <img onClick={() => window.location.href = home} src={img} />
            <p>© 2024 Storm Wizard. Todos os direitos reservados.</p>
        </footer>
    )
};