type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position:
    | Exclude<
        `${HorizontalPosition}- ${VerticalPosition}`,
        'center- center'
      >
    | 'center'
}

export const Toast = ({ position }: ToastProps) => {
    return (
        <div>Toast Notification Position - {position}</div>
    )
}
// We also have center center but we need to include center-enter two times - so we have exclude