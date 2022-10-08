interface Rectangle {
    height: number,
    width: number
  }
  
  interface CRectangle extends Rectangle {
    color: string
  }
  
  const cor: CRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(cor);