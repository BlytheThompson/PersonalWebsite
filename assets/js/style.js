function fix_height() {
  let mh = document.getElementById('body-section-container').style.height;
  let str_mh = JSON.stringify(mh);
  let npxmh = str_mh.replace('px', '');
  let fmh = JSON.parse(npxmh);

  return fmh;
}

let window_size = window.addEventListener('resize', function() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  document.getElementById('body-section-container').style.height = (height*2-50) + 'px';

  let h = fix_height();

  document.getElementById('starting-screen-container').style.height = h/2 + 'px';
  document.getElementById('about-me-container').style.height = h/2 + 'px';

  return width, height;
});

document.body.onload = function() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  document.getElementById('body-section-container').style.height = (height*2) + 'px'

  let h = fix_height();

  document.getElementById('starting-screen-container').style.height = h/2 + 'px'; 
  document.getElementById('about-me-container').style.height = h/2 + 'px';  

  setTimeout(function() {
    let elements = document.getElementsByClassName('f18');
    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  }, 1001);
};

