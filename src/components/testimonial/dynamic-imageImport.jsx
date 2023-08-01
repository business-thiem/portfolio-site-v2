function importAll(r) {

  
    // // below is someone else's code to loop thru assets dynamically
    // //see: https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b 

    //  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
  
  
    // this is my modification
    let images = [];
    let temp = {}
     r.keys().forEach((item, index) => {
        images[index] = r(item);
     })

     images.push(temp);

    return images
   }
const images = importAll(require.context('../../assets/sampleHeadshots', false, /\.(png|jpe?g|svg)$/));

export default images;