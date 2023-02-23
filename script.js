var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField")

addToDoButton.onclick = function(){
    //verifier si l'input n'est pas vide
    if(inputField.value !=""){
        // si il n'est pas vide , créer un paragraphe
        var paragraph =document.createElement('p')
    }
    //valorisé ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value ;

    //Ajouter un bordereau au paragraphe
    paragraph.classList.add('paragraph_bordeau')

    // //insérer le paragraphe dans le toDoConatainer
    toDoContainer.appendChild(paragraph);

    //Clear the input une fonction la liste validé
    inputField.value = "";

    // onclick mettre une barre (équivalent button check)
    paragraph.addEventListener('click',function(){
        paragraph.classList.add('paragraphe_click');
    })
    //supprimer la ligne(double click)
    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph);
    })
    // //insérer le paragraphe dans le toDoConatainer
    // document.addEventListener("keypress", function(event) {
    //     if (event.key === "Enter") {
    //       toDoContainer.appendChild(paragraph);
    //     }
    //   });
         
}
