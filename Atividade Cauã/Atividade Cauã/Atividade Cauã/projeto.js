   //Informações da Jogador 1 (Neymar)
   const jogador1 = `{
    "nome": "Neymar da Silva Santos Júnior",
    "idade": "31 anos",
    "time": "Al-Hilal Saudi Football Club",
    "foto": "<img src='Imagens/Neymar.jpg' 'width='100px''>"
    }`;
//Informações da Jogador 2 (Cristiano Ronaldo)
 const jogador2 = `{
        "nome": "Cristiano Ronaldo Dos Santos Aveiro",
        "idade": "38 anos",
        "time": "Al-Nassr Football Club",
        "foto": "<img src='Imagens/cristianoRonaldo.jpg'>"
    }`;
//Informações jogador 3 (Messi)
const jogador3 = `{
        "nome": "Lionel Andrés Messi Cuccittini",
        "idade": "36 anos",
        "time": "Inter Miami CF",
        "foto": "<img src='Imagens/Messi.jpg'>"
    }`;


//Informações jogador 4 (Raphael Veiga)
 const jogador4 = `{
        "nome": "Raphael Cavalcante Veiga",
        "idade": "28 anos",
        "time": "Sociedade Esportiva Palmeiras",
        "foto": "<img src='Imagens/Veiga.jpg'>"
    }`;

       
             
            const jogador1Button = document.getElementById("jogador1");
            const jogador2Button = document.getElementById("jogador2");
            const jogador3Button = document.getElementById("jogador3");
            const jogador4Button = document.getElementById("jogador4");
            const dados = document.getElementById("dados");

           
             //Jogador 1 (Neymar)
             const data = JSON.parse(jogador1);

            jogador1Button.addEventListener("click", () => {
                dados.innerHTML = `
                    <h2>${data.nome}</h2>
                    <p>Idade: ${data.idade}</p>
                    <p>Time: ${data.time}</p>
                    ${data.foto}

                    `;
                });
                //Jogador 2 (Cristiano Ronaldo)
                const data2 = JSON.parse(jogador2);
        
                jogador2Button.addEventListener("click", () => {
                    dados.innerHTML = `
                        <h2>${data2.nome}</h2>
                        <p>Idade: ${data2.idade}</p>
                        <p>Time: ${data2.time}</p>
                        ${data2.foto}
                    `;
                });
                //Jogador 3 (Messi)
                const data3 = JSON.parse(jogador3);
        
                jogador3Button.addEventListener("click", () => {
                    dados.innerHTML = `
                        <h2>${data3.nome}</h2>
                        <p>Idade: ${data3.idade}</p>
                        <p>Time: ${data3.time}</p>
                        ${data3.foto}
                    `;
                });
                //Jogador 4 (Raphael Veiga)
                const data4 = JSON.parse(jogador4);
        
                jogador4Button.addEventListener("click", () => {
                    dados.innerHTML = `
                        <h2>${data4.nome}</h2>
                        <p>Idade: ${data4.idade}</p>
                        <p>Time: ${data4.time}</p>
                        ${data4.foto}
                    `;
                });