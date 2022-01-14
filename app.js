const rect = require('./rectangle');
function solveRect(l, w) {
    console.log(`Solving for rectangle with dimentions: ${l}, ${w}`);

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area of the rectangle with dimensions ${l}, ${w} is: ${rectangle.area(l, w)}`);
            console.log(`Perimeter of the rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter(l, w)}`);
        }
    });
    console.log('This statement is logged after the call to rect()');
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);