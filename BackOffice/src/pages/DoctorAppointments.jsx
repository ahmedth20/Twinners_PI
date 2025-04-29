import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const DoctorCalendar = () => {
  const [events, setEvents] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDoctorId, setSelectedDoctorId] = useState("");

  useEffect(() => {
    fetchDoctors();
    fetchAppointments(); // 👈 important pour charger les rendez-vous au démarrage
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5000/doctors");
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Erreur lors du chargement des médecins :", error);
    }
  };

  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:5000/appointments");
      const data = await res.json();
console.log(data)
const appointmentEvents = data.map((appt) => ({
  title: ` ${appt.doctorId?.user?.firstName || "Médecin"} (${appt.doctorId?.speciality || ""})`,
  start: new Date(appt.start),
  end: new Date(appt.end),
  allDay: false,
  type: "appointment",
}));

      setEvents((prevEvents) => [...prevEvents, ...appointmentEvents]);
    } catch (err) {
      console.error("Erreur lors du chargement des rendez-vous :", err);
    }
  };

  const handleSelectSlot = ({ start, end }) => {
    setSelectedSlot({ start, end });
  };

  const handleDoctorAssign = async () => {
    if (!selectedDoctorId || !selectedSlot) return;

    try {
      const res = await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: selectedDoctorId,
          start: selectedSlot.start,
          end: selectedSlot.end,
        }),
      });

      const savedAppointment = await res.json();

      const doctor = doctors.find((doc) => doc._id === selectedDoctorId);
      const newEvent = {
        title: `${doctor.user?.firstName || "Médecin"} - ${doctor.speciality} - Badge ${doctor.badgeNumber}`,
        start: new Date(savedAppointment.start),
        end: new Date(savedAppointment.end),
        allDay: false,
      };

      setEvents((prevEvents) => [...prevEvents, newEvent]);
      setSelectedSlot(null);
      setSelectedDoctorId("");
    } catch (err) {
      console.error("Erreur lors de l'enregistrement :", err);
    }
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = event.type === "appointment" ? "#ffcccb" : "#90ee90";
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.8,
        color: "black",
        border: "0px",
        display: "block",
      },
    };
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📅 Planning des Médecins</h2>

      {selectedSlot && (
        <div
  style={{
    marginBottom: "10px",marginTop: "10px",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  }}
>
  <label style={{ fontWeight: "bold", fontSize: "16px" }}>🩺 Affecter un médecin :</label>
  
  <select
    value={selectedDoctorId}
    onChange={(e) => setSelectedDoctorId(e.target.value)}
    style={{
      padding: "5px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      backgroundColor: "#fff",
      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
      minWidth: "250px",
      fontSize: "14px",
    }}
  >
    <option value="">-- Sélectionner un médecin --</option>
    {doctors.map((doc) => (
      <option key={doc._id} value={doc._id}>
        {doc.user?.firstName} - {doc.speciality}
      </option>
    ))}
  </select>

  <button
    onClick={handleDoctorAssign}
    style={{
      padding: "10px 15px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
  >
    ✅ Affecter
  </button>
</div>

      )}

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        selectable
        onSelectSlot={handleSelectSlot}
        views={["month", "week", "day", "agenda"]}
        defaultView="week"
        messages={{
          next: "Suivant",
          previous: "Précédent",
          today: "Aujourd'hui",
          month: "Mois",
          week: "Semaine",
          day: "Jour",
          agenda: "Agenda",
          date: "Date",
          time: "Heure",
          event: "Événement",
        }}
        eventPropGetter={eventStyleGetter}
      />
    </div>
  );
};

export default DoctorCalendar;
