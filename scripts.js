document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function goToResumeLink(){
    var driveLink = 'https://drive.google.com/file/d/1Brg1krqByow3s7ETX5qsl12D5wD_VDHX/view?usp=sharing';
    window.open(driveLink,'_blank');
}

function getProject1Details(){
    let project1Link = "https://babloo19.ccbp.tech/";
    window.open(project1Link,'_blank');
}
function getProject2Details(){
    let project2Link = "https://github.com/RishikeshEsargundi/Spam-Email-Classifier";
    window.open(project2Link,'_blank');
}
function getProject3Details(){
    let project3Link = "https://github.com/RishikeshEsargundi/Employee-Layoff-Prediction-ML";
    window.open(project3Link,'_blank');
}
const projectButton1Ele = document.getElementById("projectButton1");
projectButton1Ele.addEventListener("click", getProject1Details);

const projectButton2Ele = document.getElementById("projectButton2");
projectButton2Ele.addEventListener("click", getProject2Details);

const projectButton3Ele = document.getElementById("projectButton3");
projectButton3Ele.addEventListener("click", getProject3Details);
