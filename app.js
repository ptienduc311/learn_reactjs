// import logger from "./logger.js";

// logger("Message .......");

var name = "React Js from F8";
var price = 1000;

var course = {
    name,
    price,
    getName(){
        return this.name;
    }
};

console.log(course.getName);