import Employee from '../Employee';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    return (
        props.employees.length > 0 ? <section className='team' style={{ backgroundColor: hexToRgba(props.color, '0.6') }}>
            <input onChange={event => props.changeColor(event.target.value, props.id)} value={props.color} type="color" className='input-color'/>
            <h3 style={{ borderColor: props.color }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => {
                    return <Employee
                        key={employee.name}
                        name={employee.name}
                        position={employee.position}
                        image={employee.image}
                        headerColor={props.color}
                        onDelete={props.onDelete}
                        id={employee.id}
                    />
                })}
            </div>
        </section>
        : ''
    )
}

export default Team;