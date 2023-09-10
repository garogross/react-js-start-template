import {useDropdownSelect} from "../../../hooks/useDropdownSelect";

import Svg from "../Svg/Svg";
import TransitionProvider from "../../../providers/TransitionProvider";
import Checkbox from "../Checkbox/Checkbox";

import styles from "./Select.module.scss";
import {arrowDownIcon} from "../../../assets/svg";

function Select({
                    name,
                    valuesArr,
                    onChange,
                    className,
                    attributes,
                    disableState,
                    selectedValueProp,
                    childArr,
                    selectedChild,
                    isMultiSelect,
                    isWithInput
                }) {
    const {
        selectedRef,
        dropDownOpened,
        disabled,
        onToggleDropdowns,
        onChangeSelectValues,
        btnText,
        selectedValue,
        sortedContentArr,
        searchInputRef,
        onSearch,
        searchValue,
    } = useDropdownSelect(
        {
            onChange,
            selectedValueProp,
            valuesArr,
            selectedChild,
            disableState,
            name,
            isMultiSelect,
            childArr,
            isWithInput,
        })


    return (
        <div
            title={name || ''}
            ref={selectedRef}
            className={`${styles["select"]} ${className ? className : ''} ${disabled ? styles["select_disabled"] : ''}`}>
            <div
                className={`${styles["select__dropDownBtn"]}`}
                onClick={onToggleDropdowns}>
                <div className={styles['select__dropDownBtnContent']}>
                    {
                        isWithInput ?
                            <input
                                type="text"
                                className={styles["select__selectDropdownBtnInput"]}
                                ref={searchInputRef}
                                value={searchValue}
                                onChange={onSearch}
                            /> :
                            <span className={styles["select__selectDropdownBtnText"]}>{btnText}</span>

                    }
                    {!disabled && <Svg
                        className={`${styles['select__arrowDownIcon']} ${dropDownOpened ? styles['select__arrowDownIcon_active'] : ''}`}
                        id={arrowDownIcon}/>}
                </div>
            </div>
            <TransitionProvider
                inProp={dropDownOpened}
                style='opacity'
                duration={100}
                className={styles["select__dropdownContent"]}
            >
                    <div
                        className={`${styles["select__dropdownContentItems"]} scrollbarDef`}>
                        {
                            sortedContentArr.map((item, index) => {
                                const itemContent = childArr ? item.item : item[0].toUpperCase() + item.slice(1)
                                const itemValue = item?.value ? item?.value : item
                                return (
                                    <div
                                        {...attributes}
                                        key={index}
                                        className={styles["select__dropdownItem"]}
                                        onClickCapture={() => onChangeSelectValues(itemValue)}
                                    >{
                                        isMultiSelect ? <>
                                                <Checkbox
                                                    value={itemValue}
                                                    name={'select'}
                                                    checked={selectedValue.includes(itemValue)}
                                                    onChange={() => onChangeSelectValues(itemValue)}
                                                    unchangeable={true}
                                                    isSmall={true}
                                                    disableLabel={true}
                                                >
                                                    {itemContent}
                                                </Checkbox>
                                            </> :
                                            itemContent
                                    }</div>
                                )
                            })}
                    </div>
            </TransitionProvider>
        </div>
    )
}

export default Select;