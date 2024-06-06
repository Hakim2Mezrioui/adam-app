export const addEmploye = (payload) => {
  return { type: "add", payload };
};

export const editEmploye = (payload) => {
  return { type: "edit", payload };
};

export const updateEmploye = (payload) => {
  return { type: "update", payload };
};

export const deleteEmploye = (payload) => {
  return { type: "delete", payload };
};
