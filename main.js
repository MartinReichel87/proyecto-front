const nombre=document.querySelector('#nombre');
const apellido=document.querySelector('#apellido');
const email= document.querySelector('#email');

const cantidad = document.querySelector('#cantidad');
const categoria = document.querySelector('#categoria');
const resumen = document.querySelector('#submit');
const parrafo_total= document.querySelector('#total_a_pagar');
const borrar= document.querySelector('#borrar');

function calculo_a_pagar(cant , cat){
    
    let precio=200
    let descuento=0;
    

    if (cat==0) {
     return(alert('Seleccione una categoria'));
        
    }
    

   if (cat==1) {
    return(precio*cant);
    
   }
    
    if (cat==2) {
        return (precio*cant*0.2);
    }
    if (cat==3) {
        return (precio*cant*0.5);
    }
    if (cat==4) {
        return (precio*cant*0.85);
    }
}


resumen.addEventListener('click', (elemento)=>{
    elemento.preventDefault();

    console.log(typeof(nombre.value));
    console.log(apellido.value);
    console.log(email.value);
    console.log(cantidad.value);
    console.log(categoria.value);
    if (nombre.value==='') 
        {
         alert('Por favor escribi tu nombre');
        }
     else 
        {
         if (apellido.value==='') 
            {
             alert('Por favor escribi tu apellido');
            } 
         else 
            {
             if (email.value==='') 
                {
                 alert('Por favor escribi tu email');
                } 
             else 
                {
                 if (cantidad.value==='') 
                    {
                        alert('ingrese la cantidad de tickets');
                    } 
                 else    
                    {
                     if (categoria.value==='') 
                        {
                         alert('ingrese la cantidad de tickets');
                        } 
                     else    
                        {
                         let cant=parseInt(cantidad.value);
                         let cat=parseInt(categoria.value);
                         console.log(calculo_a_pagar(cant , cat));
                         parrafo_total.innerHTML= calculo_a_pagar(cant , cat);
                        }
                    }
                 
                }
            }
    
        }
    
    })


borrar.addEventListener('click', (elemento)=>{
elemento.preventDefault();

document.getElementById('form_venta').reset();//resetea el formulario a sus valores por defecto
})