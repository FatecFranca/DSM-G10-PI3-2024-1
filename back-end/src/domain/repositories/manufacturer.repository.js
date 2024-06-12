import { Manufacturer } from '../entities/manufacturer.entity.js';

class ManufacturerRepository {
  async findAll() {
    return await Manufacturer.find({});
  }

  async findById(id) {
    return await Manufacturer.findById(id);
  }

  async create(manufacturer) {
    return await Manufacturer.create({ ...manufacturer });
  }

  async update(id, manufacturer) {
    return await Manufacturer.findByIdAndUpdate(id, manufacturer, {
      new: true,
    });
  }

  async delete(id) {
    return await Manufacturer.findByIdAndDelete(id);
  }
}

export default ManufacturerRepository;
