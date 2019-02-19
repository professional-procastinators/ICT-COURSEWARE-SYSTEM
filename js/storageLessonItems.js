var storageLessonItems = [{
    name: "Hard Disk Drive",
    description: "A hard disk drive is a non-volatile memory hardware device that permanently stores and retrieves data on a computer.",
    imageSource: "img/hdd.jpg",
    full_description: "A computer keyboard is one of the primary input devices used with a computer. Similar to an electric typewriter, a keyboard is composed of buttons that create letters, numbers, and symbols, as well as perform other functions. A keyboard uses labeled buttons as input switches. The standard QWERTY keyboard is the commonest way to enter text and numerical data into a computer",
    images: [{image: "img/input/Keyboard/1.jpg",name:"",caption: "caption number fucking 1"},
    {image:"img/input/Keyboard/2.jpg",name:"",caption: "caption number fucking 2"},
    {image: "img/input/Keyboard/3.jpg",name:"",caption: "caption number fucking 3"},]
},

{
    name: "Random Access Memory",
    description: "A RAM is a hardware device that allows information to be stored and retrieved on a computer.",
    imageSource: "img/ram.png",
    full_description: "full description of mouse",
    images: [{image:"img/input/Mouse/1.jpg", caption:"hello fsdkflskjg"},
    {image:"img/input/Mouse/2.jpg",name:"", caption:"healkhasd"},
    {image:"img/input/Mouse/3.jpg",name:"", caption:"asdkhfjshadgkjdsg"}]
},
{
    name: "Compact Disc",
    description: "A Compact Disc is used to store data so that may be retrieved or executed at a later date.",
    imageSource: "img/cd.jpg",
    full_description: "full description of camera",
    images: [{image:"img/input/Camera/1.jpg", caption:"caption for camera"},
    {image:"img/input/Camera/2.jpg",name:"", caption:"we found love right where we are"}]
},
{
    name: "Read-Only Memory",
    description: "A ROM is a storage medium that is used with computers and other electronic devices.",
    imageSource: "img/rom.png",
    full_description: "full description of microphones",
    images: [{image:"img/input/Microphone/1.jpg",name:"",caption:""},{image:"img/input/Microphone/2.jpg",name:"",caption:""}]
},
{
    name: "Flash Drive",
    description: "A flash drive is a portable storage device. It is often the size of a human thumb (hence the name), and connects to a computer via a USB port.",
    imageSource: "img/usb.jpg",
    full_description: "full description of microphones",
    images: [{image:"img/input/Microphone/1.jpg",name:"",caption:""},{image:"img/input/Microphone/2.jpg",name:"",caption:""}]
},
{
    name: "Floppy Disk",
    description: "A floppy diskette is a type of storage media, capable of storing electronic data, like a computer file.",
    imageSource: "img/floppy.jpg",
    full_description: "full description of scanner",
    images: [{image:"img/input/Microphone/1.jpg",name:"",caption:""},{image:"img/input/Microphone/2.jpg",name:"",caption:""}]

}
];

$(document).ready(() => {
    loadCards(storageLessonItems);
})