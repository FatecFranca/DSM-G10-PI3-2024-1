import { Vaccine } from '../entities/vaccine.entity.js';

class VaccineRepository {
  async findAll() {
    return await Vaccine.find({});
  }

  async findById(id) {
    return await Vaccine.findById(id);
  }

  async create(vaccine) {
    return await Vaccine.create(vaccine);
  }

  async update(id, vaccine) {
    return await Vaccine.findByIdAndUpdate(id, vaccine, { new: true });
  }

  async delete(id) {
    return await Vaccine.findByIdAndDelete(id);
  }
}

export default VaccineRepository;
