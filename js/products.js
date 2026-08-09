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

  // ===== منتجات العربي ماركت الحقيقية =====

  // الألبان والجبن (dairy)
  { id:41, cat:'dairy', name:'لبن المراعي 1.5 لتر', brand:'المراعي', size:'1.5 لتر', emoji:'🥛', price:75, old:0, badge:'' },
  { id:42, cat:'dairy', name:'لبن المراعي 1 لتر', brand:'المراعي', size:'1 لتر', emoji:'🥛', price:55, old:0, badge:'' },
  { id:43, cat:'dairy', name:'لبن عبور المراعي', brand:'عبور/المراعي', size:'', emoji:'🥛', price:55, old:0, badge:'' },
  { id:44, cat:'dairy', name:'جبنة عبور نص كيلو', brand:'عبور', size:'نص كيلو', emoji:'🧀', price:50, old:0, badge:'' },
  { id:45, cat:'dairy', name:'جبنة عبور ربع كيلو', brand:'عبور', size:'ربع كيلو', emoji:'🧀', price:25, old:0, badge:'' },
  { id:46, cat:'dairy', name:'جبنة عبور تمن كيلو', brand:'عبور', size:'تمن كيلو', emoji:'🧀', price:15, old:0, badge:'' },
  { id:47, cat:'dairy', name:'جبنة رودس نص كيلو', brand:'رودس', size:'نص كيلو', emoji:'🧀', price:50, old:0, badge:'' },
  { id:48, cat:'dairy', name:'جبنة رودس ربع كيلو', brand:'رودس', size:'ربع كيلو', emoji:'🧀', price:25, old:0, badge:'' },
  { id:49, cat:'dairy', name:'جبنة رودس تمن كيلو', brand:'رودس', size:'تمن كيلو', emoji:'🧀', price:15, old:0, badge:'' },
  { id:50, cat:'dairy', name:'جبنة المراعي نص كيلو', brand:'المراعي', size:'نص كيلو', emoji:'🧀', price:50, old:0, badge:'' },
  { id:51, cat:'dairy', name:'جبنة المراعي ربع كيلو', brand:'المراعي', size:'ربع كيلو', emoji:'🧀', price:25, old:0, badge:'' },
  { id:52, cat:'dairy', name:'صفيحة جبنة جمال قديمة أصلي', brand:'جمال', size:'صفيحة', emoji:'🧀', price:125, old:0, badge:'' },

  // التونة (tuna)
  { id:53, cat:'tuna', name:'تونة قطع سي ولز', brand:'سي ولز', size:'', emoji:'🐟', price:45, old:0, badge:'' },
  { id:54, cat:'tuna', name:'تونة مفتتة', brand:'', size:'', emoji:'🐟', price:35, old:0, badge:'' },
  { id:55, cat:'tuna', name:'تونة مفتتة صن شاين كبيرة', brand:'صن شاين', size:'كبيرة', emoji:'🐟', price:45, old:0, badge:'' },

  // العسل والمربى (honey)
  { id:56, cat:'honey', name:'عرض عسل 1 كيلو', brand:'', size:'1 كيلو', emoji:'🍯', price:90, old:0, badge:'عرض' },
  { id:57, cat:'honey', name:'مربى فرتك 1 كيلو', brand:'', size:'1 كيلو', emoji:'🍓', price:90, old:0, badge:'' },
  { id:58, cat:'honey', name:'مربى نص كيلو', brand:'', size:'نص كيلو', emoji:'🍓', price:50, old:0, badge:'' },
  { id:59, cat:'honey', name:'مربى ربع كيلو', brand:'', size:'ربع كيلو', emoji:'🍓', price:30, old:0, badge:'' },

  // الصلصات والكاتشب والمايونيز (sauces)
  { id:60, cat:'sauces', name:'صلصة هاينز', brand:'Heinz', size:'', emoji:'🍅', price:45, old:0, badge:'' },
  { id:61, cat:'sauces', name:'صلصة عادية', brand:'', size:'', emoji:'🍅', price:30, old:0, badge:'' },
  { id:62, cat:'sauces', name:'كاتشب هاينز علبة', brand:'Heinz', size:'علبة', emoji:'🍅', price:50, old:0, badge:'' },
  { id:63, cat:'sauces', name:'كاتشب صغير', brand:'', size:'صغير', emoji:'🍅', price:25, old:0, badge:'' },
  { id:64, cat:'sauces', name:'مايونيز صغير', brand:'', size:'صغير', emoji:'🧴', price:25, old:0, badge:'' },
  { id:65, cat:'sauces', name:'كاتشي', brand:'كاتشي', size:'', emoji:'🍅', price:45, old:0, badge:'' },

  // الزيوت والسمن (oils)
  { id:66, cat:'oils', name:'زيت عباد الشمس كريستال 5 لتر', brand:'كريستال', size:'5 لتر', emoji:'🛢️', price:535, old:0, badge:'' },
  { id:67, cat:'oils', name:'زيت عباد الشمس 3 لتر', brand:'', size:'3 لتر', emoji:'🛢️', price:240, old:0, badge:'' },
  { id:68, cat:'oils', name:'زيت عباد الشمس 2 لتر', brand:'', size:'2 لتر', emoji:'🛢️', price:175, old:0, badge:'' },
  { id:69, cat:'oils', name:'زيت كريستال 3 لتر', brand:'كريستال', size:'3 لتر', emoji:'🛢️', price:290, old:0, badge:'' },
  { id:70, cat:'oils', name:'زيت كريستال 2 لتر', brand:'كريستال', size:'2 لتر', emoji:'🛢️', price:215, old:0, badge:'' },
  { id:71, cat:'oils', name:'زيت كريستال 1 لتر', brand:'كريستال', size:'1 لتر', emoji:'🛢️', price:135, old:0, badge:'' },
  { id:72, cat:'oils', name:'سمنة كريستال 2 كيلو', brand:'كريستال', size:'2 كيلو', emoji:'🧈', price:185, old:0, badge:'' },
  { id:73, cat:'oils', name:'سمنة صافي 2 كيلو', brand:'صافي', size:'2 كيلو', emoji:'🧈', price:240, old:0, badge:'' },
  { id:74, cat:'oils', name:'سمنة 3 كيلو', brand:'', size:'3 كيلو', emoji:'🧈', price:290, old:0, badge:'' },
  { id:75, cat:'oils', name:'سمنة 5 كيلو', brand:'', size:'5 كيلو', emoji:'🧈', price:480, old:0, badge:'' },
  { id:76, cat:'oils', name:'زيت ممتاز 1 لتر', brand:'ممتاز', size:'1 لتر', emoji:'🛢️', price:85, old:0, badge:'' },
  { id:77, cat:'oils', name:'زيت ممتاز 2.5 لتر', brand:'ممتاز', size:'2.5 لتر', emoji:'🛢️', price:210, old:0, badge:'' },
  { id:78, cat:'oils', name:'زيت ممتاز 5 لتر', brand:'ممتاز', size:'5 لتر', emoji:'🛢️', price:375, old:0, badge:'' },

  // المشروبات والكانز (drinks)
  { id:79, cat:'drinks', name:'شرنك سبورت 2 لتر', brand:'سبورت', size:'شرنك 2 لتر', emoji:'🥤', price:160, old:0, badge:'' },
  { id:80, cat:'drinks', name:'شرنك بيبسي أصلي', brand:'بيبسي', size:'شرنك', emoji:'🥤', price:240, old:0, badge:'' },
  { id:81, cat:'drinks', name:'شرنك شوبس 2 لتر', brand:'شوبس', size:'شرنك 2 لتر', emoji:'🥤', price:245, old:0, badge:'' },
  { id:82, cat:'drinks', name:'شرنك 1 لتر', brand:'', size:'شرنك 1 لتر', emoji:'🥤', price:175, old:0, badge:'' },
  { id:83, cat:'drinks', name:'شرنك كانز بيبسي', brand:'بيبسي', size:'شرنك كانز', emoji:'🥤', price:310, old:0, badge:'' },
  { id:84, cat:'drinks', name:'شرنك راني', brand:'راني', size:'شرنك', emoji:'🧃', price:450, old:0, badge:'' },
  { id:85, cat:'drinks', name:'شرنك استينج', brand:'استينج', size:'شرنك', emoji:'⚡', price:165, old:0, badge:'' },
  { id:86, cat:'drinks', name:'شرنك أكشن صغير', brand:'أكشن', size:'شرنك صغير', emoji:'🥤', price:115, old:0, badge:'' },
  { id:87, cat:'drinks', name:'شرنك تويست كلاسيك', brand:'تويست', size:'شرنك', emoji:'🥤', price:340, old:0, badge:'' },
  { id:88, cat:'drinks', name:'شرنك تويست', brand:'تويست', size:'شرنك', emoji:'🥤', price:335, old:0, badge:'' },
  { id:89, cat:'drinks', name:'شرنك فيوري', brand:'فيوري', size:'شرنك', emoji:'⚡', price:235, old:0, badge:'' },
  { id:90, cat:'drinks', name:'كانز مشروبات غازية', brand:'', size:'كانز', emoji:'🥤', price:15, old:0, badge:'' },
  { id:91, cat:'drinks', name:'تويست توت', brand:'تويست', size:'', emoji:'🥤', price:20, old:0, badge:'' },
  { id:92, cat:'drinks', name:'تويست أبيض', brand:'تويست', size:'', emoji:'🥤', price:15, old:0, badge:'' },
  { id:93, cat:'drinks', name:'راني', brand:'راني', size:'', emoji:'🧃', price:20, old:0, badge:'' },
  { id:94, cat:'drinks', name:'شوبس', brand:'شوبس', size:'', emoji:'🥤', price:15, old:0, badge:'' },
  { id:95, cat:'drinks', name:'شوبس رمان', brand:'شوبس', size:'رمان', emoji:'🥤', price:15, old:0, badge:'' },
  { id:96, cat:'drinks', name:'بريل شراب', brand:'بريل', size:'', emoji:'🥤', price:20, old:0, badge:'' },
  { id:97, cat:'drinks', name:'فيروز', brand:'فيروز', size:'', emoji:'🧃', price:20, old:0, badge:'' },
  { id:98, cat:'drinks', name:'ميريندا كانز', brand:'ميريندا', size:'كانز', emoji:'🥤', price:15, old:0, badge:'' },
  { id:99, cat:'drinks', name:'سفن أب', brand:'سفن أب', size:'', emoji:'🥤', price:15, old:0, badge:'' },
  { id:100, cat:'drinks', name:'ريد بول', brand:'ريد بول', size:'', emoji:'⚡', price:60, old:0, badge:'' },
  { id:101, cat:'drinks', name:'مونستر', brand:'مونستر', size:'', emoji:'⚡', price:50, old:0, badge:'' },
  { id:102, cat:'drinks', name:'استينج', brand:'استينج', size:'', emoji:'⚡', price:15, old:0, badge:'' },
  { id:103, cat:'drinks', name:'فيوري', brand:'فيوري', size:'', emoji:'⚡', price:20, old:0, badge:'' },
  { id:104, cat:'drinks', name:'ديوا كانز', brand:'ديوا', size:'كانز', emoji:'🥤', price:20, old:0, badge:'' },
  { id:105, cat:'drinks', name:'ديو بلاستيك', brand:'ديو', size:'بلاستيك', emoji:'💧', price:15, old:0, badge:'' },
  { id:106, cat:'drinks', name:'فولت صغير', brand:'فولت', size:'صغير', emoji:'⚡', price:10, old:0, badge:'' },
  { id:107, cat:'drinks', name:'فولت كبير', brand:'فولت', size:'كبير', emoji:'⚡', price:15, old:0, badge:'' },

  // المياه المعدنية (water)
  { id:108, cat:'water', name:'مياه معدنية كبيرة', brand:'', size:'كبيرة', emoji:'💧', price:10, old:0, badge:'' },
  { id:109, cat:'water', name:'مياه معدنية صغيرة', brand:'', size:'صغيرة', emoji:'💧', price:5, old:0, badge:'' },
  { id:110, cat:'water', name:'سبورت 2 لتر', brand:'سبورت', size:'2 لتر', emoji:'🥤', price:30, old:0, badge:'' },
  { id:111, cat:'water', name:'بيبسي أصلي 2.5 لتر', brand:'بيبسي', size:'2.5 لتر', emoji:'🥤', price:45, old:0, badge:'' },
  { id:112, cat:'water', name:'بيبسي أصلي 1.5 لتر', brand:'بيبسي', size:'1.5 لتر', emoji:'🥤', price:35, old:0, badge:'' },
  { id:113, cat:'water', name:'شوبس 2 لتر', brand:'شوبس', size:'2 لتر', emoji:'🥤', price:45, old:0, badge:'' },
  { id:114, cat:'water', name:'شوبس 1 لتر', brand:'شوبس', size:'1 لتر', emoji:'🥤', price:35, old:0, badge:'' },
  { id:115, cat:'water', name:'فيروز 2.5 لتر', brand:'فيروز', size:'2.5 لتر', emoji:'🧃', price:45, old:0, badge:'' },
  { id:116, cat:'water', name:'في كولا', brand:'في كولا', size:'', emoji:'🥤', price:20, old:0, badge:'' },
  { id:117, cat:'water', name:'في كولا فراولة', brand:'في كولا', size:'فراولة', emoji:'🥤', price:20, old:0, badge:'' },
  { id:118, cat:'water', name:'أكشن صغير', brand:'أكشن', size:'صغير', emoji:'🥤', price:10, old:0, badge:'' },
  { id:119, cat:'water', name:'أكشن كولا كبير', brand:'أكشن', size:'كبير', emoji:'🥤', price:15, old:0, badge:'' },
  { id:120, cat:'water', name:'موسي', brand:'موسي', size:'', emoji:'🧃', price:30, old:0, badge:'' },

  // العصائر (juice)
  { id:121, cat:'juice', name:'عصير بيتي', brand:'بيتي', size:'', emoji:'🧃', price:10, old:0, badge:'' },
  { id:122, cat:'juice', name:'عصير أصلان', brand:'أصلان', size:'', emoji:'🧃', price:8, old:0, badge:'' },
  { id:123, cat:'juice', name:'عصير كل يوم', brand:'كل يوم', size:'', emoji:'🧃', price:5, old:0, badge:'' },
  { id:124, cat:'juice', name:'عصير بيتي 1 لتر', brand:'بيتي', size:'1 لتر', emoji:'🧃', price:30, old:0, badge:'' },
  { id:125, cat:'juice', name:'عصير أصلان 1 لتر', brand:'أصلان', size:'1 لتر', emoji:'🧃', price:30, old:0, badge:'' },

  // المكرونة والشعيرية (pasta)
  { id:126, cat:'pasta', name:'مكرونة جواهر (كيس)', brand:'جواهر', size:'كيس', emoji:'🍝', price:10, old:0, badge:'' },
  { id:127, cat:'pasta', name:'شعرية (كيس)', brand:'', size:'كيس', emoji:'🍝', price:10, old:0, badge:'' },
  { id:128, cat:'pasta', name:'لسان جواهر (كيس)', brand:'جواهر', size:'كيس', emoji:'🍝', price:10, old:0, badge:'' },
  { id:129, cat:'pasta', name:'إسباجتي (كيس)', brand:'', size:'كيس', emoji:'🍝', price:10, old:0, badge:'' },
  { id:130, cat:'pasta', name:'رويال (كيس)', brand:'رويال', size:'كيس', emoji:'🍝', price:13, old:0, badge:'' },
  { id:131, cat:'pasta', name:'رويال 1 كيلو (كيس)', brand:'رويال', size:'1 كيلو', emoji:'🍝', price:30, old:0, badge:'' },
  { id:132, cat:'pasta', name:'مكرونة متنوعة كيلو (شعرية، لسان، طولية، معوجة، مرمرية)', brand:'', size:'1 كيلو', emoji:'🍝', price:30, old:0, badge:'' },
  { id:133, cat:'pasta', name:'مكرنتو (كيس) — جميع الأنواع', brand:'مكرنتو', size:'كيس', emoji:'🍝', price:10, old:0, badge:'' },
  { id:134, cat:'pasta', name:'مكرنتو (كرتونة)', brand:'مكرنتو', size:'كرتونة', emoji:'🍝', price:165, old:0, badge:'' },
  { id:135, cat:'pasta', name:'جواهر (كرتونة)', brand:'جواهر', size:'كرتونة', emoji:'🍝', price:185, old:0, badge:'' },
  { id:136, cat:'pasta', name:'رويال (كرتونة)', brand:'رويال', size:'كرتونة', emoji:'🍝', price:220, old:0, badge:'' },

  // الشاي (tea)
  { id:137, cat:'tea', name:'شاي العروسة ربع كيلو', brand:'العروسة', size:'ربع كيلو', emoji:'🍵', price:55, old:0, badge:'' },
  { id:138, cat:'tea', name:'شاي العروسة 40 جرام', brand:'العروسة', size:'40 جرام', emoji:'🍵', price:10, old:0, badge:'' },
  { id:139, cat:'tea', name:'شاي ليبتون ناعم ربع كيلو', brand:'ليبتون', size:'ربع كيلو', emoji:'🍵', price:65, old:0, badge:'' },
  { id:140, cat:'tea', name:'شاي ليبتون خرز ربع كيلو', brand:'ليبتون', size:'ربع كيلو', emoji:'🍵', price:70, old:0, badge:'' },
  { id:141, cat:'tea', name:'شاي الربيع صغير', brand:'الربيع', size:'صغير', emoji:'🍵', price:10, old:0, badge:'' },
  { id:142, cat:'tea', name:'شاي الربيع وسط', brand:'الربيع', size:'وسط', emoji:'🍵', price:30, old:0, badge:'' },
  { id:143, cat:'tea', name:'شاي ليبتون صغير', brand:'ليبتون', size:'صغير', emoji:'🍵', price:15, old:0, badge:'' },
  { id:144, cat:'tea', name:'شاي ليبتون وسط', brand:'ليبتون', size:'وسط', emoji:'🍵', price:35, old:0, badge:'' },
  { id:145, cat:'tea', name:'شاي ريد ليبل ربع كيلو', brand:'ريد ليبل', size:'ربع كيلو', emoji:'🍵', price:30, old:0, badge:'عرض' },

  // الأعشاب والمشروبات الساخنة (herbs)
  { id:146, cat:'herbs', name:'ينسون 50 فتلة', brand:'', size:'50 فتلة', emoji:'🌿', price:30, old:0, badge:'' },
  { id:147, cat:'herbs', name:'نعناع آيزيس 50 فتلة', brand:'آيزيس', size:'50 فتلة', emoji:'🌿', price:40, old:0, badge:'' },
  { id:148, cat:'herbs', name:'كركديه 50 فتلة', brand:'', size:'50 فتلة', emoji:'🌿', price:50, old:0, badge:'' },

  // القهوة والبن (coffee)
  { id:149, cat:'coffee', name:'بن الشيخ نص كيلو', brand:'الشيخ', size:'نص كيلو', emoji:'☕', price:250, old:0, badge:'' },
  { id:150, cat:'coffee', name:'بن الشتري نص كيلو', brand:'الشتري', size:'نص كيلو', emoji:'☕', price:250, old:0, badge:'' },
  { id:151, cat:'coffee', name:'بن الشيخ محوج 100 جرام', brand:'الشيخ', size:'100 جرام', emoji:'☕', price:60, old:0, badge:'' },
  { id:152, cat:'coffee', name:'بن الشتري محوج 100 جرام', brand:'الشتري', size:'100 جرام', emoji:'☕', price:60, old:0, badge:'' },
  { id:153, cat:'coffee', name:'بن الشيخ سادة 100 جرام', brand:'الشيخ', size:'100 جرام', emoji:'☕', price:55, old:0, badge:'' },
  { id:154, cat:'coffee', name:'بن الشيخ فاتح صغير', brand:'الشيخ', size:'صغير', emoji:'☕', price:25, old:0, badge:'' },
  { id:155, cat:'coffee', name:'بن محوج صغير', brand:'', size:'صغير', emoji:'☕', price:25, old:0, badge:'' },
  { id:156, cat:'coffee', name:'بن أبو عوف سادة 100 جرام', brand:'أبو عوف', size:'100 جرام', emoji:'☕', price:75, old:0, badge:'' },
  { id:157, cat:'coffee', name:'بن أبو عوف محوج', brand:'أبو عوف', size:'', emoji:'☕', price:90, old:0, badge:'' },
];

export const CAT_NAMES = {
  pasta:'مكرونات', juice:'عصائر', chips:'شيبسي', oil:'زيت',
  sugar:'سكر', biscuit:'بسكويت', canned:'معلبات', dairy:'الألبان والجبن',
  cheese:'جبن', sweets:'حلويات',
  tuna:'التونة', honey:'العسل والمربى', sauces:'الصلصات والكاتشب والمايونيز',
  oils:'الزيوت والسمن', drinks:'المشروبات والكانز', water:'المياه المعدنية',
  tea:'الشاي', herbs:'الأعشاب والمشروبات الساخنة', coffee:'القهوة والبن'
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
