function disp(name:string|string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 
 disp("akshay") 
 console.log("Printing names array....") 
 disp(["akshay","krishnapriya","irene","adhwaith"])