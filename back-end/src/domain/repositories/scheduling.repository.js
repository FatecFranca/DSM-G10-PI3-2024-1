import { Scheduling } from '../entities/scheduling.entity.js';

class SchedulingRepository {
  async findAll() {
    return await Scheduling.find({});
  }

  async findById(id) {
    return await Scheduling.findById(id);
  }

  async create(scheduling) {
    return await Scheduling.create(scheduling);
  }

  async update(id, scheduling) {
    return await Scheduling.findByIdAndUpdate(id, scheduling, { new: true });
  }

  async delete(id) {
    return await Scheduling.findByIdAndDelete(id);
  }
}

export default SchedulingRepository
