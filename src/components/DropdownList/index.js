import './DropdownList.css';

const DropdonwList = (props) => {
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdonwList;