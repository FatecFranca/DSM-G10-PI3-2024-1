import { Router } from 'express';
import VaccineAvailabilityController from '../controllers/vaccineAvailability.js';
import VaccineAvailabilityService from '../domain/services/vaccineAvailability.service.js';
import VaccineAvailabilityRepository from '../domain/repositories/vaccineAvailability.repository.js';
const router = Router();

const vaccineAvailabilityRepository = new VaccineAvailabilityRepository();
const vaccineAvailabilityService = new VaccineAvailabilityService(
  vaccineAvailabilityRepository
);
const vaccineAvailabilityController = new VaccineAvailabilityController(
  vaccineAvailabilityService
);

router.get('/', (req, res) => vaccineAvailabilityController.getAll(req, res));
router.get('/:id', (req, res) =>
  vaccineAvailabilityController.getById(req, res)
);
router.post('/', (req, res) => vaccineAvailabilityController.create(req, res));
router.put('/:id', (req, res) =>
  vaccineAvailabilityController.update(req, res)
);
router.delete('/:id', (req, res) =>
  vaccineAvailabilityController.delete(req, res)
);

export default router;
