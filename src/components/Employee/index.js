import './Employee.css';

import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Employee = (props) => {
    function favoriteEmlpoyee() {
        props.onFavorite(props.id)
    }

    const propsFavorite = {
        size: 25,
        onClick: favoriteEmlpoyee
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                size={25}
                className="delete"
                onClick={() => props.onDelete(props.id)}
            />
            <div className='cabecalho' style={{ backgroundColor: props.headerColor }}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='rodape'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
                <div className="favorite">
                    {props.favorite
                        ? <AiFillHeart {...propsFavorite} color='FF0000'/>
                        : <AiOutlineHeart {...propsFavorite} />}
                </div>
            </div>
        </div>
    )
}

export default Employee;