function splitter(text) {
    let splitedText = text.split(/(?=[A-Z])/);
    
    console.log(splitedText.join(', '));
}

splitter('SSplitMeIfYouCanHaHaYouCantOrYouCan');
splitter('HoldTheDoor');
splitter('ThisIsSoAnnoyingToDo');