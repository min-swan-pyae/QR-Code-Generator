import inquirer from 'inquirer'; //user input
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{ message: 'Type the URL : ', name: 'URL' }])
  .then((answer) => {
    const url = answer.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img1.png'));
    fs.writeFile('userInput.txt', url, (err) => {
      if (err) throw err;
    });
  })
  .catch((error) => {
    if (error.isTty) {
    } else {
    }
  });
