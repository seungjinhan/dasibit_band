// Page translations. Keys match data-i18n attributes in index.html.
// Values may contain <br>; they are inserted as HTML.
const LANGS = {
  ko: { name: '한국어', fonts: null },
  en: { name: 'English', fonts: 'family=Noto+Sans:wght@400;500;700' },
  ja: { name: '日本語', fonts: 'family=Yomogi&family=Noto+Sans+JP:wght@400;500;700' },
  'zh-Hans': { name: '简体中文', fonts: 'family=ZCOOL+KuaiLe&family=Noto+Sans+SC:wght@400;500;700' },
  'zh-Hant': { name: '繁體中文', fonts: 'family=LXGW+WenKai+TC:wght@700&family=Noto+Sans+TC:wght@400;500;700' },
  es: { name: 'Español', fonts: 'family=Noto+Sans:wght@400;500;700' },
  vi: { name: 'Tiếng Việt', fonts: 'family=Patrick+Hand&family=Noto+Sans:wght@400;500;700' },
  th: { name: 'ไทย', fonts: 'family=Mali:wght@700&family=Noto+Sans+Thai:wght@400;500;700' },
};

const STRINGS = {
  ko: {
    'meta.title': 'Dasibit · 다시빛',
    'meta.desc': '멈춘 노래는 사라지지 않고, 기다리고 있었습니다. 2010–2011년 작은 방에서 만든 데모를 15년 만에 다시 꺼내는 다시빛(Dasibit) 프로젝트.',
    'lang.label': '언어',
    'nav.story': '나의 이야기',
    'nav.revived': '살려낸 노래',
    'nav.now': '지금을 노래함',
    'nav.covers': '커버 노래',
    'kicker': '다시빛 프로젝트',
    'credit': '작사 · 작곡 · 연주 · 녹음 Dasibit',
    'btn.listen': 'YouTube에서 듣기',
    'btn.story': '이야기 읽기',
    'hero.alt': '쇼윈도 너머 기타를 올려다보는 아이를 그린 수채화',
    'story.title': '나의<br>이야기',
    'story.p1': '2010년과 2011년, 내 방에서 혼자 만든 노래들. 삶을 따라 떠나느라 mp3로만 남겨 두었던 그 시절의 소리를 15년 만에 다시 찾았습니다.',
    'story.p2': '다시빛(Dasibit)은 그 노래들에 다시 빛을 비추는 프로젝트입니다. 그때의 목소리, 그때의 기타, 그때의 마음을 고치지 않고 그대로 들려드립니다.',
    'tl.after': '그 후',
    'tl.1': '작은 방에서 쓰고, 연주하고, 녹음하다',
    'tl.2': 'mp3로 남겨진 채 멈추다',
    'tl.3': '다시 찾은 노래를 데모 그대로 꺼내다',
    'revived.title': '살려낸<br>노래',
    'revived.desc': '2010–2011년에 만들고 멈춰 있던 노래들을 뮤직비디오로 다시 살려냅니다.',
    'now.title': '지금을<br>노래함',
    'now.desc': '지금의 목소리와 지금의 마음으로 만드는 새 노래들.',
    'covers.title': '커버<br>노래',
    'covers.desc': '좋아하는 가수들의 노래를 나의 목소리와 기타로 다시 부릅니다.',
    'demo.soon': '공개 예정',
    'music.more': 'YouTube 채널 전체 보기 →',
    'connect.title': '새 노래가 나오면<br>가장 먼저',
    'connect.p': '뮤직비디오는 YouTube에서, 작업하는 일상은 X와 Instagram에서 전합니다.',
  },
  en: {
    'meta.title': 'Dasibit · 다시빛',
    'meta.desc': "Songs that stop don't disappear. They wait. Bedroom demos from 2010–2011, found again fifteen years later — the Dasibit project.",
    'lang.label': 'Language',
    'nav.story': 'My Story',
    'nav.revived': 'Revived Songs',
    'nav.now': 'Singing Now',
    'nav.covers': 'Covers',
    'kicker': 'The Dasibit Project',
    'credit': 'Written, performed &amp; recorded by Dasibit',
    'btn.listen': 'Listen on YouTube',
    'btn.story': 'Read the story',
    'hero.alt': 'Watercolor of a child looking up at a guitar through a shop window',
    'story.title': 'My<br>Story',
    'story.p1': 'Songs I made alone in my room in 2010 and 2011. Life pulled me away and they stayed behind as mp3 files — fifteen years later, I found those sounds again.',
    'story.p2': 'Dasibit (다시빛, “light again” in Korean) is a project to bring them back into the light. The voice, the guitar, the heart of those days, shared exactly as they were.',
    'tl.after': 'After',
    'tl.1': 'Written, played and recorded in a small room',
    'tl.2': 'Left behind as mp3 files',
    'tl.3': 'Found again and released as raw demos',
    'revived.title': 'Revived<br>Songs',
    'revived.desc': 'Songs I made in 2010–2011 and left behind, brought back to life as music videos.',
    'now.title': 'Singing<br>Now',
    'now.desc': 'New songs, made with the voice and heart I have today.',
    'covers.title': 'Cover<br>Songs',
    'covers.desc': 'Songs by artists I love, sung again with my own voice and guitar.',
    'demo.soon': 'Coming soon',
    'music.more': 'See the full YouTube channel →',
    'connect.title': 'Be the first<br>to hear new songs',
    'connect.p': 'Music videos on YouTube; everyday studio life on X and Instagram.',
  },
  ja: {
    'meta.title': 'Dasibit · 다시빛',
    'meta.desc': '止まった歌は消えずに、待っていた。2010–2011年に小さな部屋で作ったデモを、15年ぶりに届けるDasibitプロジェクト。',
    'lang.label': '言語',
    'nav.story': 'わたしの物語',
    'nav.revived': 'よみがえった歌',
    'nav.now': 'いまを歌う',
    'nav.covers': 'カバー曲',
    'kicker': 'Dasibit プロジェクト',
    'credit': '作詞・作曲・演奏・録音 Dasibit',
    'btn.listen': 'YouTubeで聴く',
    'btn.story': 'ストーリーを読む',
    'hero.alt': 'ショーウィンドウ越しにギターを見上げる子どもの水彩画',
    'story.title': 'わたしの<br>物語',
    'story.p1': '2010年と2011年、自分の部屋でひとりで作った歌。人生に流されてmp3のまま残していたあの頃の音を、15年ぶりに見つけました。',
    'story.p2': 'Dasibit(다시빛、韓国語で「もう一度、光」)は、その歌にもう一度光を当てるプロジェクトです。あの頃の声、ギター、気持ちを、手を加えずそのままお届けします。',
    'tl.after': 'その後',
    'tl.1': '小さな部屋で書き、弾き、録音した',
    'tl.2': 'mp3のまま止まっていた',
    'tl.3': '見つけた歌をデモのまま届ける',
    'revived.title': 'よみがえった<br>歌',
    'revived.desc': '2010〜2011年に作って止まっていた歌を、ミュージックビデオとしてよみがえらせます。',
    'now.title': 'いまを<br>歌う',
    'now.desc': 'いまの声と、いまの気持ちで作る新しい歌。',
    'covers.title': 'カバー<br>曲',
    'covers.desc': '好きな歌手の歌を、自分の声とギターで歌い直します。',
    'demo.soon': '公開予定',
    'music.more': 'YouTubeチャンネルをすべて見る →',
    'connect.title': '新しい歌を<br>いちばん早く',
    'connect.p': 'ミュージックビデオはYouTubeで、制作の日常はXとInstagramでお届けします。',
  },
  'zh-Hans': {
    'meta.title': 'Dasibit · 다시빛',
    'meta.desc': '停下的歌没有消失，一直在等待。2010–2011 年在小房间里录下的小样，十五年后重新发布 —— Dasibit 项目。',
    'lang.label': '语言',
    'nav.story': '我的故事',
    'nav.revived': '重生的歌',
    'nav.now': '歌唱此刻',
    'nav.covers': '翻唱',
    'kicker': 'Dasibit 项目',
    'credit': '作词・作曲・演奏・录音 Dasibit',
    'btn.listen': '在 YouTube 收听',
    'btn.story': '阅读故事',
    'hero.alt': '透过橱窗仰望吉他的孩子的水彩画',
    'story.title': '我的<br>故事',
    'story.p1': '2010 年和 2011 年，我一个人在房间里做的歌。被生活推着离开，只留下 mp3 的那段声音，十五年后我又重新找到了。',
    'story.p2': 'Dasibit（다시빛，韩语意为“再次的光”）是让这些歌重见光明的计划。那时的声音、那时的吉他、那时的心情，不加修饰，原样呈现。',
    'tl.after': '之后',
    'tl.1': '在小房间里写歌、弹奏、录音',
    'tl.2': '以 mp3 的形式停在那里',
    'tl.3': '把找回的歌以小样原貌发布',
    'revived.title': '重生的<br>歌',
    'revived.desc': '把 2010–2011 年写好却停下的歌，用音乐视频重新唤醒。',
    'now.title': '歌唱<br>此刻',
    'now.desc': '用现在的声音和现在的心情创作的新歌。',
    'covers.title': '翻唱<br>歌曲',
    'covers.desc': '用自己的声音和吉他，重新演唱喜欢的歌手的歌。',
    'demo.soon': '即将发布',
    'music.more': '查看 YouTube 频道全部内容 →',
    'connect.title': '新歌发布<br>第一时间知道',
    'connect.p': '音乐视频在 YouTube，创作日常在 X 和 Instagram。',
  },
  'zh-Hant': {
    'meta.title': 'Dasibit · 다시빛',
    'meta.desc': '停下的歌沒有消失，一直在等待。2010–2011 年在小房間裡錄下的 Demo，十五年後重新發表 —— Dasibit 計畫。',
    'lang.label': '語言',
    'nav.story': '我的故事',
    'nav.revived': '重生的歌',
    'nav.now': '歌唱此刻',
    'nav.covers': '翻唱',
    'kicker': 'Dasibit 計畫',
    'credit': '作詞・作曲・演奏・錄音 Dasibit',
    'btn.listen': '在 YouTube 收聽',
    'btn.story': '閱讀故事',
    'hero.alt': '透過櫥窗仰望吉他的孩子的水彩畫',
    'story.title': '我的<br>故事',
    'story.p1': '2010 年和 2011 年，我一個人在房間裡做的歌。被生活推著離開，只留下 mp3 的那段聲音，十五年後我又重新找到了。',
    'story.p2': 'Dasibit（다시빛，韓語意為「再一次的光」）是讓這些歌重見光明的計畫。那時的聲音、那時的吉他、那時的心情，不加修飾，原樣呈現。',
    'tl.after': '之後',
    'tl.1': '在小房間裡寫歌、彈奏、錄音',
    'tl.2': '以 mp3 的形式停在那裡',
    'tl.3': '把找回的歌以 Demo 原貌發表',
    'revived.title': '重生的<br>歌',
    'revived.desc': '把 2010–2011 年寫好卻停下的歌，用音樂影片重新喚醒。',
    'now.title': '歌唱<br>此刻',
    'now.desc': '用現在的聲音和現在的心情創作的新歌。',
    'covers.title': '翻唱<br>歌曲',
    'covers.desc': '用自己的聲音和吉他，重新演唱喜歡的歌手的歌。',
    'demo.soon': '即將公開',
    'music.more': '查看 YouTube 頻道全部內容 →',
    'connect.title': '新歌發表<br>第一時間知道',
    'connect.p': '音樂影片在 YouTube，創作日常在 X 和 Instagram。',
  },
  es: {
    'meta.title': 'Dasibit · 다시빛',
    'meta.desc': 'Las canciones que se detienen no desaparecen: esperan. Maquetas grabadas en un cuarto en 2010–2011, reencontradas quince años después. El proyecto Dasibit.',
    'lang.label': 'Idioma',
    'nav.story': 'Mi historia',
    'nav.revived': 'Canciones revividas',
    'nav.now': 'Cantando el ahora',
    'nav.covers': 'Versiones',
    'kicker': 'Proyecto Dasibit',
    'credit': 'Letra, música, interpretación y grabación: Dasibit',
    'btn.listen': 'Escuchar en YouTube',
    'btn.story': 'Leer la historia',
    'hero.alt': 'Acuarela de un niño que mira una guitarra a través de un escaparate',
    'story.title': 'Mi<br>historia',
    'story.p1': 'Canciones que hice solo en mi cuarto en 2010 y 2011. La vida me llevó lejos y quedaron guardadas como archivos mp3; quince años después, volví a encontrar aquellos sonidos.',
    'story.p2': 'Dasibit (다시빛, «luz de nuevo» en coreano) es un proyecto para devolverles la luz. La voz, la guitarra y el corazón de aquellos días, tal como eran.',
    'tl.after': 'Después',
    'tl.1': 'Escritas, tocadas y grabadas en un cuarto pequeño',
    'tl.2': 'Detenidas como archivos mp3',
    'tl.3': 'Reencontradas y publicadas como maquetas',
    'revived.title': 'Canciones<br>revividas',
    'revived.desc': 'Canciones que hice en 2010–2011 y dejé atrás, devueltas a la vida como videoclips.',
    'now.title': 'Cantando<br>el ahora',
    'now.desc': 'Canciones nuevas, hechas con la voz y el corazón de hoy.',
    'covers.title': 'Versiones',
    'covers.desc': 'Canciones de artistas que admiro, cantadas de nuevo con mi voz y mi guitarra.',
    'demo.soon': 'Próximamente',
    'music.more': 'Ver todo el canal de YouTube →',
    'connect.title': 'Sé el primero<br>en escuchar lo nuevo',
    'connect.p': 'Los videoclips, en YouTube; el día a día del proceso, en X e Instagram.',
  },
  vi: {
    'meta.title': 'Dasibit · 다시빛',
    'meta.desc': 'Những bài hát dừng lại không biến mất, chúng vẫn đang chờ. Bản demo thu trong căn phòng nhỏ năm 2010–2011, được tìm lại sau mười lăm năm — dự án Dasibit.',
    'lang.label': 'Ngôn ngữ',
    'nav.story': 'Câu chuyện của tôi',
    'nav.revived': 'Bài hát hồi sinh',
    'nav.now': 'Hát về hiện tại',
    'nav.covers': 'Cover',
    'kicker': 'Dự án Dasibit',
    'credit': 'Sáng tác, trình bày và thu âm: Dasibit',
    'btn.listen': 'Nghe trên YouTube',
    'btn.story': 'Đọc câu chuyện',
    'hero.alt': 'Tranh màu nước vẽ một đứa trẻ nhìn lên cây đàn guitar qua cửa kính',
    'story.title': 'Câu chuyện<br>của tôi',
    'story.p1': 'Những bài hát tôi tự làm trong căn phòng của mình vào năm 2010 và 2011. Cuộc sống cuốn tôi đi, chúng chỉ còn lại dưới dạng file mp3 — mười lăm năm sau, tôi tìm lại được những âm thanh ấy.',
    'story.p2': 'Dasibit (다시빛, nghĩa là “ánh sáng lần nữa” trong tiếng Hàn) là dự án mang những bài hát ấy trở lại ánh sáng. Giọng hát, tiếng guitar và tâm hồn của những ngày ấy, giữ nguyên như xưa.',
    'tl.after': 'Sau đó',
    'tl.1': 'Viết, chơi và thu âm trong một căn phòng nhỏ',
    'tl.2': 'Dừng lại dưới dạng file mp3',
    'tl.3': 'Tìm lại và phát hành nguyên bản demo',
    'revived.title': 'Bài hát<br>hồi sinh',
    'revived.desc': 'Những bài hát tôi viết năm 2010–2011 rồi bỏ dở, nay được hồi sinh thành video âm nhạc.',
    'now.title': 'Hát về<br>hiện tại',
    'now.desc': 'Những bài hát mới, được tạo nên bằng giọng hát và tâm hồn của hôm nay.',
    'covers.title': 'Bài hát<br>cover',
    'covers.desc': 'Hát lại những ca khúc của các ca sĩ tôi yêu thích bằng giọng hát và cây đàn guitar của mình.',
    'demo.soon': 'Sắp ra mắt',
    'music.more': 'Xem toàn bộ kênh YouTube →',
    'connect.title': 'Nghe bài mới<br>sớm nhất',
    'connect.p': 'Video âm nhạc trên YouTube, đời thường khi sáng tác trên X và Instagram.',
  },
  th: {
    'meta.title': 'Dasibit · 다시빛',
    'meta.desc': 'เพลงที่หยุดไว้ไม่ได้หายไป แต่ยังคงรออยู่ เดโมที่บันทึกในห้องเล็ก ๆ เมื่อปี 2010–2011 ถูกค้นพบอีกครั้งหลังผ่านไปสิบห้าปี — โปรเจกต์ Dasibit',
    'lang.label': 'ภาษา',
    'nav.story': 'เรื่องราวของฉัน',
    'nav.revived': 'เพลงที่ฟื้นคืน',
    'nav.now': 'ร้องเพลงของวันนี้',
    'nav.covers': 'เพลงคัฟเวอร์',
    'kicker': 'โปรเจกต์ Dasibit',
    'credit': 'เขียนเนื้อร้อง แต่งทำนอง เล่น และบันทึกเสียงโดย Dasibit',
    'btn.listen': 'ฟังบน YouTube',
    'btn.story': 'อ่านเรื่องราว',
    'hero.alt': 'ภาพสีน้ำเด็กที่มองกีตาร์ผ่านกระจกหน้าร้าน',
    'story.title': 'เรื่องราว<br>ของฉัน',
    'story.p1': 'เพลงที่ทำขึ้นคนเดียวในห้องเล็ก ๆ เมื่อปี 2010 และ 2011 ชีวิตพาให้ต้องจากไป เพลงเหล่านั้นจึงเหลือเพียงไฟล์ mp3 จนสิบห้าปีต่อมาจึงได้พบเสียงเหล่านั้นอีกครั้ง',
    'story.p2': 'Dasibit (다시빛 แปลว่า “แสงอีกครั้ง” ในภาษาเกาหลี) คือโปรเจกต์ที่พาเพลงเหล่านั้นกลับคืนสู่แสงอีกครั้ง เสียงร้อง กีตาร์ และหัวใจในวันนั้น ถ่ายทอดออกมาอย่างที่เป็น',
    'tl.after': 'หลังจากนั้น',
    'tl.1': 'เขียน เล่น และบันทึกเสียงในห้องเล็ก ๆ',
    'tl.2': 'หยุดค้างไว้เป็นไฟล์ mp3',
    'tl.3': 'นำเพลงที่พบอีกครั้งมาเผยแพร่แบบเดโม',
    'revived.title': 'เพลงที่<br>ฟื้นคืน',
    'revived.desc': 'เพลงที่แต่งไว้เมื่อปี 2010–2011 แล้วหยุดค้างไว้ ถูกนำกลับมามีชีวิตอีกครั้งในรูปแบบมิวสิกวิดีโอ',
    'now.title': 'ร้องเพลง<br>ของวันนี้',
    'now.desc': 'เพลงใหม่ที่สร้างขึ้นด้วยเสียงและหัวใจของวันนี้',
    'covers.title': 'เพลง<br>คัฟเวอร์',
    'covers.desc': 'นำเพลงของศิลปินที่ชื่นชอบมาร้องใหม่ด้วยเสียงและกีตาร์ของตัวเอง',
    'demo.soon': 'เร็ว ๆ นี้',
    'music.more': 'ดูช่อง YouTube ทั้งหมด →',
    'connect.title': 'ฟังเพลงใหม่<br>ก่อนใคร',
    'connect.p': 'มิวสิกวิดีโอบน YouTube ชีวิตประจำวันระหว่างทำเพลงบน X และ Instagram',
  },
};

const DEFAULT_LANG = 'ko';
const STORAGE_KEY = 'dasibit-lang';

function matchLang(tag) {
  if (!tag) return null;
  const t = tag.toLowerCase();
  if (t.startsWith('zh')) {
    return /hant|tw|hk|mo/.test(t) ? 'zh-Hant' : 'zh-Hans';
  }
  const base = t.split('-')[0];
  return Object.keys(LANGS).find((k) => k === base) || null;
}

function pickLang() {
  const fromUrl = matchLang(new URLSearchParams(location.search).get('lang'));
  if (fromUrl) return fromUrl;
  try {
    const saved = matchLang(localStorage.getItem(STORAGE_KEY));
    if (saved) return saved;
  } catch (e) { /* storage unavailable */ }
  for (const tag of navigator.languages || [navigator.language]) {
    const m = matchLang(tag);
    if (m) return m;
  }
  return DEFAULT_LANG;
}

function loadFonts(lang) {
  const query = LANGS[lang].fonts;
  if (!query || document.querySelector(`link[data-font-lang="${lang}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?${query}&display=swap`;
  link.dataset.fontLang = lang;
  document.head.appendChild(link);
}

function applyLang(lang) {
  const s = STRINGS[lang];
  document.documentElement.lang = lang;
  loadFonts(lang);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = s[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const v = s[el.dataset.i18nAlt];
    if (v !== undefined) el.alt = v;
  });
  document.title = s['meta.title'];
  document.querySelector('meta[name="description"]').content = s['meta.desc'];
  document.querySelector('meta[property="og:description"]').content = s['meta.desc'];
  const select = document.getElementById('lang-select');
  select.value = lang;
  select.setAttribute('aria-label', s['lang.label']);
}

function setLang(lang) {
  applyLang(lang);
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  const url = new URL(location.href);
  if (lang === DEFAULT_LANG) url.searchParams.delete('lang');
  else url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);
}

const select = document.getElementById('lang-select');
for (const [code, { name }] of Object.entries(LANGS)) {
  const opt = document.createElement('option');
  opt.value = code;
  opt.textContent = name;
  opt.lang = code;
  select.appendChild(opt);
}
select.addEventListener('change', () => setLang(select.value));
applyLang(pickLang());
