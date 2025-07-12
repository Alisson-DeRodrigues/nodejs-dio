import { Router } from 'express';
import * as PlayerController from './controllers/players-controller';
import * as ClubController from './controllers/clubs-controller';

const router = Router(); // gerenciador de rotas

router.get('/players', PlayerController.getPlayer);
router.get('/players/:id', PlayerController.getPlayerById);
router.post('/players', PlayerController.postPlayer);
router.delete('/players/:id', PlayerController.deletePlayer);
router.patch('/players/:id', PlayerController.updatePlayer)

router.get('/clubs', ClubController.getClubs);
router.get('/clubs/:id', ClubController.getClubById)
router.post('/clubs', ClubController.postClub);
router.delete('/clubs/:id', ClubController.deleteClub)

export default router;