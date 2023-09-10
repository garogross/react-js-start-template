import React, {useState} from 'react';
import styles from "./InputDef.module.scss";
import ErrorText from "../ErrorText/ErrorText";

function InputDef({parentClass, className, errorProp, isTextArea, children,placeholder, onChange, value, ...properties}) {
    const [textAreaHeight, setTextAreaHeight] = useState(62)
    const onTextAreaChange = (e) => {
        onChange(e)
        if (e.target.scrollHeight > 62 && e.target.scrollHeight < 92) {
            setTextAreaHeight(e.target.scrollHeight)
        }

        if (e.target.value === '') setTextAreaHeight('')
    }

    let content;

    if (isTextArea) {
        content = (
            <div className={'inputDef'}>
                <textarea
                    value={value}
                    style={{height: textAreaHeight}}
                    onChange={onTextAreaChange}
                    {...properties}
                    className={`textAreaDef inputDef scrollbarDef ${className ? className : ''}`}
                ></textarea>
            </div>
        )
    } else if (children) {
        content = children
    } else {
        content = (
            <input
                {...properties}
                onChange={onChange}
                value={value}
                className={`inputDef ${className ? className : ''}`}
            />)

    }

    return (
        <div
            className={`${styles['InputDefBlock']} ${isTextArea ? styles['InputDefBlock_textArea'] : ''} ${parentClass ? parentClass : ''}`}>
            {!children && <label
                className={`${styles['InputDefBlock__label']} ${value.length ? styles['InputDefBlock__label_active'] : ''}`}>{placeholder}</label>}
            {content}
            <ErrorText errorProp={errorProp}/>
        </div>
    );
}

export default InputDef;