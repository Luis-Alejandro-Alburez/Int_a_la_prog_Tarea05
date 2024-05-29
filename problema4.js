let User = function (nombre, apellido, email, municipio, calle, numero, estado, dpi) {
    let user = {};

    user.nombre = nombre;
    user.apellido = apellido;
    user.email = email;
    user.municipio = municipio;
    user.calle = calle;
    user.numero = numero;
    user.estado = estado;
    user.dpi = dpi;
    user.recuperarClave = function() {
        console.log('Recuperando clave...')
    };
    user.cambiarDireccion = function () {
        console.log('Cambiando dirección...')
    }

    return user;

};

let user1 = User('Paola', 'Ortiz', 'paola@company.ru', 'Jocotenango', 'Calle ancha', 25, true, 1111222223333)
let user2 = User('Luis', 'Alburez', 'alburezluis@galileo.edu', 'Antigua', '4ta calle', 21, true, 1111222223334)
let user3 = User('Juan', 'Alburez', 'alburezjuan@galileo.edu', 'Antigua', '4ta calle', 12, true, 1111222223335)
let user4 = User('Rosa', 'Samayoa', 'rosayoa22@galileo.edu', 'Antigua', '4ta calle', 6, true, 1111222223336)
let user5 = User('Rosa', 'Corado', 'coradorosa@galileo.edu', 'Antigua', '5ta Calle', 18, true, 1111222223337)
let user6 = User('Ana', 'Hurtarte', 'hurtarteana@galileo.edu', 'Jocotenango', 'Calle Real', 20, true, 1111222223338)

console.log('Usuario: \n',
    user1.nombre, '\n', 
    user1.apellido, '\n', 
    user1.email, '\n',
    user1.municipio, '\n', 
    user1.calle, '\n', 
    user1.numero, '\n', 
    user1.estado, '\n',
    user1.dpi, '\n'
);
user1.recuperarClave();
user1.cambiarDireccion();

console.log('Usuario: \n',
    user2.nombre, '\n', 
    user2.apellido, '\n', 
    user2.email, '\n',
    user2.municipio, '\n', 
    user2.calle, '\n', 
    user2.numero, '\n', 
    user2.estado, '\n',
    user2.dpi, '\n'
);
user2.recuperarClave();
user2.cambiarDireccion();

console.log('Usuario: \n',
    user3.nombre, '\n', 
    user3.apellido, '\n', 
    user3.email, '\n',
    user3.municipio, '\n', 
    user3.calle, '\n', 
    user3.numero, '\n', 
    user3.estado, '\n',
    user3.dpi, '\n'
);
user3.recuperarClave();
user3.cambiarDireccion();

console.log('Usuario: \n',
    user4.nombre, '\n', 
    user4.apellido, '\n', 
    user4.email, '\n',
    user4.municipio, '\n', 
    user4.calle, '\n', 
    user4.numero, '\n', 
    user4.estado, '\n',
    user4.dpi, '\n'
);
user4.recuperarClave();
user4.cambiarDireccion();

console.log('Usuario: \n',
    user5.nombre, '\n', 
    user5.apellido, '\n', 
    user5.email, '\n',
    user5.municipio, '\n', 
    user5.calle, '\n', 
    user5.numero, '\n', 
    user5.estado, '\n',
    user5.dpi, '\n'
);
user5.recuperarClave();
user5.cambiarDireccion();

console.log('Usuario: \n',
    user6.nombre, '\n', 
    user6.apellido, '\n', 
    user6.email, '\n',
    user6.municipio, '\n', 
    user6.calle, '\n', 
    user6.numero, '\n', 
    user6.estado, '\n',
    user6.dpi, '\n'
);
user6.recuperarClave();
user6.cambiarDireccion();