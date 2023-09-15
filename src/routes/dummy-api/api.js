export async function fetchMockData() {
    // Stubbed API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
            {"id":"14g","url":"https://cdn2.thecatapi.com/images/14g.gif","width":216,"height":197},
            {"id":"1fb","url":"https://cdn2.thecatapi.com/images/1fb.jpg","width":480,"height":535},
            {"id":"2ls","url":"https://cdn2.thecatapi.com/images/2ls.jpg","width":500,"height":333},
            {"id":"43n","url":"https://cdn2.thecatapi.com/images/43n.png","width":634,"height":414}
        ]);
      }, 1000); // 1-second delay
    });
  }
