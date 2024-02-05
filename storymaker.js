// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Btn = document.getElementById('noun1');
const verbBtn = document.getElementById('verb');
const adjectiveBtn = document.getElementById('adjective');
const noun2Btn = document.getElementById('noun2');
const settingBtn = document.getElementById('setting');

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById('choosenNoun1');
const chosenVerb = document.getElementById('choosenVerb');
const chosenAdjective = document.getElementById('choosenAdjective');
const chosenNoun2 = document.getElementById('choosenNoun2');
const chosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackBtn = document.getElementById('playback');
const randomBtn = document.getElementById('random');
const storyDisplay = document.getElementById('story');
const studentIdDisplay = document.getElementById('studentId');

// Variables for pre-defined arrays
const nouns1 = ['The Turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesnt like', 'kissed'];
const adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    chosenNoun1.textContent = nouns1[noun1Count];
    noun1Count = (noun1Count + 1) % nouns1.length;
}

function verb_on_click() {
    chosenVerb.textContent = verbs[verbCount];
    verbCount = (verbCount + 1) % verbs.length;
}

function adjective_on_click() {
    chosenAdjective.textContent = adjectives[adjectiveCount];
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
}

function noun2_on_click() {
    chosenNoun2.textContent = nouns2[noun2Count];
    noun2Count = (noun2Count + 1) % nouns2.length;
}

function setting_on_click() {
    chosenSetting.textContent = settings[settingCount];
    settingCount = (settingCount + 1) % settings.length;
}

// Concatenate the user story and display
function playback_on_click() {
    storyDisplay.textContent = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} in ${chosenSetting.textContent}`;
}

// Grabbing random element from arrays, concatenate, and display
function random_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];

    storyDisplay.textContent = `${randomNoun1} ${randomVerb} ${randomAdjective} ${randomNoun2} in ${randomSetting}`;
}

// Dynamically add student ID/name
function addStudentId() {
    studentIdDisplay.textContent = "200552821/Abel Sam Mathew";
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener('click', noun1_on_click);
verbBtn.addEventListener('click', verb_on_click);
adjectiveBtn.addEventListener('click', adjective_on_click);
noun2Btn.addEventListener('click', noun2_on_click);
settingBtn.addEventListener('click', setting_on_click);

playbackBtn.addEventListener('click', playback_on_click);
randomBtn.addEventListener('click', random_on_click);
studentIdDisplay.addEventListener('click', addStudentId);
