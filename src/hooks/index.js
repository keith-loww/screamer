import { useState } from "react"

export const useUpperField = (type) => {
    const [value, setValue] = useState("")

    const onChange = (event) => {
        setValue(event.target.value.toUpperCase())
    }

    const clear = () => {
        setValue("")
    }

    return {
        type,
        value,
        onChange,
        clear
    }
}