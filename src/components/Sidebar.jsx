import { useState } from 'react'
import styles from "./Sidebar.module.css"
import logo from "../assets/img/logos/StormWizard2.png"
import br from "../assets/img/icons/br.jpg"
import eua from "../assets/img/icons/eua.jpg"
import { Header_Eng } from './Header_Eng.jsx'
import { Header_Br } from './Header_Br.jsx'
import { Body_Eng } from './Body_Eng.jsx'
import { Body_Br } from './Body_Br.jsx'
import { Footer_Eng } from './Footer_Eng.jsx'
import { Footer_Br } from './Footer_Br.jsx'

export const Sidebar = () => {
    const [lang, setLang] = useState("eng");

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar_soon}>
                <div className={styles.logo_base}>
                    <img className={styles.logo} src={logo} alt="" />
                </div>
                <div className={styles.lang_base}>
                    <div className={styles.lang}>
                        <a onClick={() => setLang("pt-br")}><img src={br} /></a>
                        <a onClick={() => setLang("eng")}><img src={eua} /></a>
                    </div>
                </div>
            </div>
            <div>
                {lang === "eng" ? <Header_Eng /> : <Header_Br />}
                {lang === "eng" ? <Body_Eng /> : <Body_Br />}
                {lang === "eng" ? <Footer_Eng /> : <Footer_Br />}
            </div>
        </aside>
    )
};