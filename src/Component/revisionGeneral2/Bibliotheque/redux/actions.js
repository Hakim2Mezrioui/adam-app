export function ajouterLivre(livre) {
  return { type: "ajouter", pyload: livre };
}

export function supprimerLivre(id) {
  return { type: "supprimer", pyload: id };
}

