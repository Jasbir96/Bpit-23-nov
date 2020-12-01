let cap={
    name:"Steve",
    lastName:"rogers",
    isAvenger:true,
    movies:["first avenger","winter soldier","civil war"],
    age:45,
    address:{
      state:"Newyork",
      city:"Manhatten"
    }
  }
  // get 
  // console.log(cap.isAvenger);
  // console.log(cap.movies[1]);
  // console.log(cap.address.city);
// console.log(cap.age);
  // set /update
  // cap.age=46;
  console.log(cap);
console.log("``````````````")
// console.log(cap.age);

cap.friends=["peter","tony","bruce"];
console.log(cap);

// delete
delete cap.address;
console.log(cap);