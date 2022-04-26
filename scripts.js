// const bodyEl = document.querySelector('body');
// console.log('what up');
// setInterval(function() {
//     console.log('hello');
//     bodyEl.innerHTML = `
//     <div class="popup"
//         <h1>Don't Forget To Take Care of Yourself</h1>
//         <h3>Where would you like to take you next vacation?</h3>

//         <h1>Take a few moments for yourself & journal on your reflections</h1>
//     </div>
//     `
// }, 1000);

// LETCODE TUTORIAL
// function notification () {
//     chrome.notifications.create(
//         {
//             title: 'Well, well, well',
//             message: 'How is your day going?',
//             iconUrl: './images/icon.png',
//             type: 'basic'
//         }
//     )
// }

// notification();

// CODEDAMN TUTORIAL
const options = {
    type: 'basic',
    title: 'Take Care',
    message: 'Take Care notification',
    iconUrl: './images/icon.png'
}

chrome.notifications.create(options, callback);

function callback() {
    console.log("popup working");
}