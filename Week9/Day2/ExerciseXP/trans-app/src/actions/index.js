export const insertToList = (arr, i) => {
  return {
    type: "INSERT",
    payload: arr,
    index: i,
  };
};

export const Update = (data) => {
  //change the transInput
  return {
    type: "UPDATE",
    payload: data,
  };
};

export const updateIndex = (index) => {
  //update the index of the changedinput?
  return {
    type: "UPDATE-INDEX",
    payload: index,
  };
};

export const deleteTrans = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
