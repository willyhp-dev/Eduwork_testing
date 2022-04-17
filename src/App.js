
import LifeCycler from './komponens/lifecycle_komponen';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Axios } from 'axios';
import Bootstrap from './komponens/kedua_Styling/boostrap';
import ListBiodata from './komponens/kedua_Styling/boostrap/listBiodata';
import FriendLists from './komponens/kedua_Styling/boostrap/skill/Friends';
import FormValidation from './komponens/form_validasi';



function App() {
    return (
      <div className="App">
          <FormValidation/>
      </div>
    );
  }

export default App;