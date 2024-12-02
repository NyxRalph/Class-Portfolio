
function moveProject(event) {
    const project = document.querySelectorAll(".project__wrapper");
    const scaleFactor = 1;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < project.length; ++i) {
  
      const isOdd = i % 2 !== 0;
      const boolint = isOdd ? -1 : 1;
      project[i].style.transformStyle = `preserve-3d`;
  
      project[i].style.transform = `perspective(650px) rotateX(${
        y * boolint
      }deg) rotateY(${x * boolint}deg) scale3d(1, 1, 1)`;
    }
  }


  