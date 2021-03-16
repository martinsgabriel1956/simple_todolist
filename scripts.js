// Pega os elementos do HTML => ul, input e button
let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

// Pega os items ja adicionados no localStorage
let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

// Função para renderizar os Todos
function renderTodo() {
  // Apaga todos os todos anteriores
  listElement.innerHTML = "";
  // Percorre o array
  for (todo of todos) {
    // Cria o elemento li
    let todoElement = document.createElement("li");
    // Adiciona um texto para o elemento li
    let todoText = document.createTextNode(todo);

    /* Criar botão para excluir os todos */

    // Cria o elemento a
    let linkElement = document.createElement("a");

    // Adiciona o atributo href no elemento a
    linkElement.setAttribute("href", "#");

    // Pega a posição do index dentro do array de todos
    let pos = todos.indexOf(todo);

    // Adiciona a função de clicar para apagar o Todo
    linkElement.setAttribute("onclick", 'removeTodo(' + pos +')');

    // Adiciona o texto ao elemento a
    let linkText = document.createTextNode("x");

    // Adiciona o texto no elemento a
    linkElement.appendChild(linkText);

    //adiciona o texto dentro li
    todoElement.appendChild(todoText);
    //adiciona o botão dentro li
    todoElement.appendChild(linkElement);
    //Adiciona o li dentro do elemento ul
    listElement.appendChild(todoElement);
  }
}
// Executa a função
renderTodo();

// Função para adicionar um novo todo
function addTodo() {
  // Pega o valor do input
  let todoText = inputElement.value;
  // Adiciona o todo digitado dentro do array de Todos
  todos.push(todoText);
  // Apaga o texto do input
  inputElement.value = "";
  // Renderiza novamente a lista de todos
  renderTodo();
  saveToStorage();
}

// Botão que ao clicar irá enviar o todo digitado para a lista de todos
buttonElement.onclick = addTodo;

// Função para remover o todo
function removeTodo(pos) {
  // Remove o todo da lista de todos
  todos.splice(pos, 1);
  // Executa a função novamente
  renderTodo();
  saveToStorage();
}

// Salvar no LocalStorage da aplicação

function saveToStorage() {
  // Seta cada item dentro do localStorage
  localStorage.setItem('list_todos', JSON.stringify(todos));
}