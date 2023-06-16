const cards = [`Guadalupe`, `Ollie`, `Aki`]

function writeCards(cards){
    const messages = [];
    for (let i = 0; i < cards.length; i++){
        const message = `Thank you, ${cards[i]}, for the wonderful surprise gift!`;
        messages.push(message);
    }
    return messages;
}
writeCards(cards)

function countDown(x){
    for (let i = x; i > -1; i--){
        console.log(i)
    } 
}