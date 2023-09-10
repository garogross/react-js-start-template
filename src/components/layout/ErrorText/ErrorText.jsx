import React from 'react';

import styles from './ErrorText.module.scss'

function ErrorText({errorProp,className}) {
    return (
        <>
                <p className={`${styles["errorText"]} ${errorProp ? styles["errorText_visible"] : ''} ${className ? className : ''}`}>{errorProp?.join()}</p>
        </>
    );
}

export default ErrorText;