

class SchedulingService {
  schedulingRepository;
  constructor(schedulingRepository) {
    this.schedulingRepository = schedulingRepository;
  }

  async findAll() {
    return await this.schedulingRepository.find();
  }

  async findById(id) {
    return await this.schedulingRepository.findById(id);
  }

  async create(scheduling) {
    return await this.schedulingRepository.create(scheduling);
  }

  async update(id, scheduling) {
    return await this.schedulingRepository.update(id, scheduling);
  }

  async delete(id) {
    return await this.schedulingRepository.delete(id);
  }
}

export default SchedulingService
