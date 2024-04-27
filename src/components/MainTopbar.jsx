import { useState } from 'react'
import styles from "./Topbar.module.css"
import logo from "../assets/img/logos/StormWizard2.png"
import br from "../assets/img/icons/br.jpg"
import eua from "../assets/img/icons/eua.jpg"
import { MainHeader_Eng } from './MainHeader_Eng.jsx'
import { Header_Br } from './Header_Br.jsx'
import { MainPage_Eng } from './MainPage_Eng.jsx'
import { Body_Br } from './Body_Br.jsx'
import { MainFooter_Eng } from './MainFooter_Eng.jsx'
import { Footer_Br } from './Footer_Br.jsx'

export const MainTopbar = () => {
    const [lang, setLang] = useState("eng");

    return (
        <aside className={styles.topbar}>
            <div className={styles.topbar_soon}>
                <div className={styles.logo_base}>
                    <a href="/">
                        <img className={styles.logo} src={logo} alt="" />
                    </a>
                </div>
                <div className={styles.lang_base}>
                    <div className={styles.lang}>
                        <a onClick={() => setLang("pt-br")}><img src={br} /></a>
                        <a onClick={() => setLang("eng")}><img src={eua} /></a>
                    </div>
                </div>
            </div>
            <div>
                {lang === "eng" ? <MainHeader_Eng /> : <Header_Br />}
                {lang === "eng" ? <MainPage_Eng /> : <Body_Br />}
                {lang === "eng" ? <MainFooter_Eng /> : <Footer_Br />}
            </div>
        </aside>
    )
};