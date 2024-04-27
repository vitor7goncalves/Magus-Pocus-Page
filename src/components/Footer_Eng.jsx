import styles from "./Footer.module.css"
import img from "../assets/img/logos/Magus Pocus No BG.png"

export const Footer_Eng = () => {
    
    let home = "/"

    return (
        <footer className={styles.footer}>
            <img onClick={() => window.location.href = home} src={img} />
            <p>© 2024 Storm Wizard. All rights reserved.</p>
        </footer>
    )
};