import styles from "./Body.module.css";
import imgNews from "../assets/img/image/about-image.webp";
import img from "../assets/img/image/1.webp";
import img3 from "../assets/img/image/5.webp";
import fb from "../assets/img/icons/icon face.png";
import ins from "../assets/img/icons/icone insta.png";
import you from "../assets/img/icons/icon youtube.png";

export const MainPage_Br = () => {

    const urlGame = {
        maguspocus: "/maguspocus",
    };

    return (
        <body className={styles.body}>
            <div className={styles.content_news_main_page}>
                <div className={styles.border_news_main_page}></div>
                <div className={styles.content2_news_main_page}>
                    <h2>Forjando novas realidades</h2>
                    <div>
                        <p>
                            "A Storm Wizard Studios é uma empresa visionária de desenvolvimento de jogos que transcende as fronteiras tradicionais,
                            criando experiências de jogo envolventes que transportam os jogadores para dimensões épicas. Como magos magistrais
                            exercendo feitiços de criatividade, evocamos mundos vibrantes cheios de aventura, magia e possibilidades infinitas.
                            Nossa missão é libertar a imaginação, forjando novas realidades com cada jogo que criamos. Bem-vindo ao reino
                            do Storm Wizard Studios, onde a fantasia se torna realidade."
                        </p>
                    </div>
                    <div>
                        <img src={img} title="background" alt="Mountains with stormy weather in the background" />
                    </div>
                </div>
                <div>
                    <img className={styles.imgNews} src={imgNews} title="Storm Wizard Studios - News Image" alt="News Image" />
                </div>
            </div>
            <div className={styles.content_game}>
                <div className={styles.border_game_main_page}></div>
                <div className={styles.content2_game}>
                    <div className={styles.content_game_text_main_page}>
                        <h2>Magus Pocus</h2>
                        <p>
                            Explore um mundo de RPG de ação 2D no estilo plataforma. Torne-se um mago poderoso de uma
                            Terra alternativa e derrote monstros, explore estágios cheios de segredos e aprimore seu poder mágico
                            habilidades. O novo DLC transformará a experiência, oferecendo uma jornada envolvente com magia
                            essências vitais para desbloquear todo o potencial do seu personagem. Prepare-se para uma nova era de magia!
                            Junte-se a nós nesta aventura, baixe a versão demo e confira as mudanças.
                        </p>
                        <button onClick={() => window.location.href = urlGame.maguspocus}>
                            Saiba Mais
                        </button>
                    </div>
                    <div>
                        <img src={img3} className={styles.img3} title="Magus Pocus Game" alt="Magus Pocus Game" />
                    </div>
                </div>
            </div>
            <div className={styles.rede_main_page}>
                <h3>Siga Storm Wizard Studios</h3>
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
