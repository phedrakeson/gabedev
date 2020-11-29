document.querySelector('#items').addEventListener('wheel', event => {
  event.preventDefault();
  if(event.deltaY > 0) {
    event.target.scrollBy(-400, 0);
    console.log('BAIXO')
  } else {
    event.target.scrollBy(400, 0);
    console.log('CIMA')
  }
})