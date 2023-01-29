import './TextField.css'

const TextField = (props) => {
    const modifyPlaceholder = `${props.placeholder}...`;

    const onTyping = (event) => {
        props.onChanged(event.target.value)
    };

    return (
        <div className="text-field">
            <label htmlFor="">{props.label}</label>
            <input value={props.value} onChange={onTyping} required={props.required} type="text" placeholder={modifyPlaceholder} />
        </div>
    )
}

export default TextField;