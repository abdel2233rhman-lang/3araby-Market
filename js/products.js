/* ===== العربي ماركت — Products Data & Render ===== */

export const PRODUCTS = [
  // Pasta
  { id:1, cat:'pasta', name:'مكرونة سباجيتي', emoji:'🍝', price:18, old:25, badge:'28%-'},
  { id:2, cat:'pasta', name:'مكرونة فيتوتشيني', emoji:'🍝', price:22, old:30, badge:'جديد' },
  { id:3, cat:'pasta', name:'مكرونة قوس', emoji:'🍝', price:15, old:20, badge:'25%-' },
  { id:4, cat:'pasta', name:'مكرونة بنية', emoji:'🍝', price:28, old:0, badge:'' },

  // Juice
  { id:5, cat:'juice', name:'عصير برتقال طازج', emoji:'🧃', price:20, old:28, badge:'30%-' },
  { id:6, cat:'juice', name:'عصير مانجو', emoji:'🧃', price:24, old:0, badge:'الأكثر مبيعاً' },
  { id:7, cat:'juice', name:'عصير تفاح', emoji:'🧃', price:18, old:24, badge:'25%-' },
  { id:8, cat:'juice', name:'عصير عنب', emoji:'🧃', price:26, old:0, badge:'' },

  // Chips
  { id:9, cat:'chips', name:'شيبسي بطاطس', emoji:'🍟', price:8, old:12, badge:'33%-' },
  { id:10, cat:'chips', name:'شيبسي جبن', emoji:'🍟', price:8, old:0, badge:'' },
  { id:11, cat:'chips', name:'شيبسي حار', emoji:'🍟', price:9, old:14, badge:'35%-' },
  { id:12, cat:'chips', name:'شيبسي كاتشب', emoji:'🍟', price:8, old:0, badge:'جديد' },

  // Oil
  { id:13, cat:'oil', name:'زيت ذرة فاخر', emoji:'🛢️', price:65, old:85, badge:'23%-' },
  { id:14, cat:'oil', name:'زيت زيتون بكر', emoji:'🫒', price:120, old:0, badge:'بريميوم' },
  { id:15, cat:'oil', name:'زيت دوار الشمس', emoji:'🛢️', price:55, old:70, badge:'21%-' },
  { id:16, cat:'oil', name:'زيت كانولا', emoji:'🛢️', price:60, old:0, badge:'' },

  // Sugar
  { id:17, cat:'sugar', name:'سكر أبيض 1كجم', emoji:'🍚', price:30, old:40, badge:'25%-' },
  { id:18, cat:'sugar', name:'سكر بني', emoji:'🟤', price:38, old:0, badge:'' },
  { id:19, cat:'sugar', name:'سكر ناعم', emoji:'🍚', price:35, old:45, badge:'22%-' },
  { id:20, cat:'sugar', name:'سكر مكعبات', emoji:'🧊', price:42, old:0, badge:'جديد' },

  // Biscuit
  { id:21, cat:'biscuit', name:'بسكويت شوكولاتة', emoji:'🍪', price:12, old:18, badge:'33%-' },
  { id:22, cat:'biscuit', name:'بسكويت قمح', emoji:'🍪', price:10, old:0, badge:'' },
  { id:23, cat:'biscuit', name:'بسكويت ويفر', emoji:'🧇', price:14, old:20, badge:'30%-' },
  { id:24, cat:'biscuit', name:'بسكويت ساندويتش', emoji:'🍪', price:16, old:0, badge:'الأكثر مبيعاً' },

  // Canned
  { id:25, cat:'canned', name:'فاصوليا معلبة', emoji:'🥫', price:18, old:25, badge:'28%-' },
  { id:26, cat:'canned', name:'ذرة معلبة', emoji:'🥫', price:20, old:0, badge:'' },
  { id:27, cat:'canned', name:'تونة معلبة', emoji:'🐟', price:35, old:45, badge:'22%-' },
  { id:28, cat:'canned', name:'بازلاء معلبة', emoji:'🥫', price:16, old:0, badge:'جديد' },

  // Dairy
  { id:29, cat:'dairy', name:'حليب طازج 1لتر', emoji:'🥛', price:28, old:35, badge:'20%-' },
  { id:30, cat:'dairy', name:'زبادي طبيعي', emoji:'🥛', price:15, old:0, badge:'' },
  { id:31, cat:'dairy', name:'لبن رائب', emoji:'🥛', price:18, old:24, badge:'25%-' },
  { id:32, cat:'dairy', name:'قشطة طازجة', emoji:'🥛', price:32, old:0, badge:'بريميوم' },

  // Cheese
  { id:33, cat:'cheese', name:'جبن شيدر', emoji:'🧀', price:55, old:70, badge:'21%-' },
  { id:34, cat:'cheese', name:'جبن موزاريلا', emoji:'🧀', price:65, old:0, badge:'الأكثر مبيعاً' },
  { id:35, cat:'cheese', name:'جبن أبيض', emoji:'🧀', price:40, old:52, badge:'23%-' },
  { id:36, cat:'cheese', name:'جبن كريم', emoji:'🧀', price:48, old:0, badge:'' },

  // Sweets
  { id:37, cat:'sweets', name:'شوكولاتة فاخرة', emoji:'🍫', price:45, old:60, badge:'25%-' },
  { id:38, cat:'sweets', name:'حلوى جيلي', emoji:'🍬', price:18, old:0, badge:'' },
  { id:39, cat:'sweets', name:'كعك محشو', emoji:'🍩', price:25, old:32, badge:'22%-' },
  { id:40, cat:'sweets', name:'مصاص حلوى', emoji:'🍭', price:12, old:0, badge:'جديد' },
];

export const CAT_NAMES = {
  pasta:'مكرونات', juice:'عصائر', chips:'شيبسي', oil:'زيت',
  sugar:'سكر', biscuit:'بسكويت', canned:'معلبات', dairy:'ألبان',
  cheese:'جبن', sweets:'حلويات'
};

export function renderProducts(filter='all'){
  const grid = document.getElementById('productsGrid');
  if(!grid) return;
  const list = filter==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===filter);
  grid.innerHTML = list.map((p,i)=>`
    <article class="product-card reveal delay-${(i%3)+1}" data-id="${p.id}" data-cat="${p.cat}">
      <div class="product-img-wrap zoom-hover">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <button class="product-fav" data-fav="${p.id}" aria-label="المفضلة">❤</button>
        <span class="product-emoji">${p.emoji}</span>
      </div>
      <div class="product-body">
        <div class="product-cat">${CAT_NAMES[p.cat]}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">
          <span class="price-now">${p.price} ج.م</span>
          ${p.old ? `<span class="price-old">${p.old} ج.م</span>` : ''}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary add-cart" data-id="${p.id}">أضف للسلة</button>
          <button class="quick-view" data-id="${p.id}">نظرة سريعة</button>
        </div>
      </div>
    </article>
  `).join('');
  // re-trigger reveal
  requestAnimationFrame(()=>{
    grid.querySelectorAll('.reveal').forEach(el=>{
      if(isInViewport(el)) el.classList.add('visible');
    });
  });
}

export function renderOffers(){
  const track = document.getElementById('offersTrack');
  if(!track) return;
  const offers = PRODUCTS.filter(p=>p.old && p.old>p.price).slice(0,8);
  track.innerHTML = offers.map(p=>`
    <div class="offer-card reveal">
      <div class="offer-emoji">${p.emoji}</div>
      <h4>${p.name}</h4>
      <p>${CAT_NAMES[p.cat]} — عرض خاص</p>
      <div>
        <span class="offer-price">${p.price} ج.م</span>
        <span class="offer-old">${p.old} ج.م</span>
      </div>
      <button class="btn btn-primary add-cart" data-id="${p.id}" style="margin-top:.8rem;width:100%">أضف للسلة</button>
    </div>
  `).join('');
}

export function isInViewport(el){
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight - 60 && r.bottom > 0;
}
