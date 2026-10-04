const laws = [
  {
    id: 'nonthaburi-parking-2560',
    category: 'parking',
    categoryLabel: '🚗 ที่จอดรถ',
    title: 'เทศบัญญัติเทศบาลนครนนทบุรี เรื่องที่จอดรถยนต์ พ.ศ. 2560',
    jurisdiction: 'เทศบาลนครนนทบุรี',
    keywords: ['ที่จอดรถ','อาคารชุด','โรงแรม','อาคารอยู่อาศัยรวม','อาคารขนาดใหญ่','ที่กลับรถ','ทางเข้าออก','นนทบุรี'],
    summary: 'กำหนดประเภทอาคารที่ต้องมีที่จอดรถ จำนวนที่จอดรถ และการอ้างอิงลักษณะ/ขนาดที่จอดรถ ที่กลับรถ และทางเข้าออกของรถยนต์ในเขตเทศบาลนครนนทบุรี',
    topics: [
      'โรงแรมตั้งแต่ 30 ห้องขึ้นไป',
      'อาคารชุด',
      'อาคารอยู่อาศัยรวมที่มีพื้นที่ตั้งแต่ 300 ตร.ม. ขึ้นไป',
      'อาคารขนาดใหญ่',
      'จำนวนที่จอดรถ',
      'ที่กลับรถและทางเข้าออก'
    ],
    refs: [
      'ข้อ 4: ประเภทอาคารที่ต้องมีที่จอดรถ',
      'ข้อ 5: จำนวนที่จอดรถตามประเภทอาคาร',
      'ข้อ 6: ลักษณะและขนาด ให้เป็นไปตามกฎกระทรวง ฉบับที่ 7 และ 41',
      'ข้อ 7-8: อาคารเดิม/ใบอนุญาตเดิมและกรณีดัดแปลงหรือเปลี่ยนการใช้'
    ],
    pdf: 'docs/nonthaburi-parking-2560.pdf'
  }
];

const categories = [
  {id:'setback', icon:'📏', name:'ระยะร่น / ที่ว่าง', note:'เตรียมเพิ่มกฎหมายกลาง'},
  {id:'fire', icon:'🔥', name:'อัคคีภัย', note:'เตรียมเพิ่มกฎหมายกลาง'},
  {id:'parking', icon:'🚗', name:'ที่จอดรถ', note:'มีข้อมูลแล้ว'},
  {id:'accessibility', icon:'♿', name:'ผู้พิการ', note:'เตรียมเพิ่มกฎหมายกลาง'},
  {id:'highrise', icon:'🏢', name:'อาคารสูง / อาคารใหญ่', note:'เตรียมเพิ่มกฎหมายกลาง'},
  {id:'permit', icon:'📄', name:'ใบอนุญาต / เอกสาร', note:'เตรียมเพิ่มกฎหมายกลาง'},
  {id:'alteration', icon:'🧱', name:'ดัดแปลง / ต่อเติม', note:'เตรียมเพิ่มกฎหมายกลาง'},
  {id:'demolition', icon:'🏚️', name:'รื้อถอน', note:'เตรียมเพิ่มกฎหมายกลาง'}
];

const $ = id => document.getElementById(id);
let activeCategory = null;
let favoritesOnly = false;
let selectedLaw = null;

function getFavorites(){ return JSON.parse(localStorage.getItem('inspector-favorites') || '[]'); }
function setFavorites(ids){ localStorage.setItem('inspector-favorites', JSON.stringify(ids)); }
function isFavorite(id){ return getFavorites().includes(id); }
function toggleFavorite(id){
  const ids = getFavorites();
  const i = ids.indexOf(id);
  if(i >= 0) ids.splice(i,1); else ids.push(id);
  setFavorites(ids);
  render();
  if(selectedLaw?.id === id) updateDialogFavorite();
}

function renderCategories(){
  $('categoryGrid').innerHTML = categories.map(c => `
    <button class="category-card" data-category="${c.id}">
      <span>${c.icon}</span>
      <strong>${c.name}</strong>
      <small>${c.note}</small>
    </button>`).join('');
  document.querySelectorAll('[data-category]').forEach(btn => btn.addEventListener('click', () => {
    activeCategory = activeCategory === btn.dataset.category ? null : btn.dataset.category;
    favoritesOnly = false;
    render();
  }));
}

function filteredLaws(){
  const q = $('searchInput').value.trim().toLowerCase();
  return laws.filter(l => {
    const text = [l.title,l.jurisdiction,l.summary,...l.keywords,...l.topics,...l.refs].join(' ').toLowerCase();
    const matchesSearch = !q || text.includes(q);
    const matchesCategory = !activeCategory || l.category === activeCategory;
    const matchesFav = !favoritesOnly || isFavorite(l.id);
    return matchesSearch && matchesCategory && matchesFav;
  });
}

function renderLaws(){
  const list = filteredLaws();
  $('resultCount').textContent = `${list.length} รายการ`;
  $('emptyState').classList.toggle('hidden', list.length > 0);
  $('lawList').innerHTML = list.map(l => `
    <article class="law-card">
      <span class="chip">${l.categoryLabel}</span>
      <h3>${l.title}</h3>
      <p>${l.jurisdiction}</p>
      <div class="law-actions">
        <button class="star" data-star="${l.id}" aria-label="รายการโปรด">${isFavorite(l.id) ? '★' : '☆'}</button>
        <button class="open" data-open="${l.id}">ดูรายละเอียด</button>
      </div>
    </article>`).join('');

  document.querySelectorAll('[data-star]').forEach(btn => btn.addEventListener('click', () => toggleFavorite(btn.dataset.star)));
  document.querySelectorAll('[data-open]').forEach(btn => btn.addEventListener('click', () => openLaw(btn.dataset.open)));
}

function render(){
  renderCategories();
  renderLaws();
  $('showFavorites').textContent = favoritesOnly ? '★ กำลังดูกฎหมายของฉัน' : '☆ กฎหมายของฉัน';
}

function openLaw(id){
  const l = laws.find(x => x.id === id); if(!l) return;
  selectedLaw = l;
  $('dialogCategory').textContent = l.categoryLabel;
  $('dialogTitle').textContent = l.title;
  $('dialogMeta').textContent = l.jurisdiction;
  $('dialogSummary').textContent = l.summary;
  $('dialogTopics').innerHTML = l.topics.map(x => `<li>${x}</li>`).join('');
  $('dialogRefs').innerHTML = l.refs.map(x => `<div class="ref-item">${x}</div>`).join('');
  $('openPdfBtn').href = l.pdf;
  updateDialogFavorite();
  $('lawDialog').showModal();
}

function updateDialogFavorite(){
  if(!selectedLaw) return;
  $('favoriteBtn').textContent = isFavorite(selectedLaw.id) ? '★ เก็บไว้แล้ว' : '☆ เก็บไว้';
}

$('searchInput').addEventListener('input', () => { favoritesOnly = false; renderLaws(); });
$('clearSearch').addEventListener('click', () => { $('searchInput').value=''; activeCategory=null; favoritesOnly=false; render(); });
$('showFavorites').addEventListener('click', () => { favoritesOnly = !favoritesOnly; activeCategory=null; render(); });
$('favoriteBtn').addEventListener('click', () => selectedLaw && toggleFavorite(selectedLaw.id));

const quick = ['ที่จอดรถ','อาคารชุด','โรงแรม','อาคารอยู่อาศัยรวม','อาคารขนาดใหญ่'];
$('quickTags').innerHTML = quick.map(q => `<button type="button" data-q="${q}">${q}</button>`).join('');
document.querySelectorAll('[data-q]').forEach(btn => btn.addEventListener('click', () => { $('searchInput').value = btn.dataset.q; renderLaws(); }));

if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js').catch(()=>{}); }
render();
