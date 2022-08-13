let PrajaktaDetails ={
    Name:'Prajakta',
    Surname:'Chandilkar',
    Age:'30',
    Address: {
        Street1:'High Street',
        HouseNo:'19',

    }
}
PrajaktaDetails.DOB = '7/4/1992'
delete PrajaktaDetails.DOB;

console.log(PrajaktaDetails.Name)
console.log(PrajaktaDetails.Age)
console.log(PrajaktaDetails.Address.HouseNo)
console.log(PrajaktaDetails.DOB)
console.log(Object.keys(PrajaktaDetails))
console.log(Object.values(PrajaktaDetails))
console.log(Object.keys)