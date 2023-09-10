import React, {memo, useCallback, useState} from 'react';
import { NavLink} from "react-router-dom";
import {setActiveNavLinkClass} from "../../../../utils/functions/setActiveNavLinkClass";
import {scrollTop} from "../../../../utils/functions/scrollTop";
import NewPortalProvider from "../../../../providers/NewPortalProvider";
import Backdrop from "../../../layout/Backdrop/Backdrop";
import TransitionProvider from "../../../../providers/TransitionProvider";
import Svg from "../../../layout/Svg/Svg";

import styles from "./BurgerMenu.module.scss"
import {arrowDownIcon} from "../../../../assets/svg";
import {
} from "../../../../router/path";

const BurgerMenu = memo(({burgerOpened, closeBurger}) => {
    const [dropdownOpened, setDropdownOpened] = useState(false)
    const toggleDropDown = () => setDropdownOpened(prevState => !prevState)

    const burgerLinkActiveClass = setActiveNavLinkClass(styles["burgerMenu__link"], styles["burgerMenu__link_active"])
    const burgerDropdownLinkActiveClass = setActiveNavLinkClass(styles["burgerMenu__dropDownLink"], styles["burgerMenu__dropDownLink_active"])


    const onClose = useCallback(() => {
        if(dropdownOpened) setDropdownOpened(false)
        closeBurger()
        scrollTop()
    },[dropdownOpened,closeBurger])

    return (
        <>
            <Backdrop enableScroll={true} inProp={burgerOpened} onClose={onClose}/>
            <NewPortalProvider>
                <TransitionProvider
                    inProp={burgerOpened}
                    // eslint-disable-next-line react/style-prop-object
                    style={'translateX'}
                    className={styles['burgerMenu']}
                >
                    <button className={styles['burgerMenu__closeBtn']} onClick={onClose}>
                        <Svg id={arrowDownIcon} className={styles['burgerMenu__closeBtnIcon']}/>
                    </button>
                    <NavLink onClick={onClose} to={'/'} className={burgerLinkActiveClass}>About</NavLink>
                    <div className={styles["burgerMenu__dropdown"]}>
                        <div className={styles["burgerMenu__link"]} onClick={toggleDropDown}>
                            <span className={styles["burgerMenu__linkText"]}>Services</span>
                            <Svg className={`${styles["burgerMenu__linkIcon"]} ${dropdownOpened ? styles["burgerMenu__linkIcon_active"] : ''}`} id={arrowDownIcon}/>
                        </div>
                        <TransitionProvider
                            className={styles["burgerMenu__dropDownContent"]}
                            inProp={dropdownOpened}
                            // eslint-disable-next-line react/style-prop-object
                            style={'height'}
                            height={'217px'}
                        >
                            <NavLink onClick={onClose} to={'/'} className={burgerDropdownLinkActiveClass}>UX/UI
                                Design</NavLink>
                            <NavLink onClick={onClose} to={'/'} className={burgerDropdownLinkActiveClass}>Web
                                Development</NavLink>
                            <NavLink onClick={onClose} to={'/'} className={burgerDropdownLinkActiveClass}>App
                                Development</NavLink>
                            <NavLink onClick={onClose} to={'/'} className={burgerDropdownLinkActiveClass}>SEO & UX
                                writing</NavLink>
                        </TransitionProvider>
                    </div>
                    <NavLink onClick={onClose} to={'/'} className={burgerLinkActiveClass}>Blog</NavLink>
                    <NavLink onClick={onClose} to={'/'} className={burgerLinkActiveClass}>Careers</NavLink>
                    <NavLink onClick={onClose} to={'/'} className={burgerLinkActiveClass}>Contact</NavLink>
                </TransitionProvider>
            </NewPortalProvider>
        </>
    );
})

export default BurgerMenu;