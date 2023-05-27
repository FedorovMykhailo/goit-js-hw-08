import throttle from 'lodash.throttle';

const refs = { form: document.querySelector(".feedback-form"), };

const feedback = {
    email: "",
    message: "",
}

const onLoad = () => {
    try {
        const jsonFeedback = JSON.parse(localStorage.getItem('feedback-form-state'))
        if (jsonFeedback) {
            refs.form.elements.email.value = feedback.email = jsonFeedback.email;
            refs.form.elements.message.value = feedback.message = jsonFeedback.message;
        }
    } catch (error) {
        console.log(error.message);
    }
}
    
 const onInput = (event) => {
    if (event.target.name === "email") {
        feedback.email = event.target.value;
    }
    else {
        feedback.message = event.target.value
    }
     try {
        localStorage.setItem('feedback-form-state', JSON.stringify(feedback))
     } catch (error) {
        console.log(error.message);
     }
     
 }

const onSubmit = (event) => {
    event.preventDefault();
    // const jsonFeedback = JSON.parse(localStorage.getItem('feedback-form-state'))
    console.log(feedback);
    localStorage.removeItem('feedback-form-state');
    refs.form.reset();
    feedback.email = feedback.message = "";
}
 
onLoad();

refs.form.addEventListener('input', throttle(onInput, 500))

refs.form.addEventListener('submit',onSubmit)


