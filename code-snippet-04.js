
function generate(provider, cardType, concessionType, startNumber) {
    const prefix = "97";
    const xx = provider.toString().padStart(2, '0');
    const yy = cardType.toString().padStart(2, '0');
    const zz = concessionType.toString().padStart(2, '0');
    
    const runningNumber = startNumber;
    const aaaa = runningNumber.toString().padStart(4, '0');
    const cardNumber = `${prefix}${xx}-${yy}${zz}-0000-${aaaa}`;
    
    return cardNumber;
}

const provider = 3; // Mokaru
const cardType = 2; // Alumni Card
const concessionType = 1; // Standard Common Card
const startNumber = 1;

const cardNumber = generate(provider, cardType, concessionType, startNumber);
console.log(cardNumber);
