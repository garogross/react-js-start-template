import React from 'react';

function ImageWebp({srcSet,pictureClass,forwardedRef,alt,...properties}) {
    return (
        <picture className={pictureClass ? pictureClass : ''}>
            <source srcSet={srcSet} type="image/webp"/>
            <img
                alt={alt}
                ref={forwardedRef}
                {...properties}
            />
        </picture>
    );
}

export default ImageWebp;