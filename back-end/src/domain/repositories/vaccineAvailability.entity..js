import { VaccineAvailability } from "../entities/vaccineAvailability.entity";

class VaccineAvailabilityRepository {
  async findAll() {
    return await VaccineAvailability.find({});
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
