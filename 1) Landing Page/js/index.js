// const dark = document.querySelector('#dark');
// const light = document.querySelector('#light');
// const body = document.querySelector('body');
// const element = document.querySelector('*');



// dark.addEventListener('click', function () {
//     body.style.backgroundColor = "black";
//     element.style.color = "white";
// })

// light.addEventListener('click', function () {
//     body.style.backgroundColor = "white";
//     element.style.color = "black";
// })


// const dark = document.querySelector('#dark');
// const light = document.querySelector('#light');
// const body = document.querySelector('body');
// const elements = document.querySelectorAll('*');
// const content = document.querySelector('.js');

// dark.addEventListener('click', function () {
//     body.style.backgroundColor = "black";
//     elements.forEach(element => {
//         element.style.color = "white";
//     });
// });

// light.addEventListener('click', function () {
//     body.style.backgroundColor = "white";

//     elements.forEach(element => {
//         element.style.color = "black";
//     });
//     content.forEach(content => {
//         content.style.color = "white";
//     });
// });


const dark = document.querySelector('#dark');
const light = document.querySelector('#light');
const body = document.querySelector('body');
const elements = document.querySelectorAll('*');
const content = document.querySelectorAll('.js');

dark.addEventListener('click', function () {
    body.style.backgroundColor = "black";
    elements.forEach(element => {
        element.style.color = "white";
    });
});

light.addEventListener('click', function () {
    body.style.backgroundColor = "white";

    elements.forEach(element => {
        element.style.color = "black";
    });
    content.forEach(item => {
        item.style.color = "white";
    });
});


