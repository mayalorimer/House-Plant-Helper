var myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "dtpdctlvq",
    uploadPreset: "green-guardian",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
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
