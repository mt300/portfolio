var card = document.querySelectorAll('.card');
card.forEach( item => {
    item.addEventListener('mouseleave', e => {
        // console.log(e.target)
        e.target.style.animation = "card-blink  1s 1 ";
        
    })
})
console.log(card)