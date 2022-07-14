const submitAdvice = async (event) => {
  event.preventDefault();
  
  console.log("hello");
  
  const id = event.target.dataset.id;
  console.log(id);
  const advice = document.querySelector(`#adviceInp${id}`).value.trim();
  console.log(advice);
  if (id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'POST',
      body: JSON.stringify({ advice }),
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

const btns = document.querySelectorAll('.adviceBtn');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', submitAdvice)
};