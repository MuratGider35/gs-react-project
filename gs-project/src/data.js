const data = [
  {
    id: 1,
    title: "Fernando Muslera",
    desc: "Toplamda kazandığı 14 kupa ile Galatasaray formasıyla en çok kupa sevinci yaşayan yabancı oyuncu olarak zirvede bulunuyor.",
    image:
      "https://hlkiurt3.rocketcdn.com/profiles/ec51bdd1299b4e0bb3a668d07cfb19ee.jpeg",
  },

  {
    id: 2,
    title: "Léo Dubois",
    desc: "Nantes akademisinde yetişen ve 2014 yılında A takıma yükselen Fransız sağ bek, dört sezon Nantes ile Ligue 1 forması giydi. 106 maçta 4 gol ve 13 asistle Nantes kariyerini noktaladı. ",
    image:
      "https://hlkiurt3.rocketcdn.com/profiles/547def00b3644a00ac5702981327a990.jpeg",
  },

  {
    id: 3,
    title: "Victor Enok Nelsson",
    desc: "Stoper mevkisinde oynayan ve 1.85 metre boyundaki Nelsson, Nordsjælland’da A takıma yükselerek burada 98 resmi maç oynadı ve 2 gole imza attı.",
    image:
      "https://hlkiurt3.rocketcdn.com/profiles/8567488f2b034c45aec71bb61ea61ad6.jpeg",
  },

  {
    id: 4,
    title: "Sacha Boey",
    desc: "Sacha Boey, Fransa Milli Takımı alt yaş kategorilerinde U17, U18 ve U20 takımlarında da forma giydi.",
    image:
      "https://hlkiurt3.rocketcdn.com/profiles/930dc318cb3548a89524114e032b5be9.jpeg",
  },

  {
    id: 5,
    title: "Fredrik Midtsjö",
    desc: "Fredrik bu başarılarının ardından Hollanda’nın köklü ekiplerinde AZ Alkmaar’a 2017 yaz transfer sezonunda katıldı ve Galatasarayımıza transfer olana dek istikrarlı şekilde bu takımın formasını giydi. AZ Alkmaar’da 195 kez sahaya çıkan oyuncu, 7 gol ve 33 asistlik performans ortaya koydu. ",
    image:
      "https://hlkiurt3.rocketcdn.com/profiles/df4c8c33853a446abaf3601d379416aa.jpeg",
  },

  {
    id: 6,
    title: " Sergio Oliveira",
    desc: "Sergio Oliveira, 2 Haziran 1992 tarihinde Portekiz'in Santa Maria da Feira'ya bağlı Paços de Brandão beldesinde dünyaya geldi.",
    image:
      "https://hlkiurt3.rocketcdn.com/profiles/90bbcc657a764eb88cc22eaf6fdcc263.jpeg",
  },

  {
    id: 7,
    title: " Bafetimbi Gomis ",
    desc: " 6 Ağustos 1985 doğumlu olan Bafetimbi Gomis, Fransa’nın güneydoğusunda bulunan sahil kasabası La Seyne’de dünyaya geldi.",
    image:
      " https://hlkiurt3.rocketcdn.com/profiles/ba177eb22a3c4b5fb39a8cfa16671c85.jpeg",
  },

  {
    id: 8,
    title: " Mauro Icardi ",
    desc: " 19 Şubat 1993’te Arjantin’in Rosario kentinde dünyaya gelen Icardi, doğduğu yerdeki F.C Sarretta’da futbol hayatına başladı. 2002’de Kanarya Adaları’na giderek kariyerine İspanya’da yön veren oyuncu, U.D. Vecindario’da gelişimini 6 yıl boyunca sürdürdükten sonra Barcelona Akademisi’ne dahil olarak kariyer adımını attı. ",
    image:
      " https://hlkiurt3.rocketcdn.com/profiles/b171e1fa82534894a8b46f8543e6b692.jpeg ",
  },

  {
    id: 9,
    title: " Milot Rashica ",
    desc: " 28 Haziran 1996’da Kosova’nın Vushtrri kentinde doğan oyuncu, Kosova Vushtrri’de futbol hayatına adım attı. ",
    image:
      " https://hlkiurt3.rocketcdn.com/profiles/dd9cbdb8d56d452184ae41235944ec7e.jpeg ",
  },

  {
    id: 10,
    title: " Juan Mata ",
    desc: " 28 Nisan 1988 tarihinde İspanya’nın Burgos kentinde doğan Mata, Real Oviedo ve Real Madrid altyapılarında profesyonel futbola hazırlandı. Dünya devi Real Madrid’in altyapısından 2007 senesinde Valencia’ya transfer olarak buradaki futboluyla kalitesini ispatlayan İspanyol yıldız, dört sene boyunca Mestalla’da forma giydi. ",
    image:
      " https://hlkiurt3.rocketcdn.com/profiles/619efb51817e491b9bb61ab75f8dfb99.jpeg ",
  },
  {
    id: 11,
    title: " Dries Mertens ",
    desc: " 6 Mayıs 1987’de Belçika’nın Leuven şehrinde doğan Mertens, futbol hayatına doğduğu kentin yerel kulüplerinden Stade Leuven’de başladı. Gent altyapısında futbolculuk yeteneklerini geliştiren oyuncu, Hollanda yolunu tutarak ikinci lig ekiplerinden Eendrach Aalst ve AGOVV’daki performanslarıyla rüştünü kanıtladı. Kiralık olarak gittiği AGOVV’da 2008 yılında ligin en iyi oyuncusu seçildi. ",
    image:
      " https://hlkiurt3.rocketcdn.com/profiles/1deb4295e6ae4614802333c402fe4c1b.jpeg ",
  },
  {
    id: 12,
    title: " Muhammed Kerem Aktürkoğlu ",
    desc: " 21 Ekim 1998 yılında Kocaeli'nde doğan Muhammed Kerem Aktürkoğlu, kariyerine Gölcükspor'da başladı. 2014 yılında Hisareyn'e, 2015 yılınd Medipol Başakşehir'in altyapısına transfer olan futbolcu, 2016 yılında BB Bodrumspor'da bir sezon kiralık forma giydi. Başakşehir Kulübü'ndeki macerası 2018 senesinde biten oyuncu ardından Karacabey Belediyespor'da, geride bıraktığımız 2019-2020 sezonunda ise 24 Erzincanspor'da top koşturdu. ",
    image:
      " https://hlkiurt3.rocketcdn.com/profiles/3cbe5347319b4f978510425aefed2851.jpeg ",
  },
];

export default data;
