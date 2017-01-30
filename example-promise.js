function getTempCallback (location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('Cape Town', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve(79);
            reject('City not found');
        }, 1000);
    })
}

getTempPromise('Cape Town').then(function (temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
})

// Challenge Area
// function addPromise(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (typeof a === 'number' && typeof b === 'number') {
//             resolve(a + b);
//         }
//         reject('Both arguments must be a number');
//     })
// }

// addPromise('hello', 9).then(function (sum) {
//     console.log('success', sum);
// }, function (err) {
//     console.log('error', err);
// });
// addPromise('hello', 'there').then(function (sum) {
//     console.log('success', sum);
// }, function (err) {
//     console.log('error', err);
// });
// addPromise(3, 'something').then(function (sum) {
//     console.log('success', sum);
// }, function (err) {
//     console.log('error', err);
// });
// addPromise(4, 6).then(function (sum) {
//     console.log('success', sum);
// }, function (err) {
//     console.log('error', err);
// });
