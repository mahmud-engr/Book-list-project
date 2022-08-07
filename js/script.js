//get the ui element

let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');


// Book class
class Book{
      constructor(title,author,isbn){
            this.title = title;
            this.author = author;
            this.isbn = isbn;
      }
}

//ui class
class UI{
      constructor(){

      }
      addToBooklist(book){
           let list = document.querySelector('#book-list');
           let row = document.createElement('tr');
           row.innerHTML = `
           <td>${book.title} </td>
           <td>${book.author} </td>
           <td>${book.isbn} </td>
           <td><a href='#' class="delete">x</a> </td>`;

          list.appendChild(row);
           //console.log(row);
      }
      clearFields(){
             document.querySelector("#title").value='',
             document.querySelector("#author").value='',
             document.querySelector("#isbn").value='';
      }
      
      showAlert(message,className){
            let div = document.createElement('div');
            div.className = `alert ${className}`;
            div.appendChild(document.createTextNode(message));
            let container = document.querySelector('.container');
            let form = document.querySelector(`#book-form`);
            container.insertBefore(div,form);

            setTimeout(()=>{
                  document.querySelector('.alert').remove();
            },3000);
      }

      deleteFromBook(target){
          if(target.hasAttribute('href')){
           // console.log(target);
            target.parentElement.parentElement.remove();
          }
      }
}

// add event listenr


form.addEventListener('submit', newBook);
booklist.addEventListener('click', removebook);

//call function

function newBook(e){

      let title = document.querySelector("#title").value,
      author = document.querySelector("#author").value,
      isbn = document.querySelector("#isbn").value;
      let ui = new UI();
      if(title ===''|| author ==='' || isbn ===''){

           ui.showAlert("Please fill out the forms ","error");
          
      }
      else {

      
      let book = new Book(title,author,isbn);
      //console.log(book);

      let ui = new UI();

      ui.addToBooklist(book);

      ui.clearFields();

      ui.showAlert("Book Added!", "success");

  }

      e.preventDefault();
}

function removebook(e){

      let ui = new UI();
      ui.deleteFromBook(e.targert);
      ui.showAlert('Book Removed','success')
      e.preventDefault();
}