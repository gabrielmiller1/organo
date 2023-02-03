import TextField from "../TextField";
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
                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu Cargo"
                    value={position}
                    onChanged={value => setPosition(value)}
                />
                <TextField
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
                <TextField
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={teamName}
                    onChanged={value => setTeamName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite a cor do time"
                    value={teamColor}
                    onChanged={value => setTeamColor(value)}
                />
                <Button>
                    Criar time
                </Button>
            </form>
        </section>
    )
}

export default Form;