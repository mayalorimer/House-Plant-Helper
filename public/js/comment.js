// when you click on add comment button it shows the input form to add advice
const btn = document.getElementById('addComment');
btn.addEventListener('click', () => {
    const form = document.getElementById('adviceAdd');
    form.style.display = 'block'; 
})





// javascript to recieve and post a new advice
const newAdviceHandler = async (event) => {
    event.preventDefault();
  
    const advice = document.querySelector('#advice').value.trim();
    console.log(advice);
    if (advice) {
      const response = await fetch(`/api/posts/advice`, {
        method: 'POST',
        body: JSON.stringify({ advice }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .getElementById('adviceBtn')
    .addEventListener('submit', newAdviceHandler);