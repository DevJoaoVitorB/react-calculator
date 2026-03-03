import { Display } from './styles';

const CalculatedDisplay = ({ value }) => {
    return (
        <Display>
            <input type="text" disabled value={value} />
        </Display>
    );
};

export default CalculatedDisplay;
