/* ============================================================
   環-wa- i18n  —  ja / en / zh / ko
   ============================================================ */
(function () {
  'use strict';

  /* ── Translations ──────────────────────────────────────── */
  var T = {

    /* ──────────────────── JAPANESE ───────────────────────── */
    ja: {
      meta: {
        title: '環-wa- | 手作りリング体験 佐世保・万津町',
        desc:  '長崎県佐世保市の手作りリング体験工房「環-wa-」。スプーンリングとコインリングを自分の手で作る特別な体験。完全予約制。¥6,500〜',
      },
      nav: {
        about:   'リングについて',
        flow:    '体験の流れ',
        pricing: '料金',
        faq:     'FAQ',
        shop:    'ショップ',
        reserve: '予約する',
      },
      hero: {
        eyebrow:       'Handmade Ring Workshop',
        copy:          '記憶を、環に。',
        tagline:       '世界のコインやスプーンからつくる、<br>記憶を宿すリング体験。',
        reserve:       '体験を予約する',
        address:       '佐世保市万津町 2-8',
        byReservation: '完全予約制',
        hours:         '12:00 — 20:00',
      },
      about: {
        heading: 'リングについて',
        spoon: {
          title: 'スプーンリング',
          p1: 'スプーンリングには、100年以上の歴史があります。かつてヨーロッパでは、銀のスプーンは家族が受け継ぐ大切な財産のひとつ。そのスプーンをリングに作り替えて愛する人へ贈る、という婚約の習慣が生まれました。',
          p2: '「あなたのために、大切なものを形にして捧げます」という深い想いを込められたスプーンリングは、ふたりの絆を象徴する贈り物として今もなお多くのカップルに愛され続けています。大切な人と並んで、世界にひとつだけの指輪を作りませんか？',
        },
        coin: {
          title: 'コインリング',
          p1: 'アメリカ、ヨーロッパ、アジア……世界中から集めたコインを、あなただけの指輪に。デザインや歴史が刻まれたコインをひとつ選び、自分の手でリングへと生まれ変わらせる工程はまるで小さな冒険です。',
          p2: '旅の記念、大切な人へのプレゼント、自分へのご褒美に——あの日あの場所の気持ちを、ずっと指先に宿してください。完成した瞬間の感動とともに、忘れられない思い出が残ります。',
        },
      },
      flow: {
        heading: '体験の流れ',
        s01: { title: 'ご予約', p: '下記よりご希望の日時・人数・体験メニューをお選びいただきご予約ください。', btn: 'ご予約はこちらから' },
        s02: { title: '当日ご来店', p: '事前に<a href="caution.html" class="text-link">注意事項</a>をよくお読みいただき、開始時刻の5分前までにお越しください。お席にご案内し、体験の説明をいたします。' },
        s03: { title: 'コイン・スプーン選び', time: '約 10分', p: '世界各国から集めたコインとスプーンの中からお気に入りの一枚をお選びください。どれにしようか迷う時間も、体験のひとつです。' },
        s04: { title: 'リング作り', time: '約 30〜50分', p: '専門スタッフが丁寧にご指導いたします。叩いて、曲げて、磨いて——少しずつリングの形になっていく過程をどうぞお楽しみください。初めての方でも安心してご体験いただけます。' },
        s05: { title: 'ペンダントトップ作り', p: 'リング作りの余った素材を使って、ペンダントトップも作れます。ネックレスやキーホルダーとして持ち帰れる、もうひとつのお土産に。<br><span class="inline-note">※別途 ¥1,000〜でお楽しみいただけるオプションです。</span>' },
        s06: { title: 'ワークショップ終了', p: '完成おめでとうございます。世界にひとつだけの指輪とともに、今日の特別な時間をそっと指にはめてお帰りください。またのお越しを心よりお待ちしております。' },
      },
      pricing: {
        label:   '料金',
        heading: '料金案内',
        badge:   '人気',
        ring:    { cat: '指輪手作り体験', meta1: '所要時間：40分〜1時間', meta2: '体験人数：1〜4名', meta3: '対象年齢：中学生以上', taxNote: '/名（税込）' },
        order:   { cat: 'カスタムリング', meta1: 'ご要望に合わせてデザイン', meta2: '詳細はLINEにてご相談' },
        option:  { cat: '追加オプション', pendant: 'ペンダントトップ' },
        sale:    { cat: '販売商品', name: 'コインリング', desc: '体験が難しい方もお気軽にどうぞ。' },
      },
      faq: {
        heading: 'よくある質問',
        q01: '予約なしで来店できますか？',
        a01: '当工房は<strong>完全予約制</strong>となっております。公式LINEよりご予約のうえお越しください。当日のご予約もLINEにて承ります（空き状況によります）。',
        q02: '一人でも体験できますか？',
        a02: 'もちろんです。おひとり様から最大4名様まで体験いただけます。おひとりでじっくり楽しまれるお客様も多くいらっしゃいます。',
        q03: '子どもも体験できますか？',
        a03: '安全上の理由から、対象年齢は<strong>中学生以上</strong>とさせていただいております。ご不明な点はLINEよりお気軽にお問い合わせください。',
        q04: '金属アレルギーがあるのですが体験できますか？',
        a04: '金属アレルギーをお持ちの方には、使用素材について事前にご相談させていただいております。ご予約時にLINEにてお知らせください。また、事前に<a href="caution.html" class="text-link">注意事項ページ</a>もご確認いただけますと幸いです。',
        q05: '完成したリングはその日に持ち帰れますか？',
        a05: 'はい、当日お持ち帰りいただけます。専用のパッケージにお入れしてお渡しします。プレゼントにもそのままご利用いただけます。',
        q06: 'キャンセルポリシーを教えてください。',
        a06: 'ご予約の変更・キャンセルは、ご予約日の<strong>前日20時まで</strong>に公式LINEよりご連絡ください。当日のキャンセルはキャンセル料が発生する場合がございます。',
        q07: '駐車場はありますか？',
        a07: '専用駐車場はございませんが、近隣にコインパーキングがございます。公共交通機関でのご来店もぜひご検討ください。',
        q08: 'ペアリングは作れますか？',
        a08: '同じコインやスプーンをお選びいただければペアリングとして仕上げることも可能です。カップルやご友人同士でのご体験をぜひどうぞ。',
        q09: 'コインの種類はどのくらいありますか？',
        a09: '常時数十種類のコインをご用意しております。アメリカ、ヨーロッパ、アジアなどさまざまな国のコインをご覧いただけます。詳しくは当日スタッフにお尋ねください。',
      },
      footer: {
        address:    '〒857-0877<br>長崎県佐世保市万津町２−８',
        hours:      '営業時間：12:00 〜 20:00（最終予約 19:00）',
        byRes:      '完全予約制',
        reserveBtn: 'オンライン予約はこちら',
        copyright:  '© 2026 環-wa- All Rights Reserved.',
        caution:    '注意事項',
      },
      mcta:    { consult: '相談する', reserve: '体験を予約' },
      loader:  { ariaLabel: '読み込み中', copyJp: '記憶を、環に。' },
      burger:  { open: 'メニューを開く' },
      shop: {
        hero:  { label: 'ONLINE SHOP', title: 'コインリング オーダー' },
        intro: '世界各国から集めたコインを、指輪に仕上げた完成品をお届けします。<br>ご希望のサイズをお選びいただき、そのままオンラインでご注文いただけます。',
        modal: { eyebrow: 'COIN RING ORDER', sizeLabel: 'SIZE / 号数', checkoutEmpty: '号数を選択してください', checkout: '{size}号でオーダーする' },
        notes: {
          heading: 'ご注文の前に',
          finish:  { title: '仕上がりについて', p1: 'コインリングは一点一点手作業で仕上げています。使用するコインの個体差により、リングの幅・模様の出方・質感に多少の差が生じる場合がございます。あらかじめご了承ください。', p2: 'サイズは号数を基準に製作いたしますが、コインの素材・厚みによっては若干の誤差が生じることがあります。' },
          ship:    { title: '発送について', p: 'ご注文から 7〜14日程度でのお届けを予定しております。混雑状況により前後する場合がございます。発送完了後にメールにてお知らせいたします。' },
          cancel:  { title: '返品・キャンセルについて', p: 'オーダーメイド品の性質上、お客様のご都合による返品・交換・キャンセルはお受けできません。商品の不良・配送事故の場合は公式LINEよりご連絡ください。' },
          allergy: { title: '金属アレルギーについて', p: '使用するコインには銅・真鍮・ニッケルなどの金属が含まれています。金属アレルギーをお持ちの方はご購入前に素材をご確認のうえご注文ください。' },
        },
        backBtn: 'トップページへ戻る',
        coins: [
          { ja: 'アメリカ 25セント記念', en: 'USA Quarter Dollar', zh: '美国 25美分纪念', ko: '미국 25센트 기념' },
          { ja: 'フランス 10フラン',    en: 'France 10 Francs',   zh: '法国 10法郎',    ko: '프랑스 10프랑' },
          { ja: 'メキシコ 1ペソ',       en: 'Mexico 1 Peso',      zh: '墨西哥 1比索',   ko: '멕시코 1페소' },
          { ja: 'オランダ 1ギルダー',   en: 'Netherlands 1 Guilder', zh: '荷兰 1荷兰盾', ko: '네덜란드 1길더' },
          { ja: 'フィリピン 1ペソ',     en: 'Philippines 1 Peso', zh: '菲律宾 1比索',   ko: '필리핀 1페소' },
          { ja: '香港 1ドル エリザベス', en: 'Hong Kong $1 Elizabeth', zh: '香港 1元 伊丽莎白', ko: '홍콩 1달러 엘리자베스' },
          { ja: '香港 20セント',        en: 'Hong Kong 20 Cents', zh: '香港 20分',      ko: '홍콩 20센트' },
          { ja: 'ベルギー 5フラン',     en: 'Belgium 5 Francs',   zh: '比利时 5法郎',   ko: '벨기에 5프랑' },
        ],
      },
    },

    /* ──────────────────── ENGLISH ────────────────────────── */
    en: {
      meta: {
        title: '環-wa- | Handmade Ring Workshop · Sasebo, Nagasaki',
        desc:  'Handmade ring workshop in Sasebo, Nagasaki. Create your own spoon ring or coin ring. By reservation only. From ¥6,500.',
      },
      nav: {
        about:   'About',
        flow:    'Experience',
        pricing: 'Pricing',
        faq:     'FAQ',
        shop:    'Shop',
        reserve: 'Reserve',
      },
      hero: {
        eyebrow:       'Handmade Ring Workshop',
        copy:          'Forge your memory.',
        tagline:       'Craft a ring from world coins and spoons —<br>carry your memories forever.',
        reserve:       'Book an Experience',
        address:       'Manzumachi 2-8, Sasebo',
        byReservation: 'By Reservation',
        hours:         '12:00 — 20:00',
      },
      about: {
        heading: 'About Our Rings',
        spoon: {
          title: 'Spoon Ring',
          p1: 'Spoon rings carry over 100 years of history. In European tradition, silver spoons were precious family heirlooms passed down through generations. From that heritage came a custom of reshaping a treasured spoon into a ring as a gift of engagement for the one you love.',
          p2: 'A spoon ring embodies a profound vow: "I shape what is most precious, and offer it to you." As a symbol of two people\'s bond, it has long been cherished by couples. Why not craft one side by side with someone special, and create a ring that exists nowhere else in the world?',
        },
        coin: {
          title: 'Coin Ring',
          p1: 'Coins gathered from the United States, Europe, Asia, and beyond — transformed into a ring that is uniquely yours. Pick a coin that carries its own design and history, then reshape it with your own hands. The whole process feels like a small, personal adventure.',
          p2: 'A memento of your travels, a heartfelt gift, a reward to yourself — let the feeling of that day and that place live forever in your fingertips. The joy of the finished moment becomes a memory you will never forget.',
        },
      },
      flow: {
        heading: 'How It Works',
        s01: { title: 'Reservation', p: 'Choose your preferred date, number of guests, and experience type below, then make your reservation.', btn: 'Book Now' },
        s02: { title: 'Visit on the Day', p: 'Please read the <a href="caution.html" class="text-link">guidelines</a> in advance and arrive at least 5 minutes before your scheduled time. We will seat you and walk you through the experience.' },
        s03: { title: 'Choose a Coin or Spoon', time: 'approx. 10 min', p: 'Select your favourite from our collection of coins and spoons gathered from around the world. The time spent deciding is all part of the experience.' },
        s04: { title: 'Ring Making', time: 'approx. 30–50 min', p: 'Our staff will guide you through every step. Hammer, bend, polish — enjoy watching your ring slowly take shape. Beginners are very welcome.' },
        s05: { title: 'Pendant Top (Optional)', p: 'Using leftover material from ring-making, you can also craft a pendant top to wear as a necklace or keychain.<br><span class="inline-note">※ Available as an add-on from ¥1,000.</span>' },
        s06: { title: 'Workshop Complete', p: 'Congratulations! Slip the one-of-a-kind ring onto your finger and carry today\'s special moment with you. We hope to welcome you again soon.' },
      },
      pricing: {
        label:   'PRICING',
        heading: 'Pricing',
        badge:   'Popular',
        ring:    { cat: 'Ring Making Experience', meta1: 'Duration: 40–60 min', meta2: 'Capacity: 1–4 people', meta3: 'Age: Junior high and up', taxNote: '/person (tax incl.)' },
        order:   { cat: 'Custom Ring', meta1: 'Designed to your request', meta2: 'Details via LINE' },
        option:  { cat: 'Add-on Option', pendant: 'Pendant Top' },
        sale:    { cat: 'For Sale', name: 'Coin Ring', desc: 'Perfect if you\'d prefer one without the workshop.' },
      },
      faq: {
        heading: 'FAQ',
        q01: 'Can I visit without a reservation?',
        a01: 'Our workshop is <strong>by reservation only</strong>. Please book via official LINE before visiting. Same-day reservations are accepted subject to availability.',
        q02: 'Can I come alone?',
        a02: 'Absolutely. We welcome solo guests and groups of up to four. Many customers enjoy the experience at their own relaxed pace.',
        q03: 'Can children participate?',
        a03: 'For safety reasons, the experience is open to <strong>junior high school students and above</strong>. Please contact us via LINE with any questions.',
        q04: 'I have a metal allergy — can I still participate?',
        a04: 'We are happy to discuss the materials used with guests who have metal allergies. Please let us know when booking via LINE. You may also wish to read our <a href="caution.html" class="text-link">guidelines page</a> in advance.',
        q05: 'Can I take the ring home on the same day?',
        a05: 'Yes — your ring goes home with you the same day, packaged and ready to give as a gift if you wish.',
        q06: 'What is your cancellation policy?',
        a06: 'Please notify us of any changes or cancellations via official LINE by <strong>8 PM the day before</strong> your reservation. Same-day cancellations may incur a fee.',
        q07: 'Is there parking nearby?',
        a07: 'There is no dedicated parking, but coin-operated car parks are close by. We also recommend public transport.',
        q08: 'Can we make matching pair rings?',
        a08: 'Yes — choose the same coin or spoon and we can finish them as a matching pair. A lovely choice for couples and friends.',
        q09: 'How many types of coins are available?',
        a09: 'We carry several dozen varieties at all times, sourced from the US, Europe, Asia, and beyond. Ask our staff on the day for details.',
      },
      footer: {
        address:    '2-8 Manzumachi, Sasebo, Nagasaki 857-0877',
        hours:      'Hours: 12:00 – 20:00 (last reservation 19:00)',
        byRes:      'By Reservation Only',
        reserveBtn: 'Book Online',
        copyright:  '© 2026 環-wa- All Rights Reserved.',
        caution:    'Guidelines',
      },
      mcta:    { consult: 'Chat', reserve: 'Book' },
      loader:  { ariaLabel: 'Loading', copyJp: 'Forge your memory.' },
      burger:  { open: 'Open menu' },
      shop: {
        hero:  { label: 'ONLINE SHOP', title: 'Coin Ring Order' },
        intro: 'Finished coin rings crafted from coins gathered worldwide, delivered to your door.<br>Choose your size and order online instantly.',
        modal: { eyebrow: 'COIN RING ORDER', sizeLabel: 'RING SIZE', checkoutEmpty: 'Please select a size', checkout: 'Order in size {size}' },
        notes: {
          heading: 'Before You Order',
          finish:  { title: 'About the Finish', p1: 'Each coin ring is finished by hand. Minor variations in width, pattern, and texture may occur due to natural differences between individual coins.', p2: 'We do our best to match your chosen size, but slight tolerances may occur depending on the coin\'s material and thickness.' },
          ship:    { title: 'Shipping', p: 'Please allow 7–14 business days from the date of your order. We will notify you by email once your ring has been dispatched.' },
          cancel:  { title: 'Returns & Cancellations', p: 'As each ring is made to order, we are unable to accept returns, exchanges, or cancellations due to personal preference. Please contact us via LINE if your item arrives damaged or is lost in transit.' },
          allergy: { title: 'Metal Allergy Notice', p: 'The coins used may contain copper, brass, or nickel. If you have a metal allergy, please check the coin material before ordering.' },
        },
        backBtn: 'Back to Top',
        coins: null,
      },
    },

    /* ──────────────────── CHINESE (Simplified) ─────────────── */
    zh: {
      meta: {
        title: '環-wa- | 手工戒指体验 佐世保·万津町',
        desc:  '长崎县佐世保市手工戒指体验工坊「環-wa-」。亲手打造汤匙戒指或硬币戒指。完全预约制。¥6,500起。',
      },
      nav: {
        about:   '关于戒指',
        flow:    '体验流程',
        pricing: '价格',
        faq:     '常见问题',
        shop:    '商店',
        reserve: '立即预约',
      },
      hero: {
        eyebrow:       'Handmade Ring Workshop',
        copy:          '将记忆铸成环。',
        tagline:       '用世界各地的硬币与汤匙，<br>打造承载记忆的专属戒指体验。',
        reserve:       '预约体验',
        address:       '佐世保市万津町 2-8',
        byReservation: '完全预约制',
        hours:         '12:00 — 20:00',
      },
      about: {
        heading: '关于戒指',
        spoon: {
          title: '汤匙戒指',
          p1: '汤匙戒指拥有逾百年的历史。在欧洲传统中，银汤匙是家族世代相传的珍贵财产。从那个时代起，人们将心爱的汤匙打造成戒指，作为订婚礼物赠予爱人，这一浪漫习俗由此流传至今。',
          p2: '「为你，将最珍贵的化为形状献上」——汤匙戒指承载着这份深情，至今仍是象征两人羁绊的特别礼物，深受许多情侣喜爱。何不携手挚爱，共同打造一枚世界上独一无二的戒指？',
        },
        coin: {
          title: '硬币戒指',
          p1: '来自美国、欧洲、亚洲……世界各地的硬币，化身专属于您的戒指。选一枚镌刻着设计与历史的硬币，亲手将它改造成戒指，整个过程仿佛一场小小的冒险。',
          p2: '旅途的纪念、心意满满的礼物、献给自己的奖励——让那一天那个地方的感动，永远留在指尖。伴随着完成时的喜悦，留下难以忘怀的美好记忆。',
        },
      },
      flow: {
        heading: '体验流程',
        s01: { title: '预约', p: '请从下方选择您希望的日期、人数及体验项目，然后进行预约。', btn: '前往预约' },
        s02: { title: '当天到店', p: '请提前阅读<a href="caution.html" class="text-link">注意事项</a>，并在开始时间5分钟前到达。我们将引导您就座并说明体验内容。' },
        s03: { title: '选择硬币或汤匙', time: '约10分钟', p: '请从我们收集自世界各地的硬币和汤匙中，挑选您最喜爱的一枚。犹豫不决的时光，也是体验的一部分。' },
        s04: { title: '制作戒指', time: '约30～50分钟', p: '专业工作人员将全程耐心指导。敲打、弯曲、打磨——请尽情享受戒指逐渐成形的过程。初次体验者也可放心参加。' },
        s05: { title: '制作吊坠头（可选）', p: '利用制作戒指剩余的材料，还可以制作一个吊坠头，作为项链或钥匙扣带回家。<br><span class="inline-note">※ 另付 ¥1,000起，可享受此附加选项。</span>' },
        s06: { title: '体验结束', p: '恭喜您完成制作！请将这枚世界上独一无二的戒指戴上手指，带走今天这段特别的时光。期待您的再次光临。' },
      },
      pricing: {
        label:   '价格',
        heading: '价格介绍',
        badge:   '人气',
        ring:    { cat: '戒指手作体验', meta1: '所需时间：40分钟〜1小时', meta2: '体验人数：1〜4人', meta3: '适用年龄：初中生以上', taxNote: '/名（税込）' },
        order:   { cat: '定制戒指', meta1: '根据您的需求设计', meta2: '详情请通过LINE咨询' },
        option:  { cat: '附加选项', pendant: '吊坠头' },
        sale:    { cat: '销售商品', name: '硬币戒指', desc: '无法参与体验的朋友也欢迎选购。' },
      },
      faq: {
        heading: '常见问题',
        q01: '没有预约可以直接来店吗？',
        a01: '本工坊为<strong>完全预约制</strong>。请通过官方LINE预约后再行前来。当日预约也可通过LINE受理（视空位情况而定）。',
        q02: '一个人也可以体验吗？',
        a02: '当然可以。从1人到最多4人均可参加。独自前来悠闲享受的顾客也非常多。',
        q03: '小孩可以参加吗？',
        a03: '出于安全考虑，体验对象为<strong>初中生以上</strong>。如有疑问，请随时通过LINE联系我们。',
        q04: '我有金属过敏，可以参加吗？',
        a04: '对于有金属过敏的顾客，我们将提前就使用材料进行确认。请在预约时通过LINE告知我们。另外，也请提前查阅<a href="caution.html" class="text-link">注意事项页面</a>。',
        q05: '当天可以把完成的戒指带回去吗？',
        a05: '是的，您可以当天带回。我们会为您专门包装，也可直接用作礼品。',
        q06: '取消政策是怎样的？',
        a06: '预约变更或取消，请在预约日<strong>前一天20时前</strong>通过官方LINE联系我们。当日取消可能产生取消费用。',
        q07: '有停车场吗？',
        a07: '本工坊没有专用停车场，但附近有收费停车场。也欢迎您考虑乘坐公共交通工具前来。',
        q08: '可以做情侣对戒吗？',
        a08: '如果选择同一枚硬币或汤匙，就可以制作对戒。非常适合情侣或朋友一起体验。',
        q09: '硬币种类有多少？',
        a09: '我们常备数十种硬币，涵盖美国、欧洲、亚洲等世界各地。详情请当天咨询工作人员。',
      },
      footer: {
        address:    '〒857-0877<br>长崎县佐世保市万津町２−８',
        hours:      '营业时间：12:00 〜 20:00（最后预约 19:00）',
        byRes:      '完全预约制',
        reserveBtn: '在线预约',
        copyright:  '© 2026 環-wa- All Rights Reserved.',
        caution:    '注意事项',
      },
      mcta:    { consult: '咨询', reserve: '预约体验' },
      loader:  { ariaLabel: '加载中', copyJp: '将记忆铸成环。' },
      burger:  { open: '打开菜单' },
      shop: {
        hero:  { label: 'ONLINE SHOP', title: '硬币戒指 下单' },
        intro: '将收集自世界各地的硬币打造成成品戒指，快递送达您手中。<br>请选择您希望的尺寸，即可在线直接下单。',
        modal: { eyebrow: 'COIN RING ORDER', sizeLabel: '戒指号数', checkoutEmpty: '请选择号数', checkout: '以{size}号下单' },
        notes: {
          heading: '下单前请注意',
          finish:  { title: '关于成品', p1: '每一枚硬币戒指均为手工制作。由于所使用硬币的个体差异，戒指的宽度、图案呈现及质感可能存在些许差异，敬请谅解。', p2: '我们以您选择的号数为基准进行制作，但因硬币的材质和厚度不同，可能存在轻微误差。' },
          ship:    { title: '关于发货', p: '预计在下单后7～14个工作日内发货。繁忙时期可能有所延误。发货完成后将通过邮件通知您。' },
          cancel:  { title: '退换货·取消', p: '由于属于定制商品，恕不接受因顾客原因引起的退货、换货及取消。如有商品瑕疵或配送事故，请通过官方LINE与我们联系。' },
          allergy: { title: '金属过敏注意事项', p: '所使用的硬币可能含有铜、黄铜、镍等金属。有金属过敏的朋友，请在下单前确认素材后再行购买。' },
        },
        backBtn: '返回首页',
        coins: null,
      },
    },

    /* ──────────────────── KOREAN ──────────────────────────── */
    ko: {
      meta: {
        title: '環-wa- | 수제 반지 체험 사세보·만쓰초',
        desc:  '나가사키현 사세보시 수제 반지 체험 공방 「環-wa-」. 스푼링과 코인링을 직접 만드는 특별한 체험. 완전 예약제. ¥6,500~.',
      },
      nav: {
        about:   '링에 대하여',
        flow:    '체험 흐름',
        pricing: '요금',
        faq:     'FAQ',
        shop:    '쇼핑',
        reserve: '예약하기',
      },
      hero: {
        eyebrow:       'Handmade Ring Workshop',
        copy:          '기억을, 환에.',
        tagline:       '세계의 동전과 스푼으로 만드는,<br>기억을 담은 반지 체험.',
        reserve:       '체험 예약하기',
        address:       '사세보시 만쓰초 2-8',
        byReservation: '완전 예약제',
        hours:         '12:00 — 20:00',
      },
      about: {
        heading: '링에 대하여',
        spoon: {
          title: '스푼링',
          p1: '스푼링에는 100년 이상의 역사가 있습니다. 유럽에서는 은 스푼이 가족에게 대대로 전해지는 소중한 재산이었습니다. 그 스푼을 반지로 만들어 사랑하는 사람에게 선물하는 약혼 풍습이 생겨났습니다.',
          p2: '「당신을 위해 소중한 것을 형태로 만들어 바칩니다」라는 깊은 마음이 담긴 스푼링은 두 사람의 인연을 상징하는 선물로 지금도 많은 커플에게 사랑받고 있습니다. 소중한 사람과 나란히 세상에 하나뿐인 반지를 만들어 보시겠어요?',
        },
        coin: {
          title: '코인링',
          p1: '미국, 유럽, 아시아… 세계 각지에서 모은 동전을 나만의 반지로. 디자인과 역사가 새겨진 동전 하나를 골라 직접 반지로 바꾸는 과정은 마치 작은 모험과도 같습니다.',
          p2: '여행의 기념, 소중한 사람을 위한 선물, 자신을 위한 보상으로 — 그날 그 장소의 감동을 영원히 손끝에 간직하세요. 완성의 기쁨과 함께 잊지 못할 추억이 남습니다.',
        },
      },
      flow: {
        heading: '체험 흐름',
        s01: { title: '예약', p: '아래에서 원하시는 날짜·인원·체험 메뉴를 선택하여 예약해 주세요.', btn: '예약하기' },
        s02: { title: '당일 방문', p: '사전에 <a href="caution.html" class="text-link">주의사항</a>을 충분히 읽어보시고, 시작 시간 5분 전까지 도착해 주세요. 자리로 안내해 드리고 체험을 설명해 드립니다.' },
        s03: { title: '동전·스푼 선택', time: '약 10분', p: '세계 각지에서 모은 동전과 스푼 중에서 마음에 드는 것을 선택해 주세요. 무엇을 고를지 고민하는 시간도 체험의 일부입니다.' },
        s04: { title: '반지 만들기', time: '약 30~50분', p: '전문 스태프가 친절하게 지도해 드립니다. 두드리고, 구부리고, 광을 내면서 — 조금씩 반지의 형태가 완성되어 가는 과정을 즐겨 주세요. 처음 도전하시는 분도 안심하고 체험할 수 있습니다.' },
        s05: { title: '펜던트 탑 만들기', p: '반지를 만들고 남은 소재로 펜던트 탑도 만들 수 있습니다. 목걸이나 열쇠고리로 가져갈 수 있는 또 하나의 기념품입니다.<br><span class="inline-note">※ 별도 ¥1,000~으로 즐기실 수 있는 옵션입니다.</span>' },
        s06: { title: '워크숍 종료', p: '완성을 축하드립니다! 세상에 하나뿐인 반지를 손가락에 끼고 오늘의 특별한 시간을 간직하며 돌아가세요. 다시 찾아주시길 진심으로 기다리겠습니다.' },
      },
      pricing: {
        label:   '요금',
        heading: '요금 안내',
        badge:   '인기',
        ring:    { cat: '반지 수제 체험', meta1: '소요시간：40분~1시간', meta2: '체험 인원：1~4명', meta3: '대상 연령：중학생 이상', taxNote: '/명（세금 포함）' },
        order:   { cat: '맞춤 반지', meta1: '요청에 맞게 디자인', meta2: '자세한 내용은 LINE으로 문의' },
        option:  { cat: '추가 옵션', pendant: '펜던트 탑' },
        sale:    { cat: '판매 상품', name: '코인링', desc: '체험이 어려우신 분도 편하게 구입하세요.' },
      },
      faq: {
        heading: '자주 묻는 질문',
        q01: '예약 없이 방문할 수 있나요?',
        a01: '본 공방은 <strong>완전 예약제</strong>입니다. 공식 LINE으로 예약 후 방문해 주세요. 당일 예약도 LINE으로 받고 있습니다（빈자리 여부에 따라）.',
        q02: '혼자서도 체험할 수 있나요?',
        a02: '물론입니다. 1인부터 최대 4인까지 체험 가능합니다. 혼자 여유롭게 즐기시는 고객님도 많이 계십니다.',
        q03: '어린이도 참가할 수 있나요?',
        a03: '안전상의 이유로 체험 대상은 <strong>중학생 이상</strong>입니다. 문의 사항이 있으시면 LINE으로 편하게 연락해 주세요.',
        q04: '금속 알레르기가 있는데 체험할 수 있나요?',
        a04: '금속 알레르기가 있는 분께는 사용 소재에 대해 미리 상담해 드립니다. 예약 시 LINE으로 알려 주세요. 또한 사전에 <a href="caution.html" class="text-link">주의사항 페이지</a>도 확인해 주시면 감사하겠습니다.',
        q05: '완성된 반지를 당일에 가져갈 수 있나요?',
        a05: '네, 당일 가져가실 수 있습니다. 전용 패키지에 담아 드립니다. 선물용으로도 바로 사용하실 수 있습니다.',
        q06: '취소 정책을 알려 주세요.',
        a06: '예약 변경·취소는 예약일 <strong>전날 20시까지</strong> 공식 LINE으로 연락해 주세요. 당일 취소의 경우 취소 수수료가 발생할 수 있습니다.',
        q07: '주차장이 있나요?',
        a07: '전용 주차장은 없지만 인근에 유료 주차장이 있습니다. 대중교통 이용도 권장합니다.',
        q08: '커플링을 만들 수 있나요?',
        a08: '같은 동전이나 스푼을 선택하시면 커플링으로 완성할 수 있습니다. 커플이나 친구 사이에서 체험해 보세요.',
        q09: '동전 종류는 얼마나 있나요?',
        a09: '항상 수십 종류의 동전을 준비하고 있습니다. 미국, 유럽, 아시아 등 다양한 나라의 동전을 보실 수 있습니다. 자세한 내용은 당일 스태프에게 문의해 주세요.',
      },
      footer: {
        address:    '〒857-0877<br>나가사키현 사세보시 만쓰초 2-8',
        hours:      '영업시간：12:00 〜 20:00（마지막 예약 19:00）',
        byRes:      '완전 예약제',
        reserveBtn: '온라인 예약하기',
        copyright:  '© 2026 環-wa- All Rights Reserved.',
        caution:    '주의사항',
      },
      mcta:    { consult: '문의하기', reserve: '체험 예약' },
      loader:  { ariaLabel: '로딩 중', copyJp: '기억을, 환에.' },
      burger:  { open: '메뉴 열기' },
      shop: {
        hero:  { label: 'ONLINE SHOP', title: '코인링 오더' },
        intro: '세계 각지에서 수집한 동전으로 만든 완성품 반지를 배송해 드립니다.<br>원하시는 사이즈를 선택하고 온라인으로 바로 주문하세요.',
        modal: { eyebrow: 'COIN RING ORDER', sizeLabel: '반지 사이즈', checkoutEmpty: '사이즈를 선택해 주세요', checkout: '{size}호로 주문하기' },
        notes: {
          heading: '주문 전 안내',
          finish:  { title: '완성품에 대하여', p1: '코인링은 하나하나 수작업으로 완성합니다. 사용하는 동전의 개체 차이로 인해 반지의 너비·무늬·질감에 약간의 차이가 생길 수 있습니다. 미리 양해 부탁드립니다.', p2: '사이즈는 선택하신 호수를 기준으로 제작하지만, 동전의 소재와 두께에 따라 약간의 오차가 발생할 수 있습니다.' },
          ship:    { title: '배송 안내', p: '주문 후 7~14일 정도 소요될 예정입니다. 혼잡 상황에 따라 전후될 수 있습니다. 발송 완료 후 이메일로 안내해 드립니다.' },
          cancel:  { title: '반품·취소 안내', p: '맞춤 제작 상품의 특성상 고객 변심으로 인한 반품·교환·취소는 불가합니다. 상품 불량 또는 배송 사고의 경우 공식 LINE으로 연락해 주세요.' },
          allergy: { title: '금속 알레르기 주의', p: '사용하는 동전에는 구리·황동·니켈 등의 금속이 포함되어 있습니다. 금속 알레르기가 있으신 분은 구매 전 소재를 확인해 주세요.' },
        },
        backBtn: '메인 페이지로 돌아가기',
        coins: null,
      },
    },
  };

  /* ── Engine ─────────────────────────────────────────────── */
  function get(lang, key) {
    var data = T[lang] || T.ja;
    return key.split('.').reduce(function (o, k) {
      return (o && o[k] !== undefined) ? o[k] : undefined;
    }, data);
  }

  function applyLang(lang) {
    if (!T[lang]) lang = 'ja';
    var langAttr = { ja: 'ja', en: 'en', zh: 'zh-Hans', ko: 'ko' };
    document.documentElement.lang = langAttr[lang] || lang;

    /* textContent replacements */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = get(lang, el.dataset.i18n);
      if (v !== undefined) el.textContent = v;
    });

    /* innerHTML replacements (for elements with links, <br>, <strong>) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var v = get(lang, el.dataset.i18nHtml);
      if (v !== undefined) el.innerHTML = v;
    });

    /* aria-label replacements */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var v = get(lang, el.dataset.i18nAria);
      if (v !== undefined) el.setAttribute('aria-label', v);
    });

    /* document title */
    var title = get(lang, 'meta.title');
    if (title) document.title = title;

    /* active state on lang buttons */
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });

    /* reset any open FAQ accordion items so heights recalculate */
    document.querySelectorAll('.faq-item.open').forEach(function (item) {
      item.classList.remove('open');
      var q = item.querySelector('.faq-q');
      if (q) q.setAttribute('aria-expanded', 'false');
      var a = item.querySelector('.faq-a');
      if (a) a.style.maxHeight = null;
    });

    localStorage.setItem('wa-lang', lang);
    window._waLang = lang;

    /* notify other scripts (e.g. shop.html coin re-render) */
    document.dispatchEvent(new CustomEvent('wa:langchange', { detail: { lang: lang } }));
  }

  /* expose globally */
  window.waI18n = { applyLang: applyLang, get: get, T: T };

  /* boot on DOMContentLoaded */
  document.addEventListener('DOMContentLoaded', function () {
    /* delegate all lang button clicks */
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (btn && btn.dataset.lang) applyLang(btn.dataset.lang);
    });
    var saved = localStorage.getItem('wa-lang') || 'ja';
    applyLang(saved);
  });

}());
