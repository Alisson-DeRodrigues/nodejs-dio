import fastify from 'fastify';
import cors from '@fastify/cors';

// create server
const server = fastify({logger: true});

// set cors
server.register(cors, {
    origin: "*",
})

// data repository
const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 6, name: "Alpine", base: "Enstone, United Kingdom / Viry-Châtillon, France" },
    { id: 7, name: "Williams", base: "Grove, United Kingdom" },
    { id: 8, name: "Kick Sauber", base: "Hinwil, Switzerland" },
    { id: 9, name: "RB (Visa Cash App RB)", base: "Faenza, Italy / Bicester, United Kingdom" },
    { id: 10, name: "Haas", base: "Kannapolis, United States / Banbury, United Kingdom" }
];

const drivers = [
    { id: 1, name: 'Max Verstappen', team: 'Red Bull Racing' },
    { id: 2, name: 'Sergio Pérez', team: 'Red Bull Racing' },
    { id: 3, name: 'Lewis Hamilton', team: 'Ferrari' },
    { id: 4, name: 'Charles Leclerc', team: 'Ferrari' },
    { id: 5, name: 'George Russell', team: 'Mercedes' },
    { id: 6, name: 'Andrea Kimi Antonelli', team: 'Mercedes' },
    { id: 7, name: 'Lando Norris', team: 'McLaren' },
    { id: 8, name: 'Oscar Piastri', team: 'McLaren' },
    { id: 9, name: 'Fernando Alonso', team: 'Aston Martin' },
    { id: 10, name: 'Lance Stroll', team: 'Aston Martin' },
    { id: 11, name: 'Esteban Ocon', team: 'Alpine' },
    { id: 12, name: 'Pierre Gasly', team: 'Alpine' },
    { id: 13, name: 'Alexander Albon', team: 'Williams' },
    { id: 14, name: 'Logan Sargeant', team: 'Williams' },
    { id: 15, name: 'Zhou Guanyu', team: 'Kick Sauber' },
    { id: 16, name: 'Valtteri Bottas', team: 'Kick Sauber' },
    { id: 17, name: 'Yuki Tsunoda', team: 'RB (Visa Cash App RB)' },
    { id: 18, name: 'Daniel Ricciardo', team: 'RB (Visa Cash App RB)' },
    { id: 19, name: 'Kevin Magnussen', team: 'Haas' },
    { id: 20, name: 'Nico Hülkenberg', team: 'Haas' }
];

// interfaces
interface TeamParams {
    id: string;
}

interface DriverParams {
    id: string;
}

// routers
server.get('/teams', async(request, response) => response.type("application/json").code(200).send({teams}))

server.get<{Params: TeamParams}>('/teams/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const team = teams.find((t) => t.id === id);

    if(!team){
        return response.type('application/json').code(404).send({ message: "Team Not Found!" });
    } else {
        return response.type('application/json').code(200).send({ team });
    }
})

server.get('/drivers', async(request, response) => response.type('application/json').code(200).send({drivers}));

server.get<{Params: DriverParams}>('/drivers/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if(!driver){
        return response.type('application/json').code(404).send({ message: "Drive Not Found!" });
    } else {
        response.type('application/json').code(200).send({ driver });
    }
});

// set port
const serverPort = 3333
server.listen({port: serverPort}, () => {
    console.log(`Server started on port ${serverPort}!`);
});