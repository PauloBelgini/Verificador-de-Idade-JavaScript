
function verificar(){
    //Pega a Data do sistema coloca na variavel "data"
    var data = new Date()

    //Extrai apenas o ano da variavel "data" e coloca no na var "ano"
    var ano = data.getFullYear()

    //Recebe os elementos HTML
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')

    //Tratamento de erro para se caso o usuario não coloque um ano, ou entao coloque um ano invalido
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente!")
    }else{

        //Recebendo o Input dos botões "radsex"
        var fsex = document.getElementsByName('radsex')

        //Faz o calculo da idade com Input do ano menos o ano atual (ano do sistema)
        var idade = ano - Number(fano.value)

        //Cria a var "genero" setando ela vazia
        var genero = ""

        //Cria um elemento HTML do tipo "img" (<img>)
        var img = document.createElement('img')

        //Seta o atributo do elemento com Id = foto (<img id= foto>)
        img.setAttribute('id', 'foto')

        //Estrutura de condição se o primeiro botão "Masculino" estiver checado ele entra no if
        if (fsex[0].checked){
            genero = 'Homem'

            if(idade >=0 && idade <10 ){
                //Seta o atributo do elemento img para source da foto 
                //Bebe
                img.setAttribute('src', 'foto-bebe-m.png')
                
            } else if( idade <25){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if( idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

            //Caso o Radial button "feminino" estiver checado entra nesse if
        }else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade >=0 && idade <10 ){
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if( idade <21){
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if( idade < 50){
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }

        //Alinha os elementos para o centro
        res.style.textAlign = 'center'

        //Manipulando o DOM mostra o genero e a idade calculada
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

        //Cria um Child mostrando o img
        res.appendChild(img)
    }
}