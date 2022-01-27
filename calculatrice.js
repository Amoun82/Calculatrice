/* classe et objet terme pour faire les operations */
class terme
{
    constructor(operateur,test,signePlusMoins,virgule)
    {
        this.operateur = operateur ;
        this.test = test ;
        this.signePlusMoins = signePlusMoins ;
        this.virgule = virgule ;
    }
}

let terme1 = new terme("",false,false,false) ;
let terme2 = new terme("",false,false,false) ;
let signe = "" ;

/* variable numero ( 1 2 3 4 5 6 7 8 9 0 ) attribué au case de la calculatrice */
const variableCaseUn = document.getElementById('caseUn') ;
const variableCaseDeux = document.getElementById('caseDeux') ;
const variableCaseTrois = document.getElementById('caseTrois') ;
const variableCaseQautre = document.getElementById('caseQuatre') ;
const variableCaseCinq = document.getElementById('caseCinq') ;
const variableCaseSix = document.getElementById('caseSix') ;
const variableCaseSept = document.getElementById('caseSept') ;
const variableCaseHuit = document.getElementById('caseHuit') ;
const variableCaseNeuf = document.getElementById('caseNeuf') ;
const variableCaseZero = document.getElementById('caseZero') ;

/* variable operatoire ( + - * / = ) attribué au case de la calculatrice */
const variableCaseEgale = document.getElementById('caseEgale') ;
const variableCasePlus = document.getElementById('casePlus') ;
const variableCaseMoins = document.getElementById('caseMoins') ;
const variableCaseMultiplier = document.getElementById('caseMultiplier') ;
const variableCaseDiviser = document.getElementById('caseDiviser') ;


/* variable pour les cases spéciales ( AC +/- % , ) */
const variableCasePourcentage = document.getElementById('casePourcentage') ;
const variableCasePlusMoins = document.getElementById('casePlusMoins') ;
const variableCaseVirgule = document.getElementById('caseVirgule') ;
const variableCaseAC = document.getElementById('AC') ;

const para0 = document.getElementById('resultat');

/* fonction lors d'un appuie sur les touches ( 1 2 3 4 5 6 7 8 9 ) */
function appuie(valeur)
{
    
    if(terme1.operateur.length > 20 || terme2.operateur.length > 20)
    {
        alert("Vous allez provoquer une surchage de l'écran.\nLa calculatrice a été réinitialisée.") ;
        remiseAZero() ;
    }
    else
    {
        /* test condition en cas de premiere appuie sur le bouton 1 */
        if(terme1.test == false && terme2.test == false)
        {
            terme1.test = true ;

            terme1.operateur = valeur ;

            para0.textContent = terme1.operateur ;
        }
        else if(terme1.test == true && terme2.test == false)
        {    
            terme1.operateur += valeur ;

            para0.textContent = terme1.operateur ;
        }
        else if(terme1.test == false && terme2.test == true)
        {

            terme2.test = true ;
            terme1.test = true ;

            terme2.operateur = valeur ;

            para0.textContent = terme2.operateur ;
        }
        else if(terme1.test == true && terme2.test == true)
        {
            terme2.operateur += valeur ;

            para0.textContent = terme2.operateur ;
        }
    }
}

/* focntion case + - x / */
/* servant de test pour passer le terme 2 a true */
function casePlus()
{

    signe = "+" ;

    terme1.test = false ;
    terme2.test = true ;
}

function caseMoins()
{
    
    signe = '-' ;

    terme1.test = false ;
    terme2.test = true ;

}

function caseMultiplier()
{
    signe = "*" ;

    terme1.test = false ;
    terme2.test = true ;
}

function caseDiviser()
{
    signe = '/' ;

    terme1.test = false ;
    terme2.test = true ;
}

/* fonction pour la Remise a zero */
function remiseAZero()
{
    const text = "Affichage du resultat" ;

    /* remise a état initiale du terme 1 */
    terme1.test = false ;
    terme1.operateur = "" ;
    terme1.signePlusMoins = false ;
    terme1.virgule = false ;
    terme1.testZero = false ;

    /* remise a état initiale du terme 2 */
    terme2.test = false ;
    terme2.operateur = "" ;
    terme2.signePlusMoins = false ;
    terme2.virgule = false ;
    terme2.testZero = false ;

    signe = "" ;

    para0.textContent = text ;
}

/* fonction case pourcentage */
function casePourcentage()
{
    if(terme1.signePlusMoins == false && terme2.signePlusMoins == false)
    {  
        calculepourcentage() ;
    }
    else if(terme1.signePlusMoins == true && terme2.signePlusMoins == false)
    {
        calculepourcentage() ;
    }
    else if(terme1.signePlusMoins == true && terme2.signePlusMoins == true)
    {
        calculepourcentage() ;
    }
}

/* Calcule fonction pourcentage */
function calculepourcentage()
{
    if(terme1.test == true && terme2.test == false)
    {  
        terme1.operateur = terme1.operateur / 100 ;

        para0.textContent = terme1.operateur ;
    }
    else if(terme1.test == true && terme2.test == true)
    {
        terme2.operateur = terme2.operateur / 100 ;

        para0.textContent = terme2.operateur ;
    }
}

/* fonction case +/- */
function casePlusMoins(lettre)
{
    if( terme1.test == true && terme2.test == false && terme1.signePlusMoins == false)
    {
        terme1.signePlusMoins = true ;
                
        terme1.operateur = lettre + terme1.operateur ;

        para0.textContent = terme1.operateur ;
        
    }
    else if(terme1.test == true && terme2.test == false && terme1.signePlusMoins == true)
    {    
        terme1.signePlusMoins = false ;
        
        terme1.operateur = terme1.operateur.replace(lettre,'') ;
        
        para0.textContent = terme1.operateur ;
    }
    else if(terme1.test == true && terme2.test == true && terme2.signePlusMoins == false)
    {

        terme2.signePlusMoins = true ;
        
        terme2.operateur = lettre + terme2.operateur ;

        para0.textContent = terme2.operateur ;

    }
    else if(terme1.test == true && terme2.test == true && terme2.signePlusMoins == true)
    {
        terme2.signePlusMoins = false ;
        
        terme2.operateur = terme2.operateur.replace(lettre,'') ;

        para0.textContent = terme2.operateur ;
    }
}

/* fonction de la case virgule */
function caseVirgule(lettre)
{
    
    if( terme1.test == true && terme2.test == false && terme1.virgule == false)
    {
        terme1.virgule = true ;
                
        terme1.operateur = terme1.operateur + lettre ;

        para0.textContent = terme1.operateur ;
        
    }
    else if(terme1.test == true && terme2.test == false && terme1.virgule == true)
    {    
        terme1.virgule = false ;
        
        terme1.operateur = terme1.operateur.replace(lettre,'') ;
        
        para0.textContent = terme1.operateur ;
    }
    else if(terme1.test == true && terme2.test == true && terme2.virgule == false)
    {

        terme2.virgule = true ;
        
        terme2.operateur = terme2.operateur + lettre ;

        para0.textContent = terme2.operateur ;

    }
    else if(terme1.test == true && terme2.test == true && terme2.virgule == true)
    {
        terme2.virgule = false ;
        
        terme2.operateur = terme2.operateur.replace(lettre,'') ;

        para0.textContent = terme2.operateur ;
    }
    
}

/* fonction pour la case égale */
/* servant de test de log */
function caseEgale(premierTerme,secondTerme)
{
    switch(signe)
    {
        case "-" :
            premierTerme = parseFloat(terme1.operateur) ;
            secondTerme = parseFloat(terme2.operateur) ;

            console.log(`terme1 : ${premierTerme}`) ;
            console.log(`terme2 : ${secondTerme}`) ;

            premierTerme = premierTerme - secondTerme ;
                
            terme1.operateur = premierTerme.toString() ;

            affichage() ;
        break ;

        case "+" :
            premierTerme = parseFloat(terme1.operateur) ;
            secondTerme = parseFloat(terme2.operateur) ;

            console.log(`terme1 : ${premierTerme}`) ;
            console.log(`terme2 : ${secondTerme}`) ;

            premierTerme = premierTerme + secondTerme ;
                
            terme1.operateur = premierTerme.toString() ;

            affichage() ;
        break ;

        case "*" :
            premierTerme = parseFloat(terme1.operateur) ;
            secondTerme = parseFloat(terme2.operateur) ;

            console.log(`terme1 : ${premierTerme}`) ;
            console.log(`terme2 : ${secondTerme}`) ;

            premierTerme = premierTerme * secondTerme ;
                
            terme1.operateur = premierTerme.toString() ;

            affichage() ;
        break ;

        case "/" :
            premierTerme = parseFloat(terme1.operateur) ;
            secondTerme = parseFloat(terme2.operateur) ;

            console.log(`terme1 : ${premierTerme}`) ;
            console.log(`terme2 : ${secondTerme}`) ;

            premierTerme = premierTerme / secondTerme ;
                
            terme1.operateur = premierTerme.toString() ;

            affichage() ;

        break ;

        default:
            para0.textContent = 'Affichage du resultat' ;
            
    }

}

/* pour afficher le resultat */
function affichage()
{
    para0.textContent = terme1.operateur ;
    console.log(`resultat : ${terme1.operateur}`) ;
    console.log(`terme2 apres le calcule : ${terme2.operateur}`) ;
    console.log(terme1) ;
    console.log(terme2) ;
    terme1.test = false ;
    terme2.test = true ;
}

/* attente de clique sur les cases ( 1 2 3 4 5 6 7 8 9 0 ) */
variableCaseUn.addEventListener('click', event => appuie('1')) ;
variableCaseDeux.addEventListener('click', event => appuie('2')) ;
variableCaseTrois.addEventListener('click', event => appuie('3')) ;
variableCaseQautre.addEventListener('click', event => appuie('4')) ;
variableCaseCinq.addEventListener('click', event => appuie('5')) ;
variableCaseSix.addEventListener('click', event => appuie('6')) ;
variableCaseSept.addEventListener('click', event => appuie('7')) ;
variableCaseHuit.addEventListener('click', event => appuie('8')) ;
variableCaseNeuf.addEventListener('click', event => appuie('9')) ;
variableCaseZero.addEventListener('click', event => appuie ('0')) ;

/* attente de clique sur les signes opératoires ( = + - / * ) */
variableCaseEgale.addEventListener('click', event => caseEgale(terme1.operateur,terme2.operateur)) ;
variableCasePlus.addEventListener('click', event => casePlus() ) ;
variableCaseMoins.addEventListener('click', event => caseMoins()) ;
variableCaseMultiplier.addEventListener('click', event => caseMultiplier()) ;
variableCaseDiviser.addEventListener('click', event => caseDiviser()) ;

/* attente de clique sur les cases spéciale ( A/C % +/- ) */
variableCasePourcentage.addEventListener('click', event => casePourcentage()) ;
variableCasePlusMoins.addEventListener('click', event => casePlusMoins('-')) ;

variableCaseAC.addEventListener('click', event => remiseAZero()) ;

variableCaseVirgule.addEventListener('click', event => caseVirgule('.')) ;