const questions = [
    { 
        win:-1,
        q: "1️⃣ Quand est l'anniversaire de Zineb ? 🎂", 
        options: ["13 Février", "17 Avril", "29 Juillet"], 
        answer: "26 Juillet", 
        "13 Février": "❌ Oups ! C’est l’anniversaire d’Amina ! 🎈", 
        "17 Avril": "❌ Hmm… c'est MON anniversaire en fait ! 😆", 
        "29 Juillet": "✅ Bravo ! Tu connais bien Zineb ! 🎉"
    },
    { 
        win:-1,
        q: "2️⃣ Quel est son métier ? 💼", 
        options: ["Ingénieur logiciel", "Consultant fonctionnel", "Informatique"], 
        answer: "Consultant fonctionnel", 
        "Informatique": "❌ Nope, elle ne peut pas pirater ton Insta ou formater ton PC 😜",  
        "Ingénieur logiciel": "❌ Le diplôme ne fait pas tout ! Ce n'est pas son métier actuel 🤓",  
        "Consultant fonctionnel": "✅ Exact ! Elle brille en tant que consultante fonctionnelle ! 💪"
    },
    { 
        win:-1,
        q: "3️⃣ Quel est son livre préféré ? 📚", 
        options: ["It Starts With Us", "Le Dernier Jour d'un Condamné", "It Ends With Us"], 
        answer: "Le Dernier Jour d'un Condamné", 
        "It Starts With Us": "❌ Elle l'aime bien, mais ce n'est pas son préféré ! 🤷‍♀️", 
        "It Ends With Us": "❌ Un bon livre, mais pas son coup de cœur ! ❤️", 
        "Le Dernier Jour d'un Condamné": "✅ Bravo ! Elle adore Victor Hugo ! 📖"
    },
    { 
        win:-1,
        q: "4️⃣ Combien gagne-t-elle ? 💰", 
        options: ["0 Dhs", "17,000 Dhs", "25,000 Dhs"], 
        answer: "0 Dhs", 
        "0 Dhs": "✅ Je suis encore stagiaire, tu crois quoi ?! 😂", 
        "17,000 Dhs": "😏 Bien joué ! Un bon début ! 💸", 
        "25,000 Dhs": "❌ Ahhh… bientôt peut-être ?! 🤞"
    },
    { 
        win:-1,
        q: "5️⃣ Quel est son passe-temps préféré ? 🚴‍♀️", 
        options: ["Faire du vélo", "Manger", "Dormir"], 
        answer: "Faire du vélo", 
        "Faire du vélo": "✅ Exact ! Elle adore pédaler, surtout au bord de la mer avec Hind ! 🌊", 
        "Manger": "❌ Tout le monde aime manger, mais ce n'est pas SON préféré ! 🍕", 
        "Dormir": "❌ Qui n'aime pas dormir ? Mais elle préfère être active ! 😴"
    },
    { 
        win:-1,
        q: "6️⃣ Son réseau social favori ? 📱", 
        options: ["Instagram", "Snapchat", "WhatsApp"], 
        answer: "Snapchat", 
        "Snapchat": "✅ Exact ! Snap, c'est la base pour elle ! 👻✨", 
        "Instagram": "❌ Nope ! Elle l’utilise juste pour envoyer des reels à ses amis 😂", 
        "WhatsApp": "❌ Pas mal, mais Snap reste son préféré ! 📩"
    },
    { 
        win:-1,
        q: "7️⃣ Quel pays rêve-t-elle de visiter ? ✈️", 
        options: ["Italie", "Espagne", "Maroc"], 
        answer: "Italie", 
        "Italie": "✅ Oui ! L'Italie la fait rêver ! 🇮🇹❤️", 
        "Espagne": "❌ Elle aimerait bien, mais pas en premier ! 🇪🇸", 
        "Maroc": "❌ Bah... elle y est déjà ! 😂"
    },
    { 
        win:-1,
        q: "8️⃣ Quel est son téléphone ? 📱", 
        options: ["iPhone 10", "iPhone 16", "Samsung Ultra 23"], 
        answer: "iPhone 16", 
        "iPhone 10": "❌ Trop vieux ! Elle aime la nouveauté ! 😆", 
        "iPhone 16": "✅ Yes ! Un iPhone 16 tout beau, tout neuf ! 📲", 
        "Samsung Ultra 23": "❌ Non non, elle est Team Apple 🍏!"
    },
    { 
        win:-1,
        q: "9️⃣ Qui est son meilleur ami ? 👫", 
        options: ["Mehdi", "Yahya", "Youness"], 
        answer: "Mehdi", 
        "Mehdi": "✅ Exact ! Mehdi est son meilleur ami ! 💙", 
        "Yahya": "❌ Yahya est un bon ami, mais pas THE best ! 😉", 
        "Yasser": "❌ Oups, tu t’es trompé ! 😅"
    },
    { 
        win:-1,
        q: "🔟 Comment décrirais-tu sa personnalité ? 😍", 
        options: ["Romantique", "Humoriste", "Toxique"], 
        answer: "Romantique", 
        "Romantique": "✅ Oui ! Elle est super romantique ! 💕", 
        "Humoriste": "❌ Elle a le sens de l'humour, mais ce n’est pas son trait principal 😆", 
        "Toxique": "❌ Mais non, elle est adorable et bienveillante ! 🚫🔥"
    }
];


let index = 0;
let score = 0;
const quizDiv = document.getElementById('quiz');
const messageWinDiv = document.getElementById('messageWin');
const messageLoseDiv = document.getElementById('messageLose');
const winnerName = document.getElementById('winner');
const heartsDiv = document.getElementById('hearts');

function previousQuestion() {
    if(index>=1){
        index--;
        loadQuestion();
    }
}
function nextQuestion() {
    if(index<10){
        index++;
        loadQuestion();
    }
}

function loadQuestion() {
    if (index >= questions.length) {
        finishGame();
        //save store
        return;
    }
    const q = questions[index];
    
    quizDiv.innerHTML = `<p class='question'>${q.q}</p>` + q.options.map(opt => `<button onclick='checkAnswer("${opt}")'>${opt}</button>`).join('')+`<p class="result" id="result"></p>`;
}

function checkAnswer(selected) {
    const q = questions[index];
    result.innerHTML = q[selected];
    if(q.win==-1){
        if (selected === q.answer) {
            q.win=1;
        }else{
            q.win=0;
        }
        updateScore();
    }
}
function updateScore(){
    let result =''; 
    for (const question of questions) {
        if(question.win===0){
            result +='🩵';
        }else if(question.win===1){
            result +='❤️';
        }else{
            result+='❤';
        }
    }
    hearts.innerText = result;
}
function finishGame() {
    let score_user = 0;
    for (const question of questions) {
        if(question.win===1){
            score_user++;
        }
    }
    if(score_user==10){
        quizDiv.style.display = 'none';
        messageWinDiv.style.display = 'block';
    }else{
        quizDiv.style.display = 'none';
        messageLoseDiv.style.display = 'block';  
    }
        heartsDiv.style.display = 'block';
        let userName = prompt("Bravo ! Quel est ton prénom ?").trim();
        winnerName.innerText = userName!='' ? userName : "Cher Ami";
}
updateScore()
loadQuestion();