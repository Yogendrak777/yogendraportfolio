import logo from './logo.svg';
import './App.css';
import pic from './assets/yogi.jpg'
import {AiOutlineCalendar, AiOutlineMail,AiOutlineHome,AiOutlineLinkedin } from 'react-icons/ai';
import {FiPhoneCall } from 'react-icons/fi';
import {CgGames } from 'react-icons/cg';
import {BsGithub} from 'react-icons/bs';
import DataTable from './ApiDataFetch';


function App() {
  return (
    <div>
    <div className='photo_card'>
      
      <img className="yogiPic" src={pic} alt ="yogendra pic" />
      <div className='info'>
        <div>Hello All. I AM</div>
        <div className='yogendra'>YOGENDRA</div>
        <div>Intern at <strong>KreditBee</strong></div>
        <div><AiOutlineCalendar/>  &nbsp; 07 July 2001</div>
        <div><FiPhoneCall/> &nbsp; <a href='tel:9353437216'>+919353437216</a></div>
        <div><AiOutlineMail/> &nbsp; <a href='mailto:yogendra.k@kreditbee.in'>yogendra.k@kreditbee.in</a></div>
        <div><AiOutlineHome/> &nbsp; Cube square homes, bangalore 560100</div>
        <div><CgGames/> &nbsp; Chess, Cricket</div>
        <div className='links'><a href='https://in.linkedin.com/in/yogendra-k?trk=people-guest_people_search-card'><AiOutlineLinkedin/></a> <a href='https://github.com/Yogendrak777'><BsGithub/></a></div>
      </div>
    </div>
    <DataTable/>
    </div>
  );
}

export default App;
