import React from 'react';

export function Appointment({ customer }) {
  return <div>{customer.firstName}</div>;
}

export function AppointmentsDayView({ appointments }) {
  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appointment) => (
          <li key={appointment.startsAt} />
        ))}
      </ol>
    </div>
  );
}
