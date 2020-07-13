import React from 'react';
import Navbar from "./components/Navbar";
import CardWrapper from "./components/CardWrapper";
import Credit from "./components/Credit";


class App extends React.Component {
  render (){  
  return (
<React.Fragment>
  <Navbar />
  <CardWrapper/>
  <Credit />

</React.Fragment>  
  );
  }
}

export default App;
