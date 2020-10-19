import React from 'react';
import Carrousel from "./components/Carrousel";

class App extends React.Component {


  render (){
    const items = [
      {
        img:
          "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        title: "Flowers",
        price: "US$1",
      },
      {
        img:
          "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        title: "Flowers",
        price: "US$1",
      },
      {
        img:
          "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        title: "Flowers",
        price: "US$1",
      },
      {
        img:
          "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        title: "Flowers",
        price: "US$1",
      }
    ];
  return (
    <div className="carr-wrapper">
      <Carrousel title="Basado en tu ultima visita" items={[{ items }]}/>
    </div>
  );
}
}

export default App;
