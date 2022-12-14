import React from 'react';

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export function Appointment({ customer }) {
  return <div>{customer.firstName}</div>;
}

export function AppointmentsDayView({ appointments }) {
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment) => (
          <li key={appointment.startsAt}>
            {appointmentTimeOfDay(appointment.startsAt)}
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[0]} />
      )}
    </div>
  );
}
