import React, { useEffect, useState, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const DoctorAppointments = () => {
  const [events, setEvents] = useState([]);

  // Définir fetchDoctors avec useCallback pour éviter des appels inutiles
  const fetchDoctors = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:5000/doctors");
      const doctors = await response.json();

      const generatedEvents = doctors.map((doc) => {
        const randomDayOffset = getRandomInt(0, 6);
        const randomHour = getRandomInt(8, 16);
        const randomMinute = getRandomInt(0, 1) === 0 ? 0 : 30;

        const start = moment()
          .startOf("day")
          .add(randomDayOffset, "days")
          .add(randomHour, "hours")
          .add(randomMinute, "minutes")
          .toDate();

        const duration = getRandomInt(1, 2);
        const end = moment(start).add(duration, "hours").toDate();

        return {
          title: `${doc.user?.firstName || "Médecin"} - ${doc.speciality} - Badge ${doc.badgeNumber}`,
          start,
          end,
          allDay: false,
        };
      });

      setEvents(generatedEvents);
    } catch (error) {
      console.error("Erreur lors du chargement des médecins :", error);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]); // Ajout de la dépendance à fetchDoctors

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div style={{ padding: "20px" }}>
      <h2>📅 Planning aléatoire des Médecins</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, margin: "30px 0" }}
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
      />
    </div>
  );
};

export default DoctorAppointments;
