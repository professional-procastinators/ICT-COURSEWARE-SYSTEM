var storageLessonItems = [{
    name: "Hard Disk Drive",
    description: "A keyboard is used to enter data into a computer or other device.",
    imageSource: "img/hdd.jpg",
    full_description: "A computer keyboard is one of the primary input devices used with a computer. Similar to an electric typewriter, a keyboard is composed of buttons that create letters, numbers, and symbols, as well as perform other functions. A keyboard uses labeled buttons as input switches. The standard QWERTY keyboard is the commonest way to enter text and numerical data into a computer",
    images: [{image: "img/input/Keyboard/1.jpg",name:"",caption: "caption number fucking 1"},
    {image:"img/input/Keyboard/2.jpg",name:"",caption: "caption number fucking 2"},
    {image: "img/input/Keyboard/3.jpg",name:"",caption: "caption number fucking 3"},]
},

{
    name: "Random Access Memory",
    description: "A mouse is a device that controls the movement of the cursor or pointer on a display screen.",
    imageSource: "img/ram.png",
    full_description: "full description of mouse",
    images: [{image:"img/input/Mouse/1.jpg", caption:"hello fsdkflskjg"},
    {image:"img/input/Mouse/2.jpg",name:"", caption:"healkhasd"},
    {image:"img/input/Mouse/3.jpg",name:"", caption:"asdkhfjshadgkjdsg"}]
},
{
    name: "Compact Disk",
    description: "A digital camera stores images digitally rather than recording them on film.",
    imageSource: "img/cd.jpg",
    full_description: "full description of camera",
    images: [{image:"img/input/Camera/1.jpg", caption:"caption for camera"},
    {image:"img/input/Camera/2.jpg",name:"", caption:"we found love right where we are"}]
},
{
    name: "Read-Only Memory",
    description: "A microphone is a device that captures audio by converting sound waves into an electrical signal.",
    imageSource: "img/rom.png",
    full_description: "full description of microphones",
    images: [{image:"img/input/Microphone/1.jpg",name:"",caption:""},{image:"img/input/Microphone/2.jpg",name:"",caption:""}]
},
{
    name: "Flash Drive",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/usb.jpg",
    full_description: "full description of microphones",
    iimages: [{image:"img/input/Microphone/1.jpg",name:"",caption:""},{image:"img/input/Microphone/2.jpg",name:"",caption:""}]
},
{
    name: "Floppy Disk",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/floppy.jpg",
    full_description: "full description of scanner",
    images: [{image:"img/input/Microphone/1.jpg",name:"",caption:""},{image:"img/input/Microphone/2.jpg",name:"",caption:""}]

}
];

$(document).ready(() => {
    loadCards(storageLessonItems);
})