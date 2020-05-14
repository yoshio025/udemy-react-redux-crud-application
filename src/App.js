import React from 'react';
import PropTypes from 'prop-types';

//function App() {
//  return (
//    <React.Fragment>
//      <label className="bar">bar</label>
//      <input type="text" onChange={() => {console.log("I'm clicked")}}/>
//    </React.Fragment>
//  )
//}


const App = () => {
  const profiles = [
    {name: 'Taro', age: 10},
    {name: 'Hanako', age: 7},
    {name: 'Noname', age: 6}
  ]
  
  return(
    <div>
      {
        profiles.map((profile) => {
          return <User name={profile.name} age={profile.age}/>
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi, I'm {props.name}, and {props.age}years old!.</div>
}

User.propTypes  = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
