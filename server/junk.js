const ppl =  [
    {name : "John", age : 2},
     {name : "Jane", age : 24},
     {name : "Jeff", age : 24},
     {name : "Gideon", age : 17}
  ]
  function adultsOnly({age}){
    if( age >= 21){
      return "adult"
    }else{
      return "minor"
    }
  }
  const organized = Object.groupBy(ppl, adultsOnly)
  console.log(organized)