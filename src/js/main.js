/* Av Sabina Liljeström */
"use strict";
const url = "https://dahlgren.miun.se/ramschema_ht23.php";
window.onload = init;

async function init(){
    try {
        //fetch-anrop
        const response = await fetch (url);
        const courses = await response.json();
        displayCourses(courses);
     } catch {
            document.getElementById("error").innerHTML = "<p>något gick fel vid inläsning av data, prova igen senare!</p>"
        }
}

function displayCourses(courses){
const coursesEL = document.getElementById("courses-list");
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
