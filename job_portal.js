

/*   Job portal script*/
document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nemo temporibus aspernatur?',
            image: './images/testimonial_1.jpg',
            name: 'Velsiya Dsouza',
            position:'web developer'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nemo temporibus aspernatur?',
            image: './images/testimonial_2.jpg',
            name: 'Niharika sani',
            position:'java developer'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nemo temporibus aspernatur?',
            image: './images/testimonial_3.jpg',
            name: 'Jessika lekkar',
            position:'c++ developer'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati nemo temporibus aspernatur?',
            image: './images/testimonial_4.jpg',
            name: 'Ruby cassalas',
            position:'backend developer'
        }
        // Add more card data as needed
    ];
  
    const cardsContainer = document.getElementById('cardinfo');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentIndex = 0;
  
    function renderCards() {
        cardsContainer.innerHTML = '';
        cardData.forEach((card, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('firstcard');
            if (index === currentIndex) {
                cardDiv.style.display = 'block';
            } else {
                cardDiv.style.display = 'none';
            }
            cardDiv.innerHTML = `
                <div class="top">${card.title}</div>
                <div class="bottomofcard">
                    <div class="img"><img src="${card.image}" alt="${card.name}"></div>
                    <div class="intro"><h3>${card.name}</h3>
                    <p>${card.position}</p></div>
                </div>
            `;
            cardsContainer.appendChild(cardDiv);
        });
    }
  
    function updateSliderPosition() {
        //let offset=-index*800;
       //cardsContainer.style.transform = `translateX(${offset}px)`;
        renderCards();
    }
  
    nextButton.addEventListener('click', () => {
        if (currentIndex < cardData.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first card
        }
        updateSliderPosition();
    });
  
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cardData.length - 1; // Loop back to the last card
        }
        updateSliderPosition();
    });
  
    // Initial render
    renderCards();
  });
  
  
  let job_sections = [
    {
        "position":"Data scientist",
        "company":"3G Infotech Services",
        "link":"contact.html",
        "location":"Mumbai",
        "timing":"Full time",
        "experience":"0-1Years"
    },
    {
        "position":"Data Engineer",
        "company":"3G Infotech Services",
        "link":"contact.html",
        "location":"Mumbai",
        "timing":"Full time",
        "experience":"0-1Years"
    },
    {
        "position":"Frontend Developer",
        "company":"3G Infotech Services",
        "link":"contact.html",
        "location":"Mumbai",
        "timing":"Full time",
        "experience":"0-1Years"
    },
    {
        "position":"Backend Developer",
        "company":"3G Infotech Services",
        "link":"contact.html",
        "location":"Mumbai",
        "timing":"Full time",
        "experience":"0-1Years"
    },
    {
        "position":"Backend Developer",
        "company":"3G Infotech Services",
        "link":"contact.html",
        "location":"Mumbai",
        "timing":"Full time",
        "experience":"0-1Years"
    },
    {
        "position":"Backend Developer",
        "company":"3G Infotech Services",
        "link":"contact.html",
        "location":"Mumbai",
        "timing":"Full time",
        "experience":"0-1Years"
    }
  ];
  let jobCards = "";
  job_sections.forEach((elem)=>
  {
    jobCards+=`<div class="job-section-cards">
    <div class="top-job-section">
        <div class="top-left">
            <h4>${elem.position}</h4>
            <p>${elem.company}</p>    
        </div>
        <div class="top-right">
            <a href="${elem.link}">Apply</a>
        </div>
    </div>
    <div class="bottom-job-section">
        <div class="bottom-left">
            <p>${elem.location}</p>
            <p>${elem.experience}</p>
        </div>
        <div class="bottom-right">
            <p>${elem.timing}</p>
        </div>
    </div>
  </div>`
  // console.log(jobCards);
  document.querySelector(".job-section-parent").innerHTML=jobCards;
  });
  