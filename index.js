const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
    if (e.key === "ArrowUp") {
        moveDodgerUp();
    }
    if (e.key === "ArrowDown") {
      moveDodgerDown();
  }
  });


  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  };
  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 10}px`;
    }
  };

  function moveDodgerUp () {
    const upNumbers = dodger.style.bottom.replace('px', '');
    const up = parseInt(upNumbers, 10);

    if (up < 380) {
      dodger.style.bottom = `${up + 10}`
    }
  }

  function moveDodgerDown () {
    const downNumbers = dodger.style.bottom.replace('px', '');
    const up = parseInt(downNumbers, 10);

    if (up > 0) {
      dodger.style.bottom = `${up - 10}`
    }
  }