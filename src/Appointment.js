import React from 'react';

export function Appointment({ customer }) {
  return <div>{customer.firstName}</div>;
}

export function AppointmentsDayView() {
  return <div id="appointmentsDayView" />;
}
