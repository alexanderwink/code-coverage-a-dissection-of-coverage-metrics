const {conditionMe} = require('../conditions.js');

test('t1', () => {
    conditionMe(200);
    //conditionMe(-10);
    conditionMe(50);
});
