function listar_tarefas(){
    let conteudo = buscar().map(function(tarefa){
        return`
        <div>
            <input type="checkbox"> 
            ${tarefa.titulo}
            <span class="badge 
            ${tarefa.prioridade === 'Baixa' && 'bg-primary'}
            ${tarefa.prioridade === 'Media' && 'bg-warning'}
            ${tarefa.prioridade === 'Alta' && 'bg-danger'}">
            ${tarefa.prioridade}
            </span>
        </div>
        `
    })
    document.getElementById('tarefas').innerHTML = conteudo.sort().join('');
    document.getElementById('numeros').innerHTML = '('+conteudo.length+')'
}

function add_tarefa(){
    event.preventDefault();
    let titulo = document.getElementById('input_nova_tarefa').value;
    let prioridade = document.getElementById('input_prioridade').value;
    
    if(titulo.trim() === ''){
        alert('Tarefa invalida');
        return;
    }


    //Variavel para buscar a string titulo dos objetos 
    let titulos = buscar().map((tarefa) => {  
        return tarefa ? tarefa.titulo : "";
    });

    //Metodo de verificação
    let existe = false;
    titulos.forEach((t) => {
        if (true === t.includes(titulo)) {
            existe = true;
            return;
        }
    });
    
    if(existe == false){
        salvar(titulo, input_prioridade.value);
    }else{
        alert('Tarefa já existe');         
    }

    document.getElementById('input_nova_tarefa').value = '';
    
    listar_tarefas();
}

listar_tarefas();