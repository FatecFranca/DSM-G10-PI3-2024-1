const vaccineAvailabilityService = require('../services/vaccineAvailabilityService');

class vaccineAvailabilityController {
    constructor(repository) {
        this.vaccineAvailabilityService = new vaccineAvailabilityService(repository);
    }

    async getAllVaccineAvailabilities(req, res) {
        try {
            const vaccineAvailabilities = await this.vaccineAvailabilityService.getAllVaccineAvailabilities();
            res.status(200).json(vaccineAvailabilities);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get vaccine availabilities' });
        }
    }

    async getVaccineAvailabilityById(req, res) {
        const { id } = req.params;
        try {
            const vaccineAvailability = await this.vaccineAvailabilityService.getVaccineAvailabilityById(id);
            if (vaccineAvailability) {
                res.status(200).json(vaccineAvailability);
            } else {
                res.status(404).json({ error: 'Vaccine availability not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to get vaccine availability' });
        }
    }

    async createVaccineAvailability(req, res) {
        const { date, location, availableSlots } = req.body;
        try {
            const newVaccineAvailability = await this.vaccineAvailabilityService.createVaccineAvailability(date, location, availableSlots);
            res.status(201).json(newVaccineAvailability);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create vaccine availability' });
        }
    }

    async updateVaccineAvailability(req, res) {
        const { id } = req.params;
        const { date, location, availableSlots } = req.body;
        try {
            const updatedVaccineAvailability = await this.vaccineAvailabilityService.updateVaccineAvailability(
                id,
                date,
                location,
                availableSlots
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

    async deleteVaccineAvailability(req, res) {
        const { id } = req.params;
        try {
            const deletedVaccineAvailability = await this.vaccineAvailabilityService.deleteVaccineAvailability(id);
            if (deletedVaccineAvailability) {
                res.status(200).json({ message: 'Vaccine availability deleted successfully' });
            } else {
                res.status(404).json({ error: 'Vaccine availability not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete vaccine availability' });
        }
    }
}

module.exports = new VaccineAvailabilityController();
