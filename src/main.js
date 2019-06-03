import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { myCode } from './myCode';

$().ready(function(){
  $('#button').click(function(){

    let request = new XMLHttpRequest();
    const url = "https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json"
    
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            const response = JSON.parse(this.responseText);
            getElements(response);
        }
    }
    
    request.open("GET", url, true);
    //request.setRequestHeader("Content-Type", "application/json");
    request.send();
    
    const getElements = function(response){
        $('#inspiration').text(response.insult);

        setTimeout(function (){
            $("#inspiration").text("")
        }, 5000);
   }
  })
});