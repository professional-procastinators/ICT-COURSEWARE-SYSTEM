var inputLessonItems = [{
    name: "Keyboard",
    description: "A keyboard is used to enter data into a computer or other device.",
    imageSource: "img/keyboard-int.jpg",
    full_description: "A computer keyboard is one of the primary input devices used with a computer. Similar to an electric typewriter, a keyboard is composed of buttons that create letters, numbers, and symbols, as well as perform other functions. A keyboard uses labeled buttons as input switches. The standard QWERTY keyboard is the commonest way to enter text and numerical data into a computer"
},

{
    name: "Mouse",
    description: "A mouse is a device that controls the movement of the cursor or pointer on a display screen.",
    imageSource: "img/mouse-int.jpg",
    full_description: "full description of mouse"
},
{
    name: "Camera",
    description: "A digital camera stores images digitally rather than recording them on film.",
    imageSource: "img/camera-int.jpg",
    full_description: "full description of camera",
},
{
    name: "Microphone",
    description: "A microphone is a device that captures audio by converting sound waves into an electrical signal.",
    imageSource: "img/microphone-int.jpg",
    full_description: "full description of microphones",
},
{
    name: "Game Controller",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/controller.jpg",
    full_description: "full description of microphones",
},
{
    name: "Scannner",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/scanner.jpg",
    full_description: "full description of scanner",
},
{
    name: "Touch Screen",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/touch-screen.jpg",
    full_description: "full description of scanner",
},
{
    name: "Graphics Tablet",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/tablet.jpg",
    full_description: "full description of scanner",
},
{
    name: "Scannner",
    description: "A game controller is a peripheral device designed to be connected to a computer or console gaming system.",
    imageSource: "img/scanner.jpg",
    full_description: "full description of scanner",
}
];

function loadCards(inputLessonItems) {
    for (var i = 0; i < inputLessonItems.length; i++) {
        // $(".container-fuild").append(`<div class="card"><div class="col-sm-4">`).append(`<div class="card">`).append(`<img class="card-img-top" src="${items[i].imageSource}" alt="Card image cap"><h4 class="card-header">Microphone</h4><div class="card-body">`).append(`<p class="card-text">${items[i].description}</p><a href="#" class="btn btn-primary">Show Lesson</a>`);
        var cardString = `
                <div class="col-sm-4">
                    <div class="card animated zoomIn">
                        <img id="${inputLessonItems[i].name}" class="card-img-top" src="${inputLessonItems[i].imageSource}" alt="Card image cap" data-toggle="modal" data-target="#${i}">
                        <h4 class="card-header fontsforweb_fontid_9785">${inputLessonItems[i].name}</h4>
                            <div class="card-body">
                                <p class="card-text lead">${inputLessonItems[i].description}</p>
                            </div>
                    </div>
                </div>`;
        $('.card-deck').append(cardString);

        //load modal
        var modalString = `
        <div class="modal fade animated bounceInLeft" id="${i}">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title fontsforweb_fontid_9785">What is a ${inputLessonItems[i].name}?</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p class="lead">${inputLessonItems[i].full_description}
                        </p>

                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="..." class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;
        $(".card-deck").append(modalString);
    }
}
$(document).ready(() => {
    loadCards(inputLessonItems);
})