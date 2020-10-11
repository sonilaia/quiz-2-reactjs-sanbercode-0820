function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve,reject){
        var books = [
            {name: "shinchan", totalPage: 50, isColorful: true},
            {name: "Kalkulus", totalPage: 250, isColorful: false},
            {name: "doraemon", totalPage: 40, isColorful: true},
            {name: "algoritma", totalPage: 300, isColorful: false},
        ]
        if(amountOfPage>0){
            resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason = new Error("maaf parameter salah")
            reject(reason);
        }
    });
}

filterBooks(books[0], (item1) =>{
    filterBooks(item1, books[1], (item2) => {
        filterBooks(item2, books[2], (item3) =>{
            filterBooksPromise(item3, books[3], (item4)=>{
                console.log(item4)
            })
        })
    })
})