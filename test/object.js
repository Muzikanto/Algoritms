export function testObject() {
    function Animal(data, proto) {
        for (let key in data)
            this[key] = data[key];
        if (proto !== undefined) {
            this.__proto__ = proto;
        }
    }

    const animal = new Animal({walk: true, eat: true});
    const herbivore = new Animal({herbivore: true}, animal);
    const rabbit = new Animal({isRabbit: true}, herbivore);


    String.prototype.test = function(str)  {
        return str === this
    };


    console.log("12345".test("54321"));
}