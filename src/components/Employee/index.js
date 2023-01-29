import './Employee.css';

const Employee = (props) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: props.headerColor}}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )
}

export default Employee;