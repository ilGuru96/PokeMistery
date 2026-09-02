/*
============================================================
 PokeMisteryRL — DB_ITEMS
 Versione: 1.0
 ------------------------------------------------------------
 DATABASE PURO DEGLI OGGETTI.

 Questo file contiene SOLO i dati degli oggetti.
 La logica degli effetti è gestita da:
 ITEM_SYSTEM_REGION_GITHUB.js

 Struttura:
 {
   id,
   nome,
   effetto,
   rarita,
   tipo,
   ...campi tecnici opzionali
 }
============================================================
*/

window.PokeMisteryRL_Items = window.PokeMisteryRL_Items || {};

window.PokeMisteryRL_Items.DB_ITEMS = {

  /* ==========================================================
     01. OGGETTI SPECIALI
     ========================================================== */

  bitorzolello: {
    id: "bitorzolello",
    nome: "Bitorzolello (Rocky Helmet)",
    immagine: "./img/items/rockyhelmet.png",
    effetto: "ON HIT RECEIVED → ENEMY HP −16.67%.",
    rarita: null,
    tipo: "reazione"
  },

  avanzi: {
    id: "avanzi",
    nome: "Avanzi (Leftovers)",
    immagine: "./img/items/leftovers.png",
    effetto: "END TURN → HP +X%.",
    rarita: null,
    tipo: "cura"
  },

  evolcondensa: {
    id: "evolcondensa",
    nome: "Evolcondensa (Eviolite)",
    immagine: "./img/items/eviolite.png",
    effetto: "DEF ×1.50; ATK ×0.80.",
    rarita: null,
    tipo: "statistica"
  },

  vulneropolizza: {
    id: "vulneropolizza",
    nome: "Vulneropolizza (Weakness Policy)",
    immagine: "./img/items/weaknesspolicy.png",
    effetto: "S2 SUPER-EFFECTIVE HIT → S1 ATK +X% FOR NEXT TURN.",
    rarita: null,
    tipo: "sinergia"
  },

  palla_fumo: {
    id: "palla_fumo",
    nome: "Palla Fumo (Smoke Ball)",
    immagine: "./img/items/smokeball.png",
    effetto: "HP <20% → DODGE 1 HIT/TURN WITH X% CHANCE.",
    rarita: null,
    tipo: "evasione"
  },

  assorbisfera: {
    id: "assorbisfera",
    nome: "Assorbisfera (Life Orb)",
    immagine: "./img/items/lifeorb.png",
    effetto: "ATK ×1.30; ON ATTACK → HP −X%.",
    rarita: null,
    tipo: "potenziamento"
  },


  /* ==========================================================
     02. POTENZIATORI DI TIPO
     ========================================================== */

  carbonella: {
    id: "carbonella",
    nome: "Carbonella",
    immagine: "./img/items/charcoal.png",
    effetto: "DMG [FIRE] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "fuoco",
    bonus_danno: 0.20
  },

  acqua_magica: {
    id: "acqua_magica",
    nome: "Acqua Magica",
    immagine: "./img/items/mysticwater.png",
    effetto: "DMG [WATER] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "acqua",
    bonus_danno: 0.20
  },

  miracolseme: {
    id: "miracolseme",
    nome: "Miracolseme",
    immagine: "./img/items/miracleseed.png",
    effetto: "DMG [GRASS] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "erba",
    bonus_danno: 0.20
  },

  magnete: {
    id: "magnete",
    nome: "Magnete",
    immagine: "./img/items/magnet.png",
    effetto: "DMG [ELECTRIC] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "elettro",
    bonus_danno: 0.20
  },

  gelomai: {
    id: "gelomai",
    nome: "Gelomai",
    immagine: "./img/items/never-meltice.png",
    effetto: "DMG [ICE] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "ghiaccio",
    bonus_danno: 0.20
  },

  soffice_sabbia: {
    id: "soffice_sabbia",
    nome: "Soffice Sabbia",
    immagine: "./img/items/softsand.png",
    effetto: "DMG [GROUND] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "terra",
    bonus_danno: 0.20
  },

  cinturanera: {
    id: "cinturanera",
    nome: "Cinturanera",
    immagine: "./img/items/blackbelt.png",
    effetto: "DMG [FIGHTING] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "lotta",
    bonus_danno: 0.20
  },

  beccaffilato: {
    id: "beccaffilato",
    nome: "Beccaffilato",
    immagine: "./img/items/sharpbeak.png",
    effetto: "DMG [FLYING] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "volante",
    bonus_danno: 0.20
  },

  cucchiaiorto: {
    id: "cucchiaiorto",
    nome: "Cucchiaiorto",
    immagine: "./img/items/twistedspoon.png",
    effetto: "DMG [PSYCHIC] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "psico",
    bonus_danno: 0.20
  },

  argentovivo: {
    id: "argentovivo",
    nome: "Argentovivo",
    immagine: "./img/items/silverpowder.png",
    effetto: "DMG [BUG] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "coleottero",
    bonus_danno: 0.20
  },

  pietradura: {
    id: "pietradura",
    nome: "Pietradura",
    immagine: "./img/items/hardstone.png",
    effetto: "DMG [ROCK] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "roccia",
    bonus_danno: 0.20
  },

  spettrotarga: {
    id: "spettrotarga",
    nome: "Spettrotarga",
    immagine: "./img/items/spelltag.png",
    effetto: "DMG [GHOST] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "spettro",
    bonus_danno: 0.20
  },

  dente_di_drago: {
    id: "dente_di_drago",
    nome: "Dente di Drago",
    immagine: "./img/items/dragonfang.png",
    effetto: "DMG [DRAGON] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "drago",
    bonus_danno: 0.20
  },

  occhialineri: {
    id: "occhialineri",
    nome: "Occhialineri",
    immagine: "./img/items/blackglasses.png",
    effetto: "DMG [DARK] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "buio",
    bonus_danno: 0.20
  },

  metalcoperta: {
    id: "metalcoperta",
    nome: "Metalcoperta",
    immagine: "./img/items/metalcoat.png",
    effetto: "DMG [STEEL] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "acciaio",
    bonus_danno: 0.20
  },

  velenaculeo: {
    id: "velenoCuleo",
    nome: "Velenaculeo",
    immagine: "./img/items/poisonbarb.png",
    effetto: "DMG [POISON] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "veleno",
    bonus_danno: 0.20
  },

  fiocco_rosa: {
    id: "fiocco_rosa",
    nome: "Fiocco Rosa",
    immagine: "./img/items/fairyfeather.png",
    effetto: "DMG [FAIRY] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "folletto",
    bonus_danno: 0.20
  },

  sciarpaseta: {
    id: "sciarpaseta",
    nome: "Sciarpaseta",
    immagine: "./img/items/silkscarf.png",
    effetto: "DMG [NORMAL] ×1.20.",
    rarita: null,
    tipo: "potenziamento_tipo",
    tipo_mossa: "normale",
    bonus_danno: 0.20
  },


  /* ==========================================================
     03. OGGETTI DI CURA / UTILITÀ
     ========================================================== */

  pozione: {
    id: "pozione",
    nome: "Pozione",
    immagine: "./img/items/potion.png",
    effetto: "ACTIVE HP +20.",
    rarita: "comune",
    tipo: "cura"
  },

  super_pozione: {
    id: "super_pozione",
    nome: "Super Pozione",
    immagine: "./img/items/superpotion.png",
    effetto: "ACTIVE HP +50.",
    rarita: "non_comune",
    tipo: "cura"
  },

  iper_pozione: {
    id: "iper_pozione",
    nome: "Iper Pozione",
    immagine: "./img/items/hyperpotion.png",
    effetto: "ACTIVE HP +100.",
    rarita: "rara",
    tipo: "cura"
  },

  max_pozione: { id:"max_pozione", nome:"Pozione Max", immagine:"./img/items/maxpotion.png", effetto:"Cura completamente gli HP.", rarita:"epica", tipo:"cura", cura_hp:"max" },
  ripristino_totale: { id:"ripristino_totale", nome:"Ripristino Totale", immagine:"./img/items/fullrestore.png", effetto:"Cura completamente gli HP e gli status.", rarita:"epica", tipo:"cura", cura_hp:"max", cura_status:true },
  revive: { id:"revive", nome:"Rivitalizzante", immagine:"./img/items/revive.png", effetto:"Rianima con il 50% degli HP.", rarita:"rara", tipo:"cura", revive_hp:.5 },
  max_revive: { id:"max_revive", nome:"Revitalizzante Max", immagine:"./img/items/maxrevive.png", effetto:"Rianima con tutti gli HP.", rarita:"epica", tipo:"cura", revive_hp:1 },
  erba_rivitalizzante: { id:"erba_rivitalizzante", nome:"Erba Rivitalizzante", immagine:"./img/items/revivalherb.png", effetto:"Rianima con tutti gli HP.", rarita:"rara", tipo:"cura", revive_hp:1 },
  cenere_sacra: { id:"cenere_sacra", nome:"Cenere Sacra", immagine:"./img/items/sacredash.png", effetto:"Rianima con tutti gli HP e cura gli status.", rarita:"leggendaria", tipo:"cura", revive_hp:1, cura_status:true },
  acqua_fresca: { id:"acqua_fresca", nome:"Acqua Fresca", immagine:"./img/items/freshwater.png", effetto:"Cura 30 HP.", rarita:"comune", tipo:"cura", cura_hp:30 },
  soda_pop: { id:"soda_pop", nome:"Soda Pop", immagine:"./img/items/sodapop.png", effetto:"Cura 60 HP.", rarita:"non_comune", tipo:"cura", cura_hp:60 },
  limonata: { id:"limonata", nome:"Limonata", immagine:"./img/items/lemonade.png", effetto:"Cura 100 HP.", rarita:"rara", tipo:"cura", cura_hp:100 },
  latte_moomoo: { id:"latte_moomoo", nome:"Latte Moomoo", immagine:"./img/items/moomoomilk.png", effetto:"Cura 80 HP.", rarita:"non_comune", tipo:"cura", cura_hp:80 },
  caramella_furia: { id:"caramella_furia", nome:"Iramella", immagine:"./img/items/ragecandybar.png", effetto:"Cura 40 HP.", rarita:"comune", tipo:"cura", cura_hp:40 },
  biscotto_lava: { id:"biscotto_lava", nome:"Lavottino", immagine:"./img/items/lavacookie.png", effetto:"Cura 30 HP e gli status.", rarita:"non_comune", tipo:"cura", cura_hp:30, cura_status:true },
  torta_antica: { id:"torta_antica", nome:"Dolce Chateau", immagine:"./img/items/oldgateau.png", effetto:"Cura 30 HP e gli status.", rarita:"non_comune", tipo:"cura", cura_hp:30, cura_status:true },
  cono_castelia: { id:"cono_castelia", nome:"Conostropoli", immagine:"./img/items/casteliacone.png", effetto:"Cura 30 HP e gli status.", rarita:"non_comune", tipo:"cura", cura_hp:30, cura_status:true },

  caramella_rara: {
    id: "caramella_rara",
    nome: "Caramella Rara",
    effetto: "SELECTED POKÉMON LV +1.",
    rarita: "rara",
    tipo: "crescita"
  },

  amuleto: {
    id: "amuleto",
    nome: "Amuleto",
    immagine: "./img/items/amuletcoin.png",
    effetto: "RUN BONUS +X, AS DEFINED BY EFFECT.",
    rarita: "epica",
    tipo: "bonus"
  },

};


/* ============================================================
   API MINIMA DEL DATABASE
   ============================================================ */

window.PokeMisteryRL_Items.get = function(itemId){
  if(!itemId) return null;

  var key =
    String(itemId)
      .trim()
      .toLowerCase();

  return (
    window.PokeMisteryRL_Items.DB_ITEMS[key] ||
    null
  );
};

window.PokeMisteryRL_Items.getAll = function(){
  return Object.values(
    window.PokeMisteryRL_Items.DB_ITEMS
  );
};

window.PokeMisteryRL_Items.getByRarity = function(rarita){
  var rarity =
    String(rarita || "")
      .trim()
      .toLowerCase();

  return window.PokeMisteryRL_Items
    .getAll()
    .filter(function(item){
      return String(item.rarita || "")
        .toLowerCase() === rarity;
    });
};

window.PokeMisteryRL_Items.getByType = function(tipo){
  var type =
    String(tipo || "")
      .trim()
      .toLowerCase();

  return window.PokeMisteryRL_Items
    .getAll()
    .filter(function(item){
      return String(item.tipo || "")
        .toLowerCase() === type;
    });
};


/* ============================================================
   COMPATIBILITÀ
   ============================================================ */

window.DB_ITEMS =
  window.PokeMisteryRL_Items.DB_ITEMS;

console.log(
  "✅ DB_ITEMS caricato:",
  Object.keys(window.DB_ITEMS).length,
  "oggetti"
);
