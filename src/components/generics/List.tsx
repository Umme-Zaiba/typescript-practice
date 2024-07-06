// Generic types, T is the convention ,we can use any
// items:string[] | number[]
// onClick: (value:string|number) => void
type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void 
}

// T extends {} but here the item.id needs to be passed so to pass it id:number  is defined
export const List = <T extends { id: number }>(
    { items, onClick }: ListProps<T>
) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.id}
                    </div>
                )
            })}
        </div>
    )
}
