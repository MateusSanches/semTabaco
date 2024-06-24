let btnAdd = document.querySelector(`#add`);
let btnLimpar = document.querySelector(`#limpar`);

let nome = document.querySelector(`#nome-input`);
let link = document.querySelector(`#link-input`);


btnAdd.addEventListener(`click`,() =>{
    
    if(nome.value === `` || link.value === ``) return;

    
    let novoLink = {
        tipo: `link`,
        nome: nome.value,
        link: link.value,
    }


    window.localStorage.setItem( nome.value, JSON.stringify(novoLink));
    

    atualizaLista();

})


btnLimpar.addEventListener(`click`,() =>{
    
    nome.value=``;
    link.value=``;
    
    for (let i = window.localStorage.length - 1; i >= 0; i--) {
        const key = window.localStorage.key(i);
        window.localStorage.removeItem(key);
    }

    atualizaLista();

})



function atualizaLista() {
    const listaDiv = document.getElementById("lista");
    listaDiv.innerHTML = ""; 

   
    for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        const novoLink = JSON.parse(window.localStorage.getItem(key));

        if(novoLink.tipo !== `link`) continue;
        
        const itemSpan = document.createElement("span");
        itemSpan.id = "item";

        const nomeSpan = document.createElement("span");
        nomeSpan.id = "nome";
        nomeSpan.textContent = novoLink.nome;

        const linkSpan = document.createElement("span");
        linkSpan.id = "link";
        linkSpan.textContent = novoLink.link;

        const deleteSpan = document.createElement("span");

        deleteSpan.id = "delete";
        deleteSpan.textContent = "Remover";

        deleteSpan.addEventListener("click", () => {
            window.localStorage.removeItem(novoLink.nome);
            atualizaLista();
        });

       
        itemSpan.appendChild(nomeSpan);
        itemSpan.appendChild(linkSpan);
        itemSpan.appendChild(deleteSpan);

        
        listaDiv.appendChild(itemSpan);
    }
}

atualizaLista();