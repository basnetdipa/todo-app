import React from 'react'

const LearnArray = () => {
    let good ="good"
  const names =["sunita","jayanti","susma","susmita","sima","nirjana"]
  let friendsDetails=[
    {
    name:"susma",
    class:"sixth sem" ,
    roll:14,
    address:{
      country:"Nepal",
      province:"bagmati",
      district:"sindhupalchok",
      location:"chautara"
    }
  },

  {
    name:"jayanti",
    class:"sixth sem" ,
    roll:6,
    address:{
      country:"Nepal",
      province:"bagmati",
      district:"sindhupalchok",
      location:"Selang"
    }

  },
  {
    name:"susmita",
    class:"sixth sem",
    roll:13,
    address:{
      country:"Nepal",
      province:"bagmati",
      district:"sindhupalchok",
      location:"chautara"
    }
  },
  {
    name:"sima",
    class:"sixth sem",
    roll:10,
    address:{
      country:"Nepal",
      province:"bagmati",
      district:"sindhupalchok",
      location:"chautara"
    },
    
  }
  ]

  return (
    
    <div className="App">

<table id="customers">
  <tr>
    <th>name</th>
    <th>class</th>
    <th>roll</th>
    <th>address</th>
  </tr>
 
  {
    friendsDetails.filter(item => item.name=="susma").map(filteredName => {
     
     return <tr>
      <td>
        {filteredName.name}
      </td>
      <td>{filteredName.class}</td>
      <td>{filteredName.roll}</td>
      <td>{filteredName.address.country}</td>
      </tr>

    })
  }


  {/* { friendsDetails.map((value)=>{
    return  <tr>
    <td>{value.name}</td>
    <td>{value.class}</td>
    <td>{value.roll}</td>
    <td>{value.address.location}</td>
  </tr>
  })
  } */}
 
</table>



    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestingItem status={"good"} />
        
        {/* <Room1/> */}
       
      </header>
      <Room1/>
      <Room2/>
      <Button>Jayanti</Button>
    </div>
  )
}

export default LearnArray
