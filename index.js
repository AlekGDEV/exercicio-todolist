function atualizar_qtd(){
    document.getElementById('numeros').innerHTML = '('+lista_tarefas.length+')'
}

function listar_tarefas(){
    let conteudo = buscar().sort().map(function(tarefa){
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
    document.getElementById('tarefas').innerHTML = conteudo.join('');
}

function add_tarefa(){
    event.preventDefault();
    let titulo = document.getElementById('input_nova_tarefa').value;
    let prioridade = document.getElementById('input_prioridade').value;
    
    if(titulo.trim() === ''){
        alert('Tarefa invalida');
        return;
    }
    else if(lista_tarefas.includes(titulo)){
        alert('Tarefa já existente');
        return;
    }

    salvar(titulo,prioridade);

    document.getElementById('input_nova_tarefa').value = '';
    
    atualizar_qtd();
    listar_tarefas();
}

listar_tarefas();