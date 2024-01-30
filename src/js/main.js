/* Av Sabina Liljeström */
"use strict";
const url = "https://dahlgren.miun.se/ramschema_ht23.php";
const searchBar = document.getElementById ("searchBar")
let courses = [];
let coursesCodeEL = document.getElementById("course-code");
let coursesNameEl = document.getElementById("course-name");
let coursesProgressionEl = document.getElementById ("course-progression");
//Händelsehanterare
coursesCodeEL.addEventListener ("click", sortCourseCode, false); 
coursesNameEl.addEventListener ("click", sortCourseName, false);
coursesProgressionEl.addEventListener ("click", sortCourseProgression, false);

searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredCourses = courses.filter ((course)=> {
       return (
        course.code.toLowerCase().includes(searchString) ||
        course.coursename.toLowerCase().includes(searchString)
       );
       });
    displayCourses(filteredCourses);
});

window.onload = init;

async function init(){
    try {
        //fetch-anrop
        const response = await fetch (url);
        courses = await response.json();
        displayCourses(courses);
     } catch {
            document.getElementById("error").innerHTML = "<p>något gick fel vid inläsning av data, prova igen senare!</p>"
        }
}

function displayCourses(courses){
const coursesEL = document.getElementById("courses-list");
coursesEL.innerHTML =""; //rensar tabellen innan nya värden skrivs ut
courses.forEach((course)=> {
coursesEL.innerHTML+=`
<tr>
    <td>${course.code}</td>
    <td> ${course.coursename} </td>
<td> ${course.progression}<td>
    </tr>
    `;
});
}

async function sortCourseCode() {
    try {
        //fetch-anrop
        const response = await fetch (url);
        courses = await response.json();
        courses.sort((a , b) => (a.code > b.code) ? 1 : -1);
        displayCourses(courses);
     } catch {
            document.getElementById("error").innerHTML = "<p>något gick fel vid inläsning av data, prova igen senare!</p>"
        }
}

async function sortCourseName() {
    try {
        //fetch-anrop
        const response = await fetch (url);
        courses = await response.json();
        courses.sort((a , b) => (a.coursename > b.coursename) ? 1 : -1);
        displayCourses(courses);
     } catch {
            document.getElementById("error").innerHTML = "<p>något gick fel vid inläsning av data, prova igen senare!</p>"
        }
}
async function sortCourseProgression() {
    try {
        //fetch-anrop
        const response = await fetch (url);
        courses = await response.json();
        courses.sort((a , b) => (a.progression > b.progression) ? 1 : -1);
        
        displayCourses(courses);
     } catch {
            document.getElementById("error").innerHTML = "<p>något gick fel vid inläsning av data, prova igen senare!</p>"
        }
}