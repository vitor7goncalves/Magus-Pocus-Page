import { useState, useEffect } from 'react'
import styles from "./Topbar.module.css"
import logo from "../assets/img/logos/StormWizard2.png"
import br from "../assets/img/icons/br.jpg"
import eua from "../assets/img/icons/eua.jpg"
import { Header_Eng } from './Header_Eng.jsx'
import { Header_Br } from './Header_Br.jsx'
import { Body_Eng } from './Body_Eng.jsx'
import { Body_Br } from './Body_Br.jsx'
import { Footer_Eng } from './Footer_Eng.jsx'
import { Footer_Br } from './Footer_Br.jsx'

export const Topbar = () => {
    
    const [lang, setLang] = useState(localStorage.getItem('saveLang') || "eng");
    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        const storageLang = localStorage.getItem('saveLang');
        if (!storageLang) {
            if (userLang.startsWith("pt")) {
                setLang("pt-br");
                localStorage.setItem('saveLang', "pt-br");
                window.history.pushState({}, document.title, "/maguspocus/pt-br/");
            } else {
                setLang("eng");
                localStorage.setItem('saveLang', "eng");
                window.history.pushState({}, document.title, "/maguspocus/eng/");
            }
        } else {
            window.history.pushState({}, document.title, "/maguspocus/" + lang + "/");
        }
    }, []);

    const modifyLangForEng = () => {
        setLang("eng"); 
        window.history.pushState({}, document.title, "/maguspocus/eng/");
        localStorage.setItem('saveLang', "eng");
    }

    const modifyLangForPtBr = () => {
        setLang("pt-br"); 
        window.history.pushState({}, document.title, "/maguspocus/pt-br/");
        localStorage.setItem('saveLang', "pt-br");
    }

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
                        <a onClick={() => modifyLangForPtBr()}><img src={br} /></a>
                        <a onClick={() => modifyLangForEng()}><img src={eua} /></a>
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