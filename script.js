  let text =  document.querySelector(".text2");
 
  const textLoad = ()=>{
    setTimeout(()=>{
        text.textContent="Freelancer"
      },0);
      setTimeout(()=>{
        text.textContent="Developer"
      },5000);
      setTimeout(()=>{
        text.textContent="Blogger"
      },8000)
    };

    textLoad();
    setInterval(textLoad,12000)
 