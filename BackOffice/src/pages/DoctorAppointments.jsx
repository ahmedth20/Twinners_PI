import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const DoctorCalendar = () => {
  const [events, setEvents] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const doctorColors = [
    "#4caf50", "#2196f3", "#ff9800", "#9c27b0",
    "#f44336", "#00bcd4", "#e91e63", "#795548",
    "#607d8b", "#8bc34a", "#ffc107", "#3f51b5"
  ];

  const getDoctorColor = (() => {
    const colorMap = new Map();
    let colorIndex = 0;
    return (doctorId) => {
      if (!colorMap.has(doctorId)) {
        colorMap.set(doctorId, doctorColors[colorIndex % doctorColors.length]);
        colorIndex++;
      }
      return colorMap.get(doctorId);
    };
  })();

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Erreur chargement médecins :", err));

    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:5000/appointments");
      const data = await res.json();

      const appointmentEvents = data.map((appt) => ({
        title: `${appt.doctorId?.user?.firstName || "Médecin"} (${appt.doctorId?.speciality || ""})`,
        start: new Date(appt.start),
        end: new Date(appt.end),
        allDay: false,
        doctorId: appt.doctorId?._id,
        id: appt._id,
      }));

      setEvents(appointmentEvents);
    } catch (err) {
      console.error("Erreur lors du chargement des rendez-vous :", err);
    }
  };

  const handleDoctorSelect = (e) => setSelectedDoctor(e.target.value);
  const handleStartTimeChange = (e) => setStartTime(e.target.value);
  const handleEndTimeChange = (e) => setEndTime(e.target.value);
  const handleDoctorIdChange = (e) => setDoctorId(e.target.value);

  const filteredEvents = selectedDoctor
    ? events.filter((event) => event.doctorId === selectedDoctor)
    : events;

  const assignDoctorsWeekly = async () => {
    const daysOfWeek = [1, 2, 3, 4, 5, 6, 0];
    const doctorSchedule = {};
    doctors.forEach((doc) => {
      doctorSchedule[doc._id] = [];
    });

    const startHour = 9;
    const endHour = 17;
    const today = moment().startOf("isoWeek");

    for (const dayIndex of daysOfWeek) {
      const dayDate = moment(today).add(dayIndex, "days");
      const start = dayDate.clone().hour(startHour).minute(0).toDate();
      const end = dayDate.clone().hour(endHour).minute(0).toDate();

      const availableDoctors = doctors
        .filter((doc) => doctorSchedule[doc._id].length < 4)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

      for (const doc of availableDoctors) {
        try {
          const response = await fetch("http://localhost:5000/appointments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ doctorId: doc._id, start, end }),
          });

          const saved = await response.json();

          const newEvent = {
            title: `${doc.user?.firstName} (${doc.speciality})`,
            start: new Date(saved.start),
            end: new Date(saved.end),
            allDay: false,
            doctorId: doc._id,
            id: saved._id,
          };

          setEvents((prev) => [...prev, newEvent]);
          doctorSchedule[doc._id].push(dayDate.format("YYYY-MM-DD"));
        } catch (err) {
          console.error("Erreur lors de l'affectation :", err);
        }
      }
    }

    alert("Planification automatique terminée !");
  };

  const handleManualAssignment = async () => {
    if (!startTime || !endTime || !doctorId) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const start = new Date(startTime);
    const end = new Date(endTime);

    try {
      const response = await fetch("http://localhost:5000/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ doctorId, start, end }),
      });

      const saved = await response.json();
      const doctor = doctors.find((doc) => doc._id === doctorId);

      const newEvent = {
        title: `${doctor?.user?.firstName} (${doctor?.speciality})`,
        start: new Date(saved.start),
        end: new Date(saved.end),
        allDay: false,
        doctorId,
        id: saved._id,
      };

      setEvents((prev) => [...prev, newEvent]);
      alert("Rendez-vous ajouté avec succès !");
    } catch (err) {
      console.error("Erreur lors de l'ajout du rendez-vous :", err);
    }
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`http://localhost:5000/appointments/${appointmentId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setEvents((prev) => prev.filter((event) => event.id !== appointmentId));
        alert("Rendez-vous supprimé avec succès !");
      } else {
        alert("Erreur lors de la suppression du rendez-vous.");
      }
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
    }
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = getDoctorColor(event.doctorId);
    return {
      style: {
        backgroundColor,
        color: "white",
        borderRadius: "5px",
        border: "none",
      },
    };
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
  🩺 Calendrier des Médecins
</h1>

<div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6">
  <button
    onClick={assignDoctorsWeekly}
    className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold py-2 px-6 rounded-xl shadow-lg transition duration-300"
  >
    🚀 Affectation Automatique
  </button>

  <div className="flex items-center space-x-3">
    <label htmlFor="doctorSelect" className="text-base md:text-lg font-medium text-gray-800">
      🔍 Filtrer par Médecin :
    </label>
    <select
      id="doctorSelect"
      value={selectedDoctor}
      onChange={handleDoctorSelect}
      className="p-2 md:p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 shadow-sm text-sm md:text-base"
    >
      <option value="">-- Tous les médecins --</option>
      {doctors.map((doc) => (
        <option key={doc._id} value={doc._id}>
          {doc.user?.firstName} - {doc.speciality}
        </option>
      ))}
    </select>
  </div>
</div>


     

      <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl space-y-5 mb-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Ajouter un Rendez-vous</h2>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Sélectionner le Médecin :</label>
          <select
            value={doctorId}
            onChange={handleDoctorIdChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Choisir un médecin --</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.user?.firstName} ({doctor.speciality})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Heure de début :</label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={handleStartTimeChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Heure de fin :</label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={handleEndTimeChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleManualAssignment}
            className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold px-6 py-2 rounded-full shadow-md"
          >
            Ajouter le Rendez-vous
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          defaultView="week"
          eventPropGetter={eventStyleGetter}
          onSelectEvent={(event) => {
            if (window.confirm("Supprimer ce rendez-vous ?")) {
              handleDeleteAppointment(event.id);
            }
          }}
        />
      </div>
    </div>
  );
};

export default DoctorCalendar;
