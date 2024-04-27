import styles from "./Header.module.css"
import video from "../assets/img/image/header-background-image.webp"
import logoHeader from "../assets/img/logos/Storm Wizard fundo transparente raio dourado.webp"
import mg from "../assets/img/logos/Magus Pocus No BG2.png"
export const MainHeader_Eng = () => {
    return (
        <div className={styles.header}>
            <img className={styles.video} src={video} muted loop autoPlay/>
            <div className={styles.content}>
                <img className={styles.logoHeader} src={logoHeader} alt="logo" />
                <h1>One epic dimension forging new realities</h1>
            </div>
            
        </div>
    )
};