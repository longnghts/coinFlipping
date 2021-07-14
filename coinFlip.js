function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    
function fiveHeads() {
    let headsCount = 0;
    let attempts = 0;
        return new Promise( (resolve, reject) => {
            while (headsCount < 5) {
                attempts++;
                if (tossCoin() == "heads") {
                    headsCount++;
                }
                if (attempts == 100) {
                    reject('Attempts is over 100!');
                }
            } resolve('We made it!')
        });
}
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );

