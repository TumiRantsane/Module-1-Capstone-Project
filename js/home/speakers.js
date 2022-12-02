export const presenters = [
  {
    name: 'Tiana Lewis',
    profession: 'UI/UX Designer',
    description: '5 years of experience in Web Development and Design',
    img: 'images/tm3.jpg',
  },
  {
    name: 'John Paul',
    profession: 'Software Engineer',
    description: '4 years of teaching Databases and Web Design.',
    img: 'images/tm4.jpg',
  },
  {
    name: 'Ruth Shockins',
    profession: 'Front-End Developer from France',
    description: 'Professional with 8 years of experience in Web Design.',
    img: 'images/tm5.jpg',
  },
  {
    name: 'Menzi Restrova',
    profession: 'Full Stack Developer from Russia',
    description: 'Professional with 4 years of experience in Web Design as Freelancer.',
    img: 'images/tm6.jpg',
  },
  {
    name: 'Katerina Koslov',
    profession: 'Full Stack Developer from Russia',
    description: '3 years of experience in Web Development and Databases.',
    img: 'images/tm7.jpg',
  },
  {
    name: 'Ryan Merkley',
    profession: 'Front-End Developer from USA',
    description: 'Professional with 6 years of experience in Web Design.',
    img: 'images/tm8.jpg',
  },
];

const referencePosition = document.querySelector('.classes');

export const createSpeakerStructureHTML = () => {
  referencePosition.insertAdjacentHTML('afterend',
    `<section class="presenter" id="featuredpresenters">
     <h2 class="presenter_title">Presenters</h2><hr>
     <ul class="speakers-container"></ul></section>`,
  );
};

export const createSpeakerCard = () => {
  presenters.forEach((presenter) => {
    const speakersGrid = document.querySelector('.speakers-container');

    speakersGrid.insertAdjacentHTML(
      'beforeend',
      `<li class="card">
         <div class="presenter_image">
         <img src="${presenter.img}" alt="presenter photo"></div>
        <div class="presenter_dsc">
        <h3>${presenter.name}</h3>
        <p class="dsc-1">${presenter.profession}</p>
        <p class="dsc-2">${presenter.description}</p>
        </div>
        </li>`,
    );
  });
};