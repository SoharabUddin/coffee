class Add {
    constructor(...words) {
        this.words = words;
    }
    //your code goes here
    print(){
        for(let i=0;i<this.words.length;i++){
            this.words[i] = "$"+this.words[i];
        }
        this.words+="$";
        console.log(this.words);
    }
}
  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
//   var y = new Add("this", "is", "awesome");
//   var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  x.print();
//   y.print();
//   z.print();