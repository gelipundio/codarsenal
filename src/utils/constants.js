const GAMES = {
  MW3: {
    name: "MW3",
    year: 2023,
    supported: true,
  },
  MW2: {
    name: "MW2",
    year: 2022,
    supported: false,
  },
  MW1: {
    name: "MW 2019",
    year: 2019,
    supported: false,
  },
};

const WEAPON_TYPES = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
  ZOMBIES: "ZOMBIES",
};

const WEAPON_CATEGORIES = {
  ASSAULT_FUSILE: {
    id: "ASSAULT_FUSILE",
    name: "Fusil de asalto",
    type: WEAPON_TYPES.PRIMARY,
  },
  COMBAT_FUSILE: {
    id: "COMBAT_FUSILE",
    name: "Fusil de combate",
    type: WEAPON_TYPES.PRIMARY,
  },
  SUB_FUSILE: {
    id: "SUB_FUSILE",
    name: "Subfusil",
    type: WEAPON_TYPES.PRIMARY,
  },
  SHOTGUNS: {
    id: "SHOTGUNS",
    name: "Escopetas",
    type: WEAPON_TYPES.PRIMARY,
  },
  LIGHT_MACHINE_GUN: {
    id: "LIGHT_MACHINE_GUN",
    name: "Ametralladoras ligeras",
    type: WEAPON_TYPES.PRIMARY,
  },
  TACTICAL_FUISILE: {
    id: "TACTICAL_FUISILE",
    name: "Fusiles tacticos",
    type: WEAPON_TYPES.PRIMARY,
  },
  SNIPERS: {
    id: "SNIPERS",
    name: "Fusil de presicion",
    type: WEAPON_TYPES.PRIMARY,
  },
  MELEE: {
    id: "MELEE",
    name: "Cuerpo a cuerpo",
    type: WEAPON_TYPES.PRIMARY,
  },

  GUNS: {
    id: "GUNS",
    name: "Pistolas",
    type: WEAPON_TYPES.SECONDARY,
  },
  KNIFES: {
    id: "KNIFES",
    name: "Cuchillos",
    type: WEAPON_TYPES.SECONDARY,
  },
  LUNCHERS: {
    id: "LUNCHERS",
    name: "Lanzadores",
    type: WEAPON_TYPES.SECONDARY,
  },
};

module.exports = {
  GAMES,
  WEAPON_TYPES,
  WEAPON_CATEGORIES,
};
