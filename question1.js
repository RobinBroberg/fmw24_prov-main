// 1. Trängselskatt (3p)
// Skriv en funktion totalTax som räknar ut den totala trängselskatten som ska betalas
// för en array av bil-objekt. Varje bil-objekt har ett registreringsnummer och ett
// klockslag då de passerade betalstationen.

// Här är kostnader för olika tider:
// 6:00 - 6:59: 30 kr
// 7:00 - 7:59: 45 kr
// 8:00 - 8:59: 30 kr
// 9:00 - 18:59: 20 kr
// Övriga tider är gratis.

// Använd funktionen getHour för att plocka ut timmen ur ett klockslag.
// T.ex. "17:45" ger resultatet 17.
function getHour(time) {
  return parseInt(time.split(":")[0]);
}

// Arrayen av bilar följer denna struktur:
const taxedCars = [
  { registrationNumber: "TUU893", time: "6:30" },
  { registrationNumber: "YNK023", time: "7:10" },
  { registrationNumber: "BHN113", time: "8:30" },
  { registrationNumber: "LOP733", time: "18:02" },
  { registrationNumber: "MGY803", time: "23:30" },
];

function totalTax(cars) {
  let totalSum = 0;
  for (let i = 0; i < cars.length; i++) {
    const time = cars[i].time;
    hourTime = getHour(time);
    if (hourTime >= 6 && hourTime < 7) {
      totalSum += 30;
    } else if (hourTime >= 7 && hourTime < 8) {
      totalSum += 45;
    } else if (hourTime >= 8 && hourTime < 9) {
      totalSum += 30;
    } else if (hourTime >= 8 && hourTime < 19) {
      totalSum += 20;
    }
  }
  return totalSum;
}

console.log(totalTax(taxedCars));

module.exports = totalTax;
