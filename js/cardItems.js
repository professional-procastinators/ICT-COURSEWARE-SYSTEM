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