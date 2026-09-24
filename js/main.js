(function(){
  var t=document.getElementById('mob-toggle'),d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),c=document.getElementById('drawer-close');
  if(t&&d&&o){
    function open(){d.removeAttribute('hidden');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');document.documentElement.style.overflow='hidden';}
    function close(){d.setAttribute('hidden','');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');document.documentElement.style.overflow='';}
    t.addEventListener('click',function(){t.getAttribute('aria-expanded')==='true'?close():open();});
    if(c)c.addEventListener('click',close);
    o.addEventListener('click',close);
    d.querySelectorAll('a').forEach(function(a){a.addEventListener('click',close);});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  }
  document.querySelectorAll('.drawer-group-toggle').forEach(function(btn){
    btn.addEventListener('click',function(){
      var sub=document.getElementById(btn.getAttribute('aria-controls'));
      var open=btn.getAttribute('aria-expanded')==='true';
      btn.setAttribute('aria-expanded', open?'false':'true');
      if(sub)sub.classList.toggle('open');
    });
  });
  document.querySelectorAll('.faq-item').forEach(function(item){
    var q=item.querySelector('.faq-q');
    if(!q)return;
    q.addEventListener('click',function(){item.classList.toggle('open');});
  });
})();
