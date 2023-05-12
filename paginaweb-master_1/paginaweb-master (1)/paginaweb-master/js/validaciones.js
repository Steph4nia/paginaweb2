

/*Validar nombre*/

function validarNombre(nombre)
{
    if(nombre.length >=3 && nombre.length <=20)
    {
        return true;
    }

    return false;
}

/*Validar nombre*/

function validarCiudad(ciudad)
{
    if(ciudad.length >=3 && ciudad.length <=20)
    {
        return true;
    }

    return false;
}
/*Validar apellido paterno*/

function validarAp(apellido_paterno)
{
    if(apellido_paterno.length >=3 && apellido_paterno.length <=20)
    {
        return true;
    }

    return false;
}

/*Validar apellido materno*/

function validarAm(apellido_materno)
{
    if(apellido_materno.length >=3 && apellido_materno.length <=20)
    {
        return true;
    }

    return false;
}

/*Valdidar comuna*/

function validarComuna(comuna)
{
    if(comuna != "" )
    {
        return true;
    }

    return false;
}

/*Valdidar tipo de Obra*/

function validarObra(obra)
{
    if(obra != "" )
    {
        return true;
    }

    return false;
}

function validarCelular(celular) /*validar celular */ 
{
    if(celular.length >= 9  && celular.length <= 12)
    {
        return true;
    }

    return false;
}

/*Validar usuario*/

function validarUsuario(usser)
{
    if(usser.length >=5 && usser.length <=20)
    {
        return true;
    }

    return false;
}


/*Valdidar correo*/

function validarCorreo(correo)
{
    if(correo != "" )
    {
        return true;
    }

    return false;
}

/*Valdidar contraseña*/

function validarContraseña(password)
{
    if(password != "" )
    {
        return true;
    }

    return false;
}

/*Valdidar descripcion*/

function validarDescripcion(descobra)
{
    if(descobra != "" )
    {
        return true;
    }

    return false;
}

function validarValor(valorObra) /*validar valor obra */ 
{
    if(valorObra != "" )
    {
        return true;
    }

    return false;
}

function validarComentario(comentario)
{
    if(comentario != "" )
    {
        return true;
    }

    return false;
}