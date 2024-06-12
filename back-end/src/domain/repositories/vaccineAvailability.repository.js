import { VaccineAvailability } from '../entities/vaccineAvailability.entity.js';

class VaccineAvailabilityRepository {
  async find(params) {
    return await VaccineAvailability.find({
      ...params,
      availableDoses: { $gt: 0 },
    });
  }

  async findById(id) {
    return await VaccineAvailability.findById(id);
  }

  async create(vaccineAvailability) {
    return await VaccineAvailability.create(vaccineAvailability);
  }

  async update(id, vaccineAvailability) {
    return await VaccineAvailability.findByIdAndUpdate(
      id,
      vaccineAvailability,
      { new: true }
    );
  }

  async delete(id) {
    return await VaccineAvailability.findByIdAndDelete(id);
  }
}
export default VaccineAvailabilityRepository;
