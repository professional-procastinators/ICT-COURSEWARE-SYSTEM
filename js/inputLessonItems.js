var inputLessonItems = [{
    name: "Keyboard",
    description: "A keyboard is used to enter data into a computer or other device.",
    imageSource: "img/keyboard-int.jpg",
    full_description: {firstp:"Similar to an electric typewriter, a keyboard is composed of buttons that create letters, numbers, and symbols, as well as perform other functions. A keyboard uses labeled buttons as input switches.",secondp:"The standard QWERTY keyboard is the commonest way to enter text and numerical data into a computer. A keyboard uses labeled buttons as input switches. The standard QWERTY keyboard is the commonest way to enter text and numerical data into a computer. Alternatives to fixed layouts include overlay keyboards and touch screen keyboards, both allowing easy customization.", thirdp:"• Suited to: Entering text and number data into a computer system. Making selections on devices.• Advantages: Reliable for data input of text and numbers. Usually supplied with a computer so no additional cost. Specialized keyboards are available for particular purposes.• Disadvantages: Slow to enter data and prone to typographical errors with new users. Slow for accessing menus etc. and difficult to use if you want to move objects around the screen. Difficult for users unable to use a keyboard through paralysis or muscular disorder."},
    images: [{image: "img/input/Keyboard/1.jpg",name:"Flexible Keyboard",caption: "are basically a blend between standard and laptop keyboards in both functionality and purpose. A typical flexible keyboard features both large number of keys and short key distance."},
    {image:"img/input/Keyboard/2.jpg",name:"Gaming Keyboard",caption: "A dedicated gaming keyboard is much like a standard keyboard except they have a few additional features such as multimedia keys, LED screen and palm rest."},
    {image: "img/input/Keyboard/3.jpg", name:"Ergonomic Keyboard",caption: "An ergonomic keyboard is a computer keyboard designed with ergonomic considerations to minimize muscle strain and a host of related problems."}]
},

{
    name: "Mouse",
    description: "A mouse is a device that controls the movement of the cursor or pointer on a display screen.",
    imageSource: "img/mouse-int.jpg",
    full_description: {firstp:"The mouse is used to control the movement of a pointer on the screen when it is moved horizontally over a flat surface. Buttons on the mouse let you select options from menus and drag objects around the screen etc.",secondp:"A computer mouse is a handheld hardware input device that controls a cursor in a GUI and can move and select text, icons, files, and folders. For desktop computers, the mouse is placed on a flat surface such as a mouse pad or a desk and is placed in front of your computer. The pictures provided at the top are examples of a desktop computer mouse with two buttons and a wheel.", thirdp:"• Suited to: A graphical user interface where pointing with a screen pointer is combined with selection using buttons to access items / menus / hyperlinks etc.   •Advantages: Ideal for use with desktop computers. Usually supplied with a computer so no additional cost. All computer users tend to be familiar with using them.                    • Disadvantages: They need a flat space close to the computer. The mouse cannot easily be used with laptop, notebook or palmtop computers when not near a flat surface (these need a tracker ball or a touch sensitive pad called a touch pad)."},
    images: [{image:"img/input/Mouse/1.jpg", name:"Wireless Mouse" ,caption:"The Mouse without wire or cord is called wireless mouse or cordless mouse. Most wireless mice use radiofrequency (RF) technology to communicate information to your computer."},
    {image:"img/input/Mouse/2.jpg", name:"GStick Mouse",caption:"This mouse is wireless and pocket-sized. It looks like a pencil and it can be used for web browsing, office work or whatever you do with your traditional mouse, with more comfort"},
    {image:"img/input/Mouse/3.jpg",name:"Optical Mouse", caption:"An optical mouse is an computer pointing device that uses a light-emitting diode an optical sensor, and digital signal processing ( DSP ).This mouse doesn’t have mouse ball and electromechanical transducer. "}]
},
{
    name: "Camera",
    description: "A digital camera stores images digitally rather than recording them on film.",
    imageSource: "img/camera-int.jpg",
    full_description:{firstp:"A camera is a hardware device that takes photographs and consists of a lightproof box with photosensitive film or plate in the box.  A camera consists of a lens which focuses light from the scene, and a camera body which holds the image capture mechanism. ",secondp:"When a picture is taken, the camera's shutter opens and closes, exposing the photosensitive film with light recording the image onto the film. Still images stored in digital form are called image files, while moving images similarly stored are called video files. In the deprecated paradigm of photographic film for image storage, still images are simply called photographs, and moving images are called films. The still image camera is the main instrument in the art of photography and captured images may be reproduced later as a part of the process of photography, digital imaging, photographic printing. The similar artistic fields in the moving image camera domain are film, videography, and cinematography.", thirdp:"Traditional cameras capture light onto photographic plate or photographic film. Video and digital cameras use an electronic image sensor, usually a charge coupled device (CCD) or a CMOS sensor to capture images which can be transferred or stored in a memory card or other storage inside the camera for later playback or processing. "},
    images: [{image:"img/input/Camera/1.jpg", name:"Analog electronic camera", caption:"Recorded pixel signals continuously, as videotape machines did, without converting them to discrete levels"},
    {image:"img/input/Camera/2.jpg", name:"Digital Camera",caption:"Digital and movie cameras share an optical system, typically using a lens with a variable diaphragm to focus light onto an image pickup device."}]
},
{
    name: "Joystick",
    description: "A joystick is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/controller.jpg",
    full_description: "full description of microphones",
    images: [{image:"img/input/Game Controller/1.jpg",name:"Joystick",caption:"Joysticks consist of a base and a stick that can be moved in any direction. The stick can be moved slowly or quickly and in different amounts."},
    {image:"img/input/Game Controller/2.jpg",name:"",caption:""}]
},
{
    name: "Scanner",
    description: "The scanner is used to store photographs, picture, and diagrams into the computer. It saves the image in the form of a file by reading it.",
    imageSource: "img/scanner.jpg",
    full_description: "full description of scanner",
    images: [{image:"img/input/Scanner/1.jpg",name:"Flatbed",caption:"A flatbed scanner is made up of a glass pane and a moving optical CIS or CCD array. The pane is illuminated with the help of bright light planted underneath it."},
    {image:"img/input/Scanner/2.jpg",name:"Handheld",caption:"A handheld scanner is a small manual scanning device which is moved over the object that needs to be scanned.the document is fed into the horizontal or vertical slot provided in it."},
    {image:"img/input/Scanner/3.jpg",name:"Sheetfed",caption:"The prominent components of a sheetfed scanner include the sheet-feeder, scanning module, and calibration sheet"}]

},
{
    name: "Graphics Tablet",
    description: "A graphics tablet is a hardware input device that enables an artist to draw or sketch digitally using a pen or stylus.",
    imageSource: "img/tablet.jpg",
    full_description: "full description of scanner",
    images: [{image:"img/input/Graphics Tablet/1.jpg",name:"Koala Pad",caption:"The first graphics tablet for home computers was the KoalaPad. Developed by Koala Technologies in 1984, the KoalaPad was originally designed for use by the Apple II computer, but later was available for the IBM PC compatible computer as well."},
    {image:"img/input/Graphics Tablet/2.jpg",name:"",caption:""}]

}
];
$(document).ready(() => {
    loadCards(inputLessonItems);
})