// function atualizar_qtd(){
//     document.getElementById('numeros').innerHTML = '('+[tarefas].length+')'
// }

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
    
    salvar(titulo,prioridade);

    document.getElementById('input_nova_tarefa').value = '';
    
    listar_tarefas();
}

listar_tarefas();