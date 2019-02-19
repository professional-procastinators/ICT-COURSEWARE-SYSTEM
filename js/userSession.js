class Lesson{
    constructor(lessonsIDArray, lessonName){
        this.hasWatchedVid = false;
        this.lessonsMap = Lesson.setUpLessonsMap(lessonsIDArray);
        this.lessonName = lessonName;
        Lesson.setUpLessonsButtonEvents(this);
    }

    static setUpLessonsMap(lessonsIDArray){
        let lessonsMap = new Map();

        lessonsIDArray.forEach(idVal => {
           lessonsMap.set(idVal,false);
        });
        lessonsMap.set('hasWatchedVid',false);
        lessonsMap.set('haveFinishedAll','done');
        return lessonsMap;
    }
    static setUpLessonsButtonEvents(lesson){
        $(document).ready(()=>{
            console.log("ready");
            $(`[id='btn-vid']`).click(()=>{
                console.log("clicked on watch vid");
                lesson.lessonsMap.set('hasWatchedVid',true);
                if(!Array.from(lesson.lessonsMap.values()).includes(false)){
                    console.log("successfully finished lesson");
                    lesson.lessonsMap.set('haveFinishedAll',true);
                    Swal.fire({
                        title: `Unlocked!`,
                        text: `Congratulations! You've completed the Input Device Lesson! You've unloced the quiz for Input Devices.`,
                        type: 'info'
                    });
                }
                //store the inputLessonMap to localStorage
                localStorage.setItem(`${lesson.lessonName}`,JSON.stringify(Array.from(lesson.lessonsMap.entries())));
            });
            for (let key of lesson.lessonsMap.keys()) {
        
                //sets up each key button event to update to true once the user clicked on the lesson
                //key = Lesson name ex: Mouse, Keyboard
                
                $(`[id='${key}']`).click(()=>{
                    console.log(`${key} was set to true`);
                    lesson.lessonsMap.set(key,true);
                    //lesson quiz is accessible once all the lessons have been watched
                     if(!Array.from(lesson.lessonsMap.values()).includes(false)){
                        console.log("successfully finished lesson");
                         lesson.lessonsMap.set('haveFinishedAll',true);
                         Swal.fire({
                            title: `Unlocked!`,
                            text: `Congratulations! You've completed the Input Device Lesson! You've unloced the quiz for Input Devices.`,
                            type: 'info'
                        });
                     }
                     //local storage will be set everytime a lesson button is clicked
                     localStorage.setItem(`${lesson.lessonName}`,JSON.stringify(Array.from(lesson.lessonsMap.entries())));
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
if(key1==="0"){
    let inputLessonNames = [];
    inputLessonItems.forEach((item)=>{inputLessonNames.push(item.name);console.log(item.name);});
    inputLesson = new Lesson(inputLessonNames,"inputLessonsMap");
    if(localStorage.getItem("inputLessonsMap")!==null){
        console.log("you just went here")
        inputLesson.lessonsMap = JSON.parse(localStorage.getItem("inputLessonsMap"));
    }
}
if(key1==="1"){
    let outputLessonNames = [];
    outputLessonItems.forEach((item)=>{storageLessonName.push(item.name);console.log(item.name);});
    outputLesson = new Lesson(outputLessonNames,"outputLessonsMap");
    if(localStorage.getItem("outputLessonsMap")!==null){
        console.log("you just went here")
        outputLesson.lessonsMap = JSON.parse(localStorage.getItem("outputLessonsMap"));
    }
}
if(key1==="2"){
    let storageLessonName = [];
    storageLessonItems.forEach((item)=>{storageLessonName.push(item.name);console.log(item.name);});
    storageLesson = new Lesson(storageLessonName,"storageLessonsMap");
    if(localStorage.getItem("storageLessonsMap")!==null){
        console.log("you just went here")
        storageLesson.lessonsMap = JSON.parse(localStorage.getItem("storageLessonMap"));
    }
}

