import styles from "./Footer.module.css"
import img from "../assets/img/logos/Storm_Wizard_fundo_transparente_raio_dourado.webp"

export const MainFooter_Eng = () => {

    let home = "/"

    return (
        <footer className={styles.footer_main_page}>
            <img onClick={() => window.location.href = home} src={img} />
            <p>© 2024 Storm Wizard. All rights reserved.</p>
        </footer>
    )
};