
        function mostrar(end){
            return("O usuário mora em " + end.cidade + "/"+end.uf+ 
            ", no bairro "+ end.bairro+ ", na rua " +end.rua+" com nº "+end.numero)
        }


        function pares(x , y){
            for(var i=x; i<=y; i++){
                if(i%2==0) {
                    console.log(i);
                }
            }
        }


        function temHabilidade(skills){
            if(skills.indexOf("Javascript")>-1)return true;
            else return false;
        }

        function experiencia(anos){
            if(0<anos<1)return "Iniciante";
            else if(anos<3)return "Intermediário";
            else if (anos<6)return "Avançado";
            else if (anos=>7)return "Jedi Master";
            else return "nao";
            
        }
        
        function lerUsuario(users){
            var x;
            for(const value of users ){
                console.log("O "+value.nome+" possui as habilidades: "+value.habilidades.join())
            }
        }