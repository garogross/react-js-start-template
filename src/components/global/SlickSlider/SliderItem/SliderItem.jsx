import React, {memo, useState} from 'react';

import styles from "./SliderItem.module.scss"


const SliderItem = memo(({image, id}) => {
    const [imgLoaded, setImgLoaded] = useState(false)

    const onLoadImg = () => {
        setImgLoaded(true)
    }

    return (
        <div className={styles['sliderItem']}>
            <div
                className={styles["sliderItem__imgLink"]}
                >
                <img
                    src={image}
                    alt="blog"
                    className={styles["sliderItem__img"]}
                    onLoad={onLoadImg}
                    style={{display: imgLoaded ? 'block' : 'none'}}
                />
            </div>
        </div>
    );
})

export default SliderItem;