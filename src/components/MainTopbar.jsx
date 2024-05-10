import { useEffect, useState } from 'react'
import styles from "./Topbar.module.css"
import logo from "../assets/img/logos/Storm_Wizard_fundo_transparente_raio_dourado.webp"
import br from "../assets/img/icons/br.jpg"
import eua from "../assets/img/icons/eua.jpg"
import { MainHeader_Eng } from './MainHeader_Eng.jsx'
import { MainHeader_Br } from './MainHeader_Br.jsx'
import { MainPage_Eng } from './MainPage_Eng.jsx'
import { MainPage_Br } from './MainPage_Br.jsx'
import { MainFooter_Eng } from './MainFooter_Eng.jsx'
import { MainFooter_Br } from './MainFooter_Br.jsx'

export const MainTopbar = () => {
    const [lang, setLang] = useState(localStorage.getItem('saveLang') || "eng");

    useEffect(() => {
        const userLang = navigator.language || navigator.userLanguage;
        const storageLang = localStorage.getItem('saveLang');
        if (!storageLang) {
            if (userLang.startsWith("pt")) {
                setLang("pt-br");
                localStorage.setItem('saveLang', "pt-br");
                window.history.pushState({}, document.title, "/pt-br/");
            } else {
                setLang("eng");
                localStorage.setItem('saveLang', "eng");
                window.history.pushState({}, document.title, "/eng/");
            }
        } else {
            window.history.pushState({}, document.title, "/" + storageLang + "/");
        }
    }, []);

    const modifyLangForEng = () => {
        setLang("eng");
        localStorage.setItem('saveLang', "eng");
        window.history.pushState({}, document.title, "/eng/");
    }

    const modifyLangForPtBr = () => {
        setLang("pt-br");
        localStorage.setItem('saveLang', "pt-br");
        window.history.pushState({}, document.title, "/pt-br/");
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
                        <a onClick={modifyLangForPtBr}><img src={br} /></a>
                        <a onClick={modifyLangForEng}><img src={eua} /></a>
                    </div>
                </div>
            </div>
            <div>
                {lang === "eng" ? <MainHeader_Eng /> : <MainHeader_Br />}
                {lang === "eng" ? <MainPage_Eng /> : <MainPage_Br />}
                {lang === "eng" ? <MainFooter_Eng /> : <MainFooter_Br />}
            </div>
        </aside>
    )
};
