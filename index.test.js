const holamundo = require('./index');

test('Mensaje de saludo', () => {
    expect(holamundo()).toBe('Hola soy Maria y te quiero dar la bienvenida al examen final');
});