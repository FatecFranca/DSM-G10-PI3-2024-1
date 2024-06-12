import { Router } from 'express';
import VaccineController from '../controllers/vaccine.js';
import VaccineRepository from '../domain/repositories/vaccine.repository.js';
import VaccineService from '../domain/services/vaccine.service.js';
const router = Router();

const vaccineRepository = new VaccineRepository();
const vaccineService = new VaccineService(vaccineRepository);
const vaccineController = new VaccineController(vaccineService);

router.get('/', (req, res) => vaccineController.getAll(req, res));
router.get('/:id', (req, res) => vaccineController.getById(req, res));
router.post('/', (req, res) => vaccineController.create(req, res));
router.put('/:id', (req, res) => vaccineController.update(req, res));
router.delete('/:id', (req, res) => vaccineController.delete(req, res));

export default router;
