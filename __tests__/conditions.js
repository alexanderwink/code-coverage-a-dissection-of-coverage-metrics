const {conditionMe} = require('../conditions.js');

test('t1', () => {
    conditionMe(200);
    conditionMe(50);
});
