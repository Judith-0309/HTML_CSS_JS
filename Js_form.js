var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var Adresse = document.getElementById("Adresse");
var Telephone = document.getElementById("Telephone");
var identification = document.getElementById("identification");

function validate(){
    if(nom.value == ""){
        alert("remplir nom");
        nom.placeholder = "Veuillez remplir ce champ";
        nom.style.backgroundColor="#C82525";
        return false;
    } 
    
    if(prenom.value == ""){
        alert("remplir prenom");
        prenom.placeholder = "Veuillez remplir ce champ";
        prenom.style.backgroundColor="#C82525";
        return false;

    }
     if(Adresse.value == ""){
        alert("remplir adresse");
        Adresse.placeholder = "Veuillez remplir ce champ";
        Adresse.style.backgroundColor="#C82525";
        return false;

    }
    if(Telephone.value == ""){
        alert("remplir adresse");
        Telephone.placeholder = "Veuillez remplir ce champ";
        Telephone.style.backgroundColor="#C82525";
        return false;

    }
    if(identification.value == ""){
        alert("remplir adresse");
        identification.placeholder = "Veuillez remplir ce champ";
        identification.style.backgroundColor="#C82525";
        return false;

    }
    












}   
