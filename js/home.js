function main(){
    const aboutme = document.getElementById("aboutmeCard");
    let paragrafh = document.getElementById("aboutmeParagraph");
    let Title = document.getElementById("title");
    let SubTitle = document.getElementById("subtitle");
    let id = null;
    let cont = 1;

    aboutme.onclick = function (e){

        if(cont == 0) return;

        cont--;

        document.body.style.height = "220vh";
        
        const Newaboutme = document.createElement("p");
        Newaboutme.id = "newparagrafh";
        
        Newaboutme.style.fontSize = "0px";

        const aboutmeContent = document.createTextNode(" Nos últimos três semestre tenho focado em aprimorar minhas habilidades em desenvolvimento de software, principalemente em tecnologias voltadas para backend. Trabalho com linguagens como Java, JavaScript, TypeScript, Python e C, além de ferramentas como Spring Boot, Node.js, Express,  React, Git, Maven e bancos de dados.");

        Newaboutme.appendChild(aboutmeContent);
        paragrafh.appendChild(Newaboutme);

        let elem = document.getElementById('newparagrafh');
        let eleOpacity = 0;
        let Newsize = 0;
        let TitleSize = 50;
        let SubtitleSize = 30;
        let paragrafhSize = 28;

        clearInterval(id);
        id = setInterval(frame, 20);
        function frame(){
            if(Newsize == 22){
            clearInterval(id);
        } else{

            TitleSize -= 0.16;
            Title.style.fontSize = TitleSize + "px"

            SubtitleSize -= 0.16
            SubTitle.style.fontSize = SubtitleSize + "px"

            paragrafhSize -= 0.266666666666666666666667;
            paragrafh.style.fontSize = paragrafhSize + "px"

            Newsize++
            eleOpacity+= 0.0417;
            elem.style.opacity = eleOpacity;
            elem.style.fontSize = Newsize + "px";
        }
        }
    }
}

main();