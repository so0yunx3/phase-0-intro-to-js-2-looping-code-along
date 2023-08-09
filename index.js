function writeCards (name, event){
    const messages = [];
    for (let i = 0; i < name.length; i++){
    const message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;

    messages.push(message);
    }
    return messages;
}
console.log(writeCards(['Tim', 'Jim', 'Bob'], 'birthday'));

function countDown(){
    let countDown = 10;
    while (countDown >= 0){
        console.log(countDown--);
    }
}