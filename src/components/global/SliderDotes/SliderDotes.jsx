import React from 'react';
import styles from "./SliderDotes.module.scss";

function SliderDotes({className,onClick}) {
    return (
        <div
            onClick={onClick}
            className={`${styles["sliderDot"]} ${className ? className : ''}`}></div>
    );
}

export default SliderDotes;