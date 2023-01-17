let firstName = "sloth";
firstName = "1"; // first name has to be string
let firstName1 = ["sloth", "dubu"]; //array of strings
let lastName = { lastName: "min" }; //object of strings
let lastName1 = { lastName: "min" }; //lastName can be null
let name_ = "sloth"; //union type name_ can be string or number
let name_1 = "sloth";
//type name better start with Higher case
function func1(x) {
    return x * 2;
}
// func1 ("333") //err
func1(333); //666
// let sloth1:Member={"1",true} //err
let sloth2 = [1, true];
let sloth = { name: 'sloth', number: 1 };
let sloth3 = { name: 'sloth', age: '100' };
class User {
    constructor(name) {
        this.name = name;
    }
}
