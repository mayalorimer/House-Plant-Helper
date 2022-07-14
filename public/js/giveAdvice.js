
const submitAdvice = async (event) => {
    event.preventDefault();
    const advice = document.querySelector('#adviceInp').value.trim();
}

document
  .querySelector('#addAdvice')
  .addEventListener('click', submitAdvice);
