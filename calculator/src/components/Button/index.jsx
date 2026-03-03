import { Button } from './styles';

const KeyboardButton = ({ variant, size, label, onClick }) => {
    return (
        <Button variant={variant} size={size} type="button" onClick={onClick}>
            {label}
        </Button>
    );
};

export default KeyboardButton;
