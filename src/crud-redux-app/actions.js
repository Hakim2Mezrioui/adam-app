export const ajouter = (stagiaire) => {
    return {type: "ajouter", payload: stagiaire}
}

export const supprimer = (id) => {
    return {type: "supprimer", payload: id}    
}

export const editer = (stagiaire) => {
    return {type: "editer", payload: stagiaire}
}