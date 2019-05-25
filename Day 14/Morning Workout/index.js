let result = 0;

const onPlus = () => {
    const inputElm = document.querySelector('.calc__input');
    const number = parseInt(inputElm.value);

    result += number;

    const resultElm = document.querySelector('.calc__result');
    resultElm.textContent = result;
};

const onClear = () => {
    const resultElm = document.querySelector('.calc__result');
    result = 0;
    resultElm.textContent = result;
};