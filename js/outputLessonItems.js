var outputLessonItems = [{
    name: "Printer",
    description: "A printer is an external hardware output device that takes the electronic data stored on a computer and generates a hard copy of it.",
    imageSource: "img/printer-out.png",
    full_description: "A computer keyboard is one of the primary input devices used with a computer. Similar to an electric typewriter, a keyboard is composed of buttons that create letters, numbers, and symbols, as well as perform other functions. A keyboard uses labeled buttons as input switches. The standard QWERTY keyboard is the commonest way to enter text and numerical data into a computer",
    images: [{image: "img/output/printer/1.jpg",name:"Laser-Jet Printer",caption: "A laser printer works like a photocopy machine. Laser printers produce images on paper by directing a laser beam at a mirror which bounces the beam onto a drum"},
    {image:"img/output/printer/2.jpg",name:"Dot-Matrix Printer",caption: "The dot-matrix printer uses print heads containing from 9 to 24 pins. These pins produce patterns of dots on the paper to form the individual characters."},
    {image:"img/output/printer/3.jpg",name:"Plotter",caption: "Rely on special pens to draw images on the paper. These printers were popular for engineering and architectural applications."}]
},

{
    name: "Monitor",
    description: "A monitor is an output device that displays video images and text.",
    imageSource: "img/monitor.jpg",
    full_description: "full description of mouse",
    images: [{image:"img/output/monitors/1.jpg",name:"Cathode-ray tube",caption:"a CRT is the electron beams in a monitor that move across your screen either interlaced or non-interlaced, hitting phosphor dots on the inside glass tube."},
    {image:"img/output/monitors/2.jpg",name:"Liquid Crystal Display (LCD)",caption:"a computer monitor or display that uses LCD technology to show clear images, and is found mostly in laptop computers and flat panel monitors"}]
},
{
    name: "Headphones",
    description: "A headphone is an output device that either plug into your computer line out or your speakers. ",
    imageSource: "img/headphones-out.jpg",
    full_description: "full description of camera",
    images: [{image:"img/output/headset/1.jpg",name:"On-Ear Headphones",caption:"This style of headphones is the superior model for noise reduction because they create an intimate environment between you and the sound you’re listening to."},
    {image:"img/output/headset/2.jpg",name:"Noise-Cancelling Headphones",caption:"With some special technology built-in, these literally actively reduce the sound that you hear from your surroundings to create a quiet environment for listening to your music or sound. "},
    {image:"img/output/headset/3.jpg",name:"Bluetooth Headphones",caption:"headphones used to offer wireless connectivity to various devices through radio transmitter technology (RF) — good ol’ sound waves being transmitted through the air and into a receiver."}]
},
{
    name: "Speakers",
    description: "A computer speaker is a hardware device that connects to a computer to generate sound.",
    imageSource: "img/speaker.jpg",
    full_description: "full description of microphones",
    images: [{image:"img/output/speakers/2.jpg",name:"",caption:""},{image:"img/output/speakers/1.jpg",name:"",caption:""}]
},
{
    name: "Projector",
    description: "A computer speaker is a hardware device that connects to a computer to generate sound.",
    imageSource: "img/projector.jpg",
    full_description: "full description of microphones",
    images: [{image:"img/output/projector/1.jpg",name:"",caption:""}
    ,{image:"img/output/projector/2.jpg",name:"",caption:""},
    {image:"img/output/projector/3.jpg",name:"",caption:""}]
}
];

$(document).ready(() => {
    loadCards(outputLessonItems);
})