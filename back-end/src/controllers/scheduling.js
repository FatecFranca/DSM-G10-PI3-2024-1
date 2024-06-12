class SchedulingController {
  constructor(schedulingService, vaccineAvailabilityService) {
    this.schedulingService = schedulingService;
    this.vaccineAvailabilityService = vaccineAvailabilityService;
  }

  async getAll(req, res) {
    try {
      const schedulings = await this.schedulingService.getAll();
      res.status(200).json(schedulings);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get schedulings' });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const scheduling = await this.schedulingService.getById(id);
      if (scheduling) {
        res.status(200).json(scheduling);
      } else {
        res.status(404).json({ error: 'Scheduling not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get scheduling' });
    }
  }

  async create(req, res) {
    const { user, date, vaccine, location } = req.body;
    try {
      const vaccineAvailability = await this.vaccineAvailabilityService.findAll(
        {
          availableDates: new Date(date),
          location: location,
          vaccine,
        }
      );
      console.log(vaccineAvailability);
      if (!vaccineAvailability) {
        throw new Error('Não foi encontrada vacina disponível');
      }
      const newScheduling = await this.schedulingService.create({
        user,
        date,
        vaccine,
        location,
      });
      await this.vaccineAvailabilityService.update(vaccineAvailability._id, {
        availableDoses: vaccineAvailability[0].availableDoses - 1,
      });
      res.status(201).json(newScheduling);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create scheduling' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { user, date, vaccine, location } = req.body;
    try {
      const updatedScheduling = await this.schedulingService.update(id, {
        user,
        date,
        vaccine,
        location,
      });
      if (updatedScheduling) {
        res.status(200).json(updatedScheduling);
      } else {
        res.status(404).json({ error: 'Scheduling not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update scheduling' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedScheduling = await this.schedulingService.delete(id);
      if (deletedScheduling) {
        res.status(200).json({ message: 'Scheduling deleted successfully' });
      } else {
        res.status(404).json({ error: 'Scheduling not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete scheduling' });
    }
  }
}

export default SchedulingController;
