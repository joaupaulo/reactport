import React from 'react'
import './Main.css'
import foto from './images/carregar.png'


const conteudo = () =>{

return ( 

<div className="conteudo"> 
<h1> João Paulo</h1>
<div className="links"> 
<div className="link1">
<a> <h3>  Home </h3> </a> <a> <h3> Projetos  </h3> </a>  </div>
<div> <i class="fab fa-github-square"></i>  <i class="fab fa-linkedin-in"></i>  <i class="fas fa-envelope-square"></i>  </div>
</div>


<div className="sobre">
<div className="sobre1"> 
<img className="imgport" src={foto}></img>
<h3> Olá ! Eu me chamo,João Paulo,sou desenvolvedor front end,e estudante de sistemas da informação,contudo possuo conhecimento em ui e ux design podendo criar um layout basico completo.Até então,estudo apenas Front-end mas com toda certeza ao passar do tempo irei me dedicar a outras áreas como back end e devops!</h3>
</div>
</div>


<hr/>


<div className="experiencia">

<h2> Experiência De Trabalho </h2>


<div className="postos"> 
<h3> Exército Brasileiro</h3>
<h3>Soldado</h3>
<h3>Fevereiro de  2019 - Fevereiro De 2020 ( 1 ANO ) </h3>
<h4> Além de realizar serviços comuns que são obritorias da área militar,eu trabalhava na seção de manuntenção de computadores realizando manuntenções basicas como formatações de computadores de windows para linux e vice-versa,manuntenções em redes de internet,ou seja trocava cabos e clipava além de outros serviços ligados a manuntenção de computadores.</h4>
</div>
</div>


<hr/>


<div className="experiencia ">

<h2> Habilidades </h2>
<div className="habilidades">
<div>  
<h3>Ferramentas Front End</h3> 
<h4> HTML5  </h4>
<h4> CSS3 </h4>
<h4> SASS </h4>
<h4>JAVASCRIPT</h4>
</div>


<div>  <h3> Frameworks </h3> 

<h4>ReactJS</h4>

</div>


<div><h3>Ferramentas</h3> 

<h4>Git e GitHub</h4>
<h4>AdobeXd</h4>
<h4>Photoshop</h4>
</div>
 </div>
</div>


<hr/>



<div className="experiencia linguas">

<h2>Linguas</h2>

<div> <h3> Português </h3> <h3>Nativo</h3> </div>

<div> <h3>Inglês</h3>     <h3>Intermediário</h3>  </div>

</div>

<hr/>

<div className="experiencia ">


<h2>Formação</h2>
<div className="form"> 
<h3>Universidade e Faculdade De Tecnologia e Ciências</h3>
<h3>Sistemas Da Informação</h3>
<h3> Em Andamento </h3>


</div>
</div>

</div>



)
}

export default conteudo;
