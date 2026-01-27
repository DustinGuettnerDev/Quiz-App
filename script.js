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
let rightAnswers = 0;

function startQuiz() {
    document.getElementById("welcome-page").classList.add("d-none");
    document.getElementById("question-page").classList.remove("d-none");
    document.getElementById("nav-arrow-container").classList.remove("d-none");
    question();
}

function question() {
    document.getElementById("question").innerText = questions[currentSection][currentQuestion][0];
    document.getElementById("input-1").innerText = questions[currentSection][currentQuestion][1];
    document.getElementById("input-2").innerText = questions[currentSection][currentQuestion][2];
    document.getElementById("input-3").innerText = questions[currentSection][currentQuestion][3];
    document.getElementById("input-4").innerText = questions[currentSection][currentQuestion][4];
}

function answer(answerId) {
    const answerRef = document.getElementById(answerId);
    const rightAnswer = questions[currentSection][currentQuestion][5];
    if (answerId.slice(-1) == rightAnswer) {
        answerRef.classList.add("bg-success");
    } else {
        answerRef.classList.add("bg-danger");
    }
    enableDisableButtons(true);
}

function enableDisableButtons(enableDisable) {
    const arrowBackButtonRef = document.getElementById("arrow-back-button");
    const arrowNextButtonRef = document.getElementById("arrow-next-button");

    if (enableDisable) {
        if (currentQuestion != 0) {
            arrowBackButtonRef.disabled = false;
        }
        if (currentQuestion + 1 < questions[currentSection].length) {
            arrowNextButtonRef.disabled = false;
        }
    } else {
        arrowBackButtonRef.disabled = true;
        arrowNextButtonRef.disabled = true;
    }
}

function resetAnswer() {
    for (let index = 1; index <= questions[currentSection].length; index++) {
        const answerClasslist = document.getElementById(`answer-${index}`).classList;
        answerClasslist.remove("bg-success");
        answerClasslist.remove("bg-danger");
    }
}

function nextQuestion(backOrNext) {
    if (backOrNext) {
        currentQuestion++;
    } else {
        currentQuestion--;
    }
    question();
    enableDisableButtons(false);
    resetAnswer();
}
