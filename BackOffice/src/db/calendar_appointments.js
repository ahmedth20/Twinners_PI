import moment from 'moment';

export const disabled = [
    {
        start: moment().add(-3, 'day').set({ hour: 9, minute: 0, second: 0 }).toDate(),
        end: moment().add(-3, 'day').set({ hour: 17, minute: 0, second: 0 }).toDate(),
        type: 'disabled'
    },
    {
        start: moment().add(-2, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
        end: moment().add(-2, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
        type: 'disabled'
    },
    {
        start: moment().add(-1, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
        end: moment().add(-1, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
        type: 'disabled'
    },
    {
        start: moment().set({ hour: 12, minute: 0, second: 0 }).toDate(),
        end: moment().set({ hour: 13, minute: 0, second: 0 }).toDate(),
        type: 'disabled'
    },
    {
        start: moment().add(1, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
        end: moment().add(1, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
        type: 'disabled'
    },
    {
        start: moment().add(1, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
        end: moment().add(1, 'day').set({ hour: 13, minute: 30, second: 0 }).toDate(),
        type: 'disabled'
    },

    {
        start: moment().add(2, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
        end: moment().add(2, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
        type: 'disabled'
    },
    {
        start: moment().add(3, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
        end: moment().add(3, 'day').set({ hour: 17, minute: 0, second: 0 }).toDate(),
        type: 'disabled'
    },
];

export const events = {
    doctor: [
        {
            name: 'Day OFF ',
            start: moment().add(-3, 'day').set({ hour: 9, minute: 0, second: 0 }).toDate(),
            end: moment().add(-3, 'day').set({ hour: 17, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'checkup'
        },
        {
            name: 'Working',
            start: moment().add(-2, 'day').set({ hour: 9, minute: 30, second: 0 }).toDate(),
            end: moment().add(-2, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Break ',
            start: moment().add(-2, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            end: moment().add(-2, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'checkup'
        },
        {
            name: 'Working',
            start: moment().add(-2, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            end: moment().add(-2, 'day').set({ hour: 17, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Working',
            start: moment().add(-1, 'day').set({ hour: 9, minute: 30, second: 0 }).toDate(),
            end: moment().add(-1, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Break ',
            start: moment().add(-1, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            end: moment().add(-1, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'checkup'
        },
        {
            name: 'Working',
            start: moment().add(-1, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            end: moment().add(-1, 'day').set({ hour: 17, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Working',
            start: moment().set({ hour: 9, minute: 0, second: 0 }).toDate(),
            end: moment().set({ hour: 12, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Break ',
            start: moment().set({ hour: 12, minute: 0, second: 0 }).toDate(),
            end: moment().set({ hour: 13, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'checkup'
        },
        {
            name: 'Working',
            start: moment().set({ hour: 13, minute: 0, second: 0 }).toDate(),
            end: moment().set({ hour: 17, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        /*{
            name: 'Ultrasound diagnostics',
            start: moment().set({ hour: 13, minute: 30, second: 0 }).toDate(),
            end: moment().set({ hour: 14, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'EEG',
            start: moment().set({ hour: 15, minute: 0, second: 0 }).toDate(),
            end: moment().set({ hour: 15, minute: 30, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Routine checkup',
            start: moment().set({ hour: 15, minute: 30, second: 0 }).toDate(),
            end: moment().set({ hour: 16, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'checkup'
        },*/ 
        {
            name: 'Working',
            start: moment().add(1, 'day').set({ hour: 9, minute: 30, second: 0 }).toDate(),
            end: moment().add(1, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Break ',
            start: moment().add(1, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            end: moment().add(1, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'checkup'
        },
        {
            name: 'Working',
            start: moment().add(1, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            end: moment().add(1, 'day').set({ hour: 17, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        
        {
            name: 'Working',
            start: moment().add(2, 'day').set({ hour: 9, minute: 30, second: 0 }).toDate(),
            end: moment().add(2, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Break ',
            start: moment().add(2, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            end: moment().add(2, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'checkup'
        },
        {
            name: 'Working',
            start: moment().add(2, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            end: moment().add(2, 'day').set({ hour: 17, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Working',
            start: moment().add(3, 'day').set({ hour: 9, minute: 30, second: 0 }).toDate(),
            end: moment().add(3, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'consultation'
        },
        
        
        /*
        {
            name: 'Family appointment',
            start: moment().add(1, 'day').set({ hour: 10, minute: 30, second: 0 }).toDate(),
            end: moment().add(1, 'day').set({ hour: 11, minute: 30, second: 0 }).toDate(),
            allDay: false,
            type: 'consultation'
        },
        {
            name: 'Heartache',
            start: moment().add(1, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            end: moment().add(1, 'day').set({ hour: 12, minute: 30, second: 0 }).toDate(),
            allDay: false,
            type: 'emergency'
        },
        {
            name: 'First visit',
            start: moment().add(1, 'day').set({ hour: 13, minute: 0, second: 0 }).toDate(),
            end: moment().add(1, 'day').set({ hour: 13, minute: 30, second: 0 }).toDate(),
            allDay: false,
            type: 'consultation'
        },
        {
            name: 'Travailling',
            start: moment().add(2, 'day').set({ hour: 9, minute: 0, second: 0 }).toDate(),
            end: moment().add(2, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Cardio checkup',
            start: moment().add(2, 'day').set({ hour: 11, minute: 30, second: 0 }).toDate(),
            end: moment().add(2, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'checkup'
        },
        {
            name: 'Stomachache',
            start: moment().add(2, 'day').set({ hour: 14, minute: 30, second: 0 }).toDate(),
            end: moment().add(2, 'day').set({ hour: 15, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'emergency'
        },
        {
            name: 'MRI',
            start: moment().add(2, 'day').set({ hour: 16, minute: 0, second: 0 }).toDate(),
            end: moment().add(2, 'day').set({ hour: 16, minute: 30, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        {
            name: 'Travailling',
            start: moment().add(3, 'day').set({ hour: 9, minute: 30, second: 0 }).toDate(),
            end: moment().add(3, 'day').set({ hour: 12, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },
        /*{
            name: 'Family appointment',
            start: moment().add(4, 'day').set({ hour: 10, minute: 0, second: 0 }).toDate(),
            end: moment().add(4, 'day').set({ hour: 10, minute: 30, second: 0 }).toDate(),
            allDay: false,
            type: 'consultation'
        },
        {
            name: 'Keeping pregnant',
            start: moment().add(4, 'day').set({ hour: 11, minute: 0, second: 0 }).toDate(),
            end: moment().add(4, 'day').set({ hour: 11, minute: 30, second: 0 }).toDate(),
            allDay: false,
            type: 'consultation'
        },
        {
            name: 'Runny nose',
            start: moment().add(4, 'day').set({ hour: 14, minute: 0, second: 0 }).toDate(),
            end: moment().add(4, 'day').set({ hour: 14, minute: 30, second: 0 }).toDate(),
            allDay: false,
            type: 'sick'
        },
        {
            name: 'Heartache',
            start: moment().add(4, 'day').set({ hour: 15, minute: 30, second: 0 }).toDate(),
            end: moment().add(4, 'day').set({ hour: 16, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'emergency'
        },*/
    ],
    patient: {
        general: [
            {
                name: 'Bone Density Scan',
                start: moment().set({ hour: 10, minute: 0, second: 0 }).toDate(),
                end: moment().set({ hour: 10, minute: 30, second: 0 }).toDate(),
                allDay: false,
                type: 'test'
            },
            {
                name: 'Surgeon consultation',
                start: moment().set({ hour: 10, minute: 30, second: 0 }).toDate(),
                end: moment().set({ hour: 11, minute: 0, second: 0 }).toDate(),
                allDay: false,
                type: 'consultation'
            },
            {
                name: 'Calcium Blood Test',
                start: moment().add(1, 'day').set({ hour: 13, minute: 30, second: 0 }).toDate(),
                end: moment().add(1, 'day').set({ hour: 14, minute: 0, second: 0 }).toDate(),
                allDay: false,
                type: 'test'
            },
        ],
        disabled: disabled
    }
}