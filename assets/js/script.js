class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `Nombre del dueñ@: ${this.nombre}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}`;
    }
}

class Animal {
    constructor(tipo) {
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }
}

class Mascota extends Animal {
    constructor(nombre, tipo) {
        super(tipo);
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

const tiposMascota = {
    perro: 'Perro',
    gato: 'Gato',
    conejo: 'Conejo',
};

const form = document.querySelector('form');
const resultado = document.querySelector('#resultado ul');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const propietarioInput = document.querySelector('#propietario');
    const telefonoInput = document.querySelector('#telefono');
    const direccionInput = document.querySelector('#direccion');
    const nombreMascotaInput = document.querySelector('#nombreMascota');
    const tipoInput = document.querySelector('#tipo');
    const enfermedadInput = document.querySelector('#enfermedad');


    const propietario = new Propietario(propietarioInput.value, direccionInput.value, telefonoInput.value);


    const tipoMascota = tiposMascota[tipoInput.value];
    const mascota = new Mascota(nombreMascotaInput.value, tipoMascota);


    const datosPropietario = document.createElement('li');
    datosPropietario.textContent = `${propietario.datosPropietario()}`;
    resultado.appendChild(datosPropietario);

    const datosMascota = document.createElement('li');
    datosMascota.textContent = `El tipo de animal es un: ${mascota.tipo}, Nombre de la mascota: ${mascota.nombre}, Enfermedad/Motivo: ${enfermedadInput.value}`;
    resultado.appendChild(datosMascota);

    form.reset();
});
