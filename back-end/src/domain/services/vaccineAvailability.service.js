class VaccineAvailabilityService {
  vaccineAvailabilityRepository;
  constructor(vaccineAvailabilityRepository) {
    this.vaccineAvailabilityRepository = vaccineAvailabilityRepository;
  }

  async findAll({ ...params }) {
    return await this.vaccineAvailabilityRepository.find({ ...params });
  }

  async findById(id) {
    return await this.vaccineAvailabilityRepository.findById(id);
  }

  async create(vaccineAvailability) {
    return await this.vaccineAvailabilityRepository.create({
      ...vaccineAvailability,
      availableDates: vaccineAvailability.availableDates.map(
        (date) => new Date(date)
      ),
    });
  }

  async update(id, vaccineAvailability) {
    return await this.vaccineAvailabilityRepository.update(
      id,
      vaccineAvailability
    );
  }

  async delete(id) {
    return await this.vaccineAvailabilityRepository.delete(id);
  }
}

export default VaccineAvailabilityService;
