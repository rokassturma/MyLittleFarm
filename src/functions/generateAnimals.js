import rand from './randomNumber'

export default function generateAnimals(type) {
    let animals = [];
    let count = rand(5, 20);

    for (let i = 0; i < count; i++) {
        let number = rand(0, 9999999).toString();
        if (number.length < 7) {
            while (number.length < 7) {
                number = '0' + number;
            }
        }
        let prefix = type === 'sheep' ? 'S' : 'C';
        let side = type === 'sheep' ? 'right' : 'left';
        let completeId = prefix + number;
        let animal = {
            id: completeId,
            type: type,
            side: side
        }
        animals.push(animal);
    }

    return animals;
}