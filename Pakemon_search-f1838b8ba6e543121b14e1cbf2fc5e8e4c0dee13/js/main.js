"use strict";

//  copy data
const allPakemons = pokemons.map((e, i) => {
  return {
    id: e.id,
    number: e.num,
    name: e.name,
    img: e.img,
    type: e.type,
    height: e.height,
    weight: e.weight,
    candy: e.candy,
    candy_count: e.candy_count,
    egg: e.egg,
    spawn_chance: e.spawn_chance,
    avg_spawns: e.avg_spawns,
    spawn_time: e.spawn_time,
    multipliers: e.multipliers,
    weaknesses: e.weaknesses,
    next_evolution: e.next_evolution,

  };
});


allPakemons.forEach((e, i) => {
  const wrapp = $(".card_wrapp");
  const card = crElement("div", "card col-lg-3 m-2 col-md-6 col-sm-12 pt-2", `  <img src="${e.img}" class="img-top mx-auto" alt="card_img">
    <hr>
    <div class="card-body">
    
      <div class="card_info d-flex justify-content-between">
      <h5 class="card-title">${e.name}</h5>
      <i class="fa-regular fa-heart likebtn" id="like"></i>
     </div>
      <p class="card-text">${e.candy}</p>
      <p class="card-text">${e.type}</p>
      <div class="card_info_text d-flex">
      <p class="card_text"><strong>${e.weight}</strong></p></
      <p class="card_text mss"><strong class="ms-4">${e.candy_count} age</strong></p>
      </div>
      
    </div>`
  );

  card.dataset.id = e.type;
  wrapp.appendChild(card);

});

//create dynamic options for select
let arr = [];
allPakemons.forEach((e) => {
  let itemType = e.type;
  itemType.forEach(element => {
    if (!arr.find((e) => e == element)) {
      arr.push(element);
    }
  });
});
arr.sort();
arr.unshift("All");
arr.forEach((e) => {
  let selectItems = crElement("option", "opt", e);
  $("#category_name").appendChild(selectItems);
});


// find function
const findPake = function (title) {
  const searchPake = allPakemons.filter((item) => {
    return item.name.toLowerCase().includes(title);
  });

  // console.log(searchPake);
  renderPake(searchPake);
};
// findPake()

//find event
$("#name_search").addEventListener("input", (e) => {
  //preventDefoult biz aytganimizda funksiyani ishga tushiradi avomatik yangilanishni toxtatib turadi
  e.preventDefault();
  $(".card_wrapp").innerHTML = "";
  const searchTerm = $("#name_search").value.trim().toLowerCase();
  const regexpSearch = new RegExp(searchTerm, "gi");
  const result = searchTerm.match(regexpSearch);
  findPake(result);
  // console.log(result);
});

//render function 
function renderPake(searchPake) {
  searchPake.forEach((e, i) => {
    const wrapp = $(".card_wrapp");
    const card = crElement("div", "card col-lg-3 m-2 col-md-6 col-sm-12 pt-2", `  <img src="${e.img}" class="img-top mx-auto" alt="card_img">
        <hr>
        <div class="card-body">
        
          <div class="card_info d-flex justify-content-between">
          <h5 class="card-title">${e.name}</h5>
          <i class="fa-regular fa-heart likebtn" id="like"></i></div>
          <p class="card-text">${e.candy}</p>
          <p class="card-text">${e.type}</p>
          <div class="card_info_text d-flex">
          <p class="card_text"><strong>${e.weight}</strong></p></
          <p class="card_text mss"><strong class="ms-4">${e.candy_count} age</strong></p>
          </div>
          
        </div>`
    );


    wrapp.appendChild(card);
  });
  let as = document.querySelectorAll(".likebtn")

  window.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("fa-regular")) {
      as.forEach(item => {
        if (e.target === item) {
          item.classList.toggle("fa-solid");
        }
      });
    };
  });
};

// category filter function
let filters = $("#category_name");

filters.addEventListener("change", (e) => {
  $("#cwrapp").innerHTML = "";
  let valueCate = e.target.value.trim().toLowerCase();
  allPakemons.forEach((e) => {
    e.type.filter((element) => {
      let elementObje = element.trim().toLowerCase();
      if (valueCate == elementObje) {
        const wrapp = $("#cwrapp");

        const card = crElement("div", "card col-lg-3 m-2 col-md-6 col-sm-12 pt-2", `  <img src="${e.img}" class="img-top mx-auto" alt="card_img">
            <hr>
            <div class="card-body">
            
              <div class="card_info d-flex justify-content-between">
              <h5 class="card-title">${e.name}</h5>
              <i class="fa-regular fa-heart likebtn" id="like"></i></div>
              <p class="card-text">${e.candy}</p>
              <p class="card-text">${e.type}</p>
              <div class="card_info_text d-flex">
              <p class="card_text"><strong>${e.weight}</strong></p></
              <p class="card_text mss"><strong class="ms-4">${e.candy_count} age</strong></p>
              </div>
              
            </div>`
        );

        $("#cwrapp").appendChild(card);
      }
    });
  });
  let as = document.querySelectorAll(".likebtn")

  window.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("fa-regular")) {
      as.forEach(item => {
        if (e.target === item) {
          item.classList.toggle("fa-solid");
        }
      });
    };
  });
});

filters.addEventListener("change", (e) => {
  if (e.target.value == 'All') {
    allPakemons.forEach((e, i) => {
      const wrapp = $(".card_wrapp");
      const card = crElement("div", "card col-lg-3 m-2 col-md-6 col-sm-12 pt-2", `  <img src="${e.img}" class="img-top mx-auto" alt="card_img">
            <hr>
            <div class="card-body">
            
              <div class="card_info d-flex justify-content-between">
              <h5 class="card-title">${e.name}</h5>
              <i class="fa-regular fa-heart likebtn" id="like"></i></div>
              <p class="card-text">${e.candy}</p>
              <p class="card-text">${e.type}</p>
              <div class="card_info_text d-flex">
              <p class="card_text"><strong>${e.weight}</strong></p></
              <p class="card_text mss"><strong class="ms-4">${e.candy_count} age</strong></p>
              </div>
              
            </div>`
      );

      card.dataset.id = e.type;
      wrapp.appendChild(card);
    });
    let as = document.querySelectorAll(".likebtn")

    window.addEventListener("click", (e) => {
      if (e.target && e.target.classList.contains("fa-regular")) {
        as.forEach(item => {
          if (e.target === item) {
            item.classList.toggle("fa-solid");
          }
        });
      };
    });
  };
});


//like btn function
let as = document.querySelectorAll(".likebtn")

window.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("fa-regular")) {
    as.forEach(item => {
      if (e.target === item) {
        item.classList.toggle("fa-solid");
        $(".card").classList.toggle("bookmark");
      }
    });
  };
});



//hide menu
let openn = $(".heart_btn");
openn.addEventListener("click", () => {
  let openMenu = $(".modal_menu")
  openMenu.classList.add("menu_showw")

});
$(".close_menu").addEventListener("click", () => {

  $(".modal_menu").classList.remove("menu_showw")

});

    



//  




// let classws = document.getElementsByClassName("fa-regular fa-heart");
// classws = addEventListener("click", () => {
//   console.log("ishladi")
//   let like = document.getElementById("like")
//   let parent = like.parentNode

//   let parent2 = parent.parentNode

//   let parent3 = parent2.parentNode

//   let parent4 = parent3.parentNode
//   console.log(parent4);
// });

























// "use strict";
// //  copy data
// const allPakemons = pokemons.map((e, i) => {
//     return {
//         id: i,
//         number: e.num,
//         name: e.name,
//         img: e.img,
//         type: e.type,
//         height: e.height,
//         weight: e.weight,
//         candy: e.candy,
//         candy_count: e.candy_count,
//         egg: e.egg,
//         spawn_chance: e.spawn_chance,
//         avg_spawns: e.avg_spawns,
//         spawn_time: e.spawn_time,
//         multipliers: e.multipliers,
//         weaknesses: e.weaknesses,
//         next_evolution: e.next_evolution,
//         card_btn: "../img/heart-half_card.svg"
//     };
// });

// //  create cards

// allPakemons.forEach((e, i) => {
//     const wrapp = $(".card_wrapp");
//     const card = crElement("div", "card col-lg-3 m-2 col-md-6 col-sm-12 pt-2", `  <img src="${e.img}" class="img-top mx-auto" alt="card_img">
//     <hr>
//     <div class="card-body">
    
//       <div class="card_info d-flex justify-content-between">
//       <h5 class="card-title">${e.name}</h5>
//       <a href="#" class="btn btn-warning like_btn"><img src="${e.card_btn}" class="" alt="card_img"></a></div>
//       <p class="card-text">${e.candy}</p>
//       <p class="card-text">${e.type}</p>
//       <div class="card_info_text d-flex">
//       <p class="card_text"><strong>${e.weight}</strong></p></
//       <p class="card_text mss"><strong class="ms-4">${e.candy_count} age</strong></p>
//       </div>
      
//     </div>`
//     );


//     wrapp.appendChild(card);

//     // $(".like_btn").addEventListener("click", (e) => {
//     //     console.log(e.target);
//     //   });
// });

// //create dynamic options for select
// let arr = [];
// allPakemons.forEach((e) => {
//     let itemType = e.type;
//     itemType.forEach(element => {
//         if (!arr.find((e) => e == element)) {
//             arr.push(element);
//         }
//     });
// });

// arr.sort();
// arr.unshift("All");
// arr.forEach((e) => {
//     let selectItems = crElement("option", "opt", e);
//     $("#category_name").appendChild(selectItems);
// });


// // find function
// const findPake = function (title) {
//     const searchPake = allPakemons.filter((item) => {
//         return item.name.toLowerCase().includes(title);
//     });
    
//     // console.log(searchPake);
//     renderPake(searchPake);
// };
// // findPake()

// //find event
// $("#name_search").addEventListener("input", (e) => {
//     //preventDefoult biz aytganimizda funksiyani ishga tushiradi avomatik yangilanishni toxtatib turadi
//     e.preventDefault();
//     $(".card_wrapp").innerHTML="";
//     const searchTerm = $("#name_search").value.trim().toLowerCase();
//     const regexpSearch = new RegExp(searchTerm, "gi");
//     const result = searchTerm.match(regexpSearch);
//     findPake(result);
//     console.log(result);
// });

// //render function 
// function renderPake(searchPake){
//     searchPake.forEach((e, i) => {
//         const wrapp = $(".card_wrapp");
//         const card = crElement("div", "card col-lg-3 m-2 col-md-6 col-sm-12 pt-2", `  <img src="${e.img}" class="img-top mx-auto" alt="card_img">
//         <hr>
//         <div class="card-body">
        
//           <div class="card_info d-flex justify-content-between">
//           <h5 class="card-title">${e.name}</h5>
//           <a href="#" class="btn btn-warning like_btn"><img src="${e.card_btn}" class="" alt="card_img"></a></div>
//           <p class="card-text">${e.candy}</p>
//           <p class="card-text">${e.type}</p>
//           <div class="card_info_text d-flex">
//           <p class="card_text"><strong>${e.weight}</strong></p></
//           <p class="card_text mss"><strong class="ms-4">${e.candy_count} age</strong></p>
//           </div>
          
//         </div>`
//         );
    
    
//         wrapp.appendChild(card);
    
//         // $(".like_btn").addEventListener("click", (e) => {
//         //     console.log(e.target);
//         //   });
//     });
// }





// // $("#category_name").addEventListener("change", () => {
// //     let selectValue = $("#category_name").value.trim().toLowerCase();
// //     console.log(selectValue);
// //     let selectedd = () => {
// //         allPakemons.forEach((items) => {
// //             items.type.forEach((el) => {
// //                 el.trim().toLowerCase()

// //             });

// //         });
// //     };
// //     selectedd()

// // });


















// let openn = $(".heart_btn");
// openn.addEventListener("click", () => {
//     let openMenu = $(".modal_menu")
//     openMenu.classList.add("menu_showw")

// });
// $(".close_menu").addEventListener("click", () => {

//     $(".modal_menu").classList.remove("menu_showw")

// });






