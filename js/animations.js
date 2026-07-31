/* ===== العربي ماركت — Animations ===== */
import { renderProducts } from './products.js';

/* ---- Typing effect ---- */
const TYPING_WORDS = [
  'تسوّق بذكاء',
  'جودة وأسعار مميزة',
  'توصيل لباب بيتك',
  'كل احتياجاتك في مكان واحد',
  'العربي ماركت — سوقك العربي',
];

export function initTyping(){
  const el = document.getElementById('typingText');
  if(!el) return;
  let wordIdx = 0, charIdx = 0, deleting = false;
  function tick(){
    const word = TYPING_WORDS[wordIdx];
    if(!deleting){
      el.textContent = word.slice(0, charIdx++);
      if(charIdx > word.length){ deleting = true; setTimeout(tick, 1600); return; }
      setTimeout(tick, 90);
    } else {
      el.textContent = word.slice(0, charIdx--);
      if(charIdx < 0){ deleting = false; wordIdx = (wordIdx+1)%TYPING_WORDS.length; charIdx = 0; setTimeout(tick, 300); return; }
      setTimeout(tick, 45);
    }
  }
  tick();
}

/* ---- Hero floating items ---- */
export function initHeroFloats(){
  const wrap = document.getElementById('heroFloats');
  if(!wrap) return;
  const items = [
    {e:'🍎',x:'8%',y:'20%',d:'0s',s:'6s'},
    {e:'🥕',x:'85%',y:'25%',d:'.5s',s:'7s'},
    {e:'🍌',x:'15%',y:'70%',d:'1s',s:'5.5s'},
    {e:'🥦',x:'80%',y:'65%',d:'1.5s',s:'6.5s'},
    {e:'🍊',x:'25%',y:'40%',d:'.3s',s:'5s'},
    {e:'🫐',x:'70%',y:'45%',d:'1.2s',s:'6.8s'},
    {e:'🍅',x:'45%',y:'15%',d:'.8s',s:'5.8s'},
    {e:'🥑',x:'60%',y:'80%',d:'1.8s',s:'7.2s'},
    {e:'خصم 30%',x:'40%',y:'75%',d:'0s',s:'5s',offer:true},
    {e:'عرض خاص',x:'55%',y:'20%',d:'1s',s:'6s',offer:true},
  ];
  wrap.innerHTML = items.map(it=>`
    <div class="float-item ${it.offer?'offer':''}" style="left:${it.x};top:${it.y};animation-delay:${it.d};animation-duration:${it.s}">${it.e}</div>
  `).join('');
}

/* ---- Count up stats ---- */
export function initCountUp(){
  const nums = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(!en.isIntersecting) return;
      const el = en.target;
      const target = parseInt(el.dataset.count);
      let cur = 0;
      const step = Math.max(1, Math.floor(target/40));
      const t = setInterval(()=>{
        cur += step;
        if(cur >= target){ cur = target; clearInterval(t); }
        el.textContent = cur + (target>=1000?'+':'');
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold:.5 });
  nums.forEach(n=>observer.observe(n));
}

/* ---- Custom cursor ---- */
export function initCursor(){
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if(!dot || !ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',(e)=>{
    mx=e.clientX; my=e.clientY;
    dot.style.left=mx+'px'; dot.style.top=my+'px';
  });
  function loop(){
    rx += (mx-rx)*.18; ry += (my-ry)*.18;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(loop);
  }
  loop();
  document.querySelectorAll('a,button,.product-card,.cat-card,.filter-btn,.social,.icon-btn').forEach(el=>{
    el.addEventListener('mouseenter',()=>ring.classList.add('grow'));
    el.addEventListener('mouseleave',()=>ring.classList.remove('grow'));
  });
}

/* ---- Scroll progress + navbar + back to top ---- */
export function initScroll(){
  const progress = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');
  const backTop = document.getElementById('backTop');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['home','categories','products','offers','contact'].map(id=>document.getElementById(id));

  window.addEventListener('scroll', ()=>{
    const st = window.pageYOffset;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    if(progress) progress.style.width = (st/h*100)+'%';
    if(navbar) navbar.classList.toggle('scrolled', st>50);
    if(backTop) backTop.classList.toggle('show', st>600);
    // active nav
    let active = 'home';
    sections.forEach(s=>{
      if(s && s.offsetTop-120 <= st) active = s.id;
    });
    navLinks.forEach(l=>l.classList.toggle('active', l.getAttribute('href')==='#'+active));
  });

  if(backTop) backTop.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));
}

/* ---- Reveal on scroll ---- */
export function initReveal(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('visible'); observer.unobserve(en.target); }
    });
  }, { threshold:.15, rootMargin:'0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}

/* ---- Magnetic buttons ---- */
export function initMagnetic(){
  document.querySelectorAll('.magnetic').forEach(btn=>{
    btn.addEventListener('mousemove',(e)=>{
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      btn.style.transform = `translate(${x*.25}px,${y*.35}px)`;
      const glow = btn.querySelector('.btn-glow');
      if(glow){ glow.style.setProperty('--mx', ((e.clientX-r.left)/r.width*100)+'%'); glow.style.setProperty('--my', ((e.clientY-r.top)/r.height*100)+'%'); }
    });
    btn.addEventListener('mouseleave',()=>{ btn.style.transform=''; });
  });
}

/* ---- Ripple on buttons ---- */
export function initRipple(){
  document.addEventListener('click',(e)=>{
    const btn = e.target.closest('.btn');
    if(!btn) return;
    const r = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(r.width, r.height);
    ripple.style.width = ripple.style.height = size+'px';
    ripple.style.left = (e.clientX - r.left - size/2)+'px';
    ripple.style.top = (e.clientY - r.top - size/2)+'px';
    btn.appendChild(ripple);
    setTimeout(()=>ripple.remove(), 600);
  });
}

/* ---- Mouse parallax on hero ---- */
export function initParallax(){
  const hero = document.querySelector('.hero');
  if(!hero) return;
  const shapes = hero.querySelectorAll('.hero-shape');
  const floats = hero.querySelectorAll('.float-item');
  hero.addEventListener('mousemove',(e)=>{
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) / r.width;
    const y = (e.clientY - r.top - r.height/2) / r.height;
    shapes.forEach((s,i)=>{
      const depth = (i+1)*15;
      s.style.transform = `translate(${x*depth}px,${y*depth}px)`;
    });
    floats.forEach((f,i)=>{
      const depth = (i%3+1)*8;
      f.style.marginLeft = (x*depth)+'px';
      f.style.marginTop = (y*depth)+'px';
    });
  });
}

/* ---- Particles ---- */
export function initParticles(){
  const wrap = document.getElementById('particles');
  if(!wrap) return;
  for(let i=0;i<20;i++){
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random()*6+2;
    p.style.width = p.style.height = size+'px';
    p.style.left = Math.random()*100+'%';
    p.style.animationDuration = (Math.random()*15+10)+'s';
    p.style.animationDelay = (Math.random()*10)+'s';
    p.style.opacity = Math.random()*.4+.1;
    if(i%3===0) p.style.background = 'var(--gold)';
    wrap.appendChild(p);
  }
}

/* ---- Loader ---- */
export function initLoader(){
  const loader = document.getElementById('loader');
  const bar = document.querySelector('.loader-progress');
  const pct = document.getElementById('loaderPercent');
  if(!loader) return;
  let p = 0;
  const t = setInterval(()=>{
    p += Math.random()*18;
    if(p>=100){ p=100; clearInterval(t); setTimeout(()=>loader.classList.add('hide'), 400); }
    if(bar) bar.style.width = p+'%';
    if(pct) pct.textContent = Math.floor(p)+'%';
  }, 180);
}

/* ---- Mobile menu ---- */
export function initMobileMenu(){
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if(!toggle || !links) return;
  toggle.addEventListener('click',()=>{
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  links.querySelectorAll('.nav-link').forEach(l=>{
    l.addEventListener('click',()=>{
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

/* ---- Product filter ---- */
export function initFilters(){
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(b=>{
    b.addEventListener('click',()=>{
      btns.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      renderProducts(b.dataset.filter);
    });
  });
}

/* ---- 3D tilt on product cards ---- */
export function init3DTilt(){
  document.addEventListener('mousemove',(e)=>{
    const card = e.target.closest('.product-card');
    if(!card) return;
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - .5;
    const y = (e.clientY - r.top)/r.height - .5;
    card.style.transform = `translateY(-8px) rotateX(${-y*10}deg) rotateY(${x*10}deg)`;
  });
  document.addEventListener('mouseout',(e)=>{
    const card = e.target.closest('.product-card');
    if(card) card.style.transform = '';
  });
}

/* ---- Re-init reveal for dynamically added product cards ---- */
export function refreshReveal(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add('visible'); observer.unobserve(en.target); }
    });
  }, { threshold:.15 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el));
}
