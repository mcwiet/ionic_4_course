const inputName = document.querySelector('#input-name');
const inputRating = document.querySelector('#input-rating');
const btnConfirm = document.querySelector('#btn-confirm');
const btnClear = document.querySelector('#btn-cancel');
const courseList = document.querySelector('#course-list');
const alertController = document.querySelector('ion-alert-controller');

const clear = () => {
    inputName.value = '';
    inputRating.value = '';
}

btnConfirm.addEventListener('click', () => {
    const enteredName = inputName.value;
    const enteredRating = inputRating.value;

    if (enteredName.trim().length <= 0 ||
        enteredRating < 1 ||
        enteredRating > 5 ||
        enteredRating.trim().length <= 0) {

        alertController.create({
            message: 'Please enter valid data.',
            header: 'Invalid data',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredName + ': ' + enteredRating + '/5';
    courseList.appendChild(newItem);

    clear();
});

btnClear.addEventListener('click', clear);