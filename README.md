# 🖊 Générateur de Citations Aléatoires

Ce projet est un générateur de citations aléatoires qui affiche une citation en anglais ainsi que sa traduction en français. 
Il permet aux utilisateurs de découvrir de nouvelles citations inspirantes à chaque clic sur le bouton de génération.

##  Génération de Citations :
Lorsque vous cliquez sur le bouton de génération de citations, une nouvelle citation aléatoire en anglais et sa traduction en français seront affichées.
#### Personnalisation : Vous pouvez personnaliser le contenu des citations en modifiant l'url de l'api ainsi que le fichier JavaScript script.js pour inclure vos propres citations.


## Utilisation

1. **Intégration du Script :**
   - Assurez-vous d'avoir inclus le fichier JavaScript (`script.js`) dans votre page HTML avant la balise `</body>`.
   ```html
   <script src="script.js"></script>
   ```
   - Assurez-vous d'inclure dans votre fichier html à l'endroit souhaité le snippet suivant:
  
   ```html
    <p id="quote">Votre citation en anglais</p>
        <p id="quote-french">Sa traduction en français</p>
        <p id="author"> L'auteur</p>

    <button onclick="generateQuote()" class="generate-btn">Générer</button>
   ```


## Crédits
Favicon : Favicon par Google - Flaticon, sous licence Creative Commons BY 3.0.
Icônes : Icônes fournies par Font Awesome, sous licence Font Awesome Free License.
