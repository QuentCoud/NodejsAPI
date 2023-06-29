Introduction aux expressions régulières
Une expression régulière est un modèle qui peut être utilisé pour faire correspondre des combinaisons de caractères dans des chaînes de caractères. Les expressions régulières sont souvent utilisées pour valider les entrées utilisateur, rechercher et remplacer du texte et effectuer d'autres manipulations de chaînes.

En JavaScript, vous pouvez utiliser des expressions régulières en créant un objet RegExp ou en utilisant la syntaxe /pattern/.

Voici quelques exemples de création d'un objet RegExp :


``` javascript
const regex1 = new RegExp('abc');
const regex2 = /abc/;z

```

Correspondance de base avec les expressions régulières
Pour utiliser une expression régulière afin de faire correspondre un motif dans une chaîne, vous pouvez utiliser la méthode RegExp.test() ou la méthode String.match().

La méthode RegExp.test() renvoie un booléen indiquant si le motif a été trouvé ou non dans la chaîne.

Voici un exemple d'utilisation de RegExp.test() :

``` javascript
const regex = /hello/;
console.log(regex.test('hello world')); // true
console.log(regex.test('goodbye world')); // false

```

La méthode String.match() renvoie un tableau contenant les correspondances, ou null si aucune correspondance n'a été trouvée.

Voici un exemple d'utilisation de String.match() :

``` javascript
const str = 'Hello, World!';
const regex = /hello/i;
console.log(str.match(regex)); // ["Hello"]

```

### Les wildcards

Le caractère . est un caractère générique qui correspond à n'importe quel caractère, à l'exception d'une nouvelle ligne.

Par exemple, la regex /.at/ correspondrait aux chaînes "cat", "bat" et "rat".

``` javascript
const regex = /.at/;
console.log(regex.test('cat')); // true
console.log(regex.test('bat')); // true
console.log(regex.test('rat')); // true
console.log(regex.test('at')); // false

```

### Sets et ranges 

Vous pouvez utiliser des crochets pour faire correspondre n'importe quel caractère d'un ensemble de caractères.

Par exemple, la regex /[cr]at/ correspondrait aux chaînes "cat" et "rat", mais pas à "bat".

Vous pouvez également utiliser un trait d'union pour spécifier une plage de caractères.

Par exemple, la regex /[a-z]at/ correspondrait aux chaînes "cat", "rat", "bat", etc. mais pas à "Cat" ou "RAT".

``` javascript 
const regex = /[cr]at/;
console.log(regex.test('cat')); // true
console.log(regex.test('rat')); // true
console.log(regex.test('bat')); // false

const regex2 = /[a-z]at/;
console.log(regex2.test('cat')); // true
console.log(regex2.test('rat')); // true
console.log(regex2.test('bat')); // true
console.log(regex2.test('Cat')); // false
console.log(regex2.test('RAT')); // false

```





### Exercices : 


- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne dont toutes les voyelles ont été supprimées.

- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne dont tous les chiffres ont été supprimés.

- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne dont tous les signes de ponctuation ont été supprimés.

- Écrivez une fonction qui prend une chaîne de caractères et renvoie un booléen indiquant si la chaîne est une adresse électronique valide ou non.

- Écrivez une fonction qui prend une chaîne et renvoie une nouvelle chaîne avec la première lettre de chaque mot en majuscule.

- Écrivez une fonction qui prend une chaîne et renvoie une nouvelle chaîne avec tous les chiffres remplacés par des astérisques.

- Écrivez une fonction qui prend une chaîne et renvoie une nouvelle chaîne avec tous les mots de quatre lettres ou plus inversés.

- Écrivez une fonction qui prend une chaîne de caractères et renvoie un booléen indiquant si la chaîne est ou non un mot de passe valide (au moins 8 caractères, dont une lettre majuscule, une lettre minuscule et un chiffre).

- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec tous les espaces remplacés par des traits d'union.

- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne dans laquelle tous les mots de trois lettres ou moins ont été supprimés.


``` javascript
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

```


``` javascript
function removeNumbers(str) {
  return str.replace(/\d/g, '');
}

```


``` javascript
function removeNumbers(str) {
  return str.replace(/\d/g, '');
}


```


``` javascript
function removePunctuation(str) {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

```


``` javascript
function isValidEmail(str) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(str);
}

```


``` javascript
function capitalizeWords(str) {
  return str.replace(/\b[a-z]/g, char => char.toUpperCase());
}

```


``` javascript
function asteriskOutNumbers(str) {
  return str.replace(/\d/g, '*');
}

```


``` javascript
function reverseLongWords(str) {
  return str.replace(/\b\w{4,}\b/g, word => word.split('').reverse().join(''));
}

```

``` javascript
function isValidPassword(str) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(str);
}

```

``` javascript
function hyphenate(str) {
  return str.replace(/\s/g

```






Rédigez une expression régulière qui correspond à toute chaîne contenant le mot "javascript" (sans tenir compte de la casse).

Écrivez une fonction qui prend une chaîne de caractères et renvoie vrai si la chaîne est une adresse électronique valide et faux si elle ne l'est pas.

Écrivez une fonction qui prend une chaîne de caractères et remplace toutes les occurrences du mot "javascript" (sans tenir compte de la casse) par le mot "JavaScript".

Écrivez une fonction qui prend une chaîne de caractères et renvoie un tableau de tous les mots de la chaîne qui ont au moins 5 caractères.

Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne dont toutes les voyelles ont été supprimées.


``` javascript
const regex = /javascript/i;
``` 

``` javascript
function isValidEmail(str) {
  const regex = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i;
  return regex.test(str);
}

``` 
``` javascript
function replaceJavascript(str) {
  const regex = /javascript/gi;
  return str.replace(regex, 'JavaScript');
}

``` 
``` javascript
function longWords(str) {
  const regex = /\b\w{5,}\b/g;
  return str.match(regex);
}

``` 
``` javascript
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

``` 
