const colorElements = document.querySelectorAll('.color');
    const colorPickedElement = document.querySelector('.colorPicked');

    colorElements.forEach(colorElement => {
      colorElement.addEventListener('click', function() {
        const color = this.textContent;
        colorPickedElement.textContent = color;
        document.body.style.backgroundColor = color.toLowerCase();
      });
    });

  