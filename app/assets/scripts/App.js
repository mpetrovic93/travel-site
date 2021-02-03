import '../styles/styles.css'
//import Person from './modules/Person'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

let mobilemenu = new MobileMenu();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

if(module.hot){
    module.hot.accept()
}















/* Lesson example code below this line */ 

/*let john = new Person("John Doe", "blue");
john.greet();*/

/*let jane = new Person("Jane Smith", "green");
jane.greet();*/