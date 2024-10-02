import getResponseFromAPI from './0-promise';

test('getResponseFromAPI resolves successfully', () => {
  return getResponseFromAPI().then(response => {
    expect(response).toBeUndefined();
  });
});
