// const map = new Map<string, number>
export const map = new Map<string,number>([["sdf",3]]) //smart infer that it is string, number, this is inference
// nesting the generics
const map2 = new Map<string, Map<string,number>>()
map.set("sdf",3)


// const a =[1,2,3]
//map is a generic function, the typescript is smart enough to infer the type of the map
// before returning any string the type of the map is void
// a.map(()=>{
//   return 'sdf'
// })
// at this point the type of the map is string