//Palindromo with out uppercase/lowercase
var Palindrome = {
	Load:function(input){
		//Split the input into in Array
    var BaseInput = input.split('');
    //Declare a new Var to set the new Value to BaseInput
    var NewBaseInput = '';
    //through the whole Array
    BaseInput.forEach(function(element,index){
    	//Sending each letter to the function and going to be replaced by a lowercase
    	NewBaseInput += Palindrome.replaceChars(element);
    });
		
    //Set and spliting the Palindrome array
    var PalindromeBase = NewBaseInput.split("").reverse();
    //Set a new var to make the palindrome word
    var PalindromeString = '';
		//through the whole Array to make the palindrome work in PalindromeString
    PalindromeBase.forEach(function(element,index){
    	PalindromeString += element;
    });
		
    //If 1, is a palindrome
    if(NewBaseInput==PalindromeString){
        //return '1';
        console.log('Es un palindromo');
    }else{
        //return '0';
        console.log('No es un palindromo');
    }
  },
  //Function to replace each char to lowercase
  replaceChars:function(Char){
  // the function catch a char from Palindrome.replaceChars function.
  // and if the char is uppercase going to be replaced by a lowercase, also the space char is replaced by blank space
  	var Letter = '';
  	switch(Char){
    	case 'A':
      	Letter = 'a';
      break;
      case 'B':
      	Letter = 'b';
      break;
      case 'C':
      	Letter = 'c';
      break;
      case 'D':
      	Letter = 'd';
      break;
      case 'E':
      	Letter = 'e';
      break;
      case 'F':
      	Letter = 'f'
      break;
      case 'G':
      	Letter = 'g';
      break;
      case 'H':
      	Letter = 'h';
      break;
      case 'I':
      	Letter = 'i';
      break;
      case 'J':
      	Letter = 'j';
      break;
      case 'K':
      	Letter = 'k';
      break;
      case 'L':
      	Letter = 'l';
      break;
      case 'M':
      	Letter = 'm';
      break;
      case 'N':
      	Letter = 'n';
      break;
      case 'Ñ':
      	Letter = 'ñ';
      break;
      case 'O':
      	Letter = 'o';
      break;
      case 'P':
      	Letter = 'p';
      break;
      case 'Q':
      	Letter = 'q';
      break;
      case 'R':
      	Letter = 'r';
      break;
      case 'S':
      	Letter = 's';
      break;
      case 'T':
      	Letter = 't';
      break;
      case 'U':
      	Letter = 'u';
      break;
      case 'V':
      	Letter = 'v';
      break;
      case 'W':
      	Letter = 'w';
      break;
      case 'X':
      	Letter = 'x';
      break;
      case 'Y':
      	Letter = 'y';
      break;
      case 'Z':
      	Letter = 'z';
      break;
      case ' ':
      	Letter = '';
      break;
      default:
      	Letter = Char;
    }
    return Letter;
  }
}
window.load = Palindrome.Load(prompt('Ingresa el palindromo','Palindromo'));
