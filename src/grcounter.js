export function goodRusCounter() {
    const itteratorRusni = 0.0030493233618234;
    const date = new Date('2022-02-24')
    const warTimeStemp = Math.floor(date.getTime() / 1000);
    const today = Math.floor(new Date().getTime() / 1000)
    return ((today - warTimeStemp) * itteratorRusni).toFixed(2)
}