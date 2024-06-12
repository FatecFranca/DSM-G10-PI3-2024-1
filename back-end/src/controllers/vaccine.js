
class VaccineController {
  constructor(vaccineService) {
    this.vaccineService = vaccineService;
  }

  async getAll(req, res) {
    try {
      const vaccines = await this.vaccineService.getAll();
      res.status(200).json(vaccines);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get vaccines' });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const vaccine = await this.vaccineService.getById(id);
      if (vaccine) {
        res.status(200).json(vaccine);
      } else {
        res.status(404).json({ error: 'Vaccine not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get vaccine' });
    }
  }

  async create(req, res) {
    const { name, manufacturer } = req.body;
    try {
      const newVaccine = await this.vaccineService.create({
        name,
        manufacturer,
      });
      res.status(201).json(newVaccine);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create vaccine' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, manufacturer } = req.body;
    try {
      const updatedVaccine = await this.vaccineService.update(
        id,
        name,
        manufacturer
      );
      if (updatedVaccine) {
        res.status(200).json(updatedVaccine);
      } else {
        res.status(404).json({ error: 'Vaccine not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update vaccine' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedVaccine = await this.vaccineService.delete(id);
      if (deletedVaccine) {
        res.status(200).json({ message: 'Vaccine deleted successfully' });
      } else {
        res.status(404).json({ error: 'Vaccine not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete vaccine' });
    }
  }
}

export default VaccineController
