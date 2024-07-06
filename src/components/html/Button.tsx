type Buttonprops ={
    variant : 'primary'|'secondary'
} & React.ComponentProps<'button'>

export const CustomButton =({variant, children, ...rest}:Buttonprops)=>{
    return(
        <div>
            <button className={`class-with=${variant}`} {...rest}>
                Label
            </button>
        </div>
    )
}