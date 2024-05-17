var quotes =["“Be yourself; everyone else is already taken.”― Oscar Wilde",
"“Be yourself; everyone else is already taken.”― Oscar Wilde",
"“So many books, so little time.”― Frank Zappa",
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein",
"“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",
"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”― Dr. Seuss",
"“You only live once, but if you do it right, once is enough.”― Mae West",
"“Be the change that you wish to see in the world.”― Mahatma Gandhi",
"“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost"]

// function display(){
//     var x=Number(Math.random().toFixed(1)*10)
//     document.getElementById("quote").innerHTML=quotes[x]
// }


var lastIndex = -1;

function getRandomQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex); 
    lastIndex = randomIndex;
    return quotes[randomIndex];
}


function display() {
    var quote = getRandomQuote();
    document.getElementById("quote").innerHTML = quote;
}


















