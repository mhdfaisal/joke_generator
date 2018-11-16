document.querySelector("#get-jokes").addEventListener('click', function(e){

    let number = document.querySelector("#number").value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        let output = '';
        const list = document.querySelector("#joke-list");
        if(this.status===200){
            const response = JSON.parse(this.responseText);
            if(response.type === "success"){
               response.value.forEach(function(item,index){
                    output+=`<li class="list-group-item ">${item.joke}</li>`;
               });
            }
            else{
                console.log("Something went wrong!!");
            }
        }
        list.innerHTML = output;
    }
    xhr.send();
    e.preventDefault();
});