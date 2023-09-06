import React from 'react';

type DateComing = {
  name: string;
  age:number
  isBest: boolean;
};

function Home(props: DateComing) {
  return <div>{props.name}. Yaş: {props.age}. 
     {props.isBest ? (<p>En çok kullandığı programlama dili React</p>) : (<p>En çok kullandığı programlama dili PHP</p>)  }
  </div>;
}

export default Home;
