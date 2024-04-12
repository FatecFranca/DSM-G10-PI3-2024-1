import { VaccineAvailability } from '../entities/vaccineAvailability.entity';

class VaccineAvailabilityService {
  vaccineAvailabilityRepository;
  constructor(vaccineAvailabilityRepository) {
    this.vaccineAvailabilityRepository = vaccineAvailabilityRepository;
  }

  async findAll() {
    return await this.vaccineAvailabilityRepository.find();
  }

  async findById(id) {
    return await this.vaccineAvailabilityRepository.findById(id);
  }

  async create(vaccineAvailability) {
    return await this.vaccineAvailabilityRepository.create(vaccineAvailability);
  }

  async update(id, vaccineAvailability) {
    return await this.vaccineAvailabilityRepository.findByIdAndUpdate(
      id,
      vaccineAvailability
    );
  }

  async delete(id) {
    return await this.vaccineAvailabilityRepository.findByIdAndDelete(id);
  }
}
