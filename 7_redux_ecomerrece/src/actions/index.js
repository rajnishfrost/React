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

export const deleteData = (data) => {
 
  return {
    type : "deleteData" ,
    data : data
  }

}



export const savingAPI = (data) => {
 
  return {
    type : "savingAPI" ,
    data : data
  }
  
}
