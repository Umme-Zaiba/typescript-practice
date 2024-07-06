import {Button} from './Button';

type ButtonComponentProps = React.ComponentProps<typeof Button>;

export const Button2: React.FC<ButtonComponentProps> = (props) => (
    <div>
        <Button {...props} />
    </div>
);
