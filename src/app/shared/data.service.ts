export class DataService {
  getDetails2() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
    return resultPromise;
  }

  getDetails3() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('So much Data');
      }, 1400);
    });
    return resultPromise;
  }
}
