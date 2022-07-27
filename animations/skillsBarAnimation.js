
export const reveal = () => {
  
  const reveals = document.querySelectorAll(".skills");
  const merquee = document.querySelectorAll(".forMarquee");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {

      switch (reveals[i].id) {
        case "html": 
          reveals[i].classList.add("html");
          break;
        case  "js":
          reveals[i].classList.add("js");
          break;

        case "css": 
          reveals[i].classList.add("css");
          break;

        case "react": 
          reveals[i].classList.add("react");
          break;

        case "csharp": 
          reveals[i].classList.add("csharp");
          break;

      }
    }
  } 


  for (let i = 0; i < merquee.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = window.pageYOffset + merquee[i].getBoundingClientRect().top;
    const elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {

      merquee[i].classList.add("slide");
    }
  }


}
