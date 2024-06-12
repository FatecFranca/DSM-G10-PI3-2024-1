class VaccineAvailabilityController {
  constructor(vaccineAvailabilityService) {
    this.vaccineAvailabilityService = vaccineAvailabilityService;
  }

  async getAll(req, res) {
    try {
      const vaccineAvailabilities =
        await this.vaccineAvailabilityService.getAllVaccineAvailabilities();
      res.status(200).json(vaccineAvailabilities);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get vaccine availabilities' });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const vaccineAvailability =
        await this.vaccineAvailabilityService.getVaccineAvailabilityById(id);
      if (vaccineAvailability) {
        res.status(200).json(vaccineAvailability);
      } else {
        res.status(404).json({ error: 'Vaccine availability not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get vaccine availability' });
    }
  }

  async create(req, res) {
    const { vaccine, location, availableDoses, availableDates } = req.body;
    try {
      const newVaccineAvailability =
        await this.vaccineAvailabilityService.create({
          vaccine,
          location,
          availableDoses,
          availableDates,
        });
      res.status(201).json(newVaccineAvailability);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create vaccine availability' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { availableDates, vaccine, location, availableDoses } = req.body;
    try {
      const updatedVaccineAvailability =
        await this.vaccineAvailabilityService.update(
          id,
          vaccine,
          location,
          availableDoses,
          availableDates
        );
      if (updatedVaccineAvailability) {
        res.status(200).json(updatedVaccineAvailability);
      } else {
        res.status(404).json({ error: 'Vaccine availability not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update vaccine availability' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedVaccineAvailability =
        await this.vaccineAvailabilityService.delete(id);
      if (deletedVaccineAvailability) {
        res
          .status(200)
          .json({ message: 'Vaccine availability deleted successfully' });
      } else {
        res.status(404).json({ error: 'Vaccine availability not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete vaccine availability' });
    }
  }
}

export default VaccineAvailabilityController;
