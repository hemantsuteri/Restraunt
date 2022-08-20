import React from "react";

function MenuCard(props) 
{ 
  // ({ props.content }) => {
   


  return (
    <>
      <section className="main-card--container">
        {props.content.map((curElem) => {
          const { id, image, name, category, price, description } = curElem; //destructuring   

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}
// };

export default MenuCard;



// import React from "react";

// const MenuCard = ({ menuData }) => {
//   return (
//     <>
    
//       <div className="card-container">
//         <div className="card">
//           <div className="card-body">
//             <span className="card-number card-circle subtle">1</span>
//             <span className="card-author subtle">Breakfast</span>
//             <h2 className="card-title">Maggi</h2>
//             <span className="card-description subtle">
//               I love Maggie Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. Aperiam alias aliquid natus assumenda, ipsum in. Odio eaque
//               tenetur velit dolorum vero quam doloremque dolor molestias magnam
//               sequi repudiandae assumenda rem accusantium facere, id aliquid
//               incidunt facilis. Eligendi, pariatur exercitationem. Officiis
//               praesentium commodi architecto? Facilis distinctio harum earum
//               repudiandae sint nisi.
//             </span>
//             <div className="class-read">Read</div>
//           </div>
//           <img
//             src="https://thumbs.dreamstime.com/b/cozy-restaurant-tables-ready-dinner-39875776.jpg"
//             alt="images"
//             className="card-media"
//           />
//           <span className="card-tag subtle">Order Now</span>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MenuCard;
