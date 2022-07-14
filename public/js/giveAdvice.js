
const submitAdvice = async (event) => {
    event.preventDefault();
    const advice = document.querySelector('#adviceInp').value.trim();
    const id=event.target.dataset.id;
    console.log(id);
    if (advice && id) {
        const response = await fetch(`/api/posts/:${id}`, {
          method: 'POST',
          body: JSON.stringify({advice}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/posts');
        } else {
          alert('Failed to create project');
        }
      }
}

document
  .querySelector('#addAdvice')
  .addEventListener('click', submitAdvice);
