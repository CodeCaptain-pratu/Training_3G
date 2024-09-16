
// /--------------------------------/ blog script 
const blogarr = [
    {
      img: "./images/blogimg1.jpg",
      heading: "Master New Skills in Minutes",
      para: "You don’t need hours to learn something new. With our step-by-step guides, you can quickly pick up valuable skills in just a few minutes a day.",
    },
    {
      img: "./images/blogimg2.jpg",
      heading: "Quick Tips for Effective Learning",
      para: "Maximize your learning potential with our bite-sized tips. Discover simple techniques that can make your study sessions more productive and efficient.",
    },
    {
<<<<<<< HEAD
      img: "./images/blog1.jpeg",
=======
      img: "./images/blogimg3.jpg",
>>>>>>> 553701573f98d308e9c8eba455166691e96409fc
      heading: "Boost Your Brainpower Today",
      para: "Enhance your cognitive abilities with easy-to-implement strategies. Start today and see how small changes can lead to big improvements in your thinking and memory.",
    },
    {
<<<<<<< HEAD
      img: "./images/blog2.jpeg",
=======
      img: "./images/blogimg4.avif",
>>>>>>> 553701573f98d308e9c8eba455166691e96409fc
      heading: "Learning Hacks You Need to Know",
      para: "Unlock the secrets to faster, smarter learning. These essential hacks will help you retain information better and make the most out of your study time.",
    },
    {
<<<<<<< HEAD
      img: "./images/blog3.jpeg",
=======
      img: "./images/blogimg5.jpg",
>>>>>>> 553701573f98d308e9c8eba455166691e96409fc
      heading: "Unlock Your Potential with These Tricks",
      para: "Everyone has untapped potential waiting to be discovered. Use our practical tricks to break through barriers and reach new heights in your personal and professional growth.",
    },
  ];
  
  let blogcards = "";
  
  blogarr.forEach((elem, index) => {
    blogcards += `
    <div class="blog-card w-[400px] h-26 flex  rounded" id="${index}">
      <div class="blog-image w-full flex items-center">
          <img class="w-full p-3  thaught" src="${elem.img}" alt="blog1">
      </div>
      <div class="blog-text w-full p-3 items-center thaught flex-col">
             <h1 class="text-xl mb-2">${elem.heading}</h1>
             <p class="text-xs">${elem.para}</p>
      </div>
  </div>
  
  `;
    // console.log(blogcards);
    var blogcontainer = document.querySelector(".blog-container");
    if (blogcontainer) {
        blogcontainer.innerHTML = blogcards;
    }
  });
  