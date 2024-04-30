import styles from "./Body.module.css";
import imgNews from "../assets/img/image/about-image.webp";
import img2 from "../assets/img/image/reinos_fantasticos.webp";
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
            <div className={styles.content_section_one_main_page}>
                <div className={styles.border_section_one_main_page}></div>
                <div className={styles.content2_section_one_main_page}>
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
                        <h2>Reinos Fantasticos</h2>
                        <p>
                            "Na forja da paixão pelos jogos, moldamos mundos 2D e 3D repletos de aventura,
                            ação e magia. Aqui, na Storm Wizard Studios, somos mais do que desenvolvedores -
                            somos contadores de histórias, arquitetos de mundos fantásticos onde cada pixel é um
                            fragmento de emoção. Com maestria, fundimos o encanto do RPG com a adrenalina dos jogos
                            de plataforma, criando experiências que desafiam a imaginação e elevam os corações dos
                            jogadores. Cada jogo que criamos é uma jornada épica, onde o jogador é o herói e a diversão
                            é a recompensa. Conheça as realidades forjadas por nossas magias."
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
                        <img src={img3} className={styles.section_three_img} title="Magus Pocus Game" alt="Magus Pocus Game" />
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
