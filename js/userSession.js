class Lesson {
    constructor(lessonsIDArray, lessonName) {
        this.hasWatchedVid = false;
        this.lessonsMap = Lesson.setUpLessonsMap(lessonsIDArray);
        this.lessonName = lessonName;
        Lesson.setUpLessonsButtonEvents(this);
    }

    static setUpLessonsMap(lessonsIDArray) {
        let lessonsMap = new Map();

        lessonsIDArray.forEach(idVal => {
            lessonsMap.set(idVal, false);
        });
        lessonsMap.set('hasWatchedVid', false);
        lessonsMap.set('haveFinishedAll', 'done');
        return lessonsMap;
    }
    static setUpLessonsButtonEvents(lesson) {
        $(document).ready(() => {
            console.log("ready");
            if (localStorage.getItem("isAlreadyNotified") === null || Array.from(lesson.lessonsMap.values()).includes(false)) {
                localStorage.setItem("isAlreadyNotified", false);
            }
            else{
                localStorage.setItem("isAlreadyNotified", true);
            }
            $(`[id='btn-vid']`).click(() => {
                console.log("clicked on watch vid");
                lesson.lessonsMap.set('hasWatchedVid', true);
                if (!Array.from(lesson.lessonsMap.values()).includes(false) && !JSON.parse(localStorage.getItem("isAlreadyNotified"))) {
                    localStorage.setItem("isAlreadyNotified", true);
                    console.log("successfully finished lesson");
                    lesson.lessonsMap.set('haveFinishedAll', true);
                    Swal.fire({
                        title: `Unlocked!`,
                        text: `Congratulations! You've completed the ${document.getElementById("LessonName").textContent} Lesson! You've unlocked the quiz for ${document.getElementById("LessonName").textContent}.`,
                        type: 'info'
                    });
                }
                //store the inputLessonMap to localStorage
                localStorage.setItem(`${lesson.lessonName}`, JSON.stringify(Array.from(lesson.lessonsMap.entries())));
            });
            for (let key of lesson.lessonsMap.keys()) {

                //sets up each key button event to update to true once the user clicked on the lesson
                //key = Lesson name ex: Mouse, Keyboard

                $(`[id='${key}']`).click(() => {
                    console.log(`${key} was set to true`);
                    lesson.lessonsMap.set(key, true);
                    //lesson quiz is accessible once all the lessons have been watched
                    if (!Array.from(lesson.lessonsMap.values()).includes(false) && !JSON.parse(localStorage.getItem("isAlreadyNotified"))) {
                        localStorage.setItem("isAlreadyNotified", true);
                        console.log("successfully finished lesson");
                        lesson.lessonsMap.set('haveFinishedAll', true);
                        Swal.fire({
                            title: `Unlocked!`,
                            text: `Congratulations! You've completed the ${document.getElementById("LessonName").textContent} Lesson! You've unlocked the quiz for ${document.getElementById("LessonName").textContent}.`,
                            type: 'info'
                        });
                    }
                    //local storage will be set everytime a lesson button is clicked
                    localStorage.setItem(`${lesson.lessonName}`, JSON.stringify(Array.from(lesson.lessonsMap.entries())));
                    // console.log(localStorage.getItem('inputLessonMap'));
                    console.log(lesson.lessonsMap);
                });
            }
        });
    }
}

//set up inputLessonMapSession
var url_string = window.location.href //window.location.href
var url = new URL(url_string);
let key1 = url.searchParams.get("key1");
console.log(key1);
if (key1 === "0") {
    console.log("inputLessonsMap created")
    let inputLessonNames = [];
    inputLessonItems.forEach((item) => { inputLessonNames.push(item.name); console.log(item.name); });
    inputLesson = new Lesson(inputLessonNames, "inputLessonsMap");
    if (localStorage.getItem("inputLessonsMap") !== null) {
        console.log("you just went here")
        let array = JSON.parse(localStorage.getItem("inputLessonsMap"));
        inputLesson.lessonsMap = new Map(array.map(i => [i[0], i[1]]));
    }
}
if (key1 === "1") {
    console.log("outputLessonsMap created")

    let outputLessonNames = [];
    outputLessonItems.forEach((item) => { outputLessonNames.push(item.name); console.log(item.name); });
    outputLesson = new Lesson(outputLessonNames, "outputLessonsMap");
    if (localStorage.getItem("outputLessonsMap") !== null) {
        console.log("you just went here");
        let array = JSON.parse(localStorage.getItem("outputLessonsMap"));
        outputLesson.lessonsMap = new Map(array.map(i => [i[0], i[1]]));
    }
}
if (key1 === "2") {
    console.log("storageLessonsMap created")

    let storageLessonNames = [];
    storageLessonItems.forEach((item) => { storageLessonNames.push(item.name); console.log(item.name); });
    storageLesson = new Lesson(storageLessonNames, "storageLessonsMap");
    if (localStorage.getItem("storageLessonsMap") !== null) {
        console.log("you just went here")
        let array = JSON.parse(localStorage.getItem("storageLessonsMap"));
        storageLesson.lessonsMap = new Map(array.map(i => [i[0], i[1]]));
    }
}

