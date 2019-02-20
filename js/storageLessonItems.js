var storageLessonItems = [{
    name: "Hard Disk Drive",
    description: "A hard disk drive is a non-volatile memory hardware device that permanently stores and retrieves data on a computer.",
    imageSource: "img/hdd.jpg",
    full_description: "A computer keyboard is one of the primary input devices used with a computer. Similar to an electric typewriter, a keyboard is composed of buttons that create letters, numbers, and symbols, as well as perform other functions. A keyboard uses labeled buttons as input switches. The standard QWERTY keyboard is the commonest way to enter text and numerical data into a computer",
    images: [{image: "img/storage/disk/1.jpg",name:"Solid-State Drive",caption: "An SSD is a storage medium that uses non-volatile memory as a means of holding and accessing data."},
    {image:"img/storage/disk/2.jpg",name:"Hard Drive",caption: "caption number fucking 2"},
    {image: "img/storage/disk/3.jpg",name:"Hard Drive",caption: "caption number fucking 3"},]
},

{
    name: "Random Access Memory",
    description: "A RAM is a hardware device that allows information to be stored and retrieved on a computer.",
    imageSource: "img/ram.png",
    full_description: "full description of mouse",
    images: [{image:"img/storage/ram/1.jpg",name:"RAM" ,caption:""},
    {image:"img/storage/ram/2.jpg",name:"RAM", caption:""}]
},
{
    name: "Compact Disc",
    description: "A Compact Disc is used to store data so that may be retrieved or executed at a later date.",
    imageSource: "img/cd.jpg",
    full_description: "full description of camera",
    images: [{image:"img/storage/cd/1.jpg",name:"Compact Disc" ,caption:""},
    {image:"img/storage/cd/2.jpg",name:"Compact Disc", caption:""}]
},
{
    name: "Read-Only Memory",
    description: "A ROM is a storage medium that is used with computers and other electronic devices.",
    imageSource: "img/rom.png",
    full_description: "full description of microphones",
    images: [{image:"img/storage/rom/1.jpg",name:"ROM",caption:""},{image:"img/storage/rom/2.jpg",name:"ROM",caption:""}]
},
{
    name: "Flash Drive",
    description: "A flash drive is a portable storage device. It is often the size of a human thumb and connects to a computer via a USB port.",
    imageSource: "img/usb.jpg",
    full_description: "full description of microphones",
    images: [{image:"img/storage/usb/1.jpg",name:"Flash Drive",caption:""},{image:"img/storage/usb/2.jpg",name:"Flash Drive",caption:""}]
},
{
    name: "Floppy Disk",
    description: "A floppy diskette is a type of storage media, capable of storing electronic data, like a computer file.",
    imageSource: "img/floppy.jpg",
    full_description: "full description of scanner",
    images: [{image:"img/storage/floppy/1.jpg",name:"Floppy Disk",caption:""},{image:"img/storage/floppy/2.jpg",name:"FLOPPY DISK",caption:""}]

}
];

$(document).ready(() => {
    loadCards(storageLessonItems);
})