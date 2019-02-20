var outputLessonItems = [{
    name: "Printer",
    description: "A printer is an external hardware output device that takes the electronic data stored on a computer and generates a hard copy of it.",
    imageSource: "img/printer-out.png",
    full_description:  {firstp:"The choice of print technology has a great effect on the cost of the printer and cost of operation, speed, quality and permanence of documents, and noise. Some printer technologies do not work with certain types of physical media, such as carbon paper or transparencies.",secondp:"A second aspect of printer technology that is often forgotten is resistance to alteration: liquid ink, such as from an inkjet head or fabric ribbon, becomes absorbed by the paper fibers, so documents printed with liquid ink are more difficult to alter than documents printed with toner or solid inks, which do not penetrate below the paper surface. Cheques can be printed with liquid ink or on special cheque paper with toner anchorage so that alterations may be detected.[7] The machine-readable lower portion of a cheque must be printed using MICR toner or ink. Banks and other clearing houses employ automation equipment that relies on the magnetic flux from these specially printed characters to function properly.", thirdp:"Personal printers are primarily designed to support individual users, and may be connected to only a single computer. These printers are designed for low-volume, short-turnaround print jobs, requiring minimal setup time to produce a hard copy of a given document. However, they are generally slow devices ranging from 6 to around 25 pages per minute (ppm), and the cost per page is relatively high. However, this is offset by the on-demand convenience. Some printers can print documents stored on memory cards or from digital cameras and scanners.Networked or shared printers are designed for high-volume, high-speed printing. They are usually shared by many users on a network and can print at speeds of 45 to around 100 ppm.[6] The Xerox 9700 could achieve 120 ppm. A virtual printer is a piece of computer software whose user interface and API resembles that of a printer driver, but which is not connected with a physical computer printer. A virtual printer can be used to create a file which is an image of the data which would be printed, for archival purposes or as input to another program, for example to create a PDF or to transmit to another system or user. A 3D printer is a device for making a three-dimensional object from a 3D model or other electronic data source through additive processes in which successive layers of material (including plastics, metals, food, cement, wood, and other materials) are laid down under computer control. It is called a printer by analogy with an inkjet printer which produces a two-dimensional document by a similar process of depositing a layer of ink on paper."},
    images: [{image: "img/output/printer/1.jpg",name:"Laser-Jet Printer",caption: "A laser printer works like a photocopy machine. Laser printers produce images on paper by directing a laser beam at a mirror which bounces the beam onto a drum"},
    {image:"img/output/printer/2.jpg",name:"Dot-Matrix Printer",caption: "The dot-matrix printer uses print heads containing from 9 to 24 pins. These pins produce patterns of dots on the paper to form the individual characters."}]
},

{
    name: "Monitor",
    description: "A monitor is an output device that displays video images and text.",
    imageSource: "img/monitor.jpg",
    full_description: {firstp:"A monitor is made up of circuitry, a screen, a power supply, buttons to adjust screen settings, and casing that holds all of these components.",secondp:"The term monitor is often used synonymously with computer screen or display. The monitor displays the computer's user interface and open programs, allowing the user to interact with the computer, typically using the keyboard and mouse.Older computer monitors were built using cathode ray tubes (CRTs), which made them rather heavy and caused them to take up a lot of desk space. Most modern monitors are built using LCD technology and are commonly referred to as flat screen displays. These thin monitors take up much less space than the older CRT displays. This means people with LCD monitors have more desk space to clutter up with stacks of papers, pens, and other objects.", thirdp:"The advent of display technology has paved the way for the continuous evolution of the monitor, whether it's for computers, television, mobile devices or any device that has a display. The current contenders for top-tier technology being used for display devices includes Super LCD 3 (SLCD3) and Super AMOLED. It should be noted that LED displays are actually just a kind of LCD display that use LED lights as backlight illumination. Originally, computer monitors were used for data processing while television receivers were used for entertainment. From the 1980s onwards, computers (and their monitors) have been used for both data processing and entertainment, while televisions have implemented some computer functionality. The common aspect ratio of televisions, and computer monitors, has changed from 4:3 to 16:10, to 16:9. Modern computer monitors are easily interchangeable with conventional television sets. However, as computer monitors do not necessarily include components such as a television tuner and speakers, it may not be possible to use a computer monitor as a television without external components."},
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
    description: "A projector is an output device that can take images generated by a computer and reproduce them by projection onto a screen.",
    imageSource: "img/projector.jpg",
    full_description: "full description of projector",
    images: [{image:"img/output/projector/1.jpg",name:"Video Projector",caption:"an image projector that receives a video signal and projects the corresponding image on a projection screen using a lens system."}
    ,{image:"img/output/projector/2.jpg",name:"CRT Projector",caption:"a video projector that uses a small, high-brightness cathode ray tube as the image generating element."},
    {image:"img/output/projector/3.jpg",name:"Handheld Projector",caption:"an image projector in a handheld device."}]
}
];

$(document).ready(() => {
    loadCards(outputLessonItems);
})