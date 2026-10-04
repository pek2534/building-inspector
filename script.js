const VERIFIED_DATE = '4 ต.ค. 2569';

const laws = [
  {
    id: 'building-control-act-2522',
    categories: ['permit','alteration','demolition'],
    badges: ['📘 กฎหมายแม่บท','🇹🇭 กฎหมายกลาง'],
    title: 'พระราชบัญญัติควบคุมอาคาร พ.ศ. 2522',
    jurisdiction: 'ใช้เป็นกฎหมายแม่บทด้านการควบคุมอาคาร',
    keywords: ['พรบควบคุมอาคาร','พ.ร.บ.','ใบอนุญาต','แจ้ง','39 ทวิ','ก่อสร้าง','ดัดแปลง','รื้อถอน','เคลื่อนย้าย','เปลี่ยนการใช้','เจ้าพนักงานท้องถิ่น','คำสั่ง','อุทธรณ์'],
    summary: 'จุดเริ่มต้นเมื่อต้องค้นเรื่องอำนาจหน้าที่ การขออนุญาต/การแจ้ง การก่อสร้าง ดัดแปลง รื้อถอน เคลื่อนย้าย เปลี่ยนการใช้อาคาร การตรวจและคำสั่งตามกฎหมาย ก่อนลงไปดูกฎกระทรวงรายละเอียดเฉพาะเรื่อง',
    topics: ['การก่อสร้าง ดัดแปลง รื้อถอน และเคลื่อนย้ายอาคาร','การใช้หรือเปลี่ยนการใช้อาคาร','อำนาจเจ้าพนักงานท้องถิ่นและการตรวจอาคาร','การแจ้งตามมาตรา 39 ทวิ','คำสั่งและกระบวนการตามกฎหมายควบคุมอาคาร'],
    refs: ['พ.ร.บ.ควบคุมอาคาร พ.ศ. 2522 และฉบับแก้ไขเพิ่มเติม','ไฟล์ด้านล่างเป็นฉบับรวมที่ ASA เผยแพร่ ใช้ค้นมาตราได้สะดวก'],
    note: 'เมื่อต้องใช้อ้างอิงทางราชการ ให้ตรวจว่ามาตราที่ใช้อ้างอิงมีฉบับแก้ไขภายหลังหรือไม่',
    sources: [
      {label:'เปิด พ.ร.บ. ฉบับรวม (ASA)', url:'https://download.asa.or.th/03media/04law/cba/cba22-upd60.pdf', kind:'ASA PDF'}
    ]
  },
  {
    id: 'mr55-upd68',
    categories: ['setback'],
    badges: ['📏 ระยะ / ที่ว่าง','🇹🇭 กฎหมายกลาง'],
    title: 'กฎกระทรวง ฉบับที่ 55 (พ.ศ. 2543) และฉบับแก้ไข',
    jurisdiction: 'ลักษณะอาคาร ส่วนต่าง ๆ ของอาคาร ที่ว่าง และระยะต่าง ๆ',
    keywords: ['ระยะร่น','ที่ว่าง','ช่องเปิด','ผนัง','ถนน','ถนนสาธารณะ','กึ่งกลางถนน','แนวเขต','บ้านแถว','ตึกแถว','ห้องแถว','ความสูง','บันได','เพดาน','ดาดฟ้า','ทางเดิน','รั้ว','อาคารอยู่อาศัย'],
    summary: 'กฎหมายหลักที่ควรเปิดเมื่อเช็กมิติและลักษณะอาคาร เช่น ที่ว่าง ระยะระหว่างอาคาร/แนวเขต/ถนน ลักษณะห้องแถว ตึกแถว บ้านแถว และส่วนต่าง ๆ ของอาคาร',
    topics: ['ลักษณะของอาคารและส่วนต่าง ๆ','ที่ว่างภายนอกแนวอาคาร','ระยะจากแนวเขตที่ดินและถนนสาธารณะ','ผนังและช่องเปิด','ห้องแถว ตึกแถว บ้านแถว','บันได ทางเดิน และส่วนประกอบอาคาร'],
    refs: ['ฉบับที่ 55 (พ.ศ. 2543)','แก้ไขเพิ่มเติมโดย ฉบับที่ 58 (พ.ศ. 2546)','ฉบับที่ 61 (พ.ศ. 2550)','ฉบับที่ 66 (พ.ศ. 2559)','ฉบับที่ 68 (พ.ศ. 2563)'],
    note: 'หัวข้อเดียวกันอาจต้องอ่านร่วมกับกฎหมายเฉพาะประเภทอาคาร เช่น อาคารสูง/อาคารขนาดใหญ่พิเศษ',
    sources: [
      {label:'เปิดฉบับรวม 55 + แก้ไข (ASA)', url:'https://download.asa.or.th/03media/04law/cba/mr/mr43-55-upd68.pdf', kind:'ASA PDF'}
    ]
  },
  {
    id: 'mr39-upd63',
    categories: ['fire'],
    badges: ['🔥 อัคคีภัย / ระบบ','🇹🇭 กฎหมายกลาง'],
    title: 'กฎกระทรวง ฉบับที่ 39 (พ.ศ. 2537) และฉบับแก้ไข',
    jurisdiction: 'ระบบป้องกันอัคคีภัย สุขาภิบาล แสงสว่าง ระบายอากาศ และไฟฟ้าสำรอง',
    keywords: ['อัคคีภัย','ดับเพลิง','เครื่องดับเพลิง','ระบบป้องกันอัคคีภัย','ไฟฟ้าสำรอง','แสงสว่าง','ระบายอากาศ','ห้องน้ำ','ห้องส้วม','อาคาร 3 ชั้น','อาคารอยู่อาศัยรวม','หอพัก','สำนักงาน'],
    summary: 'ใช้ค้นข้อกำหนดระบบพื้นฐานของอาคาร โดยเฉพาะการป้องกันอัคคีภัย รวมถึงห้องน้ำห้องส้วม แสงสว่าง การระบายอากาศ และพลังงานไฟฟ้าสำรองในอาคารที่เข้าข่าย',
    topics: ['ระบบและอุปกรณ์ป้องกันอัคคีภัย','เครื่องดับเพลิงแบบมือถือ','ห้องน้ำและห้องส้วม','แสงสว่างและการระบายอากาศ','พลังงานไฟฟ้าสำรอง'],
    refs: ['ฉบับที่ 39 (พ.ศ. 2537)','แก้ไขเพิ่มเติมโดย กฎกระทรวง ฉบับที่ 63 (พ.ศ. 2551)'],
    note: 'ถ้าเป็นอาคารสูงหรืออาคารขนาดใหญ่พิเศษ ให้ตรวจ กฎกระทรวง ฉบับที่ 33 และฉบับแก้ไขร่วมด้วย',
    sources: [
      {label:'เปิดฉบับรวม 39 + แก้ไข (ASA)', url:'https://download.asa.or.th/03media/04law/cba/mr/mr37-39-upd63.pdf', kind:'ASA PDF'}
    ]
  },
  {
    id: 'mr33-upd69',
    categories: ['highrise','fire'],
    badges: ['🏢 อาคารสูง / ใหญ่พิเศษ','🇹🇭 กฎหมายกลาง'],
    title: 'กฎกระทรวง ฉบับที่ 33 (พ.ศ. 2535) และฉบับแก้ไข',
    jurisdiction: 'อาคารสูงและอาคารขนาดใหญ่พิเศษ',
    keywords: ['อาคารสูง','23 เมตร','อาคารขนาดใหญ่พิเศษ','10000','10,000','ดับเพลิง','ลิฟต์ดับเพลิง','ที่ว่างรอบอาคาร','ถนนรอบอาคาร','บันไดหนีไฟ','ระบบอาคาร','ดาดฟ้า'],
    summary: 'กฎหมายเฉพาะสำหรับอาคารสูงและอาคารขนาดใหญ่พิเศษ ใช้ตรวจนิยาม ประเภทอาคาร พื้นที่/ที่ว่าง ระบบความปลอดภัยและข้อกำหนดสำคัญที่เข้มกว่ากฎหมายอาคารทั่วไป',
    topics: ['นิยามอาคารสูงและอาคารขนาดใหญ่พิเศษ','พื้นที่และที่ว่างรอบอาคาร','ระบบป้องกันอัคคีภัยและทางหนีไฟ','ระบบอาคารและความปลอดภัย','ข้อกำหนดเฉพาะตามประเภทอาคาร'],
    refs: ['ฉบับที่ 33 (พ.ศ. 2535)','แก้ไขเพิ่มเติมโดย ฉบับที่ 42 (พ.ศ. 2537)','ฉบับที่ 50 (พ.ศ. 2540)','ฉบับที่ 69 (พ.ศ. 2564)'],
    note: 'ต้องพิจารณาร่วมกับกฎกระทรวงอื่นที่ใช้กับระบบอาคารและประเภทการใช้งานของอาคารนั้นด้วย',
    sources: [
      {label:'เปิดฉบับรวม 33 + แก้ไข (ASA)', url:'https://download.asa.or.th/03media/04law/cba/mr/mr35-33-upd69.pdf', kind:'ASA PDF'}
    ]
  },
  {
    id: 'mr7-upd64',
    categories: ['parking'],
    badges: ['🚗 ที่จอดรถ','🇹🇭 กฎหมายกลาง'],
    title: 'กฎกระทรวง ฉบับที่ 7 (พ.ศ. 2517) และฉบับแก้ไข',
    jurisdiction: 'ประเภทอาคารที่ต้องมีที่จอดรถและจำนวนที่จอดรถ',
    keywords: ['ที่จอดรถ','จำนวนที่จอดรถ','ที่กลับรถ','ทางเข้าออก','ปากทาง','สำนักงาน','อาคารชุด','โรงแรม','ภัตตาคาร','ห้างสรรพสินค้า','อาคารขนาดใหญ่','โรงมหรสพ'],
    summary: 'ใช้เริ่มตรวจว่าอาคารประเภทใดต้องจัดที่จอดรถ ที่กลับรถ และทางเข้าออก รวมถึงเกณฑ์จำนวนที่จอดรถตามประเภทอาคาร ก่อนอ่านรายละเอียดมิติในกฎกระทรวง ฉบับที่ 41 หรือข้อบัญญัติท้องถิ่น',
    topics: ['ประเภทอาคารที่ต้องมีที่จอดรถ','จำนวนที่จอดรถตามประเภทอาคาร','ที่กลับรถและทางเข้าออก','นิยามอาคารที่เกี่ยวข้องกับการคำนวณที่จอดรถ'],
    refs: ['ฉบับที่ 7 (พ.ศ. 2517)','แก้ไขเพิ่มเติมโดย กฎกระทรวง ฉบับที่ 64 (พ.ศ. 2555)'],
    note: 'ในพื้นที่ที่มีข้อบัญญัติท้องถิ่นกำหนดจำนวนที่จอดรถเพิ่มเติม ต้องตรวจข้อบัญญัติท้องถิ่นร่วมด้วย',
    sources: [
      {label:'เปิดฉบับรวม 7 + แก้ไข (ASA)', url:'https://download.asa.or.th/03media/04law/cba/mr/mr17-07-upd64.pdf', kind:'ASA PDF'}
    ]
  },
  {
    id: 'mr41-2537',
    categories: ['parking'],
    badges: ['🚗 มิติที่จอดรถ','🇹🇭 กฎหมายกลาง'],
    title: 'กฎกระทรวง ฉบับที่ 41 (พ.ศ. 2537)',
    jurisdiction: 'ลักษณะและขนาดที่จอดรถ และอาคารจอดรถ',
    keywords: ['ขนาดที่จอดรถ','2.40','5.00','5.50','6.00','ที่จอดตั้งฉาก','ที่จอดขนาน','อาคารจอดรถ','ลิฟต์รถ','เครื่องจักรกล','ทางเดินรถ','ความสูงสุทธิ'],
    summary: 'ใช้ตรวจลักษณะและมิติของช่องจอดรถ ทางเดินรถ ความสูงสุทธิ และข้อกำหนดอาคารจอดรถ รวมถึงระบบยกรถ/เคลื่อนย้ายรถด้วยเครื่องจักรกล',
    topics: ['ขนาดช่องจอดรถตามมุมจอด','ทางเดินรถและเครื่องหมายช่องจอด','ความสูงสุทธิบริเวณจอดรถ','อาคารจอดรถและลิฟต์ยกรถ','ระบบเคลื่อนย้ายรถด้วยเครื่องจักรกล'],
    refs: ['กฎกระทรวง ฉบับที่ 41 (พ.ศ. 2537)','แก้ไข/แทนข้อกำหนดบางส่วนของกฎกระทรวง ฉบับที่ 7 ในเรื่องลักษณะและขนาดที่จอดรถ'],
    note: 'การหาจำนวนที่จอดรถให้กลับไปดู กฎกระทรวง ฉบับที่ 7 และข้อบัญญัติท้องถิ่นที่ใช้บังคับในพื้นที่',
    sources: [
      {label:'เปิด กฎกระทรวง ฉบับที่ 41 (ASA)', url:'https://download.asa.or.th/03media/04law/cba/mr37-41.pdf', kind:'ASA PDF'}
    ]
  },
  {
    id: 'accessibility-2548-2564',
    categories: ['accessibility'],
    badges: ['♿ การเข้าถึง','🇹🇭 กฎหมายกลาง'],
    title: 'กฎกระทรวงสิ่งอำนวยความสะดวกสำหรับผู้พิการหรือทุพพลภาพ และคนชรา พ.ศ. 2548 และฉบับที่ 2 พ.ศ. 2564',
    jurisdiction: 'สิ่งอำนวยความสะดวกในอาคารสำหรับผู้พิการหรือทุพพลภาพ และคนชรา',
    keywords: ['ผู้พิการ','คนชรา','ทางลาด','ลิฟต์','ห้องน้ำผู้พิการ','ที่จอดรถผู้พิการ','ป้าย','ราวจับ','ประตู','ทางเข้า','โรงแรม','สิ่งอำนวยความสะดวก','universal design'],
    summary: 'ใช้ตรวจว่าอาคารประเภทใดต้องจัดสิ่งอำนวยความสะดวก และตรวจองค์ประกอบ เช่น ทางเข้า ทางลาด ลิฟต์ ที่จอดรถ ห้องน้ำ ป้ายและส่วนประกอบที่เกี่ยวข้องกับการเข้าถึง',
    topics: ['ประเภทอาคารที่อยู่ในบังคับ','ทางเข้าสู่ตัวอาคารและทางลาด','ลิฟต์และการเชื่อมต่อระหว่างชั้น','ที่จอดรถสำหรับผู้พิการ','ห้องน้ำและสิ่งอำนวยความสะดวก','เงื่อนไขอาคารเดิมและการดัดแปลง'],
    refs: ['กฎกระทรวง พ.ศ. 2548','แก้ไขเพิ่มเติมโดย กฎกระทรวง (ฉบับที่ 2) พ.ศ. 2564'],
    note: 'ฉบับแก้ไข พ.ศ. 2564 มีเงื่อนไขเกี่ยวกับอาคารเดิม/การดัดแปลง ควรเปิดอ่านฉบับแก้ไขควบคู่กับฉบับหลัก',
    sources: [
      {label:'เปิดฉบับหลัก พ.ศ. 2548 (ASA)', url:'https://download.asa.or.th/03media/04law/cba/mr/mr48-58e.pdf', kind:'ASA PDF'},
      {label:'เปิดฉบับที่ 2 พ.ศ. 2564 (ASA)', url:'https://download.asa.or.th/03media/04law/fubr/a7_bcmr58e-64.pdf', kind:'ASA PDF'}
    ]
  },
  {
    id: 'nonthaburi-parking-2560',
    categories: ['parking','alteration'],
    badges: ['🚗 ที่จอดรถ','📍 เทศบาลนครนนทบุรี'],
    title: 'เทศบัญญัติเทศบาลนครนนทบุรี เรื่องที่จอดรถยนต์ พ.ศ. 2560',
    jurisdiction: 'ใช้บังคับในเขตเทศบาลนครนนทบุรี',
    keywords: ['นนทบุรี','เทศบัญญัติ','ที่จอดรถ','อาคารชุด','โรงแรม','อาคารอยู่อาศัยรวม','อาคารขนาดใหญ่','ที่กลับรถ','ทางเข้าออก','ดัดแปลง','เปลี่ยนการใช้'],
    summary: 'ข้อบัญญัติท้องถิ่นที่กำหนดประเภทอาคารและจำนวนที่จอดรถในเขตเทศบาลนครนนทบุรี และโยงลักษณะ/ขนาดที่จอดรถ ที่กลับรถ และทางเข้าออกไปยังกฎกระทรวง ฉบับที่ 7 และ 41',
    topics: ['โรงแรมตั้งแต่ 30 ห้องขึ้นไป','อาคารชุด','อาคารอยู่อาศัยรวมตั้งแต่ 300 ตร.ม. ขึ้นไป','อาคารขนาดใหญ่','จำนวนที่จอดรถตามประเภทอาคาร','อาคารเดิม ดัดแปลง หรือเปลี่ยนการใช้'],
    refs: ['ข้อ 4: ประเภทอาคารที่ต้องมีที่จอดรถ','ข้อ 5: จำนวนที่จอดรถตามประเภทอาคาร','ข้อ 6: ลักษณะและขนาดอ้างอิงกฎกระทรวง ฉบับที่ 7 และ 41','ข้อ 7-8: อาคารเดิม/ใบอนุญาตเดิมและกรณีดัดแปลงหรือเปลี่ยนการใช้'],
    note: 'เป็นกฎหมายท้องถิ่นเฉพาะเขตเทศบาลนครนนทบุรี ต้องอ่านร่วมกับกฎหมายกลางที่เทศบัญญัติอ้างถึง',
    sources: [
      {label:'เปิด PDF เทศบัญญัติในระบบ', url:'docs/nonthaburi-parking-2560.pdf', kind:'Local PDF'}
    ]
  }
];

const categories = [
  {id:'setback', icon:'📏', name:'ระยะร่น / ที่ว่าง', subtitle:'แนวเขต ถนน ช่องเปิด'},
  {id:'fire', icon:'🔥', name:'อัคคีภัย', subtitle:'ป้องกันไฟ ทางหนีไฟ ระบบ'},
  {id:'parking', icon:'🚗', name:'ที่จอดรถ', subtitle:'จำนวน มิติ ทางเข้าออก'},
  {id:'accessibility', icon:'♿', name:'ผู้พิการ', subtitle:'ทางลาด ลิฟต์ ห้องน้ำ'},
  {id:'highrise', icon:'🏢', name:'อาคารสูง / ใหญ่', subtitle:'อาคารสูงและใหญ่พิเศษ'},
  {id:'permit', icon:'📄', name:'ใบอนุญาต / เอกสาร', subtitle:'อนุญาต แจ้ง ใช้อาคาร'},
  {id:'alteration', icon:'🧱', name:'ดัดแปลง / ต่อเติม', subtitle:'ดัดแปลง เปลี่ยนการใช้'},
  {id:'demolition', icon:'🏚️', name:'รื้อถอน', subtitle:'รื้อถอน เคลื่อนย้าย'}
];

const $ = id => document.getElementById(id);
let activeCategory = null;
let favoritesOnly = false;
let selectedLaw = null;

function getFavorites(){
  try { return JSON.parse(localStorage.getItem('inspector-favorites') || '[]'); }
  catch { return []; }
}
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

function lawMatchesCategory(law, categoryId){
  return law.categories.includes(categoryId);
}

function categoryCount(id){
  return laws.filter(l => lawMatchesCategory(l,id)).length;
}

function renderCategories(){
  $('categoryGrid').innerHTML = categories.map(c => `
    <button class="category-card ${activeCategory === c.id ? 'active' : ''}" data-category="${c.id}">
      <div class="category-top"><span class="category-icon">${c.icon}</span><span class="count-badge">${categoryCount(c.id)}</span></div>
      <strong>${c.name}</strong>
      <small>${c.subtitle}</small>
    </button>`).join('');

  document.querySelectorAll('[data-category]').forEach(btn => btn.addEventListener('click', () => {
    activeCategory = activeCategory === btn.dataset.category ? null : btn.dataset.category;
    favoritesOnly = false;
    render();
  }));
}

function searchableText(l){
  return [l.title,l.jurisdiction,l.summary,...l.keywords,...l.topics,...l.refs,...l.badges].join(' ').toLowerCase();
}

function filteredLaws(){
  const q = $('searchInput').value.trim().toLowerCase();
  return laws.filter(l => {
    const matchesSearch = !q || searchableText(l).includes(q);
    const matchesCategory = !activeCategory || lawMatchesCategory(l, activeCategory);
    const matchesFav = !favoritesOnly || isFavorite(l.id);
    return matchesSearch && matchesCategory && matchesFav;
  });
}

function renderLaws(){
  const list = filteredLaws();
  $('resultCount').textContent = `${list.length} รายการ`;
  $('emptyState').classList.toggle('hidden', list.length > 0);

  const category = categories.find(c => c.id === activeCategory);
  const q = $('searchInput').value.trim();
  let label = 'แสดงทั้งหมด';
  if(favoritesOnly) label = 'เฉพาะกฎหมายที่บันทึกไว้';
  else if(category) label = `หมวด ${category.icon} ${category.name}`;
  if(q) label += ` • ค้นหา “${q}”`;
  $('filterLabel').textContent = label;

  $('lawList').innerHTML = list.map(l => `
    <article class="law-card">
      <div class="badge-row">${l.badges.slice(0,2).map(b => `<span class="chip">${b}</span>`).join('')}</div>
      <h3>${l.title}</h3>
      <p>${l.jurisdiction}</p>
      <div class="topic-preview">${l.topics.slice(0,3).map(t => `<span>${t}</span>`).join('')}</div>
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
  const l = laws.find(x => x.id === id);
  if(!l) return;
  selectedLaw = l;
  $('dialogBadges').innerHTML = l.badges.map(x => `<span class="chip">${x}</span>`).join('');
  $('dialogTitle').textContent = l.title;
  $('dialogMeta').textContent = `${l.jurisdiction} • ตรวจสอบลิงก์ ${VERIFIED_DATE}`;
  $('dialogSummary').textContent = l.summary;
  $('dialogTopics').innerHTML = l.topics.map(x => `<li>${x}</li>`).join('');
  $('dialogRefs').innerHTML = l.refs.map(x => `<div class="ref-item">${x}</div>`).join('');
  $('dialogSources').innerHTML = l.sources.map(s => `
    <a class="source-link" href="${s.url}" target="_blank" rel="noopener">
      <span>${s.label}</span><small>${s.kind} ↗</small>
    </a>`).join('');
  $('dialogNote').textContent = l.note;
  updateDialogFavorite();
  $('lawDialog').showModal();
}

function updateDialogFavorite(){
  if(!selectedLaw) return;
  $('favoriteBtn').textContent = isFavorite(selectedLaw.id) ? '★ เก็บไว้แล้ว' : '☆ เก็บไว้';
}

$('searchInput').addEventListener('input', () => {
  favoritesOnly = false;
  renderLaws();
});
$('clearSearch').addEventListener('click', () => {
  $('searchInput').value='';
  activeCategory=null;
  favoritesOnly=false;
  render();
});
$('showFavorites').addEventListener('click', () => {
  favoritesOnly = !favoritesOnly;
  activeCategory=null;
  render();
});
$('favoriteBtn').addEventListener('click', () => selectedLaw && toggleFavorite(selectedLaw.id));

const quick = ['ระยะร่น','ช่องเปิด','ที่ว่าง','อัคคีภัย','อาคารสูง','ที่จอดรถ','ผู้พิการ','ดัดแปลง'];
$('quickTags').innerHTML = quick.map(q => `<button type="button" data-q="${q}">${q}</button>`).join('');
document.querySelectorAll('[data-q]').forEach(btn => btn.addEventListener('click', () => {
  $('searchInput').value = btn.dataset.q;
  activeCategory = null;
  favoritesOnly = false;
  render();
}));

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
render();
