var outputLessonItems = [{
    name: "Printer",
    description: "A printer is an external hardware output device that takes the electronic data stored on a computer and generates a hard copy of it.",
    imageSource: "img/printer-out.png",
    full_description: "A computer keyboard is one of the primary input devices used with a computer. Similar to an electric typewriter, a keyboard is composed of buttons that create letters, numbers, and symbols, as well as perform other functions. A keyboard uses labeled buttons as input switches. The standard QWERTY keyboard is the commonest way to enter text and numerical data into a computer",
    images: [{image: "img/input/Keyboard/1.jpg",caption: "caption number fucking 1"},{image:"img/input/Keyboard/2.jpg",caption: "caption number fucking 2"},{image: "img/input/Keyboard/3.jpg",caption: "caption number fucking 3"},{image: "img/input/Keyboard/4.jpg",caption: "caption number fucking 4"},{image: "img/input/Keyboard/5.jpg",caption: "caption number fucking 5"}]
},

{
    name: "Monitor",
    description: "A monitor is an output device that displays video images and text.",
    imageSource: "img/monitor.jpg",
    full_description: "full description of mouse",
    images: [{image:"img/input/Mouse/1.jpg", caption:"hello fsdkflskjg"},{image:"img/input/Mouse/2.jpg", caption:"healkhasd"},{image:"img/input/Mouse/3.jpg", caption:"asdkhfjshadgkjdsg"}]
},
{
    name: "Headphones",
    description: "A headphone is an output device that either plug into your computer line out or your speakers. ",
    imageSource: "img/headphones-out.jpg",
    full_description: "full description of camera",
    images: [{image:"img/input/Microphone/1.jpg",name:"",caption:""},{image:"img/input/Microphone/2.jpg",name:"",caption:""}]
},
{
    name: "Speakers",
    description: "A microphone is a device that captures audio by converting sound waves into an electrical signal.",
    imageSource: "img/speakers.jpg",
    full_description: "full description of microphones",
    images: [{image:"img/input/Microphone/1.jpg",name:"",caption:""},{image:"img/input/Microphone/2.jpg",name:"",caption:""}]
}
];

$(document).ready(() => {
    loadCards(outputLessonItems);
})