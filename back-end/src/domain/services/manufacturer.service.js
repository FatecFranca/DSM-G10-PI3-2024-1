class ManufacturerService {
  manufacturerRepository;
  constructor(manufacturerRepository) {
    this.manufacturerRepository = manufacturerRepository;
  }

  async findAll() {
    return await this.manufacturerRepository.findAll({});
  }

  async findById(id) {
    return await this.manufacturerRepository.findById(id);
  }

  async create(manufacturer) {
    try {
      return await this.manufacturerRepository.create(manufacturer);
    } catch (err) {
      throw new Error({ code: err.code, error: err.message });
    }
  }

  async update(id, manufacturer) {
    return await this.manufacturerRepository.update(id, manufacturer, {
      new: true,
    });
  }

  async delete(id) {
    return await this.manufacturerRepository.delete(id);
  }
}

export default ManufacturerService;
