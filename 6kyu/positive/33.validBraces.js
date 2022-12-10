function validBraces(braces) {
  var matches = { '(': ')', '{': '}', '[': ']' };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
    console.log(stack);
  }

  //   return stack.length === 0; // any unclosed braces left?
}

validBraces('([{}])');

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
