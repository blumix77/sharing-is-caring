import React, { useState } from 'react'

export default function UserOffersForm() {
    const [userProducts, setUserProducts] = useState([]);
        
        /* {
        name: "Zimmerpflanze Einblatt",
        kategorie: "Pflanze, Garten",
        zustand: "gut",
        zustellung: "Abholung",
        sonstiges: "mittelgroß",
        image: "hier kommt noch ein Foto",
        usercontact: "pflanzenfreundin@web.de",
      } */  

  return (
    <div>
    <div className="user-product-form">
      <h4>Add a product:</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUserProducts([
            ...userProducts,
            {
              name: e.target.name.value,
              kategorie: e.target.kategorie.value,
              zustand: e.target.zustand.value,
              zustellung: e.target.zustellung.value,
              sonstiges: e.target.sonstiges.value,
              image: e.target.image.value,
              userContact: e.target.usercontact.value,
            },
          ]);
        }}
      >
        <p>Name des Artikels:</p>
        <input type={"text"} name="name" />
        <p>Kategorie:</p>
        <input type={"text"} name="kategorie" />
        <p>Zustand:</p>
        <input type={"text"} name="zustand" />
        <p>Zustellung:</p>
        <input type={"text"} name="zustellung" />
        <p>Sonstige Infos:</p>
        <input type={"text"} name="sonstiges" />
        <p>Bild:</p>
        <input type={"text"} name="image" />
        <p>usercontact:</p>
        <input type={"email"} name="usercontact" />
        <br></br>
        <button>add</button>
      </form>
    </div>
   </div>
  )
}