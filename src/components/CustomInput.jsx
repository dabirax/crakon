
const CustomInput = ({
    htmlFor,
    labelText,
    inputType,
    inputValue,
    onChange,
    inputClassName,
    labelCLassName,
    placeholder,
}) => {
    return (
        <div>
            <label htmlFor={htmlFor} className={labelCLassName}> {labelText} </label>
            <input
                type={inputType}
                value={inputValue}
                onChange={onChange}
                className={inputClassName}
                placeholder={placeholder}
            />
            {/* {isError && <InputError> {errorMessage} </InputError>} */}
        </div>
    )
}

export default CustomInput



