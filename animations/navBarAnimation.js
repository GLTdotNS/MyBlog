
export const scrollFunction = () => {
  let lastScroll;
  const navbar = document.querySelector("nav");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScroll ) {
   
    
      navbar.style.top = "-80px";
      navbar.style.backgroundColor = "black";

    } else {
      navbar.style.position = "relative"
      navbar.style.top = "0";
      navbar.style.backgroundColor = "transparent ";
   
    }
    lastScroll = scrollTop;
  }

