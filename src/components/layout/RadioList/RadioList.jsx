import React from 'react';
import styles from "./RadioList.module.scss";

function RadioList({arr, onChange, name, className, checked}) {
    return (
        <div
            className={`${styles['radioList']} ${className ? className : ''}`}>
            {arr.map((item, index) => {
                const value = typeof item === 'object' ? item.value : item
                return (
                    <div
                        key={index}
                        className={styles['radioList__radio']}>
                        <input type="radio"
                               checked={checked === value}
                               onChange={e => onChange(e)}
                               name={name}
                               value={value}
                               id={value + name + 'Radio'}
                               className={styles['radioList__Input']}/>
                        <label htmlFor={value + name + 'Radio'}
                               className={`${styles['radioList__label']}`}>
                            {typeof item === 'object' ? item.label : item[0].toUpperCase() + item.slice(1)}
                        </label>
                    </div>
                )
            })}
        </div>
    );
}

export default RadioList;