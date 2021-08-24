const profile_data = [
    {
        user:"catanacomics",
        user_img:"./assets/img/catanacomics.svg",
        user_nick:"Catana"
    }
];


export default function Profile(){
    return (
        <div class="usuario">
            <img src={profile_data[0].user_img} />
            <div class="texto">
              <strong>{profile_data[0].user}</strong>
              {profile_data[0].user_nick}
            </div>
        </div>
    );
}