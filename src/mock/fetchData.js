const countriesData = () => Promise.resolve({
  data: [
    {
      id: 'Albania',
      info: {
        today_confirmed: 89,
      },
    },
    {
      id: 'Algeria',
      info: {
        today_confirmed: 201,
      },
    },
  ],
});

const getData = () => countriesData().then((data) => data);

export default getData;