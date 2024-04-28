import styles from "./Header.module.css";
import video from "../assets/video/Header_Background.mp4";
import logoHeader from "../assets/img/logos/Storm Wizard fundo transparente raio dourado.webp";

export const MainHeader_Br = () => {
    return (
        <div className={styles.header_main_page}>
            <video  title="Header Background" alt="Header Background" className={styles.video} src={video} muted loop autoPlay/>
            <div className={styles.content}>
                <img className={styles.logoHeader} src={logoHeader} title="Storm Wizard Studios Logo" alt="Storm Wizard Studios Logo" />
                <h1>Uma dimensão épica forjando novas realidades</h1>
            </div>
        </div>
    );
};
