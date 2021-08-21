const sidebar_data = [
  {
    user:"catanacomics",
    user_img:"./assets/img/catanacomics.svg",
    user_nick:"Catana",
    sugestions:[
      {
        sugest_user:"bad.vibes.memes",
        sugest_img:"./assets/img/bad.vibes.memes.svg",
        follow_status:"Segue você"
      },
      {
        sugest_user:"chibirdart",
        sugest_img:"./assets/img/chibirdart.svg",
        follow_status:"Segue você"
      },
      {
        sugest_user:"razoesparaacreditar",
        sugest_img:"./assets/img/razoesparaacreditar.svg" ,
        follow_status:"Novo no Instagram"
      },
      {
        sugest_user:"adorable_animals",
        sugest_img:"./assets/img/adorable_animals.svg",
        follow_status:"Segue você"
      },
      {
        sugest_user:"smallcutecats",
        sugest_img:"./assets/img/smallcutecats.svg",
        follow_status:"Segue você"
      }
    ]
  }
];

const Sugestion = (props) => {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} />
        <div class="texto">
          <div class="nome">{props.user}</div>
          <div class="razao">{props.followStatus}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Sidebar(){
    return(
        <div class="sidebar">
          <div class="usuario">
            <img src={sidebar_data[0].user_img} />
            <div class="texto">
              <strong>{sidebar_data[0].user}</strong>
              {sidebar_data[0].user_nick}
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sidebar_data[0].sugestions.map((sugestion)=> <Sugestion img={sugestion.sugest_img} user={sugestion.sugest_user} followStatus={sugestion.follow_status} />)}
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}