class ManufacturerController {
  manufacturerService;
  constructor(manufacturerService) {
    this.manufacturerService = manufacturerService;
  }

  async getAll(req, res) {
    try {
      const manufacturers = await this.manufacturerService.findAll();
      res.status(200).json(manufacturers);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to get manufacturers' });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const manufacturer = await this.manufacturerService.findById(id);
      if (manufacturer) {
        res.status(200).json(manufacturer);
      } else {
        res.status(404).json({ error: 'Manufacturer not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get manufacturer' });
    }
  }

  async create(req, res) {
    const { name } = req.body;
    try {
      const newManufacturer = await this.manufacturerService.create({
        name,
      });
      res.status(201).json(newManufacturer);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to create manufacturer' });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const updatedManufacturer = await this.manufacturerService.update(
        id,
        name
      );
      if (updatedManufacturer) {
        res.status(200).json(updatedManufacturer);
      } else {
        res.status(404).json({ error: 'Manufacturer not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update manufacturer' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deletedManufacturer = await this.manufacturerService.delete(id);
      if (deletedManufacturer) {
        res.status(200).json({ message: 'Manufacturer deleted successfully' });
      } else {
        res.status(404).json({ error: 'Manufacturer not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete manufacturer' });
    }
  }
}

export default ManufacturerController;
