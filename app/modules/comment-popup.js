import { saveComments } from './comments-utils.js';

const commentPopup = (show, id, cmtsNumber) => {
  const mainEle = document.querySelector('main');
  const popup = document.createElement('div');
  popup.classList.add('popup', 'flex', 'flex-col', 'flex-al-c');
  popup.innerHTML = `
    <div class="close-btn">
        <i class="fa-solid fa-circle-xmark "></i>
    </div>
    <div class="details flex">
        <img class="thumbnail" src="${show.image.original}" alt="show thumbnail" />
        <div class="text-block">
            <h2 class="title">${show.name}</h2>

            <div class="categorie flex flex-al-c">
            <h4>Categorie :</h4>
            <ul class="genres flex">
                ${show.genres.forEach((genre) => `<li class="genre">${genre}</li>`)};
            </ul>
            </div>

            <div class="description">
            ${show.summary}
            </div>

            <div class="movie-comments">
                <h3 class="cmt-title">
                    Comments (<span class="comments-num">${cmtsNumber}</span>)
                </h3>
                <ul class="comments">
                </ul>
            </div>
        </div>
    </div>

    <div class="form-cont">
        <h3 class="form-title">Add a comment</h3>
        <form action="#" class="form flex flex-col">

            <input type="text" name="name" id="name" placeholder="Your name" />
            <textarea name="comment" id="comment-area" cols="30" rows="10" placeholder="Your insights"></textarea>
            <input type="submit" class="btn submit-btn" value="Comment" />
            
        </form>
    </div>
    `;
  mainEle.appendChild(popup);

  // close popup on button click
  const closeBtn = popup.querySelector('.close-btn');

  closeBtn.addEventListener('click', () => {
    mainEle.removeChild(popup);
  });

  // Submit popup data on submit-btn click
  const submitBtn = popup.querySelector('.submit-btn');

  submitBtn.addEventListener('click', (e) => {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment-area').value;

    if (name && comment) {
      saveComments(id, name, comment);
      if (saveComments) {
        console.log(saveComments(id, name, comment));
      }
    } else {
      e.preventDefault();
    }
  });

  const form = popup.querySelector('.form');
  form.addEventListener('submit', (e) => { e.preventDefault(); });
};

export default commentPopup;
