// var names = ['Andrew', 'Ozzy', 'Matty', 'Steve'];

// names.forEach(function (name) {
//     console.log('foreach', name);
// });

// names.forEach((name) => {
//     console.log('arrowFunc', name);
//     console.log('something else');
// });

// names.forEach((name) => console.log('noFunction', name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Jimmy'));

// var person = {
//     name: 'John',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };

// person.greet();

// Challenge area
function add (a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
};
var addExpression = (a, b) => a + b;

console.log(add(1, 3));
console.log(add(9, 0));
console.log(addStatement(1, 3));
console.log(addStatement(9, 0));
console.log(addExpression(1, 3));
console.log(addExpression(9, 0));