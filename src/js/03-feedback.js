import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-msg';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const skrt = {
  formInput: document.querySelector('[name="email"]'),
  formText: document.querySelector('[name="message"]')
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));
skrt.formInput.addEventListener('input', throttle(onTextareaInput, 200));

let dataValue;

function onTextareaInput(evt) {
  const message = skrt.formText.value;
  const mylo = skrt.formInput.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(
    {
      email:mylo,
      mesaga:message
    }
  )); 
  dataValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
}

dataValue = JSON.parse(localStorage.getItem(STORAGE_KEY));

function onFormSubmit(evt) {
  evt.preventDefault();
  if (skrt.formText.value)
  {
    console.log(dataValue)
    refs.form.reset();
    localStorage.removeItem('feedback-msg');
    console.log('Отправляем форму');
  } else if (skrt.formInput.value)
  {
    console.log(dataValue)
    refs.form.reset();
    localStorage.removeItem('feedback-msg');
    console.log('Отправляем форму');
  }

  // dataValue = null;
}

function populateTextarea() {
  const savedMessage = dataValue.mesaga;
  const savedMylo = dataValue.email;

  if (savedMessage) {
    skrt.formText.value = savedMessage;
  }

  if (savedMylo) {
    skrt.formInput.value = savedMylo;
  }
  
}



function go(){
  if(dataValue){
    populateTextarea();
  }
}
go()