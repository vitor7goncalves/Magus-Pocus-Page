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
                            "Decidi realizar uma transformação significativa no Magus Pocus, elevando-o de um jogo de plataforma 2D mais simplificado para seu formato original de RPG 2D. Após mais de um ano desde seu lançamento inicial, estou empolgado em anunciar o lançamento de uma DLC abrangente (Magus Pocus: Essência Arcana). Como desenvolvedor solo, inicialmente hesitei em abraçar a complexidade de um RPG, optando por uma abordagem mais simples. No entanto, após refletir sobre o potencial do jogo, decidi retornar à ideia original.
                            Nesta fase inicial do projeto, estou disponibilizando um protótipo (demo) para a comunidade. Quero que os jogadores o experimentem e compartilhem seus feedbacks para moldar a essência de Magus Pocus: Essência Arcana. O jogo base continuará sendo um jogo de plataforma 2D mais simples, e o que estamos desenvolvendo será uma DLC com sua própria precificação. A intenção de lançá-la como DLC é para que, caso um jogador decida jogar um jogo casual de plataforma 2D, basta desativar a DLC e estar pronto para jogar.
                            Agradeço antecipadamente a todos que decidirem baixar a demo e contribuir com suas opiniões. Esse processo é vital para criar o jogo mais envolvente e divertido possível. Obrigado pela participação ativa na evolução do Magus Pocus: Essência Arcana."
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
                        <h2>Nova DLC</h2>
                        <p>
                            Explore um mundo RPG 2D de ação estilo plataforma.
                            Torne-se um mago poderoso de uma Terra alternativa,
                            derrote monstros, explore fases cheias de segredos e aprimore suas habilidades mágicas.
                            A nova DLC transformará a experiência, proporcionando uma jornada mais envolvente.
                            As essências mágicas são vitais para desbloquear o potencial total do seu personagem,
                            obtidas ao derrotar inimigos e explorar recantos ocultos.
                            Esteja preparado para uma nova era de magia! Ainda estamos trabalhando, trazendo mais emoções.
                            Junte-se a nós nesta aventura e vivencie a evolução do nosso jogo.
                            Baixe a versão demo e confira as mudanças.
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
                            Incluí uma árvore de habilidades inspirada em RPGs para impulsionar a progressão do
                            personagem na aventura. Agora, os jogadores podem fortalecer dano, aumentar vida,
                            velocidade e adquirir novas magias, tudo utilizando a essência mágica coletada no jogo.
                        </p>
                    </div>
                </div>
                <img src={img4} />
            </div>
            <div className={styles.border_enemy}></div>
            <div className={styles.content_enemy}>
                <img src={img5} />
                <div className={styles.content_enemy_text}>
                    <h2>Inimigos Melhorados</h2>
                    <p>
                        A introdução de novos inimigos e a reformulação dos antigos são acompanhadas por
                        aprimoramentos na inteligência artificial que controla esses adversários.
                        Essas melhorias visam demandar maior criatividade por parte do jogador durante os combates,
                        além de destacar a importância da constante evolução do personagem. Isso se torna essencial
                        para superar inimigos cada vez mais evoluídos ao longo da jornada.
                    </p>
                </div>
            </div>
            <div className={styles.border_video}></div>
            <div className={styles.content_video}>
                <div className={styles.content_video_text}>
                    <h2>Magus Pocus: Essencia Arcana</h2>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/78GoFuk-6p0?si=NmxpHgYC9SomQ6Jz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <img className={styles.border_img_BG} src={img6} />
            </div>
            <div className={styles.button_buy}>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
                    <button>Compre Magus Pocus Na Steam</button>
                </a>
                <a href="https://store.steampowered.com/app/2101760/Magus_Pocus/">
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