let urlAtual = '';
let favoritos = [];






async function mudar() {
  
    
        const response = await fetch('https://api.thedogapi.com/v1/images/search');
        const data = await response.json();
        urlAtual = data[0].url;
        document.getElementById('img').src = urlAtual;
      

    }

async function adicionarFavorito() {
    if (urlAtual && !favoritos.includes(urlAtual)) {
        favoritos.push(urlAtual);
        console.log(favoritos);

        
       
        
}
}
async function mostrarFavoritos() {
    
    const container2=document.querySelector('#container');
    container2.classList.add("secao")
    const container3=document.querySelector('#container2');
    container3.classList.toggle("secao")
    
    const fav = document.getElementById('favoritos');
    
    favoritos.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        fav.appendChild(img);

       
       
    });   
   
}
async function voltar(){
    const container2=document.querySelector('#container');
    container2.classList.toggle("secao");
    const container3=document.querySelector('#container2');
    container3.classList.toggle("secao");
}

window.onload = () => {
    mudar();
 
 

   
}

