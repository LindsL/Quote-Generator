const generateQuote = () => {
    let url = "https://type.fit/api/quotes";

    const translationDictionary = {
        "Genius is one percent inspiration and ninety-nine percent perspiration.": "Le génie est un pour cent d'inspiration et quatre-vingt-dix-neuf pour cent de transpiration.",
        "You can observe a lot just by watching.": "On peut observer beaucoup en regardant simplement.",
        "A house divided against itself cannot stand.": "Une maison divisée contre elle-même ne peut pas tenir debout.",
        "Difficulties increase the nearer we get to the goal.": "Les difficultés augmentent à mesure que nous nous rapprochons du but.",
        "Fate is in your hands and no one elses": "Le destin est entre vos mains et celles de personne d'autre",
        "Be the chief but never the lord.": "Soyez le chef mais jamais le seigneur.",
        "Nothing happens unless first we dream.": "Rien ne se passe à moins que nous ne rêvions d'abord.",
        "Well begun is half done.": "Bien commencé, c'est la moitié du travail.",
        "Life is a learning experience, only if you learn.": "La vie est une expérience d'apprentissage, seulement si vous apprenez.",
        "Self-complacency is fatal to progress.": "L'auto-complaisance est fatale au progrès.",
        "Peace comes from within. Do not seek it without.": "La paix vient de l'intérieur. Ne la cherchez pas à l'extérieur.",
        "What you give is what you get.": "Ce que vous donnez est ce que vous obtenez.",
        "We can only learn to love by loving.": "Nous ne pouvons apprendre à aimer qu'en aimant.",
        "Life is change. Growth is optional. Choose wisely.": "La vie est changement. La croissance est facultative. Choisissez judicieusement.",
        "You'll see it when you believe it.": "Vous le verrez quand vous le croirez.",
        "Today is the tomorrow we worried about yesterday.": "Aujourd'hui est le lendemain dont nous nous sommes inquiétés hier."
    };
    

    function getAuthorNameOnly(text) {
        const parts = text.split(',');
        const newText = parts[0];
        return newText;
    }


    function translateToFrench(text) {
        if (text in translationDictionary) {
            return translationDictionary[text];
        } else {
            return text;
        }
    }

    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        let randomNum = Math.floor((Math.random() * 15) + 1);
        let randomQuote = data[randomNum];
        const translatedText = translateToFrench(randomQuote.text);

        document.getElementById("quote").innerHTML = ` " ${randomQuote.text} "` ; 
        document.getElementById("quote-french").innerHTML = ` " ${translatedText} "` ; 
        document.getElementById("author").innerHTML= `${getAuthorNameOnly(randomQuote.author) ? getAuthorNameOnly(randomQuote.author): ""}`;  
    })    
}