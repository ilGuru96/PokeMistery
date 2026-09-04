/*
============================================================
 PokeMisteryRL — DB_MODES
 Database delle modalità e delle mappe/campagne.
============================================================
*/

window.PokeMisteryRL_Modes = window.PokeMisteryRL_Modes || {};

window.PokeMisteryRL_Modes.SFONDI_CATEGORIA = {
  bosco: "./img/Bosco.png",
  grotta: "./img/Grotta.png"
};

window.PokeMisteryRL_Modes.DB_MODES = {
  campagne: {
    id: "campagne",
    nome: "Campagne",
    descrizione: "Sfide narrative indipendenti, con progressione e regole proprie.",
    tipo: "raccolta_campagne",
    regole: {
      sinergie_tipologia: {
        punti_per_stadio: { 1: 1, 2: 4, 3: 9 },
        soglie_punti: { 1: 2, 2: 5, 3: 9, 4: 14 },
        nota: "Ogni Pokémon aggiunge punti a entrambi i suoi tipi: stadio 1 = 1, stadio 2 = 4, stadio 3 = 9. Le soglie sono 2, 5, 9 e 14 punti."
      }
    },
    sinergie_tipi: {
      fuoco: { nome:"Assistenza", bonus:["35% fiammella extra", "65% fiammella extra", "Fiammella extra sempre"], evoluta:"Fiammella extra sempre; potenza piena." },
      acqua: { nome:"Difesa Impenetrabile", bonus:["Scudo 35% HP una volta", "Scudo 60% HP una volta", "Scudo 100% HP una volta"], evoluta:"Scudo pieno una volta per battaglia." },
      erba: { nome:"Erborario", bonus:["Cura 4% squadra a turno", "Cura 7% squadra a turno", "Cura 10% squadra a turno"], evoluta:"Cura 10% della squadra ogni turno." },
      elettro: { nome:"Primo Colpo", bonus:["Priorità nel round", "Priorità nel round", "Priorità nel round"], evoluta:"Agisce sempre per primo." },
      normale: { nome:"Copia", bonus:["Replica ogni 5 turni", "Replica ogni 4 turni", "Replica l'attacco davanti"], evoluta:"Replica l'attacco davanti ogni turno." },
      volante: { nome:"Assalto", bonus:["Colpisce 1 retrovia", "Colpisce 1 retrovia", "Colpisce 2 retrovie"], evoluta:"Colpisce fino a due nemici dietro." },
      veleno: { nome:"Tripudio di Veleno", bonus:["Le mosse Veleno applicano 1 Veleno per PWR; perde 10 a turno", "Le mosse Veleno applicano 1 Veleno per PWR; perde 8 a turno", "Le mosse Veleno applicano 1 Veleno per PWR; perde 5 a turno"], evoluta:"Tripudio di Veleno: quando un nemico muore di Veleno, avvelena quelli affianco." },
      terra: { nome:"Contatto", bonus:["Rallenta chi colpisce", "Rallenta chi colpisce", "Rallenta del 40%"], evoluta:"Ogni attaccante viene rallentato del 40%." },
      roccia: { nome:"Rimbalzo", bonus:["8% riflesso", "14% riflesso", "20% riflesso"], evoluta:"25% di restituire metà danno." },
      lotta: { nome:"Spinta", bonus:["Ogni 5 attacchi", "Ogni 4 attacchi", "Ogni 3 attacchi"], evoluta:"Ogni 3 attacchi: danno ×1,65." },
      psico: { nome:"Scambio Veloce", bonus:["Bersaglia la retrovia", "Bersaglia la retrovia", "Bersaglia la retrovia"], evoluta:"Colpisce sempre l'ultimo nemico vivo." },
      buio: { nome:"Notte Eterna", bonus:["+5% soldi e furto HP 2%", "+10% soldi e furto HP 4%", "+15% soldi e furto HP 6%"], evoluta:"Colpisce il bersaglio più indietro: +10% danni per ogni slot di distanza." },
      spettro: { nome:"Maledizione", bonus:["Riflette il 15% dei danni subiti", "Riflette il 30% dei danni subiti", "Riflette il 45% dei danni subiti"], evoluta:"Riflette il 60% dei danni subiti come Maledizione." },
      acciaio: { nome:"Legione d'Acciaio", bonus:["-5% danni subiti", "-10% danni subiti", "-15% danni subiti"], evoluta:"-15% danni subiti e +15% ATK." },
      ghiaccio: { nome:"Zero Assoluto", bonus:["+10% congelamento", "+20% congelamento", "+30% congelamento"], evoluta:"+30% congelamento; i nemici congelati subiscono +50% danni." },
      drago: { nome:"Intimidazione", bonus:["-3% ATK avversario", "-6% ATK avversario", "-10% ATK avversario"], evoluta:"-15% ATK avversario a inizio battaglia." },
      folletto: { nome:"Favola", bonus:["Cura 3% HP ogni turno", "Cura 6% HP ogni turno", "Cura 10% HP ogni turno"], evoluta:"Cura 30% HP ogni turno e 100% HP ogni 3 turni." },
      coleottero: { nome:"Sciame", bonus:["Clone con 30% HP", "Clone con 60% HP", "Clone con 100% HP"], evoluta:"Clone con 150% HP davanti alla squadra." }
    },
    campagne: []
  },
  avventura: {
    id: "avventura",
    nome: "Modalità Avventura",
    famiglia: "avventura",
    descrizione: "La prima campagna completa, composta da 10 piani.",
    tipo: "campagna",
    max_piani: 10,
    mappa: "avventura_01",
    regioni: [
      {
        id: "kanto",
        nome: "Kanto",
        descrizione: "La prima regione dell'Avventura.",
        starter: [1, 4, 7],
        disponibile: true
      }
    ],
    ricompensa_finale: 1000,
    piani: [
      {
        piano: 1, nome: "Percorso 1", categoria: "bosco", sfondo: "Bosco.png",
        livelli: { min: 5, max: 5 }, bossLevel: 10,
        wilds: ["Rattata", "Pidgey"],
        bossRule: "counterStarter"
      },
      {
        piano: 2, nome: "Bosco Smeraldo", categoria: "bosco", sfondo: "Bosco.png",
        livelli: { min: 15, max: 15 }, bossLevel: 20,
        wildFilter: { typesAny:["erba"], stage:1 },
        bossPair: ["Butterfree", "Beedrill"]
      },
      {
        piano: 3, nome: "Monte Luna", categoria: "grotta", sfondo: "Grotta.png",
        livelli: { min: 25, max: 25 }, bossLevel: 30,
        wildFilter: { typesAny:["terra","roccia"], include:["Zubat","Clefairy"] },
        bossPair: ["Kabuto", "Omanyte"]
      },
      {
        piano: 4, nome: "Centrale Elettrica", categoria: "torre", sfondo: "TorreElettrica.png",
        livelli: { min: 35, max: 35 }, bossLevel: 40,
        wildFilter: { typesAny:["elettro"] },
        // 50% coppia Voltorb/Electrode, 50% Zapdos singolo.
        bossAlternatives: [["Voltorb", "Electrode"], ["Zapdos"]]
      },
      {
        piano: 5, nome: "MN Anna", categoria: "acqua", sfondo: "Acqua.png",
        livelli: { min: 45, max: 45 }, bossLevel: 50,
        wildFilter: { typesAny:["acqua"] },
        boss: ["Kingler"]
      },
      {
        piano: 6, nome: "Torre Pokémon", tipo: "Torre Infestata", categoria: "torre", sfondo: "TorrePokemon.png",
        livelli: { min: 55, max: 55 }, bossLevel: 60,
        wildFilter: { typesAny:["spettro"] },
        bossPair: ["Marowak", "Cubone"]
      },
      {
        piano: 7, nome: "Zona Safari", categoria: "safari", sfondo: "Safari.png",
        livelli: { min: 65, max: 65 }, bossLevel: 70,
        wilds: ["Chansey", "Kangaskhan", "Scyther", "Tauros"],
        bossPair: ["Dragonair", "Dratini"]
      },
      {
        piano: 8, nome: "Isole Spuma", categoria: "grotta", sfondo: "Grotta.png",
        livelli: { min: 75, max: 75 }, bossLevel: 80,
        wildFilter: { typesAny:["roccia","terra","acqua"] },
        bossPair: ["Tentacruel", "Tentacool"]
      },
      {
        piano: 9, nome: "Villa Pokémon", categoria: "torre", sfondo: "Torre.png",
        livelli: { min: 85, max: 85 }, bossLevel: 90,
        wildFilter: { typesAny:["fuoco"] },
        bossRule: "dittoMew"
      },
      {
        piano: 10, nome: "Via Vittoria", categoria: "grotta", sfondo: "Grotta.png",
        livelli: { min: 95, max: 95 }, bossLevel: 100,
        wildFilter: { stage:3 },
        bossRule: "discardedStartersOrMoltres", finale: true
      }
    ]
  }
};

// Campagna tecnica: replica esatta di Kanto, separata da Avventura.
window.PokeMisteryRL_Modes.DB_MODES.test = JSON.parse(JSON.stringify(
  window.PokeMisteryRL_Modes.DB_MODES.avventura
));
window.PokeMisteryRL_Modes.DB_MODES.test.id = "test";
window.PokeMisteryRL_Modes.DB_MODES.test.nome = "Test";
window.PokeMisteryRL_Modes.DB_MODES.test.descrizione = "Modalità Test: stessa mappa della Campagna Kanto.";
window.PokeMisteryRL_Modes.DB_MODES.test.tipo = "campagna";
window.PokeMisteryRL_Modes.DB_MODES.test.famiglia = "campagne";
// Sandbox visivo indipendente: usa la stessa base tecnica, ma con HUD propria.
window.PokeMisteryRL_Modes.DB_MODES.test2 = JSON.parse(JSON.stringify(
  window.PokeMisteryRL_Modes.DB_MODES.test
));
window.PokeMisteryRL_Modes.DB_MODES.test2.id = "test2";
window.PokeMisteryRL_Modes.DB_MODES.test2.nome = "Test2";
window.PokeMisteryRL_Modes.DB_MODES.test2.descrizione = "Sandbox per provare la nuova schermata della squadra.";
// Curva Test: quattro Pokémon iniziali e sinergie richiedono incontri più alti,
// ma Partner e Starter crescono entrambi in modo affidabile.
[
  [5,11], [17,23], [29,35], [41,47], [53,59],
  [65,71], [77,83], [89,95], [101,107], [113,119]
].forEach(([min, bossLevel], index) => {
  const floor = window.PokeMisteryRL_Modes.DB_MODES.test.piani[index];
  floor.livelli = { min, max:min };
  floor.bossLevel = bossLevel;
  const test2Floor = window.PokeMisteryRL_Modes.DB_MODES.test2.piani[index];
  test2Floor.livelli = { min, max:min };
  test2Floor.bossLevel = bossLevel;
});
window.PokeMisteryRL_Modes.DB_MODES.campagne.campagne = [
  { id:"test", nome:"Test", descrizione:"Replica della campagna Kanto per testare le regole Campagne.", disponibile:true },
  { id:"test2", nome:"Test2", descrizione:"Sandbox della nuova schermata squadra.", disponibile:true }
];

window.PokeMisteryRL_Modes.get = function(modeId){
  return window.PokeMisteryRL_Modes.DB_MODES[
    String(modeId || "").trim().toLowerCase()
  ] || null;
};

// Restituisce le sinergie attive della squadra per una Campagna.
// I punti dipendono dallo stadio: 1 / 4 / 9. Le soglie sono 2 / 5 / 9 / 14.
window.PokeMisteryRL_Modes.getCampaignSynergies = function(roster){
  const mode = window.PokeMisteryRL_Modes.get("campagne");
  const table = mode?.sinergie_tipi || {};
  const rules = mode?.regole?.sinergie_tipologia || {};
  const stagePoints = rules.punti_per_stadio || { 1:1, 2:4, 3:9 };
  const thresholds = rules.soglie_punti || { 1:2, 2:5, 3:9, 4:14 };
  const pointsByType = {};
  const membersByType = {};
  (Array.isArray(roster) ? roster : []).filter(Boolean).forEach(pokemon => {
    const stage = Math.max(1, Math.min(3, Number(pokemon.stage) || 1));
    const points = Number(stagePoints[stage]) || 1;
    (pokemon.tipi || []).forEach(tipo => {
      const key = String(tipo || "").toLowerCase();
      if(!table[key]) return;
      pointsByType[key] = (pointsByType[key] || 0) + points;
      membersByType[key] = (membersByType[key] || 0) + 1;
    });
  });
  return Object.entries(pointsByType).map(([tipo, points]) => {
    const data = table[tipo];
    const level = points >= thresholds[4] ? 4
      : points >= thresholds[3] ? 3
      : points >= thresholds[2] ? 2
      : points >= thresholds[1] ? 1 : 0;
    if(!level) return null;
    const evolved = level === 4;
    return {
      tipo,
      count: level,
      membri: membersByType[tipo] || 0,
      punti: points,
      livello: level,
      stato: evolved ? "evoluta" : `liv${level}`,
      nome: evolved ? data.nome : null,
      effetto: evolved ? data.evoluta : data.bonus[Math.max(0, level - 1)]
    };
  }).filter(Boolean).map(entry => ({
    ...entry,
    stato: entry.livello === 4 ? "evoluta" : `liv${entry.livello}`,
    effetto: entry.livello === 4
      ? (table[entry.tipo].evoluta || "Forma 3+ attiva")
      : (table[entry.tipo].bonus?.[entry.livello - 1] || "Bonus attivo")
  }));
};

window.PokeMisteryRL_Modes.getFloor = function(modeId, floor){
  const mode = window.PokeMisteryRL_Modes.get(modeId);
  return mode?.piani?.find(entry => Number(entry.piano) === Number(floor)) || null;
};

window.PokeMisteryRL_Modes.getFloorBackground = function(modeId, floor){
  const floorData = window.PokeMisteryRL_Modes.getFloor(modeId, floor);
  if(floorData?.sfondo) return `./img/${floorData.sfondo}`;
  const category = floorData?.categoria;
  return category
    ? window.PokeMisteryRL_Modes.SFONDI_CATEGORIA[category] || null
    : null;
};

window.DB_MODES = window.PokeMisteryRL_Modes.DB_MODES;
