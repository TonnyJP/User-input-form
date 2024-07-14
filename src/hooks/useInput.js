import { useState } from "react";

export const useInput = ({ defaultV }) => {
    const [enteredValue, setEnteredValue] = useState(defaultV);
    const [didEdit, setDidEdit] = useState(false);

    //const valueIsVlid = validationFn(enteredValue)

    //const isValid = didEdit && !enteredValu.includes('@');
    const handleOnBlur = () => {
        setDidEdit(true);
    };

    const handleInputChanges = (e) => {
        setEnteredValue(e.target.value);
        setDidEdit(false);
    };

    return {
        value: enteredValue,
        handleInputChanges,
        handleOnBlur,
        // hasError: didEdit && !valueIsVlid,
        didEdit
    }
}