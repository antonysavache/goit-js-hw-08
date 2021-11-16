import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const aform = document.querySelector('.feedback-form');

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 2100));

// let a = refs.textarea.value.split('');
// console.log(a);
// let b = [];
// a.forEach(i=>{
//   if (i !== ' '){
//     b.push(i)
//   }


// });

// b.join()


function onFormSubmit(evt) {

  evt.preventDefault();
  console.log('Отправляем форму');
  refs.form.reset();
  localStorage.removeItem('feedback-msg');

}


function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}


function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }

}

populateTextarea();

