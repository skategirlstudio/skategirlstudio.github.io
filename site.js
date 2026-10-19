const button=document.querySelector('.menu-button');
const menu=document.querySelector('#mobile-nav');
function setMenu(open){
 button.setAttribute('aria-expanded',String(open));
 button.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');
 menu.hidden=!open;
 button.querySelector('span').textContent=open?'−':'＋';
}
button.addEventListener('click',()=>setMenu(menu.hidden));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){setMenu(false);button.focus();}});
const desktop=window.matchMedia('(min-width: 901px)');
desktop.addEventListener('change',e=>{if(e.matches)setMenu(false);});
