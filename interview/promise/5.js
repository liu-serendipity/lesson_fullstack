Promise.resolve(1)
    .then(res => {
        console.log(res);
        return 2  // then  1. promise   2. Promise.resolve(2)
    })
    .then(res => {
        console.log(res);
    })