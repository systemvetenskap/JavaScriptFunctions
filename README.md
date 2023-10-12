# JavaScript labb 1, funktioner

För att den här labben ska fungera måste du ha installerat node på din dator.
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

Kontrollera att du har node installerat gemon att skriva `node -v` i din terminal. Node.js v18.x eller högre rekommenderas. 

## Instruktioner
Den här labben bygger på att du ska lösa ut vad ett antal funktioner ska genomföra (ibland kallade katas). Till varje funktion finns ett antal testfall kopplade. Börja med att studera vad dessa gör. Genom att titta på dessa borde du kunna lista ut vad funktionerna ska utföra.

Längst upp i testsviten finns en lista av de funktioner du ska utveckla:
```javascript
const { sum, multiply, isBelowZero, round, addingUp, findMinMax, afterXmasEve2020, sortByStringLength,
     charCounter, numbersOnly, sortNumbers, personFactory, doublePrice, and, removeLeadingTrailing, getKeysAndValues}
```
För att testerna ska kunna hitta dessa funktioner måste de exporteras från din labb.js. Dessa ligger bortkommenterade längst ner i den filen.

```javascript
 describe("sum returns sum of two integers", () => {
    it("should return the sum of two positive numbers", () => {
      const result = sum(2, 3);
      expect(result).toBe(5);
    });
```
Först kommer en kortare text som beskriver själva testet (Describe)
Därefter kommer alla test. Till var och en utav dessa finns också en kortare beskrvning av det förväntade utfallet från testet. I det här exemplet ovan förväntas summant av talen 2 och 3 att bli 5.

Det går oftast att "koda runt" ett test för att det ska passera. Men lösningar av typen nedan är inte ok:
```javascript
function sum(a, b) {
    if (a === 1 && b === 2) return 3
    if (a === 7 && b === 3) return 10
}
```

## Kör tester
när du skrev npm install bör du samtidigt ha installerat testramverket Jest.


1. För att köra ett test kan du skriva `npm run test` i terminalen. Då körs testerna och du får se resultatet i terminalen.. 

Tips! Du kan köra testerna kontinuerligt med kommandot  `jest --watchAll`.





