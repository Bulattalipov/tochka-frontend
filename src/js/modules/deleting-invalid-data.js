
export default () => {
  // const inputs = document.querySelectorAll("[data-parsley-fio]");

  // if(!inputs.length) return;

  // inputs.forEach(input => {
  //   input.addEventListener("input", function() {
  //     var reg = /[0-9#$%^&*@!*_+():;=^№$"?\[\]\{\}~`]/g;
  //     if (this.value.search(reg) !=  -1) {
  //         this.value  =  this.value.replace(reg, '');
  //     }
  //   })
  // })
}


export function deletingInvalidDataPhone () {
  const inputs = document.querySelectorAll("[data-parsley-phone2]");

  if(!inputs.length) return;

  inputs.forEach(input => {
    input.addEventListener("input", function() {
      var reg = /[#$%^&*@!*_():,.;'|=^№$"?<>\/\\\-\[\]\{\}~`]/g;
      if (this.value.search(reg) !=  -1) {
        this.value  =  this.value.replace(reg, '');
      }
    })
  })
}




// export default () => {
//   const inputs = document.querySelectorAll("[data-parsley-fio]");

//   if(!inputs.length) return;

//   inputs.forEach(input => {
//     input.addEventListener("input", function() {
//       var reg = /[0-9#$%^&*@!*_+():;=^]/g;
//       if (this.value.search(reg) !=  -1) {
//           this.value  =  this.value.replace(reg, '');
//       }
//     })
//   })
// }


// export function deletingInvalidDataPhone () {
//   const inputs = document.querySelectorAll("[data-parsley-phone2]");

//   if(!inputs.length) return;

//   inputs.forEach(input => {
//     input.addEventListener("input", function() {
//       var reg = /[A-Za-zА-Яа-я#$%^&*@!*_():;=^]/g;
//       if (this.value.search(reg) !=  -1) {
//           this.value  =  this.value.replace(reg, '');
//       }
//     })
//   })
// }

