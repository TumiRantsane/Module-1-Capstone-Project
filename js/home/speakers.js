export const presenters = [
  {
    name: 'Tom Lewis',
    profession: 'Computer Scientist',
    description: '10 years of experience in Programming and AI development.',
    img: 'images/speaker1.png',
  },
  {
    name: 'John Paul',
    profession: 'Software Engineer',
    description: '4 years of teaching Databases and Algorithm.',
    img: 'images/speaker2.png',
  },
  {
    name: 'Ruth Shockins',
    profession: 'Front-End Developer from France',
    description: 'Professional with 8 years of experience in Web Design.',
    img: 'images/speaker3.png',
  },
  {
    name: 'Menzi Restrova',
    profession: 'Full Stack Developer from Russia',
    description: 'Professional with 4 years of experience in Web Design as Freelancer.',
    img: 'images/speaker4.png',
  },
  {
    name: 'Katerina Koslov',
    profession: 'Full Stack Developer from Russia',
    description: '3 years of experience in Web Development and Databases.',
    img: 'images/speaker5.png',
  },
  {
    name: 'Ryan Merkley',
    profession: 'Front-End Developer from USA',
    description: 'Professional with 6 years of experience in Web Design.',
    img: 'images/speaker6.png',
  },
];

const referencePosition = document.querySelector('.classes');

export const createSpeakerStructureHTML = () => {
  referencePosition.insertAdjacentHTML('afterend',
    `<section class="presenter" id="speakers">
     <h2 class="presenter_title">Presenters</h2><hr>
     <ul class="speaker"></ul></section>`);
};

export const createSpeakerCard = () => {
  presenters.forEach((presenter) => {
    const speakersGrid = document.querySelector('.speaker');

    speakersGrid.insertAdjacentHTML(
      'beforeend',
      `<li class="card">
         <div class="presenter_img">
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