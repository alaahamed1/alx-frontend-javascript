import getFullResponseFromAPI from './1-promise';

test('getFullResponseFromAPI resolves successfully', () => {
  return getFullResponseFromAPI(true).then(response => {
    expect(response).toEqual({ status: 200, body: 'Success' });
  });
});

test('getFullResponseFromAPI rejects with an error', () => {
  return getFullResponseFromAPI(false).catch(error => {
    expect(error).toEqual(new Error('The fake API is not working currently'));
  });
});