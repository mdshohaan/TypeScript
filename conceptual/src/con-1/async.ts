{
  //  Asynchoronous

  const myPromise: Promise<string> = new Promise((resolve, reject) => {
    async function myAsyncFunction() {
      try {
        const value = await myPromise;
        console.log("Promise resolved with value: " + value);
      } catch (error) {
        console.error("Promise rejected with error: " + error);
      }
    }
  });

  //
}
