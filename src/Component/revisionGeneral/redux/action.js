export const supprimer = (index) => {
  return { type: "supprimer", pyload: index };
};

export const ajouter = (person) => {
  return { type: "ajouter", pyload: person };
};

export const modifier = (index, person) => {
  return { type: "modifier", pyload: { index, person } };
};

export const changeMode = (mode) => {
    return {type: "changeMode", pyload: mode}
}