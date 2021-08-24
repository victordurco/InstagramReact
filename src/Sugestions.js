const sugestions_data = [
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
];

const Sugestion = (props) => {
    return (
      <div className="sugestao">
        <div className="usuario">
          <img src={props.img} />
          <div className="texto">
            <div className="nome">{props.user}</div>
            <div className="razao">{props.followStatus}</div>
          </div>
        </div>
  
        <div className="seguir">Seguir</div>
      </div>
    );
  }

export default function Sugestions(){
    return (
        <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestions_data.map((sugestion, index)=> <Sugestion key={index} img={sugestion.sugest_img} user={sugestion.sugest_user} followStatus={sugestion.follow_status} />)}
      </div>
    );
}