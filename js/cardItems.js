
function loadCards(lessonItems) {
    for (var i = 0; i < lessonItems.length; i++) {
        // $(".container-fuild").append(`<div class="card"><div class="col-sm-4">`).append(`<div class="card">`).append(`<img class="card-img-top" src="${items[i].imageSource}" alt="Card image cap"><h4 class="card-header">Microphone</h4><div class="card-body">`).append(`<p class="card-text">${items[i].description}</p><a href="#" class="btn btn-primary">Show Lesson</a>`);
        var cardString = `
                <div class="col-sm-4">
                        <div class="card animated zoomIn">
                            <img id="${lessonItems[i].name}" class="card-img-top hvr-grow" src="${lessonItems[i].imageSource}" alt="Card image cap" data-toggle="modal" data-target="#${i}">
                            <h4 class="card-header fontsforweb_fontid_9785">${lessonItems[i].name}</h4>
                                <div class="card-body">
                                    <p class="card-text lead">${lessonItems[i].description}</p>
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
                        <h4 class="modal-title fontsforweb_fontid_9785">What is a ${lessonItems[i].name}?</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <br>
                    <div class="modal-body">
                        <div id="${i+100}" class="carousel slide" data-ride="carousel">
                         <div class="carousel-inner">
                         ${populateImageSources(lessonItems[i])}
                         </div>
                          <a class="carousel-control-prev" href="#${i+100}" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#${i+100}" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                           <span class="sr-only">Next</span>
                           </a>
                        </div>
                        <p class="lead">${lessonItems[i].full_description}</p>
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
function populateImageSources(lessonItem) {
    let string = `<div class="carousel-item active">
    <img src="${lessonItem.images[0].image}" class="d-block w-100">
    <div class="carousel-caption ">
    <h3 class="fontsforweb_fontid_9785"> ${lessonItem.images[0].name}</h3>
    <p class="lead">${lessonItem.images[0].caption}</p>
    </div>
    </div>`;
    for (let i = 1; i < lessonItem.images.length; i++) {
        string += 
        `<div class="carousel-item">
          <img src="${lessonItem.images[i].image}" class="d-block w-100">
          <div class="carousel-caption d-none d-md-block">
             <h3 class="fontsforweb_fontid_9785">${lessonItem.images[i].name}</h3>
             <p class="lead">${lessonItem.images[i].caption}</p>
             </div>
        </div>`;
    }
    return string;
}