import React from 'react';
import styles from "./Checkbox.module.scss";
import {useSelector} from "react-redux";

function Checkbox({onChange,value,className,name,children,checked,disableLabel}) {
    return (
        <div className={className ? className : ''}>
            <input
                onChange={e => onChange(e)}
                value={value}
                id={value + name + 'Checkbox'}
                type="checkbox"
                checked={checked}
                className={styles['checkbox__input']}/>
            <label htmlFor={!disableLabel ? value + name + 'Checkbox' : null}
                   className={`${styles['checkbox__label']}`}>{children}</label>
        </div>
    );
}

export default Checkbox;