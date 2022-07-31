function profile() {
    let image = document.getElementById('image');
    // image.src = 'https://bit.ly/3JgMOSw';
    image.classList.toggle('rplc');
    // image.src="https://bit.ly/3znTWYH";
  }
  
  const image_input = document.getElementById('image-input');
  console.log(image_input);
  image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploaded_image = reader.result;
      document.querySelector('#display-image').src = `${uploaded_image}`;
    });
    reader.readAsDataURL(this.files[0]);
  });
  