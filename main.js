const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('btn-joke');

const gerateJoke=()=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.chucknorris.io/jokes/random')
    xhr.onreadystatechange = function(){
        if(this.readyState===4)
            if(this.status===200){
                jokeEl.innerHTML=JSON.parse(this.responseText).value
            }else{
                jokeEl.innerHTML='something is wrong(not funny)'
            }
    };
    xhr.send();
}
jokeBtn.addEventListener('click',gerateJoke);