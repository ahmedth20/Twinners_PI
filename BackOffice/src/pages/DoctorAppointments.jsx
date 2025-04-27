import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const DoctorAppointments = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const fetchDoctors = async () => {
    try {
      const response = await fetch("http://localhost:5000/doctors");
      const doctors = await response.json();

      const generatedEvents = doctors.map((doc) => {
        // Jour aléatoire dans les 7 prochains jours
        const randomDayOffset = getRandomInt(0, 6);
        // Heure aléatoire entre 8h et 16h
        const randomHour = getRandomInt(8, 16);
        const randomMinute = getRandomInt(0, 1) === 0 ? 0 : 30; // soit 00 ou 30

        const start = moment()
          .startOf("day")
          .add(randomDayOffset, "days")
          .add(randomHour, "hours")
          .add(randomMinute, "minutes")
          .toDate();

        const duration = getRandomInt(1, 2); // 1 ou 2 heures
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
  };

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
