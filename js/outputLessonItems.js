var outputLessonItems = [{
    name: "Keyboard",
    description: "A keyboard is used to enter data into a computer or other device.",
    imageSource: "img/keyboard-int.jpg",
    full_description: "A computer keyboard is one of the primary input devices used with a computer. Similar to an electric typewriter, a keyboard is composed of buttons that create letters, numbers, and symbols, as well as perform other functions. A keyboard uses labeled buttons as input switches. The standard QWERTY keyboard is the commonest way to enter text and numerical data into a computer",
    images: [{image: "img/input/Keyboard/1.jpg",caption: "caption number fucking 1"},{image:"img/input/Keyboard/2.jpg",caption: "caption number fucking 2"},{image: "img/input/Keyboard/3.jpg",caption: "caption number fucking 3"},{image: "img/input/Keyboard/4.jpg",caption: "caption number fucking 4"},{image: "img/input/Keyboard/5.jpg",caption: "caption number fucking 5"}]
},

{
    name: "Mouse",
    description: "A mouse is a device that controls the movement of the cursor or pointer on a display screen.",
    imageSource: "img/mouse-int.jpg",
    full_description: "full description of mouse",
    images: [{image:"img/input/Mouse/1.jpg", caption:"hello fsdkflskjg"},{image:"img/input/Mouse/2.jpg", caption:"healkhasd"},{image:"img/input/Mouse/3.jpg", caption:"asdkhfjshadgkjdsg"}]
},
{
    name: "Camera",
    description: "A digital camera stores images digitally rather than recording them on film.",
    imageSource: "img/camera-int.jpg",
    full_description: "full description of camera",
    images: [{image:"img/input/Camera/1.jpg", caption:"caption for camera"},{image:"img/input/Camera/2.jpg", caption:"we found love right where we are"}, {image:"img/input/Camera/3.jpg",caption:"verypoor and sad"},{image:"img/input/Camera/4.jpg", caption:"atik ra"}]
},
{
    name: "Microphone",
    description: "A microphone is a device that captures audio by converting sound waves into an electrical signal.",
    imageSource: "img/microphone-int.jpg",
    full_description: "full description of microphones",
    images: ["img/input/Microphone/1.jpg","img/input/Microphone/2.jpg","img/input/Microphone/3.jpg","img/input/Microphone/4.jpg"]
},
{
    name: "Game Controller",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/controller.jpg",
    full_description: "full description of microphones",
    images: ["img/input/Game Controller/1.jpg","img/input/Game Controller/2.jpg","img/input/Game Controller/3.jpg"]
},
{
    name: "Scanner",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/scanner.jpg",
    full_description: "full description of scanner",
    images: ["img/input/Scanner/1.jpg","img/input/Scanner/2.jpg"]

},
{
    name: "Touch Screen",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/touch-screen.jpg",
    full_description: "full description of scanner",
    images: ["img/input/Touch Screen/1.jpg","img/input/Touch Screen/2.jpg","img/input/Touch Screen/3.jpg","img/input/Touch Screen/4.jpg"]
},
{
    name: "Graphics Tablet",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/tablet.jpg",
    full_description: "full description of scanner",
    images: ["img/input/Graphics Tablet/1.jpg","img/input/Graphics Tablet/2.jpg","img/input/Graphics Tablet/3.jpg","img/input/Graphics Tablet/4.jpg"]

}
];

$(document).ready(() => {
    loadCards(outputLessonItems);
})