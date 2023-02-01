import Employee from '../Employee';
import './Team.css';

const Team = (props) => {
    return (
        props.employees.length > 0 ? <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <input type="color" className='input-color'/>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='employees'>
                {props.employees.map(employee => {
                    return <Employee
                        key={employee.name}
                        name={employee.name}
                        position={employee.position}
                        image={employee.image}
                        headerColor={props.primaryColor}
                        onDelete={props.onDelete}
                    />
                })}
            </div>
        </section>
        : ''
    )
}

export default Team;