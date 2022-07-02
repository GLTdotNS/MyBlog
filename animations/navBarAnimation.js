
export const scrollFunction = () => {

  const navbar = document.querySelector("nav");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   
      // navbar.style.position = "sticky"
      navbar.style.top = "0px";
      navbar.style.backgroundColor = "black";

      if(navigator.userAgent.match(/Mobi/)){
        navbar.style.backgroundColor = "black";
      }
   
    } else {
      navbar.style.position = "relative"
      navbar.style.top = "0px";
      navbar.style.backgroundColor = "transparent ";
   
    }
  }

