import styles from "./Body.module.css";
import imgNews from "../assets/img/image/about-image.webp";
import img from "../assets/img/image/1.webp";
import img2 from "../assets/img/image/reinos_fantasticos.webp";
import img3 from "../assets/img/image/5.webp";
import fb from "../assets/img/icons/icon face.png";
import ins from "../assets/img/icons/icone insta.png";
import you from "../assets/img/icons/icon youtube.png";

export const MainPage_Eng = () => {

    const urlGame = {
        maguspocus: "/maguspocus",
    };

    return (
        <body className={styles.body}>
            <div className={styles.content_section_one_main_page}>
                <div className={styles.border_section_one_main_page}></div>
                <div className={styles.content2_section_one_main_page}>
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
                </div>
                <div>
                <img className={styles.section_one_img} src={imgNews} title="Storm Wizard Studios - News Image" alt="News Image" />
                </div>
            </div>
            <div className={styles.content_section_two_main_page}>
                <div className={styles.border_section_two_main_page}></div>
                <div className={styles.content2_section_two_main_page}>
                    <div>
                        <img src={img2} className={styles.section_two_img} title="Forja mágica" alt="Forja mágica" />
                    </div>
                    <div className={styles.content_section_two_text_main_page}>
                        <h2>Fantastic Realms</h2>
                        <p>
                            "In the forge of passion for games, we shape 2D and 3D worlds brimming with adventure,
                            action, and magic. Here, at Storm Wizard Studios, we are more than developers - we are
                            storytellers, architects of fantastical worlds where every pixel is a fragment of emotion.
                            With mastery, we merge the charm of RPG with the adrenaline of platform games, creating
                            experiences that challenge the imagination and uplift the hearts of players. Every game we
                            create is an epic journey, where the player is the hero and fun is the reward. Discover
                            the realities forged by our magic."
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.content_section_three_main_page}>
                <div className={styles.border_section_three_main_page}></div>
                <div className={styles.content2_section_three_main_page}>
                    <div className={styles.content_section_three_text_main_page}>
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
                    <img src={img3} className={styles.section_three_img} title="Magus Pocus Game" alt="Magus Pocus Game" />
                    </div>
                </div>
            </div>
            <div className={styles.rede_main_page}>
                <h3>Follow Storm Wizard Studios</h3>
                <div className={styles.rede_icons}>
                    <a href="https://www.facebook.com/maguspocusgame/">
                        <button>
                            <img id="social-media" src={fb} title="Facebook" alt="Facebook" />
                        </button>
                    </a>
                    <a href="https://www.instagram.com/stormwizardstudios/">
                        <button>
                            <img id="social-media" src={ins} title="Instagram" alt="Instagram" />
                        </button>
                    </a>
                    <a href="https://www.youtube.com/channel/UCpKBagVTJbt9DWc97_JqQZA">
                        <button>
                            <img id="social-media" src={you} title="YouTube" alt="YouTube" />
                        </button>
                    </a>
                </div>
            </div>
        </body >
    )
};
