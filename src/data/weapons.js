const { WEAPON_CATEGORIES, GAMES } = require("../utils/constants");

module.exports = {
  SVA_545: {
    name: "SVA 545",
    category: WEAPON_CATEGORIES.ASSAULT_FUSILE.id,
    game: GAMES.MW3,
    maxLevel: 30,
    image: "",
    description:
      "Este sistema de armas dispara los dos primeros proyectiles casi al mismo tiempo, lo que la convierte en un arma increíblemente letal en manos con destreza",
  },
  RAM_7: {
    name: "RAM-7",
    category: WEAPON_CATEGORIES.ASSAULT_FUSILE.id,
    game: GAMES.MW3,
    maxLevel: 27,
    image: "",
    description:
      "Este fusil de asalto tipo bullpup es excepcionalmente compacto, tiene un armazón ligero de polímero y es de un versátil calibre 5.56 Se desbloquea en el sector A7",
  },
  MTZ_556: {
    name: "MTZ-556",
    category: WEAPON_CATEGORIES.ASSAULT_FUSILE.id,
    game: GAMES.MW3,
    maxLevel: 26,
    image: "",
    description:
      "Con una cadencia de disparo excepcional para un arama de calibre 5.56, este fusil de asalto cuerpo a cuerpo destaca a corta y media distancia.",
  },
};
