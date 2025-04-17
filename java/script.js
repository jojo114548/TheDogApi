let urlAtual = '';
let favoritos = [];






async function mudar() {
  
   
        const response = await fetch('https://api.thedogapi.com/v1/images/search');
        const data = await response.json();
        urlAtual = data[0].url;
        document.getElementById('img').src = urlAtual;
      

    }

function adicionarFavorito() {
    if (urlAtual && !favoritos.includes(urlAtual)) {
        favoritos.push(urlAtual);
        mudar();
      
}
}
function mostrarFavoritos() {
  
    document.querySelector('#container').classList.add("secao")
    document.querySelector('#container3').classList.add("secao")
    document.querySelector('#container2').classList.remove("secao")
    
    const container = document.getElementById('favoritos');
   
    favoritos.forEach(url => {
     
        const div=document.createElement('div');
        const img = document.createElement('img');
        img.src = url;
        container.appendChild(img);

       
       
    });   
    
  
}
 function voltarMudar(){
    document.querySelector('#container').classList.remove("secao")
    document.querySelector('#container3').classList.add("secao")
    document.querySelector('#container2').classList.add("secao")
}
function voltarRaca(){
    document.querySelector('#container').classList.add("secao")
    document.querySelector('#container3').classList.remove("secao")
    document.querySelector('#container2').classList.add("secao")
}
function voltarFavoritos(){
    document.querySelector('#container').classList.add("secao")
    document.querySelector('#container3').classList.add("secao")
    document.querySelector('#container2').classList.remove("secao")
}
async function carregarRacas() {


      const resposta = await fetch('https://api.thedogapi.com/v1/breeds');
      const racas = await resposta.json();
      const select = document.getElementById('selectRaca');
     

      racas.forEach(raca => {
 
        const option = document.createElement('option');
        option.value = raca.id;
        option.textContent = raca.name;
        select.appendChild(option);
      });
   
  }

  async function buscar() {

    document.querySelector('#container').classList.add("secao")
    document.querySelector('#container3').classList.remove("secao")
    document.querySelector('#container2').classList.add("secao")
  
    const select = document.getElementById('selectRaca');
    const racaId = select.value;

    
      const resposta = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${racaId}`);
      const dados = await resposta.json();
      const container = document.getElementById('raca');
      if (dados.length > 0) {

        urlAtual = dados[0].url;
       document.getElementById('dog').src=urlAtual
    
      
  
  }
}

window.onload = () => {
    mudar();
    carregarRacas();
    

   
}


