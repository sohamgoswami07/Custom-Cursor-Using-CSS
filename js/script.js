// First Section JS

let cursor = document.querySelectorAll("#section .cursor");
let links = document.querySelectorAll("#section .link");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    el.style.display = `block`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })

  window.addEventListener("mouseout", () => {
    cursor.forEach(el => {
      el.style.display = `none`;
    })
  })
  
})