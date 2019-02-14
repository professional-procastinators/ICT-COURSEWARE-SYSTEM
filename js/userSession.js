class Lesson{
    constructor(lessonsIDArray){
        this.hasWatchedVid = false;
        this.lessonsMap = Lesson.setUpLessonsMap(lessonsIDArray);
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
}
let inputLessonNames = [];
inputLessonItems.forEach((item)=>{inputLessonNames.push(item.name);console.log(item.name);});
let inputLesson = new Lesson(inputLessonNames);
$(document).ready(()=>{
    console.log("ready");
    $(`[id='btn-vid']`).click(()=>{
        console.log("clicked on watch vid");
        inputLesson.lessonsMap.set('hasWatchedVid',true);
        if(!Array.from(inputLesson.lessonsMap.values()).includes(false)){
            inputLesson.lessonsMap.set('haveFinishedAll',true);
        }
        //store the inputLessonMap to localStorage
        localStorage.setItem("inputLessonMap",JSON.stringify(Array.from(inputLesson.lessonsMap.entries())));
    });
    for (let key of inputLesson.lessonsMap.keys()) {

        //sets up each key button event to update to true once the user clicked on the lesson
        //key = Lesson name ex: Mouse, Keyboard
        
        $(`[id='${key}']`).click(()=>{
            console.log(`${key} was set to true`);
            inputLesson.lessonsMap.set(key,true);
            //lesson quiz is accessible once all the lessons have been watched
             if(!Array.from(inputLesson.lessonsMap.values()).includes(false)){
                 inputLesson.lessonsMap.set('haveFinishedAll',true);
             }
             //local storage will be set everytime a lesson button is clicked
             localStorage.setItem("inputLessonMap",JSON.stringify(Array.from(inputLesson.lessonsMap.entries())));
            // console.log(localStorage.getItem('inputLessonMap'));
            console.log(inputLesson.lessonsMap);
        });
    }
});