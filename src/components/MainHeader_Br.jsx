import styles from "./Header.module.css";
import video from "../assets/video/Header_Background2.mp4";
import logoHeader from "../assets/img/logos/Storm_Wizard_fundo_transparente_raio_dourado.webp";

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
