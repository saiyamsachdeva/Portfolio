function downloadCV() {
    window.open('https://drive.google.com/file/d/1hfxxZOoUBBbA8q-I4hQcuNa1HudSXAoe/view?usp=sharing', '_blank');

}

function openLinkedIN() {
    window.open('https://www.linkedin.com/in/saiyam-sachdeva-a79099216/', '_blank');
}

function openchatAppGitHubId() {
    window.open('https://github.com/saiyamsachdeva', '_blank');
}

//
function openLinkedIN() {
    window.open('https://www.linkedin.com/in/saiyam-sachdeva-a79099216/', '_blank');
}
//
function openGitHub() {
    window.open('https://github.com/saiyamsachdeva', '_blank');
}
// 
function openLeetCode() {
    window.open('https://leetcode.com/saiyam__sachdeva1144/', '_blank');
}

function openchatBotAppGitHubRepo() {
    window.open('https://github.com/saiyamsachdeva/chat_bot_app', '_blank')
}
function openchatBotAppLiveLink() {
    window.open('https://scintillating-lokum-5c8971.netlify.app/#/', '_blank')
}

function openchatAppGitHubRepo() {
    window.open('https://github.com/saiyamsachdeva/Chat_App', '_blank')
}

function openchatAppLiveLink() {
    window.open('https://whimsical-puppy-224d6f.netlify.app/', '_blank')
}

function openbiteGitHubRepo() {
    window.open('https://github.com/saiyamsachdeva/food_ecommerce_app', '_blank')
}

function openbiteLiveLink() {
    window.open('https://github.com/saiyamsachdeva/food_ecommerce_app', '_blank')
}

function openweatherGitHubRepo() {
    window.open('https://github.com/saiyamsachdeva/weathx', '_blank')
}

function openweatherLiveLink() {
    window.open('https://github.com/saiyamsachdeva/weathx', '_blank')
}

function scrollToContact() {
    // Scroll to the contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function scrollToProject() {
    // Scroll to the contact section
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}
function scrollToExp() {
    // Scroll to the contact section
    document.getElementById('explang').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbt() {
    document.getElementById('abtme').scrollIntoView({ behavior: 'smooth' });
}

const scriptURL = 
'https://script.google.com/macros/s/AKfycbzyUqBNA6lln54qkRIxC-muXaRIikPTeRD_K0F1UZdyyEbWbcW2IeMnJ-imIxVU5vmN2Q/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
})