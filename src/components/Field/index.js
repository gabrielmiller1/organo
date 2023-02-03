import './Field.css'

const Field = (props) => {
    const modifyPlaceholder = `${props.placeholder}...`;

    const onTyping = (event) => {
        props.onChanged(event.target.value)
    };

    return (
        <div className="text-field">
            <label htmlFor="">{props.label}</label>
            <input type={props.type || 'text'} value={props.value} onChange={onTyping} required={props.required} placeholder={modifyPlaceholder} />
        </div>
    )
}

export default Field;