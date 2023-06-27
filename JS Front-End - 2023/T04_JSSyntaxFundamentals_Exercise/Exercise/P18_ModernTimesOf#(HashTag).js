function modernTimes(sentance) {
    const sentaceArr = sentance.split(" ");

    for (let index = 0; index < sentaceArr.length; index++) {
        let word = sentaceArr[index];
        
        if (word.includes("#") && word.length > 1) {
            let hashTagWord=word.replace('#', '');
            
            if (hashTagWord.match(/^[A-Za-z]*$/)) {
                console.log(hashTagWord);
            }
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');