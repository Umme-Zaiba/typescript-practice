export function myGeneric<ElementType extends {}>(array:ElementType[]){
    return array[0]
  }
  // We can also  specify the number evene in Generics
  const numbers=[1,2,3]
  const getNumbers = myGeneric<number>(numbers)
  console.log(getNumbers)
  
  const strings=["sdf", "Sdf"]
  const stringget = myGeneric(strings)
  console.log(stringget)
  
  const objects = [
    {first: 'hey', last:'heyy'},
    {first:'hey2', last:'hey22'},
  ];
  const objectsget = myGeneric(objects)
  console.log(objectsget)
  