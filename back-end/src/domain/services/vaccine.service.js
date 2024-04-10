import { Vaccine } from '../entities/vaccine.entity';

class VaccineService {
  vaccineRepository;

  constructor(vaccineRepository) {
    this.vaccineRepository = vaccineRepository;
  }

  async findAll() {
    return await this.vaccineRepository.find();
  }

  async findById(id) {
    return await this.vaccineRepository.findById(id);
  }

  async create(vaccine) {
    return await this.vaccineRepository.create(vaccine);
  }

  async update(id, vaccine) {
    return await this.vaccineRepository.findByIdAndUpdate(id, vaccine);
  }

  async delete(id) {
    return await this.vaccineRepository.findByIdAndDelete(id);
  }
}
