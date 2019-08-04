const d = new Date();

//Static Method
Date.now();
console.log('static date method',Date.now())
console.log(Date.now().toString());

//Format the instance of your Date class
console.log(d.toString());
console.log(d.toDateString());


//Working with Sets
class Set {
  constructor(arr){
    this.arr =  arr;
  }

  add(val){
   if(!this.has(val)) return this.arr.push(val);
  }

  delete(val){
    this.arr = this.arr.filter(num => num != val);
  }

  has(val){
    if(this.arr.includes(val)){
      return true;
    }
  }

 get size(){
  return this.arr.length;
  }
  }


const list = new Set([1,2,3,4,5])
console.log(list.add(1))
console.log(list.add(10))
console.log(`Deleted element ${list.delete(5)}`);
console.log(list.has(1))
console.log(list.size);
console.log('list' ,list);

//Use extend & super to extend the native Set class in JS
//super gives us a way of referring to the original class
class MySet extends Set {
  constructor(arr){
    super(arr);
    this.originalArr = arr;
  }

  add(val){
    super.add(val);
    console.log(`added ${val} to the set!`);
  }

  toArray(){
    return Array.from(this)
  }

  reset(){
    return new MySet(this.originalArr);
  }

}