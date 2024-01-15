import styles from "./footer.module.css"
import img from "../assets/img/logos/Magus Pocus No BG.png"

export const Footer_Eng = () => {
    return (
        <footer className={styles.footer}>
            <img src={img} />
            <p>© 2024 Storm Wizard. All rights reserved.</p>
        </footer>
    )
};