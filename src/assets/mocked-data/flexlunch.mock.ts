import { FlexLunch } from 'src/app/interfaces/flexlunch';

export const FL_MOCK_DATA: FlexLunch = {
  userName: '',
  options: [
    {
      name: 'Fiducia Kantine',
      url: 'http://google.com',
      times: [
        {
          time: '11:10:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: []
          }
        },
        {
          time: '11:25:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: []
          }
        },
        {
          time: '11:40:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: []
          }
        },
        {
          time: '11:55:00',
          bike: [{ name: 'Tobi' }, { name: 'Matthias' }, { name: 'Markus' }],
          walk: [],
          bus: {
            capacity: 7,
            passangers: [
              { name: 'Dennis' },
              { name: 'Bianca' },
              { name: 'Nicole W.' },
              { name: 'Leon' },
              { name: 'Nicole H.' },
              { name: 'Kent' }
            ]
          }
        },
        {
          time: '12:10:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: []
          }
        },
        {
          time: '12:25:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: [{ name: 'Frank' }, { name: 'Guido' }]
          }
        },
        {
          time: '12:40:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: []
          }
        },
        {
          time: '12:55:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: []
          }
        },
        {
          time: '13:10:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: []
          }
        },
        {
          time: '13:25:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: []
          }
        },
        {
          time: '13:40:00',
          bike: [],
          walk: [],
          bus: {
            capacity: 7,
            passangers: []
          }
        }
      ]
    },
    {
      name: 'Metzgerei Sack',
      url: 'https://www.metzgerei-sack.de/',
      times: [
        { time: '12:00:00', bike: [], walk: [{ name: 'Ralph' }] },
        { time: '12:30:00', bike: [], walk: [{ name: 'Lars' }] }
      ]
    },
    {
      name: 'Tonos 2 (Döner)',
      url:
        'https://www.google.com/maps/place/Tonos+2/@48.9993989,8.4677762,19.29z/data=!4m12!1m6!3m5!1s0x0:0xcae992c7c86939ea!2sMetzgerei+Sack+Durlach!8m2!3d48.9991168!4d8.4727893!3m4!1s0x479708eed8dc3c07:0x6f4401b201d44aef!8m2!3d48.9994486!4d8.4679357',
      times: [
        { time: '12:00:00', bike: [], walk: [{ name: 'Ralph' }] },
        { time: '12:30:00', bike: [], walk: [{ name: 'Lars' }] }
      ]
    }
  ]
};
