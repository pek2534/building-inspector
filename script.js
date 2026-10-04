const VERIFIED_DATE = '4 ต.ค. 2569';
const ASA_INDEX = 'https://download.asa.or.th/03media/04law/fubr/Content_240116.pdf';
const ASA_PAGE = 'https://asa.or.th/laws-and-regulations/cba/';
const LANDMAPS_URL = 'https://landsmaps.dol.go.th/?ref=blog.nayoo.co';

const direct = (label, url) => ({label, url, kind:'ASA PDF'});
const fallbackSources = () => [
  {label:'เปิดสารบัญกฎหมายใช้บ่อยของ ASA', url:ASA_INDEX, kind:'ASA Index'},
  {label:'เปิดคลังกฎหมายอาคาร ASA', url:ASA_PAGE, kind:'ASA'}
];
const makeLaw = ({id, group='A', code, title, categories=[], jurisdiction='🇹🇭 กฎหมายกลาง', summary='', topics=[], keywords=[], refs=[], sources=[], badges=[]}) => ({
  id, group, code, title, categories, jurisdiction,
  badges:[`${code || group}`, ...badges, jurisdiction.includes('กรุงเทพ')?'🏙️ กรุงเทพฯ':jurisdiction.includes('นนทบุรี')?'📍 นนทบุรี':'🇹🇭 กฎหมายกลาง'],
  summary: summary || `อยู่ในสารบัญกฎหมายใช้บ่อยของ ASA หมวด ${group}${code ? ` (${code})` : ''} ใช้เปิดค้นรายละเอียดตามชื่อกฎหมายและขอบเขตเรื่องที่ระบุ`,
  topics: topics.length ? topics : [title],
  keywords:[title, code, ...keywords].filter(Boolean),
  refs: refs.length ? refs : [`รายการ ${code || group} ตามสารบัญกฎหมายใช้บ่อยของ ASA`],
  note:'ใช้เป็นดัชนีช่วยค้น ก่อนใช้อ้างอิงทางราชการควรเปิดเอกสารต้นฉบับและตรวจฉบับแก้ไข/พื้นที่ใช้บังคับอีกครั้ง',
  sources: sources.length ? sources : fallbackSources()
});

const laws = [
  makeLaw({id:'building-control-act-2522',group:'BASE',code:'แม่บท',title:'พระราชบัญญัติควบคุมอาคาร พ.ศ. 2522 และฉบับแก้ไข',categories:['permit','alteration','demolition'],summary:'กฎหมายแม่บทสำหรับการควบคุมอาคาร การขออนุญาต การแจ้ง การตรวจ คำสั่ง และอำนาจเจ้าพนักงานท้องถิ่น',topics:['ก่อสร้าง ดัดแปลง รื้อถอน เคลื่อนย้าย','การใช้/เปลี่ยนการใช้อาคาร','การแจ้งตามกฎหมาย','อำนาจและคำสั่งของเจ้าพนักงานท้องถิ่น'],keywords:['พ.ร.บ.','39 ทวิ','ใบอนุญาต','เจ้าพนักงานท้องถิ่น'],sources:[direct('เปิด พ.ร.บ. ฉบับรวม (ASA)','https://download.asa.or.th/03media/04law/cba/cba22-upd60.pdf')]}),

  makeLaw({id:'a1',group:'A',code:'A1',title:'กฎกระทรวง ฉบับที่ 55 (พ.ศ. 2543) และฉบับแก้ไข',categories:['design','setback'],summary:'ลักษณะอาคาร ส่วนต่าง ๆ ของอาคาร ที่ว่างภายนอกแนวอาคาร และระยะต่าง ๆ ของอาคาร',topics:['ลักษณะอาคาร','ที่ว่าง','ระยะร่น/ระยะต่าง ๆ','ส่วนประกอบอาคาร'],keywords:['ระยะร่น','ที่ว่าง','ช่องเปิด','ถนน','บันได'],refs:['แก้ไขโดยฉบับที่ 58, 61, 66 และ 68'],sources:[direct('เปิดฉบับรวม 55 + แก้ไข (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr43-55-upd68.pdf')]}),
  makeLaw({id:'a2',group:'A',code:'A2',title:'กฎกระทรวง ฉบับที่ 39 (พ.ศ. 2537) และฉบับแก้ไข',categories:['fire','design'],summary:'ระบบป้องกันอัคคีภัย ห้องน้ำห้องส้วม แสงสว่าง ระบายอากาศ และพลังงานไฟฟ้าสำรอง',topics:['ป้องกันอัคคีภัย','ห้องน้ำ/ห้องส้วม','แสงสว่าง/ระบายอากาศ','ไฟฟ้าสำรอง'],keywords:['อัคคีภัย','ห้องน้ำ','ระบายอากาศ','ไฟฟ้าสำรอง'],refs:['แก้ไขโดยกฎกระทรวง ฉบับที่ 63 (พ.ศ. 2551)'],sources:[direct('เปิดฉบับรวม 39 + แก้ไข (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr37-39-upd63.pdf')]}),
  makeLaw({id:'a3',group:'A',code:'A3',title:'กฎกระทรวง ฉบับที่ 33 (พ.ศ. 2535) และฉบับแก้ไข',categories:['fire','special'],summary:'ข้อกำหนดสำหรับอาคารสูงและอาคารขนาดใหญ่พิเศษ',topics:['อาคารสูง','อาคารขนาดใหญ่พิเศษ','ระบบความปลอดภัย','ทางหนีไฟและระบบอาคาร'],keywords:['อาคารสูง','อาคารใหญ่พิเศษ','ลิฟต์ดับเพลิง'],refs:['แก้ไขโดยฉบับที่ 42, 50 และ 69'],sources:[direct('เปิดฉบับรวม 33 + แก้ไข (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr35-33-upd69.pdf')]}),
  makeLaw({id:'a4',group:'A',code:'A4',title:'กฎกระทรวง ฉบับที่ 7 (พ.ศ. 2517) และฉบับแก้ไข',categories:['parking'],summary:'ประเภทอาคารที่ต้องมีที่จอดรถ และจำนวนที่จอดรถ',topics:['ประเภทอาคารที่ต้องมีที่จอดรถ','จำนวนที่จอดรถ'],keywords:['ที่จอดรถ','จำนวนที่จอดรถ'],refs:['แก้ไขโดยกฎกระทรวง ฉบับที่ 64 (พ.ศ. 2555)'],sources:[direct('เปิดฉบับรวม 7 + แก้ไข (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr17-07-upd64.pdf')]}),
  makeLaw({id:'a5',group:'A',code:'A5',title:'กฎกระทรวง ฉบับที่ 41 (พ.ศ. 2537)',categories:['parking'],summary:'ที่จอดรถ อาคารจอดรถ ระบบยกรถขึ้นลงระหว่างชั้นด้วยลิฟต์ และระบบเคลื่อนย้ายรถด้วยเครื่องจักรกล',topics:['ขนาด/ลักษณะที่จอดรถ','อาคารจอดรถ','ลิฟต์รถ','ระบบเคลื่อนย้ายรถ'],keywords:['ขนาดที่จอดรถ','อาคารจอดรถ','ลิฟต์รถ'],sources:[direct('เปิดกฎกระทรวง ฉบับที่ 41 (ASA)','https://download.asa.or.th/03media/04law/cba/mr37-41.pdf')]}),
  makeLaw({id:'a6',group:'A',code:'A6',title:'ข้อบัญญัติกรุงเทพมหานคร เรื่อง ควบคุมอาคาร พ.ศ. 2544',categories:['design','permit'],jurisdiction:'🏙️ กรุงเทพมหานครเท่านั้น',summary:'ข้อบัญญัติท้องถิ่นกรุงเทพมหานครว่าด้วยการควบคุมอาคาร',topics:['ข้อกำหนดอาคารในกรุงเทพมหานคร','นิยามและมาตรฐานท้องถิ่น','การอนุญาตและควบคุมอาคาร'],keywords:['ข้อบัญญัติ กทม','กรุงเทพมหานคร'],sources:[direct('เปิดข้อบัญญัติ กทม. พ.ศ. 2544 (ASA)','https://download.asa.or.th/03media/04law/cba/bb/bb44-03.pdf')]}),
  makeLaw({id:'a7',group:'A',code:'A7',title:'กฎกระทรวงสิ่งอำนวยความสะดวกในอาคารสำหรับผู้พิการหรือทุพพลภาพและคนชรา พ.ศ. 2548 และฉบับที่ 2 พ.ศ. 2564',categories:['accessibility'],summary:'สิ่งอำนวยความสะดวกในอาคารสำหรับผู้พิการหรือทุพพลภาพและคนชรา',topics:['ทางลาด','ลิฟต์','ห้องน้ำ','ที่จอดรถผู้พิการ','ทางเข้าและป้าย'],keywords:['ผู้พิการ','คนชรา','ทางลาด','ห้องน้ำผู้พิการ'],sources:[direct('เปิดฉบับหลัก พ.ศ. 2548 (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr48-58e.pdf'),direct('เปิดฉบับที่ 2 พ.ศ. 2564 (ASA)','https://download.asa.or.th/03media/04law/fubr/a7_bcmr58e-64.pdf')]}),
  makeLaw({id:'a8',group:'A',code:'A8',title:'กฎกระทรวงว่าด้วยการขออนุญาตให้ใช้อาคารเพื่อประกอบกิจการโรงมหรสพ ประเภทและระบบความปลอดภัยของโรงมหรสพ และอัตราค่าธรรมเนียม พ.ศ. 2550',categories:['special','permit','fire'],topics:['การขออนุญาตใช้เป็นโรงมหรสพ','ประเภทโรงมหรสพ','ระบบความปลอดภัย','ค่าธรรมเนียม'],keywords:['โรงมหรสพ','โรงภาพยนตร์','อนุญาตใช้อาคาร']}),
  makeLaw({id:'a9',group:'A',code:'A9',title:'กฎกระทรวงกำหนดประเภทและระบบความปลอดภัยของอาคารที่ใช้เพื่อประกอบกิจการเป็นสถานบริการ พ.ศ. 2555',categories:['special','fire'],topics:['สถานบริการ','ระบบความปลอดภัย','อัคคีภัย'],keywords:['สถานบริการ','ผับ','ระบบความปลอดภัย'],sources:[direct('เปิดกฎกระทรวงสถานบริการ พ.ศ. 2555 (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr55-63f.pdf')]}),
  makeLaw({id:'a10',group:'A',code:'A10',title:'กฎกระทรวงกำหนดวัสดุที่ใช้ในการก่อสร้างอาคารประเภทควบคุมการใช้ พ.ศ. 2566',categories:['structure','special'],topics:['วัสดุก่อสร้าง','อาคารประเภทควบคุมการใช้','วัสดุตกแต่งภายใน'],keywords:['วัสดุ','ควบคุมการใช้'],sources:[direct('เปิดกฎกระทรวงวัสดุ พ.ศ. 2566 (ASA)','https://download.asa.or.th/03media/04law/fubr/a10_bcmr70f-66.pdf')]}),
  makeLaw({id:'a10-2',group:'A',code:'A10.2',title:'กฎกระทรวงกำหนดฐานรากของอาคารและพื้นดินที่รองรับอาคาร พ.ศ. 2566',categories:['structure'],topics:['ฐานราก','พื้นดินรองรับอาคาร','ความมั่นคงแข็งแรง'],keywords:['ฐานราก','ดิน','เสาเข็ม'],sources:[direct('เปิดกฎกระทรวงฐานราก พ.ศ. 2566 (ASA)','https://download.asa.or.th/03media/04law/fubr/a10.2_bcmr70g-66.pdf')]}),
  makeLaw({id:'a10-3',group:'A',code:'A10.3',title:'กฎกระทรวงกำหนดการออกแบบโครงสร้างอาคารและลักษณะและคุณสมบัติของวัสดุที่ใช้ในงานโครงสร้างอาคาร พ.ศ. 2566',categories:['structure'],topics:['การออกแบบโครงสร้าง','วัสดุโครงสร้าง','คุณสมบัติวัสดุ'],keywords:['โครงสร้าง','คอนกรีต','เหล็ก','วัสดุ'],sources:[direct('เปิดกฎกระทรวงโครงสร้าง พ.ศ. 2566 (ASA)','https://download.asa.or.th/03media/04law/fubr/a10.3_bcmr70h-66.pdf')]}),
  makeLaw({id:'a11',group:'A',code:'A11',title:'กฎกระทรวงกำหนดการรับน้ำหนัก ความต้านทาน ความคงทนของอาคารและพื้นดินที่รองรับอาคารในการต้านทานแรงสั่นสะเทือนของแผ่นดินไหว พ.ศ. 2564',categories:['structure'],topics:['แผ่นดินไหว','การรับน้ำหนัก','ความต้านทาน','ความคงทน'],keywords:['แผ่นดินไหว','แรงสั่นสะเทือน','นนทบุรี'],sources:[direct('เปิดกฎกระทรวงแผ่นดินไหว พ.ศ. 2564 (ASA)','https://download.asa.or.th/03media/04law/fubr/a11_bcmr68b-64.pdf')]}),
  makeLaw({id:'a12',group:'A',code:'A12',title:'กฎกระทรวง ฉบับที่ 44 (พ.ศ. 2538) และฉบับแก้ไข',categories:['sanitation','design'],summary:'ระบบการระบายน้ำ การบำบัดน้ำเสีย และการกำจัดขยะตามรายการ ASA',topics:['ระบายน้ำฝน','ระบบบำบัดน้ำเสีย','น้ำทิ้ง','การกำจัดขยะ'],keywords:['ระบายน้ำ','น้ำเสีย','บำบัดน้ำเสีย','ขยะ'],refs:['แก้ไขโดยฉบับที่ 51 (พ.ศ. 2541) และฉบับที่ 71 (พ.ศ. 2566)'],sources:[direct('เปิดฉบับรวม 44 + แก้ไข (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr38-44-upd71.pdf')]}),
  makeLaw({id:'a13',group:'A',code:'A13',title:'กฎกระทรวงกำหนดลักษณะและระบบความปลอดภัยของอาคารที่ใช้ประกอบธุรกิจโรงแรม พ.ศ. 2566',categories:['special','fire'],topics:['โรงแรม','ลักษณะอาคาร','ระบบป้องกันอัคคีภัย','ทางหนีไฟและความปลอดภัย'],keywords:['โรงแรม','ห้องพัก','ระบบความปลอดภัย'],sources:[direct('เปิดกฎกระทรวงโรงแรม พ.ศ. 2566 (ASA)','https://download.asa.or.th/03media/04law/fubr/a13_bcmr70e-66.pdf')]}),

  makeLaw({id:'b1',group:'B',code:'B1',title:'แผนผังกำหนดการใช้ประโยชน์ที่ดิน ผังเมืองรวมกรุงเทพมหานคร พ.ศ. 2556 และตารางสรุปข้อกำหนดการใช้ประโยชน์ที่ดิน',categories:['planning'],jurisdiction:'🏙️ กรุงเทพมหานครเท่านั้น',topics:['การใช้ประโยชน์ที่ดิน','ผังสี','ข้อกำหนดผังเมือง'],keywords:['ผังเมือง','ผังสี','FAR','OSR'],sources:[direct('เปิดผังเมืองรวมกรุงเทพมหานคร (ASA)','https://download.asa.or.th/03media/04law/cpa/mr56-bma-full.pdf')]}),
  makeLaw({id:'b2',group:'B',code:'B2',title:'ข้อกำหนดเกี่ยวกับการจัดสรรที่ดินเพื่อที่อยู่อาศัยและพาณิชยกรรมกรุงเทพมหานคร พ.ศ. 2565',categories:['land','planning'],jurisdiction:'🏙️ กรุงเทพมหานครเท่านั้น',topics:['จัดสรรที่ดิน','แผนผังโครงการ','ที่อยู่อาศัยและพาณิชยกรรม'],keywords:['จัดสรรที่ดิน','หมู่บ้านจัดสรร'],sources:[direct('เปิดข้อกำหนดจัดสรรที่ดิน กทม. (ASA)','https://download.asa.or.th/03media/04law/fubr/b2_lsbma-65.pdf')]}),
  makeLaw({id:'b3',group:'B',code:'B3',title:'ประกาศกระทรวงคมนาคม เรื่องกำหนดเขตบริเวณใกล้เคียงสนามบินดอนเมือง กรุงเทพมหานคร เป็นเขตปลอดภัยในการเดินอากาศ พ.ศ. 2540',categories:['aviation','planning'],jurisdiction:'🏙️ พื้นที่เกี่ยวข้องใกล้สนามบินดอนเมือง',topics:['เขตปลอดภัยการบิน','ความสูงอาคาร','บริเวณใกล้สนามบินดอนเมือง'],keywords:['สนามบินดอนเมือง','การบิน','ความสูง']}),
  makeLaw({id:'b4',group:'B',code:'B4',title:'ประกาศกระทรวงคมนาคม เรื่องกำหนดเขตบริเวณใกล้เคียงสนามบินสุวรรณภูมิเป็นเขตปลอดภัยในการเดินอากาศ พ.ศ. 2551',categories:['aviation','planning'],jurisdiction:'📍 พื้นที่เกี่ยวข้องใกล้สนามบินสุวรรณภูมิ',topics:['เขตปลอดภัยการบิน','ความสูงอาคาร','บริเวณใกล้สนามบินสุวรรณภูมิ'],keywords:['สนามบินสุวรรณภูมิ','การบิน','ความสูง']}),
  makeLaw({id:'b5',group:'B',code:'B5',title:'ตารางประเภทและขนาดของโครงการ กิจการ หรือการดำเนินการซึ่งต้องจัดทำ และขั้นตอนในการเสนอรายงานการประเมินผลกระทบสิ่งแวดล้อม (บางส่วน)',categories:['environment','planning'],topics:['EIA','ประเภท/ขนาดโครงการ','ขั้นตอนเสนอรายงาน'],keywords:['EIA','สิ่งแวดล้อม','ผลกระทบสิ่งแวดล้อม'],sources:fallbackSources()}),
  makeLaw({id:'b6',group:'B',code:'B6',title:'กฎกระทรวงกำหนดประเภท หรือขนาดของอาคาร และมาตรฐาน หลักเกณฑ์ และวิธีการในการออกแบบอาคารเพื่อการอนุรักษ์พลังงาน พ.ศ. 2563',categories:['energy','design'],topics:['อาคารเพื่อการอนุรักษ์พลังงาน','ประเภทและขนาดอาคาร','เปลือกอาคาร','ระบบอาคาร'],keywords:['BEC','OTTV','RTTV','พลังงาน'],sources:[direct('เปิดกฎกระทรวง BEC พ.ศ. 2563 (ASA)','https://download.asa.or.th/03media/04law/fubr/b6_ecmr-63.pdf')]}),
  makeLaw({id:'b7',group:'B',code:'B7',title:'ประกาศกระทรวงพลังงาน เรื่องกำหนดค่ามาตรฐานการออกแบบอาคารเพื่อการอนุรักษ์พลังงาน พ.ศ. 2564',categories:['energy','design'],topics:['ค่ามาตรฐาน BEC','ระบบเปลือกอาคาร','ค่ามาตรฐานการออกแบบ'],keywords:['BEC','OTTV','RTTV','U-value','SHGC'],sources:[direct('เปิดประกาศค่ามาตรฐาน BEC พ.ศ. 2564 (ASA)','https://download.asa.or.th/03media/04law/fubr/b7_ecma64.pdf')]}),

  makeLaw({id:'c1',group:'C',code:'C1',title:'กฎกระทรวงกำหนดสิ่งที่สร้างขึ้นอย่างอื่นเป็นอาคารตามกฎหมายว่าด้วยการควบคุมอาคาร พ.ศ. 2544',categories:['permit','special'],topics:['สิ่งที่ถือเป็นอาคาร','สิ่งปลูกสร้างที่อยู่ในบังคับ'],keywords:['อะไรถือเป็นอาคาร','สิ่งปลูกสร้าง']}),
  makeLaw({id:'c2',group:'C',code:'C2',title:'กฎกระทรวงกำหนดอาคารประเภทควบคุมการใช้ พ.ศ. 2552',categories:['permit','special'],topics:['อาคารประเภทควบคุมการใช้','การใช้อาคาร','ประเภทกิจการ'],keywords:['อาคารควบคุมการใช้','อ.6','ใบรับรอง'],sources:[direct('เปิดกฎกระทรวงอาคารควบคุมการใช้ พ.ศ. 2552 (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr52-63b.pdf')]}),
  makeLaw({id:'c3',group:'C',code:'C3',title:'กฎกระทรวงกำหนดหลักเกณฑ์ วิธีการ และเงื่อนไขในการขออนุญาต การอนุญาต การต่ออายุใบอนุญาต การโอนใบอนุญาต การออกใบรับรอง และการออกใบแทนตามกฎหมายว่าด้วยการควบคุมอาคาร พ.ศ. 2564',categories:['permit'],topics:['ขออนุญาตก่อสร้าง/ดัดแปลง/รื้อถอน/เคลื่อนย้าย','เอกสารคำขอ','ต่ออายุ','โอนใบอนุญาต','ใบรับรอง/ใบแทน'],keywords:['ขออนุญาต','ข.1','อ.1','อ.5','อ.6','ต่ออายุ','โอนใบอนุญาต','เอกสาร'],sources:[direct('เปิดกฎกระทรวงการขออนุญาต พ.ศ. 2564 (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr64-68e.pdf')]}),
  makeLaw({id:'c4',group:'C',code:'C4',title:'กฎกระทรวง ฉบับที่ 11 (พ.ศ. 2528) และฉบับแก้ไข',categories:['alteration','demolition'],summary:'การกระทำที่ไม่ถือเป็นการดัดแปลงอาคาร และการรื้อส่วนอื่นของโครงสร้างของอาคารที่ถือเป็นการรื้อถอนอาคาร',topics:['ไม่ถือเป็นการดัดแปลง','เกณฑ์การรื้อถอน','การเปลี่ยนโครงสร้าง'],keywords:['ไม่ต้องขอ','ดัดแปลง','ต่อเติม','รื้อถอน'],refs:['แก้ไขโดยกฎกระทรวง ฉบับที่ 65 (พ.ศ. 2558)'],sources:[direct('เปิดฉบับรวม 11 + แก้ไข (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr28-11-upd65.pdf')]}),
  makeLaw({id:'c5',group:'C',code:'C5',title:'กฎกระทรวงว่าด้วยการยกเว้น ผ่อนผัน หรือกำหนดเงื่อนไขในการปฏิบัติตามกฎหมายว่าด้วยการควบคุมอาคาร พ.ศ. 2550',categories:['permit','special'],topics:['ยกเว้น','ผ่อนผัน','เงื่อนไขการปฏิบัติตามกฎหมาย'],keywords:['ยกเว้น','ผ่อนผัน']}),
  makeLaw({id:'c6',group:'C',code:'C6',title:'กฎกระทรวงกำหนดชนิดหรือประเภทของอาคาร หลักเกณฑ์ วิธีการ และเงื่อนไขในการตรวจสอบงานออกแบบและคำนวณส่วนต่าง ๆ ของโครงสร้างอาคาร พ.ศ. 2550',categories:['structure','permit'],topics:['ตรวจสอบงานออกแบบ','ตรวจรายการคำนวณ','ประเภทอาคารที่ต้องตรวจ'],keywords:['ตรวจแบบ','รายการคำนวณ','โครงสร้าง']}),
  makeLaw({id:'c7',group:'C',code:'C7',title:'กฎกระทรวงกำหนดหลักเกณฑ์การอนุญาตดัดแปลงอาคารเพื่อเสริมความมั่นคงแข็งแรงของอาคารให้สามารถต้านแรงสั่นสะเทือนจากแผ่นดินไหว พ.ศ. 2555',categories:['alteration','structure','permit'],topics:['ดัดแปลงเพื่อเสริมความมั่นคง','แผ่นดินไหว','การอนุญาต'],keywords:['เสริมอาคาร','แผ่นดินไหว','ดัดแปลง'],sources:[direct('เปิดกฎกระทรวงดัดแปลงเสริมแผ่นดินไหว พ.ศ. 2555 (ASA)','https://download.asa.or.th/03media/04law/cba/mr/mr55-64a.pdf')]}),
  makeLaw({id:'c8',group:'C',code:'C8',title:'กฎกระทรวง ฉบับที่ 4 (พ.ศ. 2526) และฉบับแก้ไข',categories:['permit','alteration','demolition'],summary:'หลักเกณฑ์ วิธีการ และเงื่อนไขในการก่อสร้าง ดัดแปลง รื้อถอน เคลื่อนย้าย ใช้หรือเปลี่ยนการใช้อาคาร',topics:['ก่อสร้าง','ดัดแปลง','รื้อถอน','เคลื่อนย้าย','ใช้/เปลี่ยนการใช้'],keywords:['ก่อสร้าง','เปลี่ยนการใช้','เคลื่อนย้าย'],refs:['แก้ไขโดยกฎกระทรวง ฉบับที่ 67 (พ.ศ. 2563)']}),
  makeLaw({id:'c9',group:'C',code:'C9',title:'กฎกระทรวง ฉบับที่ 12 (พ.ศ. 2528)',categories:['permit','alteration'],summary:'วิธีการหรือเงื่อนไขให้กระทำผิดไปจากแบบที่ได้รับอนุญาต',topics:['ทำผิดจากแบบ','เปลี่ยนแปลงแบบที่อนุญาต','เงื่อนไขการดำเนินการ'],keywords:['ผิดแบบ','เปลี่ยนแบบ','แก้แบบ']}),
  makeLaw({id:'c10',group:'C',code:'C10',title:'ประกาศกรุงเทพมหานคร ที่ ป. 281/2535 เรื่องคำแนะนำในการขอรับใบอนุญาตก่อสร้าง ดัดแปลง รื้อถอน หรือเคลื่อนย้ายอาคาร และการแจ้งโดยไม่ยื่นคำขอรับใบอนุญาต',categories:['permit'],jurisdiction:'🏙️ กรุงเทพมหานครเท่านั้น',topics:['คำแนะนำขออนุญาต','ก่อสร้าง/ดัดแปลง/รื้อถอน/เคลื่อนย้าย','การแจ้งโดยไม่ยื่นคำขอ'],keywords:['ขออนุญาต กทม','39 ทวิ กทม']}),
  makeLaw({id:'c11',group:'C',code:'C11',title:'ระเบียบกรุงเทพมหานครว่าด้วยการขออนุญาตตัดคันหินทางเท้า ลดระดับคันหินทางเท้า และทำทางเชื่อมในที่สาธารณะ พ.ศ. 2531',categories:['permit','road'],jurisdiction:'🏙️ กรุงเทพมหานครเท่านั้น',topics:['ตัดคันหิน','ลดระดับคันหิน','ทางเชื่อม','ที่สาธารณะ'],keywords:['คันหิน','ทางเท้า','ทางเชื่อม']}),
  makeLaw({id:'c12',group:'C',code:'C12',title:'ระเบียบกรุงเทพมหานครว่าด้วยการขออนุญาตก่อสร้างสะพานข้ามคลอง พ.ศ. 2549',categories:['permit','road'],jurisdiction:'🏙️ กรุงเทพมหานครเท่านั้น',topics:['สะพานข้ามคลอง','การขออนุญาต','ทางเชื่อม'],keywords:['สะพานข้ามคลอง','คลอง']}),

  makeLaw({id:'nonthaburi-parking-2560',group:'LOCAL',code:'นนทบุรี',title:'เทศบัญญัติเทศบาลนครนนทบุรี เรื่องกำหนดจำนวนที่จอดรถยนต์ของอาคารบางชนิดหรือบางประเภท ลักษณะและขนาดที่จอดรถยนต์ ที่กลับรถยนต์ และทางเข้าออกของรถยนต์ พ.ศ. 2560',categories:['parking','local'],jurisdiction:'📍 เทศบาลนครนนทบุรี',summary:'ข้อบัญญัติท้องถิ่นเรื่องประเภทอาคาร จำนวนที่จอดรถ และการอ้างอิงลักษณะ/ขนาดที่จอดรถในเขตเทศบาลนครนนทบุรี',topics:['อาคารที่ต้องมีที่จอดรถ','จำนวนที่จอดรถ','อาคารชุด','โรงแรม','อาคารอยู่อาศัยรวม','อาคารขนาดใหญ่'],keywords:['เทศบัญญัตินนทบุรี','ที่จอดรถนนทบุรี'],refs:['ใช้บังคับในเขตเทศบาลนครนนทบุรี','ลักษณะและขนาดอ้างอิงกฎกระทรวง ฉบับที่ 7 และ 41'],sources:[{label:'เปิด PDF เทศบัญญัติในระบบ',url:'docs/nonthaburi-parking-2560.pdf',kind:'Local PDF'}]})
];

const categories = [
  {id:'permit', icon:'📄', name:'ขออนุญาต / เอกสาร', subtitle:'ก่อสร้าง ดัดแปลง ต่ออายุ โอน'},
  {id:'design', icon:'📐', name:'ตรวจแบบ / ออกแบบ', subtitle:'ลักษณะอาคารและข้อกำหนด'},
  {id:'setback', icon:'📏', name:'ระยะร่น / ที่ว่าง', subtitle:'แนวเขต ถนน ช่องเปิด'},
  {id:'fire', icon:'🔥', name:'อัคคีภัย / ความปลอดภัย', subtitle:'ระบบไฟ ทางหนีไฟ'},
  {id:'parking', icon:'🚗', name:'ที่จอดรถ', subtitle:'จำนวน มิติ ทางเข้าออก'},
  {id:'accessibility', icon:'♿', name:'ผู้พิการ / คนชรา', subtitle:'ทางลาด ลิฟต์ ห้องน้ำ'},
  {id:'structure', icon:'🏗️', name:'โครงสร้าง', subtitle:'ฐานราก วัสดุ แผ่นดินไหว'},
  {id:'special', icon:'🏢', name:'อาคารเฉพาะประเภท', subtitle:'สูง โรงแรม สถานบริการ มหรสพ'},
  {id:'alteration', icon:'🧱', name:'ดัดแปลง / ต่อเติม', subtitle:'อะไรถือหรือไม่ถือว่าดัดแปลง'},
  {id:'demolition', icon:'🏚️', name:'รื้อถอน / เคลื่อนย้าย', subtitle:'เกณฑ์และวิธีดำเนินการ'},
  {id:'planning', icon:'🗺️', name:'ผังเมือง / พื้นที่', subtitle:'ผังสี เขตพิเศษ'},
  {id:'land', icon:'🏘️', name:'จัดสรรที่ดิน', subtitle:'โครงการและการจัดสรร'},
  {id:'aviation', icon:'✈️', name:'เขตปลอดภัยการบิน', subtitle:'ดอนเมือง สุวรรณภูมิ'},
  {id:'environment', icon:'🌿', name:'EIA / สิ่งแวดล้อม', subtitle:'ประเภทโครงการและรายงาน'},
  {id:'energy', icon:'⚡', name:'BEC / พลังงาน', subtitle:'OTTV RTTV มาตรฐานพลังงาน'},
  {id:'sanitation', icon:'💧', name:'ระบายน้ำ / น้ำเสีย', subtitle:'ระบบระบายและบำบัด'},
  {id:'road', icon:'🛣️', name:'ทางเท้า / ทางเชื่อม', subtitle:'คันหิน สะพานข้ามคลอง'},
  {id:'local', icon:'📍', name:'กฎหมายนนทบุรี', subtitle:'เอกสารท้องถิ่นที่เพิ่มเอง'}
];

const groups = [
  {id:null, label:'ทั้งหมด'},
  {id:'A', label:'A • ออกแบบอาคาร'},
  {id:'B', label:'B • กฎหมายเกี่ยวข้อง'},
  {id:'C', label:'C • เรื่องอื่น / อนุญาต'},
  {id:'BASE', label:'พ.ร.บ. แม่บท'},
  {id:'LOCAL', label:'นนทบุรี'}
];

const $ = id => document.getElementById(id);
let activeCategory = null;
let activeGroup = null;
let favoritesOnly = false;
let selectedLaw = null;

function getFavorites(){ try { return JSON.parse(localStorage.getItem('inspector-favorites') || '[]'); } catch { return []; } }
function setFavorites(ids){ localStorage.setItem('inspector-favorites', JSON.stringify(ids)); }
function isFavorite(id){ return getFavorites().includes(id); }
function toggleFavorite(id){ const ids=getFavorites(); const i=ids.indexOf(id); if(i>=0)ids.splice(i,1);else ids.push(id); setFavorites(ids); render(); if(selectedLaw?.id===id) updateDialogFavorite(); }
function lawMatchesCategory(law,id){ return law.categories.includes(id); }
function categoryCount(id){ return laws.filter(l=>lawMatchesCategory(l,id) && (!activeGroup || l.group===activeGroup)).length; }

function renderGroups(){
  $('groupTabs').innerHTML = groups.map(g=>`<button class="group-tab ${activeGroup===g.id?'active':''}" data-group="${g.id??''}">${g.label}<span>${g.id?laws.filter(l=>l.group===g.id).length:laws.length}</span></button>`).join('');
  document.querySelectorAll('[data-group]').forEach(btn=>btn.addEventListener('click',()=>{ activeGroup=btn.dataset.group||null; activeCategory=null; favoritesOnly=false; render(); }));
}
function renderCategories(){
  $('categoryGrid').innerHTML=categories.map(c=>`<button class="category-card ${activeCategory===c.id?'active':''}" data-category="${c.id}"><div class="category-top"><span class="category-icon">${c.icon}</span><span class="count-badge">${categoryCount(c.id)}</span></div><strong>${c.name}</strong><small>${c.subtitle}</small></button>`).join('');
  document.querySelectorAll('[data-category]').forEach(btn=>btn.addEventListener('click',()=>{ activeCategory=activeCategory===btn.dataset.category?null:btn.dataset.category; favoritesOnly=false; render(); }));
}
function searchableText(l){ return [l.title,l.code,l.group,l.jurisdiction,l.summary,...l.keywords,...l.topics,...l.refs,...l.badges].join(' ').toLowerCase(); }
function filteredLaws(){ const q=$('searchInput').value.trim().toLowerCase(); return laws.filter(l=>(!q||searchableText(l).includes(q))&&(!activeCategory||lawMatchesCategory(l,activeCategory))&&(!activeGroup||l.group===activeGroup)&&(!favoritesOnly||isFavorite(l.id))); }
function renderLaws(){
  const list=filteredLaws(); $('resultCount').textContent=`${list.length} รายการ`; $('emptyState').classList.toggle('hidden',list.length>0);
  const cat=categories.find(c=>c.id===activeCategory); const grp=groups.find(g=>g.id===activeGroup); const q=$('searchInput').value.trim(); let label='แสดงทั้งหมด'; if(favoritesOnly)label='เฉพาะกฎหมายของฉัน'; else { const bits=[]; if(grp&&grp.id)bits.push(grp.label); if(cat)bits.push(`${cat.icon} ${cat.name}`); if(bits.length)label=bits.join(' • '); } if(q) label += ` • ค้นหา “${q}”`; $('filterLabel').textContent=label;
  $('lawList').innerHTML=list.map(l=>`<article class="law-card"><div class="badge-row">${l.badges.slice(0,3).map(b=>`<span class="chip">${b}</span>`).join('')}</div><h3>${l.title}</h3><p>${l.jurisdiction}</p><div class="topic-preview">${l.topics.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div><div class="law-actions"><button class="star" data-star="${l.id}" aria-label="รายการโปรด">${isFavorite(l.id)?'★':'☆'}</button><button class="open" data-open="${l.id}">ดูรายละเอียด</button></div></article>`).join('');
  document.querySelectorAll('[data-star]').forEach(b=>b.addEventListener('click',()=>toggleFavorite(b.dataset.star))); document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openLaw(b.dataset.open)));
}
function render(){ renderGroups(); renderCategories(); renderLaws(); $('showFavorites').textContent=favoritesOnly?'★ กำลังดูกฎหมายของฉัน':'☆ กฎหมายของฉัน'; }
function openLaw(id){ const l=laws.find(x=>x.id===id); if(!l)return; selectedLaw=l; $('dialogBadges').innerHTML=l.badges.map(x=>`<span class="chip">${x}</span>`).join(''); $('dialogTitle').textContent=l.title; $('dialogMeta').textContent=`${l.jurisdiction} • ตรวจสอบดัชนี/ลิงก์ ${VERIFIED_DATE}`; $('dialogSummary').textContent=l.summary; $('dialogTopics').innerHTML=l.topics.map(x=>`<li>${x}</li>`).join(''); $('dialogRefs').innerHTML=l.refs.map(x=>`<div class="ref-item">${x}</div>`).join(''); $('dialogSources').innerHTML=l.sources.map(s=>`<a class="source-link" href="${s.url}" target="_blank" rel="noopener"><span>${s.label}</span><small>${s.kind} ↗</small></a>`).join(''); $('dialogNote').textContent=l.note; updateDialogFavorite(); $('lawDialog').showModal(); }
function updateDialogFavorite(){ if(selectedLaw)$('favoriteBtn').textContent=isFavorite(selectedLaw.id)?'★ เก็บไว้แล้ว':'☆ เก็บไว้'; }


const smartTypeNames = {
  house:'บ้านพักอาศัย', residential:'อาคารอยู่อาศัยรวม', condo:'อาคารชุด', office:'สำนักงาน',
  commercial:'อาคารพาณิชยกรรม / ร้านค้า', hotel:'โรงแรม', theater:'โรงมหรสพ', service:'สถานบริการ',
  warehouse:'คลังสินค้า', factory:'โรงงาน', other:'อาคารประเภทอื่น'
};
const smartLocationNames = {nonthaburi:'เทศบาลนครนนทบุรี', bangkok:'กรุงเทพมหานคร', other:'พื้นที่อื่น / ยังไม่ระบุ'};

function smartAdd(map,id,level,reason){
  const law=laws.find(x=>x.id===id); if(!law)return;
  const rank={core:1,direct:2,local:3,conditional:4};
  const prev=map.get(id);
  if(!prev || rank[level] < rank[prev.level]) map.set(id,{law,level,reason});
  else if(reason && !prev.reason.includes(reason)) prev.reason += ` • ${reason}`;
}
function analyzeSmart(){
  const type=$('smartType').value;
  const height=Number($('smartHeight').value)||0;
  const area=Number($('smartArea').value)||0;
  const road=Number($('smartRoad').value)||0;
  const location=$('smartLocation').value;
  const rec=new Map();
  const warnings=[];

  smartAdd(rec,'building-control-act-2522','core','กฎหมายแม่บทเรื่องการก่อสร้าง การอนุญาต การตรวจ และคำสั่งตามกฎหมายควบคุมอาคาร');
  smartAdd(rec,'a1','core',road>0?`ต้องตรวจลักษณะอาคาร ที่ว่าง และระยะที่สัมพันธ์กับถนนที่กรอก ${road.toLocaleString('th-TH')} ม.`:'ต้องตรวจลักษณะอาคาร ที่ว่าง ระยะร่น และข้อกำหนดพื้นฐานของอาคาร');
  smartAdd(rec,'c3','core','ใช้ตรวจขั้นตอน คำขอ เอกสาร ใบอนุญาต การต่ออายุ/โอน และใบรับรอง');
  smartAdd(rec,'c8','core','ใช้ตรวจหลักเกณฑ์และวิธีการก่อสร้าง ดัดแปลง รื้อถอน เคลื่อนย้าย ใช้หรือเปลี่ยนการใช้อาคาร');
  smartAdd(rec,'a10-2','conditional','ควรตรวจฐานรากและพื้นดินที่รองรับอาคารประกอบการออกแบบ');
  smartAdd(rec,'a10-3','conditional','ควรตรวจหลักการออกแบบโครงสร้างและวัสดุโครงสร้าง');

  let classification=[];
  if(height>=23){
    classification.push('ความสูงตั้งแต่ 23 ม. → เข้าข่ายนิยาม “อาคารสูง”');
    smartAdd(rec,'a3','direct',`ความสูง ${height.toLocaleString('th-TH')} ม. ถึงเกณฑ์อาคารสูงที่ต้องเปิดตรวจข้อกำหนดเฉพาะ`);
  }
  if(area>=10000){
    classification.push('พื้นที่รวมตั้งแต่ 10,000 ตร.ม. → เข้าข่าย “อาคารขนาดใหญ่พิเศษ”');
    smartAdd(rec,'a3','direct',`พื้นที่รวม ${area.toLocaleString('th-TH')} ตร.ม. ถึงเกณฑ์อาคารขนาดใหญ่พิเศษ`);
  }
  const large = area>2000 || (height>=15 && area>1000 && area<=2000);
  if(large){
    classification.push('ข้อมูลพื้นที่/ความสูงเข้าเงื่อนไขที่ควรตรวจนิยาม “อาคารขนาดใหญ่” ในกฎ 55');
    smartAdd(rec,'a1','direct','ข้อมูลพื้นที่และความสูงเข้าเงื่อนไขที่ควรตรวจข้อกำหนดสำหรับอาคารขนาดใหญ่');
  }

  const parkingTypes=['residential','condo','office','commercial','hotel','theater','service'];
  if(parkingTypes.includes(type)){
    smartAdd(rec,'a4','conditional',`ประเภท ${smartTypeNames[type]} ควรตรวจว่าเข้าประเภท/ขนาดที่ต้องจัดจำนวนที่จอดรถหรือไม่`);
    smartAdd(rec,'a5','conditional','หากต้องจัดที่จอดรถ ให้ตรวจลักษณะ/ขนาดและระบบที่เกี่ยวข้องเพิ่มเติม');
  }
  if(type==='hotel'){
    smartAdd(rec,'a13','direct','เลือกประเภทโรงแรม จึงต้องเปิดข้อกำหนดลักษณะและระบบความปลอดภัยของโรงแรม');
    smartAdd(rec,'c2','conditional','ควรตรวจสถานะอาคารประเภทควบคุมการใช้และใบรับรองตามเงื่อนไข');
  }
  if(type==='theater'){
    smartAdd(rec,'a8','direct','เลือกโรงมหรสพ จึงมีกฎหมายเฉพาะเรื่องการอนุญาตใช้และระบบความปลอดภัย');
    smartAdd(rec,'c2','conditional','ควรตรวจอาคารประเภทควบคุมการใช้และใบรับรอง');
  }
  if(type==='service'){
    smartAdd(rec,'a9','direct','เลือกสถานบริการ จึงมีกฎหมายเฉพาะเรื่องระบบความปลอดภัย');
    smartAdd(rec,'c2','conditional','ควรตรวจอาคารประเภทควบคุมการใช้และใบรับรอง');
  }
  if(['condo','office','commercial','hotel','theater','service'].includes(type)){
    smartAdd(rec,'a7','conditional','ตรวจเพิ่มเติมว่าอาคารประเภท/ขนาดนี้อยู่ในบังคับสิ่งอำนวยความสะดวกสำหรับผู้พิการหรือคนชราหรือไม่');
  }
  if(['condo','hotel','commercial','office'].includes(type)){
    smartAdd(rec,'b5','conditional','ประเภทโครงการอาจมีเกณฑ์ EIA ที่ต้องใช้ข้อมูลเพิ่ม เช่น จำนวนห้อง/หน่วย พื้นที่ หรือที่ตั้ง');
  }
  if(area>=2000 && ['office','commercial','hotel','condo','residential','other'].includes(type)){
    smartAdd(rec,'b6','conditional','อาคารขนาดนี้ควรตรวจเกณฑ์ประเภท/ขนาดของกฎหมายอนุรักษ์พลังงาน (BEC) เพิ่มเติม');
    smartAdd(rec,'b7','conditional','หากเข้าข่าย BEC ต้องตรวจค่ามาตรฐานการออกแบบที่เกี่ยวข้อง');
  }
  smartAdd(rec,'a12','conditional','ควรตรวจระบบระบายน้ำ น้ำเสีย และข้อกำหนดสุขาภิบาลตามประเภท/ขนาดอาคาร');

  if(location==='nonthaburi'){
    const localApplies = ['condo','office','commercial','hotel','theater'].includes(type) || (type==='residential' && area>=300) || large;
    if(localApplies) smartAdd(rec,'nonthaburi-parking-2560','local','ที่ตั้งอยู่เทศบาลนครนนทบุรี และประเภท/ขนาดที่กรอกมีประเด็นต้องตรวจเทศบัญญัติที่จอดรถท้องถิ่น');
    warnings.push('ฐานท้องถิ่นนนทบุรีในแอปตอนนี้มีเทศบัญญัติที่จอดรถเป็นหลัก ผังเมืองและข้อบัญญัติท้องถิ่นฉบับอื่นยังต้องตรวจเพิ่มจากต้นฉบับที่ใช้บังคับจริง');
  } else if(location==='bangkok'){
    smartAdd(rec,'a6','local','ที่ตั้งกรุงเทพมหานคร จึงต้องตรวจข้อบัญญัติกรุงเทพมหานครเรื่องควบคุมอาคารเพิ่มเติม');
    smartAdd(rec,'b1','local','ที่ตั้งกรุงเทพมหานคร จึงต้องตรวจข้อกำหนดผังเมืองและการใช้ประโยชน์ที่ดินของพื้นที่');
    warnings.push('เขต/แขวงและตำแหน่งแปลงจริงอาจทำให้มีกฎหมายพื้นที่เฉพาะ เขตการบิน หรือข้อกำหนดอื่นเพิ่ม');
  } else {
    warnings.push('ยังไม่ระบุข้อบัญญัติท้องถิ่นและผังเมืองของพื้นที่จริง ระบบจึงแสดงกฎหมายกลางเป็นหลัก');
  }

  if(road<=0) warnings.push('ยังไม่ได้กรอกความกว้างถนน จึงยังไม่สามารถชี้ประเด็นเรื่องถนน/ระยะร่นได้ละเอียดขึ้น');
  warnings.push('Smart Check เป็นการคัด “กฎหมายที่ควรเปิดตรวจ” เบื้องต้น ไม่ใช่คำวินิจฉัยว่าอาคารผ่านหรือผิดกฎหมาย และยังมีเงื่อนไขอื่นที่ข้อมูล 5 ช่องนี้ไม่ครอบคลุม');

  const order={core:1,direct:2,local:3,conditional:4};
  const rows=[...rec.values()].sort((a,b)=>order[a.level]-order[b.level] || a.law.code.localeCompare(b.law.code,'th'));
  const typeText=smartTypeNames[type]; const locText=smartLocationNames[location];
  let summary=`${typeText}${height?` • สูง ${height.toLocaleString('th-TH')} ม.`:''}${area?` • ${area.toLocaleString('th-TH')} ตร.ม.`:''} • ${locText}`;
  if(classification.length) summary += ` — ${classification.join(' / ')}`;
  $('smartSummary').textContent=summary;
  $('smartCount').textContent=`${rows.length} ฉบับ/ชุด`;
  const levelLabel={core:'กฎหมายหลัก',direct:'เข้าเงื่อนไขเด่น',local:'กฎหมายพื้นที่',conditional:'ตรวจเพิ่มตามเงื่อนไข'};
  $('smartLawList').innerHTML=rows.map(r=>`<article class="smart-law"><span class="smart-level ${r.level}">${levelLabel[r.level]}</span><div class="smart-law-top"><div><h3>${r.law.title}</h3><p>${r.reason}</p></div><button class="mini-open" type="button" data-smart-open="${r.law.id}">เปิดดู</button></div></article>`).join('');
  $('smartWarnings').innerHTML=warnings.map(w=>`<div class="smart-warning">⚠️ ${w}</div>`).join('');
  document.querySelectorAll('[data-smart-open]').forEach(b=>b.addEventListener('click',()=>openLaw(b.dataset.smartOpen)));
  $('smartResults').classList.remove('hidden');
  $('smartResults').scrollIntoView({behavior:'smooth',block:'nearest'});
}
$('smartAnalyze').addEventListener('click', analyzeSmart);

$('searchInput').addEventListener('input',()=>{ favoritesOnly=false; renderLaws(); });
$('clearSearch').addEventListener('click',()=>{ $('searchInput').value=''; activeCategory=null; activeGroup=null; favoritesOnly=false; render(); });
$('showFavorites').addEventListener('click',()=>{ favoritesOnly=!favoritesOnly; activeCategory=null; activeGroup=null; render(); });
$('favoriteBtn').addEventListener('click',()=>selectedLaw&&toggleFavorite(selectedLaw.id));
const quick=['ขออนุญาต','ต่อเติม','ระยะร่น','ช่องเปิด','อาคารสูง','ที่จอดรถ','ผู้พิการ','EIA','BEC','โรงแรม','แผ่นดินไหว'];
$('quickTags').innerHTML=quick.map(q=>`<button type="button" data-q="${q}">${q}</button>`).join('');
document.querySelectorAll('[data-q]').forEach(btn=>btn.addEventListener('click',()=>{ $('searchInput').value=btn.dataset.q; activeCategory=null; activeGroup=null; favoritesOnly=false; render(); }));
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
render();
