import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';

import AppointmentsRepository from '../repository/AppointmentsRepository';

// DTO do Appointment
interface RequestAppointment {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository; // sempre passe a tipagem

  constructor(appointmentRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentRepository; // recupera o repositorio criado
  }

  public execute({ provider, date }: RequestAppointment): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });
    return appointment;
  }
}

export default CreateAppointmentService;
