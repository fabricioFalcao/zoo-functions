const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('A função ao ser chamada sem receber um parâmetro retorna "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('A função so ser chamada com um parâmetro diferente de uma string, retorna a mensagem de erro', () => {
    expect(handlerElephants(30)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('A função so ser chamada com um parâmetro inexperado, retorna "null"', () => {
    expect(handlerElephants('diet')).toBeNull();
  });
  test('A função so ser chamada com o parâmetro "count", retorna "4"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('A função so ser chamada com o parâmetro "anmes", retorna os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('A função so ser chamada com o parâmetro "averageAge", retorna "10.5"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('A função so ser chamada com o parâmetro "location", retorna "NW"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('A função so ser chamada com o parâmetro "popularity", retorna "5"', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('A função so ser chamada com o parâmetro "availability", retorna os dias disponíves para visitação', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
