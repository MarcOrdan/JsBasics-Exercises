function isLandscape(width, height){
  return (width>height) ? true : false;
}
let Landscape =  isLandscape(40,50);
console.log(Landscape);