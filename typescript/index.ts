let firstName : string = "sloth";
firstName = "1"; // first name has to be string

let firstName1:string[]= ["sloth", "dubu" ]; //array of strings
let lastName:{lastName:string}= {lastName: "min" }; //object of strings
let lastName1:{lastName?:string}= {lastName: "min" }; //lastName can be null

let name_ :string | number = "sloth" //union type name_ can be string or number

type myType = string|number; //myType can be string, number
let name_1 :myType = "sloth"

//type name better start with Higher case

function func1(x :number) : number{ //x parameter is a number, return number
  return x *2
}
// func1 ("333") //err
func1 (333) //666

type Member = [number, boolean]; //tuple includes 0number, 1boolean
// let sloth1:Member={"1",true} //err
let sloth2:Member=[1,true];

type Member1 = {
  name:string
  number:number
  //...
}
let sloth:Member1 = {name:'sloth', number:1}

type Member2 = {
  [key:string]  :string, // all strings in the Member object must be strings
}
let sloth3:Member2 = {name:'sloth', age:'100'}

class User{
  name:string;
  constructor(name:string){
    this.name = name;
  }
}