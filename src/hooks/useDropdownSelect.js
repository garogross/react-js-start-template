import {useEffect, useRef, useState} from "react";
import {onClickOutSide} from "../utils/functions/onClickOutSide";

export const useDropdownSelect = ({
                                      onChange,
                                      selectedValueProp,
                                      valuesArr,
                                      selectedChild,
                                      disableState,
                                      name,
                                      isMultiSelect,
                                      childArr,
                                      isWithInput
                                  }) => {
    const selectedRef = useRef(null)
    const searchInputRef = useRef(null)

    const [selectedValue, setSelectedValue] = useState(selectedValueProp ? selectedValueProp : isMultiSelect ? [] : '')
    const [dropDownOpened, setDropDownOpened] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [sortedArrCopy, setSortedArrCopy] = useState([])
    const [searchValue, setSearchValue] = useState(name || '')

    useEffect(() => {
        onClickOutSide([selectedRef], oncloseDropdowns, dropDownOpened)
        if (!dropDownOpened) {
            if (isMultiSelect) {
                setSearchValue(selectedValue.length ? selectedValue.join() : name)
            } else {
                setSearchValue(selectedValue ? selectedValue : name)
            }
        }
        if (!dropDownOpened) setSortedArrCopy(sortedArr.slice())
    }, [dropDownOpened])

    useEffect(() => {
        onChange(selectedValue)
    }, [selectedValue])


    useEffect(() => {
        if (typeof disableState === 'boolean') {
            setDisabled(disableState)
            setSelectedValue('')
        }
    }, [disableState])

    const onToggleDropdowns = () => {
        if (!disabled) {
            setDropDownOpened(prevState => !prevState)
            if (!dropDownOpened && searchInputRef?.current) {
                setSearchValue('')
                searchInputRef.current.focus()
            }
        }
    }

    const onSearch = e => {
        setSearchValue(e.target.value)
    }

    const oncloseDropdowns = () => {
        setDropDownOpened(false)
    }

    const onChangeSelectValues = (value) => {
        if (isMultiSelect) {
            setSelectedValue(prevState => prevState.includes(value) ? prevState.filter(item => item !== value) : [...prevState, value])
        } else {
            setSelectedValue(value)
            oncloseDropdowns()
        }

    }

    const valuesFiltered = selectedValueProp ? valuesArr.filter(item => item !== selectedValue) : valuesArr

    const dropdownContentArr = childArr ? childArr : valuesFiltered
    const sortedArr = [
        ...dropdownContentArr.filter(item => selectedValue.includes(item)),
        ...dropdownContentArr.filter(item => !selectedValue.includes(item))
    ]
    let sortedContentArr = isMultiSelect ? sortedArrCopy : dropdownContentArr
    let btnText;
    if (!isMultiSelect) {
        if (selectedChild) {
            btnText = selectedChild
        } else if (!selectedChild && selectedValue) {
            btnText = selectedValue[0]?.toUpperCase() + selectedValue?.slice(1)
        } else {
            btnText = name
        }
    } else {
        if (selectedValue?.length) {
            btnText = selectedValue.join()
        } else {
            btnText = name
        }
    }

    const finalContent = isWithInput ? sortedContentArr.filter(item => item.toLowerCase().includes(searchValue.toLowerCase())) : sortedContentArr

    return {
        selectedRef,
        dropDownOpened,
        disabled,
        onToggleDropdowns,
        oncloseDropdowns,
        onChangeSelectValues,
        btnText,
        selectedValue,
        sortedContentArr: finalContent,
        searchInputRef,
        onSearch,
        searchValue
    }

}