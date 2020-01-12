class Car {
    static getSpecs(car) {
        console.log('car:', car);
    }

    /*
     * Конструктор получает объект настроек.
     *
     * Добавь свойства будущеего экземпляра класса:
     *  speed - текущая скорость, изначально 0
     *  price - цена автомобиля
     *  maxSpeed - максимальная скорость
     *  isOn - заведен ли автомобиль, значения true или false. Изначально false
     *  distance - общий киллометраж, изначально 0
     */

    constructor({
        speed = 0,
        price,
        maxSpeed,
        isOn = false,
        distance = 0
    }) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }

    /*
     * Добавь геттер и сеттер для свойства price,
     * который будет работать с свойством цены автомобиля.
     */

    get Price() {
        return this.price;
    }

    set Price(price) {
        this.price = price;
    }

    /*
     * Добавь код для того чтобы завести автомобиль
     * Записывает в свойство isOn значение true
     */

    turnOn() {
        this.isOn = true;
    }

    /*
     * Добавь код для того чтобы заглушить автомобиль
     * Записывает в свойство isOn значение false,
     * и сбрасывает текущую скорость в 0
     */

    turnOff() {
        this.speed = 0;
        this.isOn = false;
    }

    /*
     * Добавялет к свойству speed полученное значение,
     * при условии что результирующая скорость
     * не больше чем значение свойства maxSpeed
     */

    accelerate(value) {
        if (this.isOn === true && this.maxSpeed >= this.speed + value) {
            this.speed += value;
        }
    }

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */

    decelerate(value) {
        if (this.speed - value >= 0) {
            this.speed -= value;
        }
    }

    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */

    drive(hours) {
        if (this.isOn === true) {
            this.distance = this.speed * hours;
        }
    }
}

const mustang = new Car({
    maxSpeed: 200,
    price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

// тут не може бути швидкість 30, так як машина не заведена, тому швидкість 0

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000