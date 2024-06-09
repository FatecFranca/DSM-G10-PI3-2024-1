const VaccineService = require('../services/vaccineService');

class VaccineController {
  constructor(repository) {
    this.vaccineService = new VaccineService(repository);
  }

  async getAllVaccines(req, res) {
    try {
      const vaccines = await this.vaccineService.getAllVaccines();
      res.status(200).json(vaccines);
    } catch (error) {
      res.status(500).json({ error: 'Failed to get vaccines' });
    }
  }

  async getVaccineById(req, res) {
    const { id } = req.params;
    try {
      const vaccine = await this.vaccineService.getVaccineById(id);
      if (vaccine) {
        res.status(200).json(vaccine);
      } else {
        res.status(404).json({ error: 'Vaccine not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get vaccine' });
    }
  }

  async createVaccine(req, res) {
    const { name, manufacturer, dose } = req.body;
    try {
      const newVaccine = await this.vaccineService.createVaccine(
        name,
        manufacturer,
        dose
      );
      res.status(201).json(newVaccine);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create vaccine' });
    }
  }

  async updateVaccine(req, res) {
    const { id } = req.params;
    const { name, manufacturer, dose } = req.body;
    try {
      const updatedVaccine = await this.vaccineService.updateVaccine(
        id,
        name,
        manufacturer,
        dose
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

  async deleteVaccine(req, res) {
    const { id } = req.params;
    try {
      const deletedVaccine = await this.vaccineService.deleteVaccine(id);
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

module.exports = new VaccineController();
