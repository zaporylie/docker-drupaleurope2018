for (var slide of document.getElementsByTagName('section')){
  if (!(slide.getAttribute('data-background') ||
      slide.getAttribute('data-background-video') ||
      slide.getAttribute('data-background-iframe'))){
    slide.setAttribute('data-background', 'drupal-europe/img/slide_bg.svg')
  }
}
