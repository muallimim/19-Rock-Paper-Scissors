document.getElementById('rock').addEventListener('click', rock);

////////////////////////////////////////////////////
function rock(event){
    event.preventDefault();

    var pc_choice;
    var pc_choice_text;

    var rock_image;
    var paper_image;
    var scissors_image;
    var result_text;

    rock_image ='https://upload.wikimedia.org/wikipedia/commons/7/7e/Rock-paper-scissors_%28rock%29.png';
    paper_image ='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1200px-Rock-paper-scissors_%28paper%29.png';
    scissors_image= 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1024px-Rock-paper-scissors_%28scissors%29.png';

    pc_choice = Math.floor(Math.random() * 3) + 1;

    if(pc_choice==1){
        pc_choice_text = 'Rock';
        document.getElementById('img').src = rock_image;
        result_text = 'Berabere';
    }

    if(pc_choice==2){
        pc_choice_text = 'Paper'; 
        document.getElementById('img').src = paper_image;
        result_text = 'Yenildiniz';
    }

    if(pc_choice==3){
        pc_choice_text = 'Scissors';   
        document.getElementById('img').src = scissors_image;
        result_text = 'Yendiniz';
    }    

document.getElementById('result').innerHTML = 'Sizin Seçiminiz: Rock'
                                             +'<br> Bilgisayarın Seçimi: '+ pc_choice_text
                                             +'<br> Sonuç:'+result_text;
}

 