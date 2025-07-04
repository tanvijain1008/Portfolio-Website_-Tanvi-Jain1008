//Mix it up Sorting

let mixerPortfolio = mixitup('.work-container', {
    selectors: {
        target: '.work-card'
    },
    animation: {
        duration: 300
    }
});

// Active link changing

const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l => l.addEventListener('click', activeWork));

//Portfolio Popup

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('work-button')){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector('.portfolio-popup').classList.toggle('open');
}

document.querySelector('.portfolio-popup-close').addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.work-img').src;
    document.querySelector('.portfolio-popup-subtitle span').innerHTML = portfolioItem.querySelector('.work-title').innerHTML;
    document.querySelector('.portfolio-popup-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}

//Services Popup
const modalViews = document.querySelectorAll('.services-modal');
const modelBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

// Input Animation

const inputs = document.querySelectorAll('.input'); //Finds all elements with the class .input and stores them in a list.

function focusFunc() {
    let parent = this.parentNode;//Used to trigger CSS animation (like floating labels or border color).
    parent.classList.add('focus'); //When an input is focused (clicked into), its parent gets a focus class.


}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove('focus');//When the input loses focus (clicked away), the focus class is removed only if the input is empty.
    }
}

inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc);//Adds both focus and blur event listeners to each input field.
    input.addEventListener('blur', blurFunc);//So when you click in or out of the input, the corresponding function runs
})

// Scroll Section Active Link

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}



