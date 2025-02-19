
const Tesseract = require('tesseract.js');

export async function verifyCodeFromImage(imagePath) {
    const result = await Tesseract.recognize(imagePath, 'eng', {
        logger: (m) => console.log(m),
      });
    
      console.log('Recognized text:', result.data.text);
      return result.data.text;
}