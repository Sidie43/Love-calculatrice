const operand1 = document.getElementById('operand1');
const deleter = document.getElementById ('delete');
 // compteur
 let compteur = 10;

//ajouter des charatère à l'input 1
const addCharacter = (character) => {
  operand1.value += character;
}

const deleteInput = () => { 
  if (operand1.value.length > 0) {
    operand1.value = operand1.value.slice(0,-1);
  };
}

const deleteInput2 = () => { 
  if (operand1.value.length > 0) {
    operand1.value = operand1.value.slice(0,-100);
  };
}

deleter.addEventListener('click', deleteInput);
deleter.addEventListener('dblclick', deleteInput2);

//Empêcher la saisie de caractère non autorisés
operand1.addEventListener('input', () => {
  const validCharacter = /^[0-9+\-*/ ]*$/;

  //si l'entrée ne correcpond pas, on la corrige
  if (!validCharacter.test(operand1.value)) {
    operand1.value = operand1.value.replace(/[^0-9+\-*/. ]/g, '');
  }
})

//Empêcher les opérateurs consécutifs
const invalidOperatorSequence = /[+\-*]{2,}/;
if (invalidOperatorSequence.test(operand1.value)) {
  operand1.value = operand1.value.slice(0, -1);
}


// Ogjet calculatrice
let calculatrice = {
  addition: function(a, b) {
    return a + b;
  },
  soustraction: function(a,b) {
    return a - b;
  },
  multiplication: function(a,b) {
    return a * b;
  },
  division: function(a,b) {
    if (b === null || b === 0) {
      return a + '';
      
    } else {
      return a / b;
    }  
  },
};


const calculer = () => {
  const inputCalcul = operand1.value;

  //On extrait tous les nombres et opérateurs de l'expression
  const tokens = inputCalcul.match(/(\d+(\.\d+)?|\+|\-|\*|\/)/g);

  if (!tokens) {
    return "Expression invalide";
  }

  //On commence avec le premier nombre
  let resultat = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operateur = tokens [i];
    const nextNumber = parseFloat(tokens[i + 1]);
  

      //sélection de la méthode appropriée en fonction de l'opérateur
  switch (operateur) {
    case '+':
      resultat = calculatrice.addition(resultat,  nextNumber);
      break;
    case '-':
      resultat = calculatrice.soustraction(resultat, nextNumber);
      break;
    case '*':
      resultat = calculatrice.multiplication(resultat, nextNumber);
      break;
    case '/': 
    resultat = calculatrice.division(resultat, nextNumber);
      break;
    default: 
    alert('ERREUR');
  }
}
operand1.value = `= ${resultat}`;
};

const moduleCN = document.getElementById('module-cn');
const module1 = document.getElementById('module1');
const module2 = document.getElementById('module2');
const module3 = document.getElementById('module3');
const module4 = document.getElementById('module4');

const ouvreM2 = document.getElementById('ouvreM2');
const ouvreM3 = document.getElementById('ouvreM3');
const ouvreM4 = document.getElementById('ouvreM4');

ouvreM2.addEventListener('click', () => {
  module2.style.display = 'block';
  module1.style.display = 'none';

    //Fonction pour décrémenter le compteur
function decrementer() {
  if (compteur > 0) {
    compteur--;
    document.getElementById('compteur').textContent = compteur;
    document.getElementById('compteur2').textContent = compteur;
  } else {
    clearInterval(interval);
    moduleCN.style.display = 'none';
  }
}

// Décrémenter automatiquement toutes les secondes
let interval = setInterval(decrementer, 1000);

});

ouvreM3.addEventListener('click', () => {
  module3.style.display = 'block';
  module1.style.display = 'none';
  alert(`j'ai toujours sûr que tu m'aime pas ho, mechante fille. Je vais dire à ma Maman`);
});

ouvreM4.addEventListener('click', () => {
  module4.style.display = 'block';
  module1.style.display = 'none';

  //Fonction pour décrémenter le compteur
function decrementer() {
  if (compteur > 0) {
    compteur--;
    document.getElementById('compteur').textContent = compteur;
    document.getElementById('compteur2').textContent = compteur;
  } else {
    clearInterval(interval);
    moduleCN.style.display = 'none';
  }
}

// Décrémenter automatiquement toutes les secondes
let interval = setInterval(decrementer, 1000);

});
















