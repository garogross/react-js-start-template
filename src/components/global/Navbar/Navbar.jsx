import React, { useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";

import styles from "./Navbar.module.scss"
import {
    aboutPagePath,
    homePagePath
} from "../../../router/path";
import {scrollTop} from "../../../utils/functions/scrollTop";
import {setActiveNavLinkClass} from "../../../utils/functions/setActiveNavLinkClass";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(true)
    const [burgerOpened,setBurgerOpened] = useState(false)

    useEffect(() => {
        checkIsScrolled()
        window.addEventListener('scroll', checkIsScrolled)

        return () => {
            window.removeEventListener('scroll', checkIsScrolled)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const checkIsScrolled = () => {
        if (window.pageYOffset > 20 && !isScrolled) {
            setIsScrolled(true)
        } else if (window.pageYOffset <= 20) {
            setIsScrolled(false)
        }
    }


    const linkActiveClass = setActiveNavLinkClass(`${styles['navbar__menuLink']} `,`${styles['navbar__menuLink_active']}`)

    const closeBurger = () => {
        setBurgerOpened(false)
    }

    const openBurger = () => {
        setBurgerOpened(true)
    }

    const onClickNavLink = () => {
        scrollTop()
    }

    return (
        <>
            <div
                className={`${styles['navbar']} ${isScrolled ? styles['navbar_active'] : ''}`}>
                <div className={`${styles['navbar__container']} container`}>
                    <nav className={styles["navbar__menu"]}>
                        <NavLink onClick={onClickNavLink} to={homePagePath} className={linkActiveClass}>Home</NavLink>
                        <NavLink onClick={onClickNavLink} to={aboutPagePath} className={linkActiveClass}>About</NavLink>

                        <button
                            onClick={openBurger}
                            className={styles['navbar__menuLink']}
                            style={{background: "transparent",border: 'none'}}
                        >Open Burger</button>
                    </nav>
                </div>
            </div>

            <BurgerMenu
                burgerOpened={burgerOpened}
                closeBurger={closeBurger}
            />
        </>

    );
}

export default Navbar;