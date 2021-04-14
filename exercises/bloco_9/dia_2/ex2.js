const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const arr = [];
    const num1 = Math.ceil(Math.random() * 50);
    const num2 = Math.ceil(Math.random() * 50);
    const num3 = Math.ceil(Math.random() * 50);
    const num4 = Math.ceil(Math.random() * 50);
    const num5 = Math.ceil(Math.random() * 50);
    const num6 = Math.ceil(Math.random() * 50);
    const num7 = Math.ceil(Math.random() * 50);
    const num8 = Math.ceil(Math.random() * 50);
    const num9 = Math.ceil(Math.random() * 50);
    const num10 = Math.ceil(Math.random() * 50);
    arr.push(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10);
    const arrSquared = arr.map((num) => num * num);
    const arrSum = arrSquared.reduce((acc, cur) => acc + cur);
    if (arrSum < 8000) {
      resolve(arrSum)
    } else {
      reject(arrSum)
    }
  }).then((respon) => {
    console.log([respon / 2, respon / 3, respon / 5, respon / 10])
    return [respon / 2, respon / 3, respon / 5, respon / 10]
  })
  .then((resp) => {
    console.log(resp.reduce((acc, cur) => acc + cur))
  })
  .catch((error) => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
};

fetchPromise()