window.setTimeout(function() {
             
  var observer = new MutationObserver(function(mutations) {

    let bar = document.querySelector('.player_controller .bar_play');

    window.webkit.messageHandlers.observer.postMessage({
      title: document.querySelector('.player_controller .song .blind').nextSibling.textContent.trim(),
      by: document.querySelector('.player_controller .artist .blind').nextSibling.textContent.trim(),
      thumbnail: document.querySelector('.player_controller .thumb img').getAttribute('src'),
      progress: parseInt(bar.getAttribute('aria-valuenow')),
      length: parseInt(bar.getAttribute('aria-valuemax')),
      isPlaying: document.querySelector('.player_controller .btn_now').classList.contains('play')
    })
  });
  
  observer.observe(document.querySelector('.player_controller'), {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
  });

}, 1000);

