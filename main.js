const list=[
    {
        nombre:'Maria',
        numDocumento: '2345',
        cont: '678',
        tipoUsuario:'cliente'
    },
    {
        nombre:'Tatiana',
        numDocumento: '5678',
        cont: '123',
        tipoUsuario:'administrador'
    },
    {
        nombre: 'Stiven',
        numDocumento: '9123',
        cont: '890',
        tipoUsuario:'cliente'
    },
    {
        nombre:'Camilo',
        numDocumento: '4567',
        cont: '456',
        tipoUsuario:'administrador'
    },
];
console.log(list);

let bill=[
    {
        valorBilletes: '5',
        cantidadBilletes: 0,
        total:0,
    },
    {
        valorBilletes: '10',
        cantidadBilletes: 0,
        total:0,
    },
    {
        valorBilletes: '20',
        cantidadBilletes: 0,
        total:0,
    },
    {
        valorBilletes: '50',
        cantidadBilletes: 0,
        total:0,
    },
    {
        valorBilletes: '100',
        cantidadBilletes: 0,
        total:0,
    },
    {
        SumaTotal:0
    }
];
//console.log(bill);


while (true) {
    const docIngresado=prompt('Ingrese su numero de documento');
    const claveIngresada=prompt('Ingrese su contraseña');
    let confirmUser=list.find(
        (element)=>element.numDocumento===docIngresado);
    if (confirmUser && (confirmUser.cont === claveIngresada) && (confirmUser.tipoUsuario==='administrador')){
        let writeChange1=Number(prompt('Ingrese la cantidad de billetes de 5'))
        bill.splice(0,1,{valorBilletes:'5',cantidadBilletes:writeChange1,total:(writeChange1*5)});
        let writeChange2=Number(prompt('Ingrese la cantidad de billetes de 10'))
        bill.splice(1,1,{valorBilletes:'10',cantidadBilletes:writeChange2,total:(writeChange2*10)});
        let writeChange3=Number(prompt('Ingrese la cantidad de billetes de 20'))
        bill.splice(2,1,{valorBilletes:'20',cantidadBilletes:writeChange3,total:(writeChange3*20)});
        let writeChange4=Number(prompt('Ingrese la cantidad de billetes de 50'))
        bill.splice(3,1,{valorBilletes:'50',cantidadBilletes:writeChange4,total:(writeChange4*50)});
        let writeChange5=Number(prompt('Ingrese la cantidad de billetes de 100'))
        bill.splice(4,1,{valorBilletes:'100',cantidadBilletes:writeChange5,total:(writeChange5*100)});
        bill.splice(5,1,{SumaTotal:(writeChange1*5)+(writeChange2*10)+(writeChange3*20)+(writeChange4*50)+(writeChange5*100)});
        console.log(bill);
        break;
    }else if(confirmUser && (confirmUser.cont === claveIngresada) && (confirmUser.tipoUsuario==='cliente')){
        console.log('es un cliente');
    }else if( confirmUser !==docIngresado || (confirmUser.cont !== claveIngresada)){
        alert('el usuario no existe');
    }
    break;
}



