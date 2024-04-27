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
                            "I have decided to undertake a significant transformation of Magus Pocus, elevating it from a more simplified 2D platformer to its original 2D RPG format. After over a year since its initial release, I am excited to announce the launch of a comprehensive DLC (Magus Pocus: Arcane Essence). As a solo developer, I initially hesitated to embrace the complexity of an RPG, opting for a simpler approach. However, after reflecting on the game's potential, I have decided to return to the original idea.

                            At this early stage of the project, I am releasing a prototype (demo) to the community. I want players to experience it and share their feedback to shape the essence of Magus Pocus: Arcane Essence. The base game will still be a simpler 2D platformer, and what we are developing will be a DLC with its own pricing. The intention of releasing it as DLC is so that if a player decides to play a casual 2D platformer, they can simply disable the DLC and be good to go.

                            I appreciate in advance everyone who decides to download the demo and contribute their opinions. This process is vital to creating the most engaging and fun game possible. Thank you for your active participation in the evolution of Magus Pocus: Arcane Essence."
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
                        <h2>New DLC</h2>
                        <p>
                            Embark on a 2D action RPG platformer world. Become a powerful mage from an alternate land, defeat monsters, explore stages full of secrets, and enhance your magical abilities. The new DLC will transform the experience, providing a more immersive journey. Magical essences are vital to unlocking your character's full potential, earned by defeating enemies and exploring hidden corners. Be prepared for a new era of magic! We're still hard at work, bringing more excitement. Join us on this adventure and experience the evolution of our game. Download the demo version and check out the changes.
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
                            Incorporated a skill tree inspired by RPGs to enhance the character progression in the adventure. Now, players can enhance damage, increase life, speed, and acquire new spells, all using the magical essence collected in the game.
                        </p>
                    </div>
                </div>
                <img src={img4} />
            </div>
            <div className={styles.border_enemy}></div>
            <div className={styles.content_enemy}>
                <img src={img5} />
                <div className={styles.content_enemy_text}>
                    <h2>Enhanced Enemies</h2>
                    <p>
                        The introduction of new enemies and the overhaul of existing ones are accompanied by enhancements in the artificial intelligence that controls these adversaries. These improvements aim to require greater creativity from the player during battles, emphasizing the importance of the constant evolution of the character. This becomes essential to overcome increasingly evolved enemies throughout the journey.
                    </p>
                </div>
            </div>
            <div className={styles.border_video}></div>
            <div className={styles.content_video}>
                <div className={styles.content_video_text}>
                    <h2>Magus Pocus: Arcane Essence</h2>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/78GoFuk-6p0?si=NmxpHgYC9SomQ6Jz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <img className={styles.border_img_BG} src={img6} />
            </div>
            <div className={styles.button_buy}>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
                    <button>Buy Magus Pocus In Steam</button>
                </a>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
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