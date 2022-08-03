export const incNum = () => {
  return { type: "Increment" };
};

export const decNum = () => {
  return { type: "Decrement" };
};

export const savingData = (data) => {
 
  return {
    type : "savingData" ,
    data : data
  }
}
