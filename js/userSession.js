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
                    lesson.lessonsMap.set('haveFinishedAll',true);
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
                         lesson.lessonsMap.set('haveFinishedAll',true);
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
if(localStorage.getItem("inputLessonsMap")===null){
    let inputLessonNames = [];
    inputLessonItems.forEach((item)=>{inputLessonNames.push(item.name);console.log(item.name);});
    inputLesson = new Lesson(inputLessonNames,"inputLessonsMap");
}
if(localStorage.getItem("outputLessonsMap")===null){
    let inputLessonNames = [];
    inputLessonItems.forEach((item)=>{inputLessonNames.push(item.name);console.log(item.name);});
    inputLesson = new Lesson(inputLessonNames,"outputLessonsMap");
}
if(localStorage.getItem("storageLessonsMap")===null){
    let inputLessonNames = [];
    inputLessonItems.forEach((item)=>{inputLessonNames.push(item.name);console.log(item.name);});
    inputLesson = new Lesson(inputLessonNames,"storageLessonsMap");
}

