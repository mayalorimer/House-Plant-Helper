let image;

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#titleInp').value.trim();
    const description = document.querySelector('#descInp').value.trim();

  //  const image
    console.log(title, description);
    if (title && description) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ title, description, image }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // document.location.replace('/posts');
      } else {
        alert('Failed to create project');
      }
    }
  };

  var myWidget = cloudinary.createUploadWidget(
    {
      cloudName: "dtpdctlvq",
      uploadPreset: "green-guardian",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        image = result.info.url;
      }
    }
  );
  
  document.getElementById("upload_widget").addEventListener(
    "click",
    function () {
      myWidget.open();
    },
    false
  );
  
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);

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
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  
// post request to post route 