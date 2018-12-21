var request = new XMLHttpRequest(); //création de la requête
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //ici on vérifie que si l'état change
    // il faut qu'il soit bon. Status : 200 signifie que la requête s'est bien passée
    // readyState : 4 signifie que la requête est finie et que la réponse est prête
        console.log(request.responseText);
    }
};

request.open("GET", "https://opendata.paris.fr/api/records/1.0/search/?dataset=equipements_de_proximite&rows=100&facet=mairie_gestionnaire&facet=type_d_equipement&facet=ap_cp&refine.type_d_equipement=Piscine", true); //spécification de la
// requête, l'adresse et si la requête est asynchrone (non bloquante)
request.send(); //envoie de la requête