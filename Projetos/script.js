
     function ativaLetra(elemento){
          const arrTexto = elemento.innerHTML.split('');
          elemento.innerHTML ='';
          arrTexto.forEach((Letra,i)=>{
            setTimeout(()=>{
                   elemento.innerHTML += Letra;
            }, 75 * i);
          });
     };
    
    
     const titulo = document.querySelector('.digitando');
     ativaLetra(titulo);