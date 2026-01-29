let questions = [
    [
        ["Wofür steht HTML?", "Hyperlinks and Text Markup LanguageHome Tool", "Markup Language", "HyperText Markup Language", "High Text Machine Language", 3],
        ["Wofür wird HTML verwendet?", "Zum Programmieren von Spielen", "Zur Strukturierung von Webseiten", "Zum Erstellen von Datenbanken", "Zur Bildbearbeitung", 2],
        ["Welches Tag wird für einen Absatz verwendet?", "<div>", "<span>", "<p>", "<h1>", 3],
        ["Welcher Bereich enthält den sichtbaren Inhalt einer Webseite?", "<head>", "<meta>", "<title>", "<body>", 4],
    ],
    [
        ["Wofür steht CSS?", "Creative Style Sheets", "Cascading Style Sheets", "Computer Style System", "Colorful Style Sheets", 2],
        ["Wofür wird CSS verwendet?", "Zur Strukturierung von Webseiten", "Zur Gestaltung von Webseiten", "Zur Datenbankverwaltung", "Zur Serverprogrammierung", 2],
        ["Welches Symbol wird für Klassen in CSS verwendet?", ".", "#", "*", "&", 1],
        ["Welche Eigenschaft ändert die Textfarbe?", "font-style", "background-color", "color", "text-align", 3],
    ],
    [
        ["Wofür wird JavaScript hauptsächlich verwendet?", "Zur Gestaltung von Webseiten", "Zur Strukturierung von Webseiten", "Für Interaktivität auf Webseiten", "Für Datenbanken", 3],
        ["Wie beginnt ein JavaScript-Skript?", "<js>", "<javascript>", "<script>", "<code>", 3],
        ["Wie schreibt man einen Kommentar in JavaScript?", "<!-- Kommentar -->", "// Kommentar", "** Kommentar **", "## Kommentar", 2],
        ["Welche Variable ist korrekt?", "var 1zahl;", "var meine-zahl;", "var meineZahl;", "var meine zahl;", 3],
    ],
    [
        ["Wofür wird Java verwendet?", "Nur für Webseiten", "Für plattformunabhängige Programme", "Nur für Datenbanken", "Nur für Spiele", 2],
        ["Welche Methode startet ein Java-Programm?", "start()", "run()", "main()", "init()", 3],
        ["Wie deklariert man eine Ganzzahl in Java?", "int zahl;", "number zahl;", "integer zahl;", "var zahl;", 1],
        ["Welche Datei-Endung hat Java-Quellcode?", ".js", ".class", ".java", ".jar", 3],
    ],
];

let currentSection = 0;
let currentQuestion = 0;
let answers = [];

function startQuiz() {
    document.getElementById("welcome-page").classList.add("d-none");
    document.getElementById("question-page").classList.remove("d-none");
    document.getElementById("nav-arrow-container").classList.remove("v-hidden");
    question();
    disableNav();
}

function question() {
    if (currentQuestion < questions[currentSection].length) {
        document.getElementById("question").innerText = questions[currentSection][currentQuestion][0];
        document.getElementById("input-1").innerText = questions[currentSection][currentQuestion][1];
        document.getElementById("input-2").innerText = questions[currentSection][currentQuestion][2];
        document.getElementById("input-3").innerText = questions[currentSection][currentQuestion][3];
        document.getElementById("input-4").innerText = questions[currentSection][currentQuestion][4];
    }
}

function chooseSection(sectionId) {
    currentSection = sectionId.slice(-1) - 1;
    for (let element of document.getElementById("sections").children) {
        element.classList.remove("btn-nav-active");
    }
    document.getElementById(sectionId).classList.add("btn-nav-active");
}

function answer(answerId) {
    let rightAnswer = questions[currentSection][currentQuestion][5];
    const answerRef = document.getElementById(answerId);
    if (answerId.slice(-1) == rightAnswer) {
        answerRef.classList.add("bg-success");
        answers.push([answerId, true]);
    } else {
        answerRef.classList.add("bg-danger");
        answers.push([answerId, false]);
    }
    enableNextButton();
    disableAnswers();
}

function enableAnswers() {
    for (let index = 1; index < 5; index++) {
        document.getElementById(`answer-${index}`).disabled = false;
    }
}

function disableAnswers() {
    for (let index = 1; index < 5; index++) {
        document.getElementById(`answer-${index}`).disabled = true;
    }
}

function enableNextButton() {
    const arrowNextButtonRef = document.getElementById("arrow-next-button");
    if (currentQuestion < questions[currentSection].length) {
        arrowNextButtonRef.disabled = false;
    }
}

function updateBackButton() {
    disableBackButton();
    enableBackButton();
}

function enableBackButton() {
    const arrowBackButtonRef = document.getElementById("arrow-back-button");
    if (currentQuestion != 0) {
        arrowBackButtonRef.disabled = false;
    }
}

function disableNextButton() {
    const arrowNextButtonRef = document.getElementById("arrow-next-button");
    arrowNextButtonRef.disabled = true;
}

function disableBackButton() {
    const arrowBackButtonRef = document.getElementById("arrow-back-button");
    arrowBackButtonRef.disabled = true;
}

function resetAnswer() {
    for (let index = 1; index <= questions[currentSection].length; index++) {
        const answerClasslist = document.getElementById(`answer-${index}`).classList;
        answerClasslist.remove("bg-success");
        answerClasslist.remove("bg-danger");
    }
}

function nextQuestion(next) {
    if (next) {
        currentQuestion++;
    } else {
        currentQuestion--;
    }
    endscreenTotalScore();
    question();
    disableNextButton();
    updateBackButton();
    enableAnswers();
    resetAnswer();
    showPastAnswer();
}

function showPastAnswer() {
    if (answers[currentQuestion]) {
        const answerId = document.getElementById(answers[currentQuestion][0]);
        const answerRight = answers[currentQuestion][1];
        if (answerRight) {
            answerId.classList.add("bg-success");
        } else {
            answerId.classList.add("bg-danger");
        }
        enableNextButton();
        disableAnswers();
    }
}

function endscreenTotalScore() {
    if (currentQuestion >= questions[currentSection].length) {
        document.getElementById("question-page").classList.add("d-none");
        document.getElementById("endscreen-total-score").classList.remove("d-none");
        showTotalScore();
    } else {
        document.getElementById("question-page").classList.remove("d-none");
        document.getElementById("endscreen-total-score").classList.add("d-none");
    }
}

function replay() {
    document.getElementById("welcome-page").classList.remove("d-none");
    document.getElementById("question-page").classList.add("d-none");
    document.getElementById("endscreen-total-score").classList.add("d-none");
    answers = [];
    currentQuestion = 0;
    enableNav();
}

function showTotalScore() {
    let answer;
    let totalAnswersRight = 0;
    for (arrays of answers) {
        answer = arrays[1];
        if (answer == true) {
            totalAnswersRight++;
        }
    }

    document.getElementById("total-score-number").innerText = `${totalAnswersRight}/${questions[currentSection].length}`;
}

function disableNav() {
    for (element of document.getElementById("sections").children) {
        element.disabled = true;
    }
}
function enableNav() {
    for (element of document.getElementById("sections").children) {
        element.disabled = false;
    }
}
