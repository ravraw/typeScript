interface Person1 {
  firstName:string;
  lastName:string;
  getFullName():string
}

class Human implements Person1{
   firstName:string;
   lastName:string;
   getFullName():string{
     return `${this.firstName} ${this.lastName}`
   }
   constructor(firstName:string,lastName:string){
    this.firstName=firstName;
    this.lastName=lastName;
   }
}