let btnmoreDetailes = document.querySelectorAll(".moreDetailes");
let btnLessDetailes = document.querySelectorAll(".LessDetailes");

let clinicsItemInfo = document.querySelectorAll(".clinics-item-info");

for (let index = 0; index < btnLessDetailes.length; index++) {
  clinicsItemInfo[index].style.display = "none";
  btnLessDetailes[index].style.display = "none";

  btnmoreDetailes[index].onclick = function () {
    clinicsItemInfo[index].style.display = "block";
    btnmoreDetailes[index].style.display = "none";
    btnLessDetailes[index].style.display = "block";
  };

  btnLessDetailes[index].onclick = function () {
    clinicsItemInfo[index].style.display = "none";
    btnLessDetailes[index].style.display = "none";
    btnmoreDetailes[index].style.display = "block";
  };
}

let bookSession = document.querySelectorAll(".bookSession");

for (let index = 0; index < bookSession.length; index++) {
  bookSession[index].onclick = function () {
    console.log("asdasd");
    Swal.fire("Good Booked!", "Booked successfully !", "success");
  };
}
