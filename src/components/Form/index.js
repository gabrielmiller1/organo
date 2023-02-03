import Field from "../Field";
import DropdownList from "../DropdownList";
import Button from "../Button";
import './Form.css';

import { useState } from "react";

const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const onSave = (event) => {
        event.preventDefault();
        props.onRegisterEmployee({
            name: name,
            position: position,
            image: image,
            team: team
        })
        setName('');
        setPosition('');
        setImage('');
        setTeam('');
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Field
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <Field
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    value={position}
                    onChanged={value => setPosition(value)}
                />
                <Field
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                />
                <DropdownList
                    required={true}
                    label="Time"
                    itens={props.teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.registerTeam({
                    name: teamName, color: teamColor
                })
            }}>
                <h2>Preencha os dados para criar o um novo time.</h2>
                <Field
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={teamName}
                    onChanged={value => setTeamName(value)}
                />
                <Field
                    required={true}
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={teamColor}
                    onChanged={value => setTeamColor(value)}
                    type='color'
                />
                <Button>
                    Criar time
                </Button>
            </form>
        </section>
    )
}

export default Form;