const schedulingService = require('../services/schedulingService');

class SchedulingController {
    constructor(repository) {
        this.schedulingService = new schedulingService(repository);
    }

    async getAllSchedulings(req, res) {
        try {
            const schedulings = await this.schedulingService.getAllSchedulings();
            res.status(200).json(schedulings);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get schedulings' });
        }
    }

    async getSchedulingById(req, res) {
        const { id } = req.params;
        try {
            const scheduling = await this.schedulingService.getSchedulingById(id);
            if (scheduling) {
                res.status(200).json(scheduling);
            } else {
                res.status(404).json({ error: 'Scheduling not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to get scheduling' });
        }
    }

    async createScheduling(req, res) {
        const { name, email, password } = req.body;
        try {
            const newScheduling = await this.schedulingService.createScheduling(name, email, password);
            res.status(201).json(newScheduling);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create scheduling' });
        }
    }

    async updateScheduling(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;
        try {
            const updatedScheduling = await this.schedulingService.updateScheduling(
                id,
                name,
                email,
                password
            );
            if (updatedScheduling) {
                res.status(200).json(updatedScheduling);
            } else {
                res.status(404).json({ error: 'Scheduling not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update scheduling' });
        }
    }

    async deleteScheduling(req, res) {
        const { id } = req.params;
        try {
            const deletedScheduling = await this.schedulingService.deleteScheduling(id);
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

module.exports = new SchedulingController();
