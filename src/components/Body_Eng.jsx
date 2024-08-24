import styles from "./Body.module.css";
import img from "../assets/img/image/1.png"
import img3 from "../assets/img/image/2.png"
import img4 from "../assets/img/image/3.png"
import img5 from "../assets/img/image/4.png"
import img6 from "../assets/img/image/5.png"
import fb from "../assets/img/icons/icon face.png"
import ins from "../assets/img/icons/icone insta.png"
import you from "../assets/img/icons/icon youtube.png"

export const Body_Eng = () => {
    return (
        <body className={styles.body}>
            <div className={styles.border_news}></div>
            <div className={styles.content_news}>
                <h2>News</h2>
                <div className={styles.content2_news}>
                    <div>
                        <p>
                            "I’m excited to share the development of "Magus Pocus: Arcane Essence," a 2D RPG in the making that promises to blend mystery, magic, and strategic challenges. The game is still in development, but my vision is to create an immersive world filled with engaging narrative.
                            While the release is still some time away, I want to share an early demo with the community. This will allow you to experience a glimpse of what’s coming and provide valuable feedback, which will be essential in shaping the essence of Magus Pocus: Arcane Essence.
                            I sincerely appreciate everyone who participates in this process. Together, we can build an unforgettable magical journey!"
                        </p>
                    </div>
                    <div>
                        <img src={img} />
                    </div>
                </div>
            </div>
            <div className={styles.border_game}></div>
            <div className={styles.content_game}>
                <div className={styles.content2_game}>
                    <div className={styles.content_game_text}>
                        <h2>About the game</h2>
                        <p>
                            Explore a 2D world of action RPG and platforming.
                            Become a powerful mage in an alternate Earth, defeat monsters, explore environments filled with secrets, and refine your magical abilities.
                            I am working to create an increasingly immersive journey full of new thrills.
                            Magical essences will be the key to unlocking your character's full potential, obtained by facing enemies and discovering hidden locations.
                            Get ready for a new era of magic! Though the game is still in development, I invite you to join us on this adventure and experience its evolution.
                            Download the alpha and see the changes for yourself.
                        </p>
                    </div>
                    <div>
                        <img src={img3} className={styles.img3} />
                    </div>
                </div>
            </div>
            <div className={styles.border_skill_tree}></div>
            <div className={styles.content_skill_three}>
                <div>
                    <div className={styles.content_skill_three_text}>
                        <h2>Skill Tree</h2>
                        <p>
                            I’m adding a skill tree inspired by RPGs to enhance character progression in the adventure. With this feature, you’ll be able to increase damage, improve health, boost speed, and unlock new spells, all using the magical essence collected throughout the game. This addition will provide deeper customization and strategy as you explore and develop your character in Magus Pocus: Arcane Essence.
                        </p>
                    </div>
                </div>
                <img src={img4} />
            </div>
            <div className={styles.border_enemy}></div>
            <div className={styles.content_enemy}>
                <img src={img5} />
                <div className={styles.content_enemy_text}>
                    <h2>Enemies</h2>
                    <p>
                        The enemies at the beginning of the adventure will be relatively simple, but as you progress, you'll encounter increasingly intelligent and challenging foes, each with unique abilities. These encounters will require not only more elaborate strategies but also a constant evolution of your character, creating a natural sense of progression—something fundamental in RPGs. With each battle, you'll feel the impact of your choices and the development of your skills.
                    </p>
                </div>
            </div>
            <div className={styles.border_video}></div>
            <div className={styles.content_video}>
                <div className={styles.content_video_text}>
                    <h2>Magus Pocus: Arcane Essence</h2>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LD9W2xLTCXU?si=LD9iq0LlnR_cKvgF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <img className={styles.border_img_BG} src={img6} />
            </div>
            <div className={styles.button_buy}>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
                    <button>Buy Magus Pocus In Steam</button>
                </a>
                <a href="https://stormwizardstudios.itch.io/maguspocus-arcaneessence">
                    <button>Free Test Magus Pocus: Arcane Essence</button>
                </a>
            </div>
            <div className={styles.rede}>
                <h3>Follow Magus Pocus</h3>
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