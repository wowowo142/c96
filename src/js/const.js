/**
 * アプリ設定関連
 */

/**
 * スマホ幅閾値
 * */ 
export const TH_SP =  375;
 
/** 
 * ルームのデフォルト解像度
 */
export const ROOM_WIDTH_DEF = 1280; 
export const ROOM_HEIGHT_DEF = 720;


/**
 * 各コンテナのオフセット
 */
export const CONT_OFFS_FLOOR = {x:-80, y: 30};
export const CONT_OFFS_UI = {x:0, y:350};

/** 
 * ルームのマス数,1マスのサイズ
 */
export const ROOM_ROW = 8;
export const ROOM_COL = 8;
export const ROOM_UNIT = { width: 94, height: 54};

/**
 * 床タイルの配置表(白or黒)
 */
export const TILE_MAP = [
    // 0,0,1,1,0,0,1,1,
    // 0,0,1,1,0,0,1,1,
    // 1,1,0,0,1,1,0,0,
    // 1,1,0,0,1,1,0,0,
    // 0,0,1,1,0,0,1,1,
    // 0,0,1,1,0,0,1,1,
    // 1,1,0,0,1,1,0,0,
    // 1,1,0,0,1,1,0,0,

    0,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,
    0,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,
    0,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,
    0,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0
  ];

/**
 * タイルのハイライト用PIXI.Graphicsのインデックス 
 * */ 
export const FL_HL_INDEX = 64;

/**
 * アイテム情報のURI
 */
export const URI_ITEM_JSON = './res/json/item.json';


/**
 * テクスチャキー
 */
export const TEX_TB = 'tile_b';
export const TEX_TW = 'tile_w';
export const TEX_LOCKER = 'locker';
export const TEX_SOFA = 'sofa';
export const TEX_BUTA = 'buta';
export const TEX_CHARA = 'chara';
export const TEX_UI_BTN_MOVE = 'ui-btn-move';
export const TEX_UI_BTN_SAMPLE = 'ui-btn-sample';
export const TEX_UI_BTN_LINK = 'ui-btn-link';
export const TEX_UI_BTN_SET = 'ui-btn-set';
export const TEX_UI_BTN_CANCEL = 'ui-btn-cancel';



/**
 * UIモード
 */
export const UI_MODE = {
  HIDE: 0,
  DEFAULT: 1,
  MOVE: 2,
};


/**
 * UIボタンのSymbol
 */


/**
 * アイテム情報
 */
export const ITEMINFO = {
  "irijako_harigami" : {
    "label"  : "乳の張り紙(いりじゃこ)",
    "author" : "irijako",
    "website": "https://twitter.com/Howlin_Puppy",
    "x": 6,
    "y": 2,
    "offsX" : 0.02,
    "offsY" : 0,
    "scale" : 0.5,
    "multipart": false,
    "hitarea": [{x:-60,y:7},{x:0,y:40},{x:50,y:20},{x:70,y:-120},{x:-42,y:-135}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "inu_teaset" : {
    "label"  : "ティーセット(犬)",
    "author" : "inu",
    "website": "https://twitter.com/dogapprentice",
    "x": 5,
    "y": 4,
    "offsX" : 0,
    "offsY" : -0.15,
    "scale" : 0.5,
    "multipart": false,
    "hitarea": [{x:-70,y:12},{x:0,y:40},{x:70,y:12},{x:65,y:-60},{x:-30,y:-60},{x:-65,y:-20}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "usatore_gakushudesk" : {
    "label"  : "学習机(うさとれ)",
    "author" : "usatore",
    "website": "https://twitter.com/_usa_train",
    "x": 6,
    "y": 4,
    "offsX" : 0,
    "offsY" : 0.15,
    "scale" : 1.0,
    "multipart": true,
    "parts" : {
      "nearest" : {x: 0, y : 0, z:2},
      "1" : {x: -109, y: 0, z:1},
      "2" : {x: 45, y: 0, z:1}
    },
    "hitarea": [{x:-80,y:-25},{x:-45,y: 0},{x:-10,y:-20},{x:30,y:0},{x:80,y:-30},
                {x:80,y:-135},{x:-20,y:-170},{x:-40,y:-150},{x:-45,y:-115},{x:-80,y:-105}],
    "occupy": [{x:0,y:1},{x:1,y:0},{x:1,y:1}],
    "isWall" : false
  },
  "gobori_bmm" : {
    "label"  : "生体電位計測マシン(gobori)",
    "author" : "gobori",
    "website": "https://twitter.com/SagafroKichigai",
    "x": 6,
    "y": 1,
    "offsX" : 0,
    "offsY" : 0.13,
    "scale" : 1.0,
    "multipart": true,
    "parts" : {
      "nearest" : {x: 0, y : 0, z:0},
      "1" : {x: -74, y: 0, z:1},
      "2" : {x: 37, y: 0, z:1}
    },
    "hitarea": [{x:-75,y:-20},{x:-50,y:-2},{x:-15,y:-10},{x:25,y:3},
                {x:75,y:-25},{x:75,y:-90},{x:40,y:-140},{x:40,y:-175},{x:-10,y:-195},
                {x:-52,y:-170},{x:-52,y:-45},{x:-75,y:-35}],
    "occupy": [{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1}],
    "isWall" : false
  },
  "daishinrin_coooymeshi" : {
    "label"  : "国民的メシアイドル(大森林)",
    "author" : "daishinrin",
    "website": "https://twitter.com/dsrknown",
    "x": 3,
    "y": 1,
    "offsX" : 0,
    "offsY" : -0.07,
    "scale" : 0.5,
    "multipart": false,
    "hitarea": [{x:-85,y:0},{x:0,y:50},{x:85,y:0},{x:55,y:-135},{x:15,y:-160},{x:-50,y:-110},{x:-50,y:-30}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "chi_kun_stick" : {
    "label"  : "不思議なステッキ(ちーくん)",
    "author" : "chi_kun",
    "website": "https://twitter.com/seedyoulater",
    "x": 0,
    "y": 3,
    "offsX" : -0.02,
    "offsY" : 0.05,
    "scale" : 0.5,
    "multipart": false,
    "hitarea": [{x:-70,y:5},{x:0,y:50},{x:80,y:5},{x:65,y:-60},{x:80,y:-80},{x:45,y:-200},{x:20,y:-200},
                {x:-70,y:-90},{x:-70,y:-70}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "chiba_tamatebako" : {
    "label"  : "玉手箱(千葉)",
    "author" : "chiba",
    "website": "https://twitter.com/chibainu_moba",
    "x": 2,
    "y": 6,
    "offsX" : -0.01,
    "offsY" : -0.25,
    "scale" : 0.5,
    "multipart": false,
    // "hitarea":  [{x:15,y:0},{x:15,y:35},{x:95,y:85},{x:175,y:35},{x:175,y:0},{x:90,y:-50}],
    "hitarea":  [{x:-80,y:-35},{x:-80,y:5},{x:0,y:50},{x:80,y:5},{x:80,y:-35},{x:0,y:-80}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "chanja_hanako" : {
    "label"  : "ハナコ(チャンジャ)",
    "author" : "chanja",
    "website": "https://twitter.com/daichanja",
    "x": 5,
    "y": 0,
    "offsX" : 0,
    "offsY" : 0.05,
    "scale" : 0.45,
    "multipart": false,
    "hitarea": [{x:-70,y:0},{x:0,y:50},{x:60,y:-0},{x:75,y:-270},{x:0,y:-240},{x:-75,y:-270},],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "tokumeikibou_tritelepo" : {
    "label"  : "Trinityテレポーテーション(匿名希望)",
    "author" : "tokumeikibou",
    "website": "https://twitter.com/mozaikutomono",
    "x": 1,
    "y": 5,
    "offsX" : 0.1,
    "offsY" : 0.05,
    "scale" : 0.5,
    "multipart": true,
    "parts" : {
      "nearest" : {x: 0, y : 0, z:0},
      "1" : {x: -206, y: 0, z:1},
      "2" : {x: 76, y: 0, z:1}
    },
    "hitarea": [{x:-155,y:-65},{x:15,y:42},{x:90,y:-90},{x:-28,y:-350}],
    "occupy": [{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1}],
    "isWall" : false
  },
  "najima_curryaroma" : {
    "label"  : "カレーアロマポッド(ナ縞)",
    "author" : "najima",
    "website": "https://twitter.com/najima_7stripes",
    "x": 4,
    "y": 4,
    "offsX" : -0.01,
    "offsY" : 0,
    "scale" : 0.5,
    "multipart": false,
    "hitarea": [{x:-75,y:0},{x:-20,y:35},{x:25,y:35},{x:75,y:0},{x:50,y:-60},
                {x:70,y:-150},{x:-50,y:-155},{x:-65,y:-130},{x:-40,y:-60}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "narihayao_usasensor" : {
    "label"  : "ウサちゃんセンサ(なりはやお)",
    "author" : "narihayao",
    "website": "https://twitter.com/narihayao",
    "x": 5,
    "y": 7,
    "offsX" : 0,
    "offsY" : -0.2,
    "scale" : 0.5,
    "multipart": false,
    "hitarea": [{x:-92,y:-50},{x:-92,y:5},{x:0,y:55},{x:90,y:5},{x:90,y:-50},{x:0,y:-100}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "niza_mado" : {
    "label"  : "窓(新座)",
    "author" : "niza",
    "website": "https://twitter.com/seia_aramaki",
    "x": 6,
    "y": 6,
    "offsX" : -0.02,
    "offsY" : 0.05,
    "scale" : 0.5,
    "multipart": true,
    "hitarea":  [{x:0,y:-260},{x:185,y:-180},{x:185,y:-440},{x:0,y:-490},{x:0,y:-440},{x:-80,y:-320}],
    "parts" : {
      "nearest" : {x: 0, y : 0, z:-0.5},
      "1" : {x: -184, y: 0, z:0.5},
      "2" : {x: 98, y: 0, z:0.5}
    },
    "occupy": [{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1}],
    "isWall" : true
  },
  "ninana_zangai" : {
    "label"  : "佐藤の残骸(にーなな)",
    "author" : "ni_nana",
    "website": "https://twitter.com/27sai_club",
    "x": 5,
    "y": 1,
    "offsX" : 0,
    "offsY" : -0.2,
    "scale" : 0.5,
    "multipart": false,
    "hitarea": [{x:-80,y:0},{x:0,y:45},{x:80,y:0},{x:0,y:-50}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  }, 
  "herohero_yashinoki" : {
    "label"  : "ヤシの木(へろへろ)",
    "author" : "herohero",
    "website": "https://twitter.com/hero_U2",
    "x": 0,
    "y": 0,
    "offsX" : 0.15,
    "offsY" : 0.09,
    "scale" : 0.5,
    "multipart": true,
    "parts": {
      "nearest":  {x: 0, y: 0, z:0},
      "1":  {x: 50, y: 0, z:0},
    },
    "hitarea": [{x:-75,y:5},{x:0,y:45},{x:75,y:15},{x:30,y:-160},{x:60,y:-315},{x:90,y:-310},{x:90,y:-270},
                {x:170,y:-300},{x:180,y:-430},{x:150,y:-480},{x:-30,y:-480},{x:-80,y:-430},
                {x:-30,y:-420},{x:-65,y:-310},{x:20,y:-350},{x:-65,y:-155},],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "marutoyo_catalog" : {
    "label"  : "カタログ:魚家具特集(マルトヨ)",
    "author" : "marutoyo",
    "website": "https://twitter.com/mechabuhi11",
    "x": 7,
    "y": 5,
    "offsX" : -0.01,
    "offsY" : -0.1,
    "scale" : 0.5,
    "multipart": false,
    "hitarea": [{x:-75,y:0},{x:20,y:45},{x:90,y:0},{x:60,y:-55},{x:68,y:-95},{x:-30,y:-155}],
    // "hitarea": [{x:15,y:-15},{x:110,y:30},{x:180,y:-15},{x:150,y:-70},{x:158,y:-110},{x:60,y:-170}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "megochimo_buta" : {
    "label"  : "ぶた(めごちも)",
    "author" : "megochimo",
    "website": "https://twitter.com/mochigomekun",
    "x": 5,
    "y": 5,
    "offsX" : 0,
    "offsY" : 0,
    "scale" : 1.0,
    "multipart": false,
    "hitarea": [{x:-35,y:5},{x:5,y:20},{x:37,y:0},{x:30,y:-46},{x:15,y:-66},{x:-20,y:-66},{x:-35,y:-36}],
    "occupy": [{x:0,y:0}],
    "isWall" : false
  },
  "unitykong_takoyakiki" : {
    "label"  : "難波さん家のたこやき機(UNITY KONG)",
    "author" : "unity_kong",
    "website": "https://twitter.com/UnityKong",
    "x": 2,
    "y": 1,
    "offsX" : -0.2,
    "offsY" : -0.06,
    "scale" : 0.5,
    "multipart": true,
    "parts": {
      "nearest":  {x: 0, y: 0, z:0},
      "1":  {x: -184, y: 0, z:1 },
    },
    "hitarea": [{x:0,y:50},{x:90,y:0},{x:90,y:-60},{x:-90,y:-165},{x:-185,y:-120},{x:-185,y:-50}],
    "occupy": [{x:0,y:0},{x:0,y:1}],
    "isWall" : false
  },
};


/**
 * アイテム情報
 * h_ttp://127.0.0.1:5501/c96_dev/public/
 * h_ttp://amaai-poconuts.com/c96/
 */
export const RESOURCE = {
  "tile_b" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/floor_b.png"
  },
  "tile_w" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/floor_w.png"
  },
  "ui-btn-move" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_move.png"
  },
  "ui-btn-sample" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_sample.png"
  },
  "ui-btn-link" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_link.png"
  },
  "ui-btn-set" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_set.png"
  },
  "ui-btn-cancel" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/ui_btn_cancel.png"
  },
  "megochimo_buta" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/buta.png"
  },
  "itemlabel_megochimo" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_megochimo.png",
  },
  "chara" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/chara.png"
  },
  "gobori_bmm" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/gobori_bmm.png",
      "parts": {
        "1":  {x: 0, y: 0, u: 37, v: 199},
        "nearest":  {x: 37, y: 0, u:74, v: 199},
        "2":  {x: 111, y: 0, u: 37, v: 199}
      }
  },
  "itemlabel_gobori" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_gobori.png",
  },
  "chiba_tamatebako" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/chiba_tamatebako.png"
  },
  "itemlabel_chiba" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_chiba.png",
  },
  "marutoyo_catalog" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/marutoyo_catalog.png"
  },
  "itemlabel_marutoyo" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_marutoyo.png",
  },
  "najima_curryaroma" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/najima_curryaroma.png"
  },
  "itemlabel_najima" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_najima.png",
  },
  "ninana_zangai" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/ninana_zangai.png"
  },
  "itemlabel_ni_nana" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_ni_nana.png",
  },
  "irijako_harigami" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/irijako_harigami.png"
  },
  "itemlabel_irijako" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_irijako.png",
  },
  "herohero_yashinoki" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/herohero_yashinoki.png",
    "parts": {
      "nearest":  {x: 0, y: 0, u: 142, v: 514},
      "1":  {x: 142, y: 0, u: 140, v: 514},
    }
  },
  "itemlabel_herohero" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_herohero.png",
  },
  "unitykong_takoyakiki" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/unitykong_takoyakiki.png",
    "parts": {
      "nearest":  {x: 142, y: 0, u: 142, v: 202},
      "1":  {x: 0, y: 0, u: 142, v: 202},
    }
  },
  "itemlabel_unity_kong" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_unity_kong.png",
  },
  "tokumeikibou_tritelepo" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/tokumeikibou_tritelepo.png",
    "parts": {
      "1":  {x: 0, y: 0, u: 94, v: 385},
      "nearest":  {x: 94, y: 0, u: 188, v: 385},
      "2":  {x: 282, y: 0, u: 94, v: 385}
    }
  },
  "itemlabel_tokumeikibou" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_tokumeikibou.png",
  },
  "daishinrin_coooymeshi" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/daishinrin_coooymeshi.png",
  },
  "itemlabel_daishinrin" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_daishinrin.png",
  },
  "usatore_gakushudesk" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/usatore_gakushudesk.png",
    "parts": {
      "1":  {x: 0, y: 0, u: 64, v: 166},
      "nearest":  {x: 64, y: 0, u:90, v: 166},
      "2":  {x: 154, y: 0, u: 34, v: 166}
    }
  },
  "itemlabel_usatore" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_usatore.png",
  },
  "narihayao_usasensor" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/narihayao_usasensor.png",
  },
  "itemlabel_narihayao" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_narihayao.png",
  },
  "niza_mado" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/niza_mado.png",
    "parts": {
      "1":  {x: 0, y: 0, u: 94, v: 538},
      "nearest":  {x: 94, y: 0, u: 188, v: 538},
      "2":  {x: 281, y: 0, u: 95, v: 538}
    }
  },
  "itemlabel_niza" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_niza.png",
  },
  "chi_kun_stick" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/chiikun_stick.png",
  },
  "itemlabel_chi_kun" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_chiikun.png",
  },
  "inu_teaset" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/inu_teaset.png",
  },
  "itemlabel_inu" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_inu.png",
  },
  "chanja_hanako" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/chanja_hanako.png",
  },
  "itemlabel_chanja" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_chanja2.png",
  },
  

  "infolabel_summary" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/infolabel_summary.png"
  },
  "infolabel_titlekana" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/infolabel_titlekana.png"
  },
  "infolabel_author1" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/infolabel_author1.png"
  },
  "infolabel_author2" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/infolabel_author2.png"
  },

  "wall" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/wall.png"
  },
  "wall_l" : {
      "texture": "http://amaai-poconuts.com/c96/res/img/room/wall_l.png"
  },
  "wall_r" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/wall_r.png"
  },

  "chanja_rinhand" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/chanja_rinhand.png",
  },
  "itemlabel_chanja2" : {
    "texture": "http://amaai-poconuts.com/c96/res/img/room/itemlabel_chanja2.png",
  },
};