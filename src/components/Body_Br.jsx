import styles from "./Body.module.css";
import img from "../assets/img/image/1.png"
import img3 from "../assets/img/image/2.png"
import img4 from "../assets/img/image/3.png"
import img5 from "../assets/img/image/4.png"
import img6 from "../assets/img/image/5.png"
import fb from "../assets/img/icons/icon face.png"
import ins from "../assets/img/icons/icone insta.png"
import you from "../assets/img/icons/icon youtube.png"

export const Body_Br = () => {
    return (
        <body className={styles.body}>
            <div className={styles.border_news}></div>
            <div className={styles.content_news}>
                <h2>Novidades</h2>
                <div className={styles.content2_news}>
                    <div>
                        <p>
                            "Estou empolgado em compartilhar o desenvolvimento de "Magus Pocus: Arcane Essence", um RPG 2D em construção que promete misturar mistério, magia e desafios estratégicos. O jogo ainda está em fase de desenvolvimento, mas desde já minha visão é criar um mundo imersivo e repleto de narrativa envolvente.
                            Embora o lançamento ainda esteja distante, quero compartilhar uma demonstração inicial com a comunidade. Isso permitirá que vocês experimentem um pouco do que está por vir e ofereçam feedback valioso, que será essencial para moldar a essência de Magus Pocus: Arcane Essence.
                            Agradeço antecipadamente a todos que participarem desse processo. Juntos, podemos construir uma jornada mágica inesquecível!"
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
                        <h2>Sobre o jogo</h2>
                        <p>
                            Explore um mundo 2D de RPG de ação e plataforma.
                            Torne-se um mago poderoso em uma Terra alternativa, derrote monstros, explore ambientes cheios de segredos e aperfeiçoe suas habilidades mágicas.
                            Estou trabalhando para criar uma jornada cada vez mais envolvente e cheia de novas emoções.
                            As essências mágicas serão a chave para desbloquear todo o potencial do seu personagem, obtidas ao enfrentar inimigos e descobrir locais ocultos.
                            Prepare-se para uma nova era de magia! Embora o jogo ainda esteja em desenvolvimento, convido você a se juntar a nós nesta aventura e experimentar a evolução.
                            Baixe o alpha e veja as mudanças por si mesmo.
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
                        <h2>Árvore de Habilidades</h2>
                        <p>
                            Estou adicionando uma árvore de habilidades inspirada em RPGs para aprimorar a progressão do personagem na aventura. Com essa funcionalidade, vocês poderão aumentar o dano, melhorar a vida, acelerar a velocidade e desbloquear novas magias, tudo usando a essência mágica que coletam ao longo do jogo. Essa adição permitirá uma personalização e uma estratégia mais profundas enquanto exploram e desenvolvem seu personagem em Magus Pocus: Arcane Essence.
                        </p>
                    </div>
                </div>
                <img src={img4} />
            </div>
            <div className={styles.border_enemy}></div>
            <div className={styles.content_enemy}>
                <img src={img5} />
                <div className={styles.content_enemy_text}>
                    <h2>Inimigos</h2>
                    <p>
                        Os inimigos no início da aventura serão relativamente simples, mas conforme você avança, encontrará adversários cada vez mais inteligentes e desafiadores, cada um com habilidades únicas. Esses encontros exigirão não apenas estratégias mais elaboradas, mas também uma progressão constante do seu personagem, criando uma sensação natural de evolução, algo fundamental em jogos de RPG. A cada batalha, você sentirá o impacto das suas escolhas e do desenvolvimento das suas habilidades.
                    </p>
                </div>
            </div>
            <div className={styles.border_video}></div>
            <div className={styles.content_video}>
                <div className={styles.content_video_text}>
                    <h2>Magus Pocus: Essencia Arcana</h2>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/LD9W2xLTCXU?si=LD9iq0LlnR_cKvgF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <img className={styles.border_img_BG} src={img6} />
            </div>
            <div className={styles.button_buy}>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
                    <button>Compre Magus Pocus Na Steam</button>
                </a>
                <a href="https://stormwizardstudios.itch.io/maguspocus-arcaneessence">
                    <button>Teste de graça Magus Pocus: Essencia Arcana</button>
                </a>
            </div>
            <div className={styles.rede}>
                <h3>Siga Magus Pocus</h3>
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