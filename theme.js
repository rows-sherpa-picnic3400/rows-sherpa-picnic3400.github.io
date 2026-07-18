(function(){
  var KEY = 'site-theme';
  var btn = document.getElementById('themeToggle');
  var body = document.body;

  function apply(theme){
    if(theme === 'light'){ body.classList.add('light'); }
    else{ body.classList.remove('light'); }
    if(btn){ btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false'); }
  }

  var saved = null;
  try{ saved = localStorage.getItem(KEY); }catch(e){}
  if(saved){ apply(saved); }

  if(btn){
    btn.addEventListener('click', function(){
      var isLight = body.classList.toggle('light');
      try{ localStorage.setItem(KEY, isLight ? 'light' : 'dark'); }catch(e){}
      btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    });
  }
})();
