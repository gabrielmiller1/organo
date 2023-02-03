import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      color: '#57C278',
      id: uuidv4(),
    },
    {
      name: 'Front-End',
      color: '#82cffa',
      id: uuidv4(),
    },
    {
      name: 'Data Science',
      color: '#a6d157',
      id: uuidv4(),
    },
    {
      name: 'Devops',
      color: '#e06b69',
      id: uuidv4(),
    },
    {
      name: 'UX e Design',
      color: '#db6ebf',
      id: uuidv4(),
    },
    {
      name: 'Mobile',
      color: '#ffbad8',
      id: uuidv4(),
    },
  ]);

  const initial = [
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name,
      id: uuidv4(),
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name,
      id: uuidv4(),
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name,
      id: uuidv4(),
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name,
      id: uuidv4(),
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name,
      id: uuidv4(),
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name,
      id: uuidv4(),
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name,
      id: uuidv4(),
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name,
      id: uuidv4(),
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name,
      id: uuidv4(),
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name,
      id: uuidv4(),
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name,
      id: uuidv4(),
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name,
      id: uuidv4(),
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name,
      id: uuidv4(),
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name,
      id: uuidv4(),
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name,
      id: uuidv4(),
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name,
      id: uuidv4(),
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name,
      id: uuidv4(),
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name,
      id: uuidv4(),
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name,
      id: uuidv4(),
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name,
      id: uuidv4(),
    },
    {
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name,
      id: uuidv4(),
    },
    {
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name,
      id: uuidv4(),
    },
    {
      name: 'GUILHERME LIMA',
      position: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name,
      id: uuidv4(),
    },
    {
      name: 'PAULO SILVEIRA',
      position: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name,
      id: uuidv4(),
    },
  ]

  const [employees, setEmployees] = useState(initial);

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const changeColorTeam = (color, id) => {
    setTeams(teams.map((team) => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onRegisterEmployee={employee => setEmployees([...employees, employee])} />
      {teams.map(team => <Team
        name={team.name}
        key={team.name}
        color={team.color}
        secondaryColor={team.secondaryColor}
        employees={employees.filter(employee => employee.team === team.name)}
        onDelete={deleteEmployee}
        changeColor={changeColorTeam}
        id={team.id}
      />)}
      <Footer />
    </div>
  );
}

export default App;
