function* generator(arr) {
    let ball = 0;
    for (const v of arr)
        ball += Number(v.answer === (yield {question: v.question}));
    return ball;
}

const gen = generator([
    {question: '2*2', answer: 4},
    {question: '3*3', answer: 9},
    {question: '4*4', answer: 16}
]);
let test = gen.next();
while (!test.done)
    test = gen.next(parseInt(prompt(test.value.question)));
alert('Your ball: ' + test.value);