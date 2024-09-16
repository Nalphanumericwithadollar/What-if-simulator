function simulate() {
    const input = document.getElementById('scenario').value;
    const resultDiv = document.getElementById('result');

    if (input.trim() === "") {
        resultDiv.innerHTML = "Please enter a scenario!";
        return;
    }

    // Simple random simulation output
    const outcomes = [
        `If ${input}, humans would develop amazing flight paths.`,
        `If ${input}, society would have to redesign cities.`,
        `If ${input}, gravity would behave differently.`,
        `If ${input}, new laws of physics would emerge!`,
        `If ${input}, we'd probably not need cars anymore.`
    ];

    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    resultDiv.innerHTML = randomOutcome;
}
