import {useState} from "react"
import {useDispatch} from "react-redux";

export const useFormValue = (initialData, setError, error) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState(initialData);

    const onChange = e => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
        clearInputError(e.target.name)
    }
    const clearInputError = (inputName) => {
        if (setError && error && error?.[inputName]) {
            dispatch(setError({
                ...error,
                [inputName]: null
            }))
        }
    }

    const onPhoneChange = e => {
        if (e.target.value.match(/[^0-9+]/g)) {
            e.target.value = e.target.value.replace(/[^0-9+]+/g, "");
        } else {
            onChange(e)
        }
    }

    const onResetForm = () => {
        setFormData(initialData)
    }

    return {
        formData,
        onChange,
        onResetForm,
        setFormData,
        onPhoneChange,
        clearInputError,
    }
}
