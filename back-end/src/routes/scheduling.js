import { Router } from 'express';

import SchedulingController from '../controllers/scheduling.js';
import SchedulingRepository from '../domain/repositories/scheduling.repository.js';
import VaccineAvailabilityRepository from '../domain/repositories/vaccineAvailability.repository.js';
import SchedulingService from '../domain/services/scheduling.service.js';
import VaccineAvailabilityService from '../domain/services/vaccineAvailability.service.js';
const router = Router();

const schedulingRepository = new SchedulingRepository();
const vaccineAvailabilityRepository = new VaccineAvailabilityRepository();
const schedulingService = new SchedulingService(schedulingRepository);
const vaccineAvailabilityService = new VaccineAvailabilityService(
  vaccineAvailabilityRepository
);
const schedulingController = new SchedulingController(
  schedulingService,
  vaccineAvailabilityService
);

router.get('/', (req, res) => schedulingController.getAll(req, res));
router.get('/:id', (req, res) => schedulingController.getById(req, res));
router.post('/', (req, res) => schedulingController.create(req, res));
router.put('/:id', (req, res) => schedulingController.update(req, res));
router.delete('/:id', (req, res) => schedulingController.delete(req, res));

export default router;
