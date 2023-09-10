import React, {useEffect, useRef, useState} from 'react';
import Slider from "react-slick";

import SliderItem from "./SliderItem/SliderItem";

import styles from './SlickSlider.module.scss'
import SliderDotes from "../SliderDotes/SliderDotes";

function SlickSlider({data}) {
    const [isDragging, setIsDragging] = useState(false)
    const sliderRef = useRef(null)

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchThreshold: 1000,
        arrows: false,
        beforeChange: () => setIsDragging(true),
        afterChange: () => setIsDragging(false),
        customPaging: i => (<SliderDotes
            onClick={() => sliderRef.current.slickGoTo(i)}/>),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0'
                }
            }
        ]
    };


    const blogs = data?.length && data.map((item, index) => (
        <div className={styles["slider__item"]} key={index} >
            <SliderItem
                key={item?.id}
                image={item?.image}
                id={item?.id}
            />
        </div>
    ))

    return (
        <section
            className={`${styles['slider']} container sliderDotesDef`}>
            {data?.length &&
                <div className={styles["slider__container"]}>
                    {data.length >= 3 ?
                        <Slider {...settings} ref={sliderRef}>
                            {blogs}
                        </Slider> :
                        <div className={styles["slider__wrapper"]}>
                            {blogs}
                        </div>
                    }
                </div>}
        </section>
    );
}

export default SlickSlider;