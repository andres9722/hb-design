export class Machine {
  constructor(string, element, time) {
    this.string = string;
    this.element = element;
    this.time = time;
    this.print(string, element, time);
  }
  
  print(string, element, time) {
    let arrString = string.split('');
    let i = 0;
    let printString = setInterval(function() {
      element.textContent += arrString[i];
      i++;
      if(i === arrString.length) {
        clearInterval(printString);
      }
    }, time);
  } 
}




