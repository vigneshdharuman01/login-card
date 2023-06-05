
import './App.css';
import Logincard from './component/Logincard';

function App() {
  const userData = [{
    userName: 'SAMPATH',
    pin: 4001
  },
  {
    userName: 'VICKY',
    pin: 4002
  },
{
  userName:'ANAND',
  pin:4003
},
{
  userName:'SANTHOSH',
  pin:4004
},
{
  userName:'AJAY',
  pin:4005
},
{
  userName:'ABI SHEK',
  pin:4006
},
{
  userName:'AZAR',
  pin:4007
},
{
  userName:'BHARATH',
  pin:4008
},
{
  userName:'SHALINI',
  pin:4009
},
{
  userName:'devi',
  pin:4010
}
]
  return (
    <div className="App">
     <Logincard userData={userData}/>
    </div>
  );
}

export default App;
