import '@testing-library/jest-dom/extend-expect';
import getData from '../mock/fetchData';

describe('fetch data', () => {
  it('test fetching country name', async () => {
    await getData().then((res) => expect(res.data[0].id).toBe('Albania'));
  });
  it('test fetching country cofirmed cases', async () => {
    await getData().then((res) => expect(res.data[1].info.today_confirmed).toEqual(201));
  });
});