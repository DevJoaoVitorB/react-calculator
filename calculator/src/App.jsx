import { CalculatorContainer, KeyboardContainer, KeyboardRow } from './styles';
import CalculatedDisplay from './components/Input';
import KeyboardButton from './components/Button';
import { useState } from 'react';

function App() {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('');
    const [operation, setOperation] = useState('');

    // Limpar o Número Atual
    const handlerOnClear = () => {
        setCurrentNumber('0');
        setFirstNumber('');
    };

    // Adicionar Números ao Display
    const handlerAddNumber = (number) => {
        if (currentNumber === '0') {
            setCurrentNumber(number);
            return;
        }

        setCurrentNumber(`${currentNumber}${number}`);
    };

    // Somar Números
    const handlerSumNumbers = () => {
        if (!firstNumber) {
            setFirstNumber(currentNumber);
            setCurrentNumber('0');
            setOperation('+');
        } else if (operation === '+') {
            setCurrentNumber(
                String(Number(firstNumber) + Number(currentNumber)),
            );
            setFirstNumber('');
            setOperation('');
        }
    };

    // Subtrair Números
    const handlerMinNumbers = () => {
        if (!firstNumber) {
            setFirstNumber(currentNumber);
            setCurrentNumber('0');
            setOperation('-');
        } else if (operation === '-') {
            setCurrentNumber(
                String(Number(firstNumber) - Number(currentNumber)),
            );
            setFirstNumber('');
            setOperation('');
        }
    };

    // Multiplicar Números
    const handlerMultNumbers = () => {
        if (!firstNumber) {
            setFirstNumber(currentNumber);
            setCurrentNumber('0');
            setOperation('*');
        } else if (operation === '*') {
            setCurrentNumber(
                String(Number(firstNumber) * Number(currentNumber)),
            );
            setFirstNumber('');
            setOperation('');
        }
    };

    // Dividir Números
    const handlerDivNumbers = () => {
        if (!firstNumber) {
            setFirstNumber(currentNumber);
            setCurrentNumber('0');
            setOperation('/');
        } else if (operation === '/') {
            setCurrentNumber(
                String(Number(firstNumber) / Number(currentNumber)),
            );
            setFirstNumber('');
            setOperation('');
        }
    };

    // Igualar os Valores com a Operação Selecionada
    const handlerEqualsNumbers = () => {
        if (firstNumber && operation && currentNumber !== '0') {
            switch (operation) {
                case '+':
                    handlerSumNumbers();
                    break;
                case '-':
                    handlerMinNumbers();
                    break;
                case '*':
                    handlerMultNumbers();
                    break;
                case '/':
                    handlerDivNumbers();
                    break;
            }
        }
    };

    return (
        <CalculatorContainer>
            {/* Display da Calculadora */}
            <CalculatedDisplay value={currentNumber} />

            {/* Teclado da Calculadora */}
            <KeyboardContainer>
                {/* Linha 1 */}
                <KeyboardRow>
                    <KeyboardButton
                        variant={'operation'}
                        size={'small'}
                        label={'C'}
                        onClick={handlerOnClear}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'operation'}
                        size={'small'}
                        label={'/'}
                        onClick={handlerDivNumbers}
                    ></KeyboardButton>
                </KeyboardRow>

                {/* Linha 2 */}
                <KeyboardRow>
                    <KeyboardButton
                        variant={'number'}
                        size={'small'}
                        label={'7'}
                        onClick={() => handlerAddNumber('7')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'number'}
                        size={'small'}
                        label={'8'}
                        onClick={() => handlerAddNumber('8')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'number'}
                        size={'small'}
                        label={'9'}
                        onClick={() => handlerAddNumber('9')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'operation'}
                        size={'small'}
                        label={'x'}
                        onClick={handlerMultNumbers}
                    ></KeyboardButton>
                </KeyboardRow>

                {/* Linha 3 */}
                <KeyboardRow>
                    <KeyboardButton
                        variant={'number'}
                        size={'small'}
                        label={'4'}
                        onClick={() => handlerAddNumber('4')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'number'}
                        size={'small'}
                        label={'5'}
                        onClick={() => handlerAddNumber('5')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'number'}
                        size={'small'}
                        label={'6'}
                        onClick={() => handlerAddNumber('6')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'operation'}
                        size={'small'}
                        label={'-'}
                        onClick={handlerMinNumbers}
                    ></KeyboardButton>
                </KeyboardRow>

                {/* Linha 4 */}
                <KeyboardRow>
                    <KeyboardButton
                        variant={'number'}
                        size={'small'}
                        label={'1'}
                        onClick={() => handlerAddNumber('1')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'number'}
                        size={'small'}
                        label={'2'}
                        onClick={() => handlerAddNumber('2')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'number'}
                        size={'small'}
                        label={'3'}
                        onClick={() => handlerAddNumber('3')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'operation'}
                        size={'small'}
                        label={'+'}
                        onClick={handlerSumNumbers}
                    ></KeyboardButton>
                </KeyboardRow>

                {/* Linha 5 */}
                <KeyboardRow>
                    <KeyboardButton
                        variant={'number'}
                        size={'large'}
                        label={'0'}
                        onClick={() => handlerAddNumber('0')}
                    ></KeyboardButton>
                    <KeyboardButton
                        variant={'operation'}
                        size={'small'}
                        label={'='}
                        onClick={handlerEqualsNumbers}
                    ></KeyboardButton>
                </KeyboardRow>
            </KeyboardContainer>
        </CalculatorContainer>
    );
}

export default App;
