import React, {useState} from 'react';
import SlickSlider from "../../global/SlickSlider/SlickSlider";
import {
    slide5,
    slide3,
    slide4,
    slide7,
    slide2,
    slide1
} from "../../../assets/images"

import styles from "./HomeMain.module.scss"
import InputDef from "../../layout/InputDef/InputDef";
import Accordion from "../../layout/Accordion/Accordion";
import Checkbox from "../../layout/Checkbox/Checkbox";
import RadioList from "../../layout/RadioList/RadioList";
import Select from "../../layout/Select/Select";

function HomeMain() {
    const [inputValue, setInputValue] = useState('')
    const [checkboxChecked,setCheckboxChecked] = useState(false)
    const [radioValue,setRadioValue] = useState('value1')
    const [selectedMessage,setSelectedMessage] = useState('select1')

    const typesArr = [
        {
            value: 'value1',
            label: 'label1'
        },
        {
            value: 'value2',
            label: 'label2'
        },
        {
            value: 'value3',
            label: 'label3'
        },
    ]

    const data = [
        {image: slide5},
        {image: slide4},
        {image: slide7},
        {image: slide3},
        {image: slide2},
        {image: slide1},
    ]
    return (
        <div className={'container'}>

            <div className={styles["homeMain__slider"]}>
                <h2 className={`${styles["homeMain__sliderTitle"]} titleDef`}>Slider</h2>
            </div>
            <SlickSlider data={data}/>
            <br/><br/>
            <InputDef
                name='first_name'
                value={inputValue}
                errorProp={[]}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
                placeholder={'Input'}
            />
            <br/><br/>
            <Accordion
                index={1}
                title={'Accordion'}
                contentText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, rerum!'}
            />
            <br/><br/>
            <Checkbox
                onChange={e => setCheckboxChecked(e.target.checked)}
                name='customer_code'
                value='new'
                checked={checkboxChecked}
            >Chekbox</Checkbox>

            <br/><br/><br/>

            <RadioList
                checked={radioValue}
                arr={typesArr}
                name={'type'}
                onChange={(e) => setRadioValue(e.target.value)}
            />

            <br/><br/><br/>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                gap: '20px'
            }}>
                <Select
                    valuesArr={['select1','select2','select3','select4','select5','select6',]}
                    onChange={(value) => setSelectedMessage(value)}
                    name={'Select Test Language'}
                />
                <Select
                    valuesArr={['select1','select2','select3','select4','select5','select6',]}
                    onChange={(value) => setSelectedMessage(value)}
                    name={'Select Test Language'}
                    isMultiSelect={true}
                    isWithInput={true}
                />
            </div>
        </div>
    );
}

export default HomeMain;