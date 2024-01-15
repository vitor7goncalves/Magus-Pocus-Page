import styles from "./Header.module.css"
import video from "../assets/video/Magus Pocus - Stage 1 - English.mp4"
import mg from "../assets/img/logos/Magus Pocus No BG2.png"
export const Header_Br = () => {
    return (
        <div className={styles.header}>
            <video className={styles.video} src={video} muted loop autoPlay/>
            <div className={styles.content}>
                <h1>Venha Fazer Parte Desta Aventura</h1>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
                    <button>Compre Magus Pocus Na Steam</button>
                </a>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
                    <button>Teste de graça Magus Pocus: Essencia Arcana</button>
                </a>
            </div>
        </div>
    )
};