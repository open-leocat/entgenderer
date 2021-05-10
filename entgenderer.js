class GenderRemover {
          constructor(text) {
              this.text = text;
              this.pos = -1;
              this.currentChar = '\0';
              this.advance();
          }

          advance() {
              this.pos++;
              if(this.pos < this.text.length) {
                  this.currentChar = this.text.charAt(this.pos);
              } else {
                  this.currentChar = '\0';
              }
          }

          process() {
              var temp = "";

              while(this.currentChar != '\0') {
                  if(":/*_".includes(this.currentChar)) {
                  	  this.advance();
                  
                  	  if(this.currentChar == 'n') {
                      	  temp += this.currentChar;
                          
                          this.advance();
                      } else if(this.currentChar == 'e') {
                      	  this.advance();
                      } else {
                      	  temp += this.currentChar;
                      
                      	  while(!" \t.,;\0\n".includes(this.currentChar)) {
                          	  this.advance();
                      	  }
                      }
                  } else if(this.currentChar == 'I') {
                      if(this.text.charAt(this.pos+1) == 'n') {
                          while(!" \t.,;\0\n".includes(this.currentChar)) {
                              this.advance();
                          }
                      } else {
                          temp += this.currentChar;

                          this.advance();
                      }
                  } else {
                      temp += this.currentChar;

                      this.advance();
                  }
              }

              return temp;
          }
}
