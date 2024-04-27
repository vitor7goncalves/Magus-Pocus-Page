import styles from "./Body.module.css";
import imgNews from "../assets/img/image/about-image.webp"
import img from "../assets/img/image/1.webp"
import img3 from "../assets/img/image/5.webp"
import img4 from "../assets/img/image/3.png"
import img5 from "../assets/img/image/4.png"
import img6 from "../assets/img/image/5.png"
import fb from "../assets/img/icons/icon face.png"
import ins from "../assets/img/icons/icone insta.png"
import you from "../assets/img/icons/icon youtube.png"

export const MainPage_Eng = () => {

    const urlGame = {
        maguspocus: "/maguspocus",
    }

    return (
        <body className={styles.body}>
            <div className={styles.border_news_main_page}></div>
            <div className={styles.content_news_main_page}>
                <div className={styles.content2_news_main_page}>
                    <h2>Forging new realities</h2>
                    <div>
                        <p>
                            "Storm Wizard Studios is a visionary game development company that transcends traditional boundaries,
                            crafting immersive gaming experiences that transport players into epic dimensions. Like masterful wizards
                            wielding spells of creativity, we conjure vibrant worlds filled with adventure, magic, and endless possibilities.
                            Our mission is to unleash the imagination, forging new realities with every game we create. Welcome to the realm
                            of Storm Wizard Studios, where fantasy becomes reality."
                        </p>
                    </div>
                    <div>
                        <img src={img} />
                    </div>
                </div>
                <div>
                    <img className={styles.imgNews} src={imgNews} />
                </div>
            </div>
            <div className={styles.border_game_main_page}></div>
            <div className={styles.content_game}>
                <div className={styles.content2_game}>
                    <div className={styles.content_game_text_main_page}>
                        <h2>Magus Pocus</h2>
                        <p>
                            Explore a 2D action RPG world in platformer style. Become a powerful wizard from an
                            alternate Earth, defeat monsters, explore secret-filled stages, and enhance your magical
                            abilities. The new DLC will transform the experience, offering an engaging journey with magical
                            essences vital to unlocking your character's full potential. Get ready for a new era of magic!
                            Join us on this adventure, download the demo version, and check out the changes.
                        </p>
                        <button onClick={() => window.location.href = urlGame.maguspocus}>
                            Learn more
                        </button>
                    </div>
                    <div>
                        <img src={img3} className={styles.img3} />
                    </div>
                </div>
            </div>
            <div className={styles.rede_main_page}>
                <h2>Follow Storm Wizard Studios</h2>
                <div className={styles.rede_icons}>
                    <a href="https://www.facebook.com/maguspocusgame/">
                        <button>
                            <img id="social-media" src={fb} />
                        </button>
                    </a>
                    <a href="https://www.instagram.com/stormwizardstudios/">
                        <button>
                            <img id="social-media" src={ins} />
                        </button>
                    </a>
                    <a href="https://www.youtube.com/channel/UCpKBagVTJbt9DWc97_JqQZA">
                        <button>
                            <img id="social-media" src={you} />
                        </button>
                    </a>
                </div>
            </div>
        </body >
    )
};