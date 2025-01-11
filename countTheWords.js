let str="I am a Ninja Coder "

function countWords(str) {
    let count = 0;
   str=(str.trim());
   str=str.split(" ");
   count=str.length;
    return count;
  }

  console.log(countWords(str));