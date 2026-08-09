/* ===== العربي ماركت — Cart & Checkout ===== */
import { PRODUCTS, CAT_NAMES } from './products.js';

const WHATSAPP_NUMBER = '201068882419'; // ضع رقمك هنا

let cart = [];
let favorites = [];

function loadCart(){
  try{
    cart = JSON.parse(localStorage.getItem('arabi_cart')||'[]');
    favorites = JSON.parse(localStorage.getItem('arabi_fav')||'[]');
  }catch(e){ cart=[]; favorites=[]; }
}
function saveCart(){
  localStorage.setItem('arabi_cart', JSON.stringify(cart));
  localStorage.setItem('arabi_fav', JSON.stringify(favorites));
}

function addToCart(id, btnEl){
  const product = PRODUCTS.find(p=>p.id===id);
  if(!product) return;
  const item = cart.find(c=>c.id===id);
  if(item){ item.qty++; }
  else{ cart.push({ id:product.id, name:product.name, price:product.price, emoji:product.emoji, qty:1 }); }
  saveCart();
  updateCartCount();
  flyToCart(btnEl, product.emoji);
  showToast('تمت الإضافة إلى السلة');
  renderCart();
}

function removeFromCart(id){
  cart = cart.filter(c=>c.id!==id);
  saveCart();
  updateCartCount();
  renderCart();
}
function changeQty(id, delta){
  const item = cart.find(c=>c.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0){ removeFromCart(id); return; }
  saveCart();
  updateCartCount();
  renderCart();
}

function toggleFav(id, btnEl){
  const idx = favorites.indexOf(id);
  if(idx>-1){ favorites.splice(idx,1); btnEl.classList.remove('active'); }
  else{ favorites.push(id); btnEl.classList.add('active'); }
  saveCart();
  updateFavCount();
}

function updateCartCount(){
  const el = document.getElementById('cartCount');
  if(!el) return;
  const total = cart.reduce((s,c)=>s+c.qty,0);
  el.textContent = total;
  el.classList.add('pop');
  setTimeout(()=>el.classList.remove('pop'),500);
}
function updateFavCount(){
  const el = document.getElementById('favCount');
  if(!el) return;
  el.textContent = favorites.length;
}

function cartTotal(){
  return cart.reduce((s,c)=>s+c.price*c.qty,0);
}

function renderCart(){
  const body = document.getElementById('cartBody');
  if(!body) return;
  if(cart.length===0){
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-emoji">🛒</div>
        <p>سلتك فارغة حالياً</p>
        <p>أضف بعض المنتجات الرائعة!</p>
      </div>`;
  } else {
    body.innerHTML = cart.map(c=>`
      <div class="cart-item" data-id="${c.id}">
        <span class="cart-item-emoji">${c.emoji}</span>
        <div class="cart-item-info">
          <h5>${c.name}</h5>
          <div class="cart-item-price">${c.price * c.qty} ج.م</div>
          <div class="qty">
            <button data-qty="minus" data-id="${c.id}">−</button>
            <span>${c.qty}</span>
            <button data-qty="plus" data-id="${c.id}">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-remove="${c.id}" aria-label="حذف">✕</button>
      </div>
    `).join('');
  }
  const totalEl = document.getElementById('cartTotal');
  if(totalEl) totalEl.textContent = cartTotal() + ' ج.م';
}

function openCart(){
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.classList.add('lock');
}
function closeCart(){
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.classList.remove('lock');
}

function flyToCart(btnEl, emoji){
  if(!btnEl) return;
  const cartBtn = document.getElementById('cartBtn');
  if(!cartBtn) return;
  const start = btnEl.getBoundingClientRect();
  const end = cartBtn.getBoundingClientRect();
  const fly = document.createElement('div');
  fly.className = 'fly-product';
  fly.textContent = emoji;
  fly.style.left = start.left + start.width/2 + 'px';
  fly.style.top = start.top + start.height/2 + 'px';
  document.body.appendChild(fly);
  requestAnimationFrame(()=>{
    fly.style.left = end.left + end.width/2 + 'px';
    fly.style.top = end.top + end.height/2 + 'px';
    fly.style.transform = 'scale(.2) rotate(360deg)';
    fly.style.opacity = '0';
  });
  setTimeout(()=>fly.remove(), 800);
  // bump cart icon
  cartBtn.style.transform = 'scale(1.2)';
  setTimeout(()=>{ cartBtn.style.transform=''; }, 400);
}

function showToast(msg){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(()=>t.classList.add('show'));
  setTimeout(()=>{
    t.classList.remove('show');
    setTimeout(()=>t.remove(),400);
  }, 2200);
}

/* ===== Checkout ===== */
function openCheckout(){
  if(cart.length===0){ showToast('سلتك فارغة!'); return; }
  document.getElementById('checkoutOverlay').classList.add('open');
  document.body.classList.add('lock');
}
function closeCheckout(){
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.body.classList.remove('lock');
}

function sendWhatsAppOrder(name, phone, address, notes){
  let msg = '🛒 *طلب جديد من العربي ماركت*\n\n';
  msg += '👤 الاسم: ' + name + '\n';
  msg += '📞 الهاتف: ' + phone + '\n';
  msg += '📍 العنوان: ' + address + '\n';
  if(notes) msg += '📝 ملاحظات: ' + notes + '\n';
  msg += '\n*المنتجات:*\n';
  cart.forEach(c=>{
    msg += `• ${c.name} ×${c.qty} = ${c.price*c.qty} ج.م\n`;
  });
  msg += '\n*الإجمالي: ' + cartTotal() + ' ج.م*\n\n';
  msg += 'شكراً لطلبك! ✅';
  const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
}

/* ===== Quick View ===== */
function openQuickView(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const content = document.getElementById('quickContent');
  content.innerHTML = `
    <div class="quick-emoji">${p.emoji}</div>
    <h3>${p.name}</h3>
    <div class="product-cat">${CAT_NAMES[p.cat]}</div>
    <div class="product-price" style="justify-content:center">
      <span class="price-now" style="font-size:1.5rem">${p.price} ج.م</span>
      ${p.old ? `<span class="price-old">${p.old} ج.م</span>` : ''}
    </div>
    <p>منتج عالي الجودة من قسم ${CAT_NAMES[p.cat]}. متوفر الآن بأفضل سعر مع توصيل سريع لباب بيتك.</p>
    <button class="btn btn-primary full add-cart" data-id="${p.id}">أضف للسلة</button>
  `;
  document.getElementById('quickOverlay').classList.add('open');
  document.body.classList.add('lock');
}
function closeQuickView(){
  document.getElementById('quickOverlay').classList.remove('open');
  document.body.classList.remove('lock');
}

/* ===== Event wiring (called from main.js after DOM ready) ===== */
export function initCartEvents(){
  // open/close
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('checkoutBtn').addEventListener('click', ()=>{
    closeCart();
    openCheckout();
  });
  document.getElementById('checkoutClose').addEventListener('click', closeCheckout);
  document.getElementById('checkoutOverlay').addEventListener('click', (e)=>{
    if(e.target.id==='checkoutOverlay') closeCheckout();
  });
  document.getElementById('quickClose').addEventListener('click', closeQuickView);
  document.getElementById('quickOverlay').addEventListener('click', (e)=>{
    if(e.target.id==='quickOverlay') closeQuickView();
  });

  // delegated: add to cart, fav, quick view, qty, remove
  document.addEventListener('click', (e)=>{
    const add = e.target.closest('.add-cart');
    if(add){ addToCart(parseInt(add.dataset.id), add); return; }
    const fav = e.target.closest('.product-fav');
    if(fav){ toggleFav(parseInt(fav.dataset.fav), fav); return; }
    const qv = e.target.closest('.quick-view');
    if(qv){ openQuickView(parseInt(qv.dataset.id)); return; }
    const qty = e.target.closest('[data-qty]');
    if(qty){
      const id = parseInt(qty.dataset.id);
      changeQty(id, qty.dataset.qty==='plus'?1:-1);
      return;
    }
    const rm = e.target.closest('[data-remove]');
    if(rm){ removeFromCart(parseInt(rm.dataset.remove)); return; }
  });

  // checkout form
  // document.getElementById('checkoutForm').addEventListener('submit', (e)=>{
  //   e.preventDefault();
  //   const name = document.getElementById('cName').value.trim();
  //   const phone = document.getElementById('cPhone').value.trim();
  //   const address = document.getElementById('cAddress').value.trim();
  //   const notes = document.getElementById('cNotes').value.trim();
  //   if(!name||!phone||!address){ showToast('يرجى ملء الحقول المطلوبة'); return; }
  //   sendWhatsAppOrder(name, phone, address, notes);
  //   closeCheckout();
  //   showToast('تم إرسال طلبك عبر واتساب');
  // });
  document.getElementById('checkoutForm').addEventListener('submit', (e)=>{
  e.preventDefault();

  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const address = document.getElementById('cAddress').value.trim();
  const notes = document.getElementById('cNotes').value.trim();

  if(!name || !phone || !address){
    showToast('يرجى ملء الحقول المطلوبة');
    return;
  }

  // إرسال الطلب
  sendWhatsAppOrder(name, phone, address, notes);

  // تفريغ السلة
  cart = [];
  saveCart();
  updateCartCount();
  renderCart();

  // غلق نافذة الطلب
  closeCheckout();

  // رسالة نجاح
  showToast('تم إرسال طلبك وتم تفريغ السلة ✅');
});

  // footer whatsapp
  const fw = document.getElementById('footerWhats');
  if(fw) fw.href = 'https://wa.me/' + WHATSAPP_NUMBER;

  loadCart();
  updateCartCount();
  updateFavCount();
  renderCart();
}
