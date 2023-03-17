import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
    
function onFormInput(e) {

    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

populateForm();

function onFormSubmit(evt) {

    evt.preventDefault();
    
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);

    if (savedFormData) {

        formDataValue = JSON.parse(savedFormData);

        refs.input.value = formDataValue.email;
        refs.textarea.value = formDataValue.message;
        console.log(savedFormData);

    }
};
