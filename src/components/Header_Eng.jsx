import styles from "./Header.module.css"
import video from "../assets/video/Magus Pocus - Stage 1 - English.mp4"
import mg from "../assets/img/logos/Magus Pocus No BG2.png"
export const Header_Eng = () => {
    return (
        <div className={styles.header}>
            <video className={styles.video} src={video} muted loop autoPlay/>
            <div className={styles.content}>
                <h1>Come And Be Part Of This Adventure</h1>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
                    <button>Buy Magus Pocus In Steam</button>
                </a>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
                    <button>Free Test Magus Pocus: Arcane Essence</button>
                </a>
            </div>
            
        </div>
    )
};