import Links from './Links';
import Copyright from './Copyright';
import Sugestions from './Sugestions';
import Profile from './Profile';


const sidebar_data = [
  {
    user:"catanacomics",
    user_img:"./assets/img/catanacomics.svg",
    user_nick:"Catana"
  }
];

export default function Sidebar(){
    return(
        <div className="sidebar">
          <Profile />
          <Sugestions />
          <Links />
          <Copyright />
        </div>
    );
}