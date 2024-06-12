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
    try {
      return await this.vaccineRepository.create(vaccine);
    } catch (err) {
      console.log(err);
    }
  }

  async update(id, vaccine) {
    return await this.vaccineRepository.update(id, vaccine);
  }

  async delete(id) {
    return await this.vaccineRepository.delete(id);
  }
}

export default VaccineService;
