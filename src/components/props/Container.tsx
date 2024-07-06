//Styling Props - pass style in as props

type ContainerProps ={
    styles: React.CSSProperties
}
//destructuring the props when defining the component so that - we can avoid using props multiple times
const Container = ({styles}: ContainerProps) => {
    return (
        // avoiding the use of the props.styles
        <div style ={styles}>
            Text Content here
        </div>
    )
}

export default Container
                                                       