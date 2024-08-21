// navbar toglle
var bar = document.querySelector("#bars");
var burger = document.querySelector(".burger");
var cross = document.querySelector("#cross");
bar.addEventListener("click", () => {
  burger.style.display = burger.style.display === "block" ? "none" : "block";
});
cross.addEventListener("click", () => {
  burger.style.display = burger.style.display === "block" ? "none" : "block";
});


//-------------------------------------------- ?course catagories and course  section 


// arrayobject for catagories of courses
// json data fetching 

fetch("./coursecat.json")
  .then((res) => res.json())
  .then((arrCat) => {
    var box = "";

    arrCat.forEach((elem) => {
      box += `
<div class="card flex flex-col justify-around  p-5">
              <div class="thaught textcontainer flex justify-around gap-2">
                <div class="text w-full">
                    <h1 class="text-xl font-bold">${elem.title}</h1>
                    <p class="text-xs">${elem.disc}</p>
                </div>
                <div class="img"><img  src="${elem.img}" alt=""></div>
              </div>
             <a href="${elem.url}"> <div class="knowmore  flex justify-between pt-3">
                <p class="text-l font-bold">Know More</p>
                <i class="fa-solid fa-circle-arrow-right text-2xl"></i>
              </div>
              </a>
            </div>
`;

      var groupOfCourses = document.querySelector(".groupOfCourses");
      if (groupOfCourses) {
        groupOfCourses.innerHTML = box;
      }
    });
  });

// course section
// course json data fetching 

fetch("./courses.json")
.then(res => res.json())
.then(arrcourse =>{

  let courseslist = "";
  arrcourse.forEach((elem) => {
    courseslist += `
          <div class="firstslider">
               <div class="info">
                  <div class="text_info">
                      <h1>${elem.head}</h1>
                      <p>${elem.info}</p>
                      <a href="#">${elem.link}</a>
                  </div>
               <div class="img">
                  <img src="${elem.img}" alt="">
              </div>
  
              </div>
          </div>
  
      `;
  
    var sliderwrapper = document.querySelector(".sliderwrapper");
    if (sliderwrapper) {
      sliderwrapper.innerHTML = courseslist;
    }
  });


});





// faq section code 

let arrfaq = [
  { question: "1. What types of courses are offered on this website?", answer: "We offer a wide range of courses covering various subjects, including technology, business, arts, sciences, and personal development. Each course is designed to cater to different learning levels, from beginners to advanced learners." },
  { question: "2. How can I enroll in a course?", answer: "Enrolling in a course is easy! Simply browse our course catalog, select the course you're interested in, and click on the Enroll button. You will then be guided through the registration and payment process." },
  { question: "3. Are the courses self-paced or instructor-led?", answer: " We offer both self-paced and instructor-led courses. Self-paced courses allow you to learn at your own convenience, while instructor-led courses provide structured learning with scheduled classes and interactive sessions with instructors." },
  { question: "4. Will I receive a certificate after completing a course?", answer: "Yes, upon successful completion of a course, you will receive a certificate of completion. This certificate can be downloaded and shared on your professional profiles or with potential employers." },
  { question: "5. What support is available if I have questions during my course?", answer: " We provide 24/7 support through our dedicated help center. You can reach out to our support team via email, live chat, or the discussion forums available within each course. Our instructors and community members are also here to assist you with any questions you may have." },
];

let clone = "";
arrfaq.forEach((elem, index) => {
  clone += `
    <div>
      <button class="flex items-center focus:outline-none" id="btn-${index}">
        <h1 class="mx-4 text-xl text-gray-700 dark:text-white">
          ${elem.question}
        </h1>
      </button>

      <div class="infocontent" style="display: none;">
        <div class="flex mt-8 md:mx-10">
          <span class="border border-red-500 "></span> 
          <p class="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
            ${elem.answer}
          </p>
        </div>
      </div>
    </div>
    <hr class="my-8 border-gray-200 dark:border-gray-700" />
  `;

  var parentfaq = document.querySelector("#parentfaq");
      if (parentfaq) {
        parentfaq.innerHTML = clone;
      }

});

arrfaq.forEach((elem, index) => {
  let btn = document.getElementById(`btn-${index}`);
  let infocontent = btn.nextElementSibling;

  btn.addEventListener("click", () => {
    infocontent.style.display = infocontent.style.display === "none" ? "block" : "none";
  });
});






