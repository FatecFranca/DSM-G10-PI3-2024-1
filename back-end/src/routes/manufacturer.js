import { Router } from 'express';
import ManufacturerService from '../domain/services/manufacturer.service.js';
import ManufacturerRepository from '../domain/repositories/manufacturer.repository.js';
import ManufacturerController from '../controllers/manufacturer.js';
const router = Router();

const manufacturerRepository = new ManufacturerRepository();
const manufacturerService = new ManufacturerService(manufacturerRepository);
const manufacturerController = new ManufacturerController(manufacturerService);

router.get('/', (req, res) => manufacturerController.getAll(req, res));
router.get('/:id', (req, res) => manufacturerController.getById(req, res));
router.post('/', (req, res) => manufacturerController.create(req, res));
router.put('/:id', (req, res) => manufacturerController.update(req, res));
router.delete('/:id', (req, res) => manufacturerController.delete(req, res));

export default router;
