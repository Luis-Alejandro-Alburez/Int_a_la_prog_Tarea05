let user1 = {
    nombre: 'Paola',
    apellido: 'Ortiz',
    email: 'paola@company.ru',
    direccion: {
        municipio: 'Jocotenango',
        calle: 'Calle ancha',
        numero: 25,
    },
    estado: true,
    recuperarClave: function() {
        console.log('Recuperar clave...')
    }
};

let user2 = {
    nombre: 'Luis',
    apellido: 'Alburez',
    email: 'alburezluis@galileo.edu',
    direccion: {
        municipio: 'Antigua',
        calle: '4ta calle',
        numero: 21,
    },
    estado: true,
    recuperarClave: function() {
        console.log('Recuperar clave...')
    }
};

let user3 = {
    nombre: 'Juan',
    apellido: 'Alburez',
    email: 'alburezjuan@galileo.edu',
    direccion: {
        municipio: 'Antigua',
        calle: '4ta calle',
        numero: 12,
    },
    estado: true,
    recuperarClave: function() {
        console.log('Recuperar clave...')
    }
};

let user4 = {
    nombre: 'Rosa',
    apellido: 'Samayoa',
    email: 'rosayoa22@galileo.edu',
    direccion: {
        municipio: 'Antigua',
        calle: '4ta calle',
        numero: 6,
    },
    estado: true,
    recuperarClave: function() {
        console.log('Recuperar clave...')
    }
};

let user5 = {
    nombre: 'Rosa',
    apellido: 'Corado',
    email: 'coradorosa@galileo.edu',
    direccion: {
        municipio: 'Antigua',
        calle: '5ta Calle',
        numero: 18
    },
    estado: true,
    recuperarClave: function() {
        console.log('Recuperar clave...')
    }
};

let user6 = {
    nombre: 'Ana',
    apellido: 'Hurtarte',
    email: 'hurtarteana@galileo.edu',
    direccion:{
        municipio: 'Jocotenango',
        calle: 'Calle Real',
        numero: 20
    },
    estado: true,
    recuperarClave: function() {
        console.log('Recuperar clave...')
    }
};

user1.dpi = 1111222223333
user1.cambiarDireccion = function() {
    console.log('Cambiar dirección...')
}

user2.dpi = 1111222223334
user2.cambiarDireccion = function() {
    console.log('Cambiar dirección...')
}

user3.dpi = 1111222223335
user3.cambiarDireccion = function() {
    console.log('Cambiar dirección...')
}

user4.dpi = 1111222223336
user4.cambiarDireccion = function() {
    console.log('Cambiar dirección...')
}

user5.dpi = 1111222223337
user5.cambiarDireccion = function() {
    console.log('Cambiar dirección...')
}

user6.dpi = 1111222223338
user6.cambiarDireccion = function() {
    console.log('Cambiar dirección...')
}

console.log('Usuario: \n',
    user1.nombre, '\n', 
    user1.apellido, '\n', 
    user1.email, '\n',
    user1.direccion.municipio, '\n', 
    user1.direccion.calle, '\n', 
    user1.direccion.numero, '\n', 
    user1.estado, '\n',
    user1.dpi, '\n'
);
user1.recuperarClave();
user1.cambiarDireccion();

console.log('Usuario: \n',
    user2.nombre, '\n', 
    user2.apellido, '\n', 
    user2.email, '\n',
    user2.direccion.municipio, '\n', 
    user2.direccion.calle, '\n', 
    user2.direccion.numero, '\n', 
    user2.estado, '\n',
    user2.dpi, '\n'
);
user2.recuperarClave();
user2.cambiarDireccion();

console.log('Usuario: \n',
    user3.nombre, '\n', 
    user3.apellido, '\n', 
    user3.email, '\n',
    user3.direccion.municipio, '\n', 
    user3.direccion.calle, '\n', 
    user3.direccion.numero, '\n', 
    user3.estado, '\n',
    user3.dpi, '\n'
);
user3.recuperarClave();
user3.cambiarDireccion();

console.log('Usuario: \n',
    user4.nombre, '\n', 
    user4.apellido, '\n', 
    user4.email, '\n',
    user4.direccion.municipio, '\n', 
    user4.direccion.calle, '\n', 
    user4.direccion.numero, '\n', 
    user4.estado, '\n',
    user4.dpi, '\n'
);
user4.recuperarClave();
user4.cambiarDireccion();

console.log('Usuario: \n',
    user5.nombre, '\n', 
    user5.apellido, '\n', 
    user5.email, '\n',
    user5.direccion.municipio, '\n', 
    user5.direccion.calle, '\n', 
    user5.direccion.numero, '\n', 
    user5.estado, '\n',
    user5.dpi, '\n'
);
user5.recuperarClave();
user5.cambiarDireccion();

console.log('Usuario: \n',
    user6.nombre, '\n', 
    user6.apellido, '\n', 
    user6.email, '\n',
    user6.direccion.municipio, '\n', 
    user6.direccion.calle, '\n', 
    user6.direccion.numero, '\n', 
    user6.estado, '\n',
    user6.dpi, '\n'
);
user6.recuperarClave();
user6.cambiarDireccion();