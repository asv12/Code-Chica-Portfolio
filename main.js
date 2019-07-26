document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    document.getElementById("name").innerHTML = " My name is Abhishikta Vadlamudi, though most people call me Abhi. My name means a cute and laughing person.";
}
    function mySchool() {
    document.getElementById("school").innerHTML = "I am an incoming Freshmen at Round Rock High School.";
}

function myCareer() {
    document.getElementById("career").innerHTML = "When I grow up I want to be either a Bio Medical Engineer or a Pediatricion. I know I want to go into a field that combines my love for engineering and my interest in the medical field.";
}

function myHobbies() {
    document.getElementById("hobbies").innerHTML = "I love to read and dance because it helps me express my feelings. I also love to play volleybal, draw, and practice Taekwondo.";
}

