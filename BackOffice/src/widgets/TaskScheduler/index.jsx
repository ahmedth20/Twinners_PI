import {
  MonthSelector,
  CalendarWrapper,
  StyledCalendar
} from 'widgets/TaskScheduler/style';

import Widget from 'components/Widget';
import WidgetHeader from 'components/Widget/WidgetHeader';
import WidgetBody from 'components/Widget/WidgetBody';
import Legend from 'UI/Legend';
import LegendItem from 'UI/Legend/LegendItem';
import CustomSelect from 'UI/Select';
import Calendar from 'react-calendar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Badge } from 'UI/Badge/style';
import Backdrop from '@mui/material/Backdrop';

import { getMonthArray } from 'utils/dates';
import moment from 'moment';
import { nanoid } from 'nanoid';

import { useState, useEffect, useRef } from 'react';
import { tasksColors } from 'constants/colors';

const TaskScheduler = () => {
  const [staffOptions, setStaffOptions] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [staffAppointments, setStaffAppointments] = useState([]);
  const [selectedRange, setSelectedRange] = useState({ start: 1, end: 2 });
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const monthArray = getMonthArray();
  const currentMonth = new Date().getMonth() + 1;

  useEffect(() => {
    const fetchStaffs = async () => {
      try {
        const response = await fetch('http://localhost:5000/staff');
        const data = await response.json();
        const formattedOptions = data.map(staff => ({
          label: staff.user
            ? `${staff.user.firstName} ${staff.user.lastName}`
            : `Badge #${staff.badgeNumber}`,
          value: staff._id
        }));
        setStaffOptions(formattedOptions);
        setSelectedStaff(formattedOptions[0]);
      } catch (error) {
        console.error('Erreur lors de la récupération du staff :', error);
      }
    };

    fetchStaffs();
  }, []);

  useEffect(() => {
    currentMonth === 12
      ? setSelectedRange({ start: currentMonth - 1, end: currentMonth })
      : setSelectedRange({ start: currentMonth, end: currentMonth + 1 });

    if (headerRef.current && footerRef.current) {
      setHeight(headerRef.current.offsetHeight + footerRef.current.offsetHeight);
    }
  }, [currentMonth]);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!selectedStaff) return;

      try {
        const response = await fetch(`http://localhost:5000/appointmentsstaffbyid?staffId=${selectedStaff.value}`);
        const data = await response.json();
        console.log('Tâches du staff:', data);
        setStaffAppointments(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous du staff :', error);
      }
    };

    fetchAppointments();
  }, [selectedStaff]);

  const handleNavigation = e => {
    const realIndex = swiper.realIndex;
    if (e.currentTarget.dataset.direction === 'prev') {
      swiper.slidePrev();
      setSelectedRange({
        start: realIndex === 0 ? 11 : realIndex,
        end: realIndex === 0 ? 12 : realIndex + 1
      });
    } else {
      swiper.slideNext();
      setSelectedRange({
        start: realIndex === 11 ? 1 : realIndex + 1,
        end: realIndex === 11 ? 2 : realIndex + 2
      });
    }
  };

  const calendarStart = moment().month(selectedRange.start - 1).startOf('month').toDate();
  const calendarEnd = moment().month(selectedRange.end - 1).endOf('month').toDate();

  const hasTasks = date =>
    staffAppointments.filter(event => moment(event.date).isSame(date, 'day')).length > 0;

  const drawTasks = date => {
    const tasks = staffAppointments.filter(event => moment(event.date).isSame(date, 'day'));
    return tasks.map(task => {
      const { title, type, date } = task;
      const color = tasksColors.find(color => color.cat === type)?.color || 'gray';
      return (
        <div key={nanoid()} className="task">
          <div>
            <span className="task_label">Task:</span>
            <div className="task_header">
              <Badge color={color} />
              {title}
            </div>
          </div>
          <div>
            <span className="task_label">Date:</span>
            <div>{moment(date).format('MM.DD.YY, HH:mm A')}</div>
          </div>
        </div>
      );
    });
  };

  if (!selectedStaff) return <div>Chargement des membres du staff...</div>;

  return (
    <Widget name="TaskScheduler">
      <WidgetHeader title="Staff task scheduler" flex="column" elRef={headerRef}>
        <CustomSelect
          options={staffOptions}
          value={selectedStaff}
          variant="user"
          changeHandler={e => setSelectedStaff(e)}
        />
      </WidgetHeader>
      <WidgetBody style={{ display: 'flex', flexDirection: 'column' }}>
        <MonthSelector>
          <div className="list">
            <Swiper
              slidesPerView="auto"
              spaceBetween={12}
              loop={true}
              centeredSlides={true}
              onSwiper={setSwiper}
              initialSlide={currentMonth - 1}
            >
              {monthArray.map(({ month }) => {
                const monthNumber = moment(month).format('M');
                const monthName = moment(month).format('MMMM');
                const isSelected =
                  +monthNumber === selectedRange.start || +monthNumber === selectedRange.end;

                return (
                  <SwiperSlide
                    key={monthName}
                    className={isSelected ? 'list-item active' : 'list-item'}
                  >
                    {monthName}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="navigation">
            <button data-direction="prev" onClick={handleNavigation} aria-label="Previous">
              <i className="icon icon-chevron-left" />
            </button>
            <button data-direction="next" onClick={handleNavigation} aria-label="Next">
              <i className="icon icon-chevron-right" />
            </button>
          </div>
        </MonthSelector>
        <CalendarWrapper top={height}>
          <StyledCalendar
            as={Calendar}
            locale="en-US"
            value={[calendarStart, calendarEnd]}
            activeStartDate={calendarStart}
            minDate={calendarStart}
            maxDate={calendarEnd}
            showDoubleView={true}
            showNavigation={false}
            showFixedNumberOfWeeks={false}
            tileClassName={({ date }) => (hasTasks(date) ? 'active' : '')}
            tileContent={<span className="bar" />}
            onClickDay={date => {
              setSelectedDate(date);
              setOpen(true);
            }}
          />
          <Backdrop
            open={open}
            onClick={() => setOpen(false)}
            sx={{ backgroundColor: 'transparent', zIndex: 1000 }}
          >
            <div className={`popup ${open ? 'visible' : ''}`}>
              <button className="popup_close" onClick={() => setOpen(false)}>
                <i className="icon icon-close" />
              </button>
              {selectedDate && hasTasks(selectedDate) && drawTasks(selectedDate)}
            </div>
          </Backdrop>
        </CalendarWrapper>
        <div ref={footerRef}>
          <Legend>
            {tasksColors.map(({ color, cat }) => (
              <LegendItem key={cat} color={color} legend={cat} />
            ))}
          </Legend>
        </div>
      </WidgetBody>
    </Widget>
  );
};

export default TaskScheduler;
