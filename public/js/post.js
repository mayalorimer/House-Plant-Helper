addEventListener("click")
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#titleInp').value.trim();
    const description = document.querySelector('#descInp').value.trim();
    console.log(title, description);
    // if (title && description) {
    //   const response = await fetch(`/api/posts`, {
    //     method: 'POST',
    //     body: JSON.stringify({title, description}),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Failed to create project');
    //   }
    // }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector('#postBtn')
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  
// post request to post route 