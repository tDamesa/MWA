function isWeekend(){
    const todayDate=new Date();
    const day=todayDate.getDay();
    let weekArr= ["weekend", "weekday","weekday","weekday","weekday","weekday","weekend"];
    return weekArr[day];
}
console.log(isWeekend())
// weekday