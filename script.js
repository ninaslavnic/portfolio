
// NAVIGACIJA
let lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.
    documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('active')
    } else
    {
         navbar.classList.remove('active')
    }
    lastScrollTop = scrollTop;
})


// HAMBUREGR MENI
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Zatvori meni kada se klikne na link (opciono, ali preporučljivo)
document.querySelectorAll("nav a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// TABOVI
$(document).ready(function() {
    $("#content").find("[id^='tab']").hide(); // Hide all content
    $("#tabs li:first").attr("id","current"); // Activate the first tab
    $("#content #tab1").fadeIn(); // Show first tab's content

    $('#tabs a').click(function(e) {
        e.preventDefault();
        if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
         return;
        }
        else{
          $("#content").find("[id^='tab']").hide(); // Hide all content
          $("#tabs li").attr("id",""); //Reset id's
          $(this).parent().attr("id","current"); // Activate this
          $('#' + $(this).attr('name')).fadeIn(); // Show content for the current tab
        }
    });
});


// TOGGLE SCENA
document.addEventListener("DOMContentLoaded", function () {

  const toggleBtn = document.getElementById("themeToggle");
  const toggleIcon = document.getElementById("toggleIcon");
  const sceneImage = document.getElementById("sceneImage");

  let isDay = false; // false = noc, true = dan

  toggleBtn.addEventListener("click", function () {

    isDay = !isDay;

    if (isDay) {
      // 👉 DAN MODE
      toggleBtn.classList.add("day");
      toggleIcon.classList.add("icon-right");

      toggleIcon.src = "images/day.png"; // SUN ICON
      sceneImage.src = "images/scena_dann.png"; // DAY SCENE

    } else {
      // 👉 NOC MODE
      toggleBtn.classList.remove("day");
      toggleIcon.classList.remove("icon-right");

      toggleIcon.src = "images/night.png"; // MOON ICON
      sceneImage.src = "images/scena_noc.png"; // NIGHT SCENE
    }

  });

});


// MODALNI PROZOR
// // Get the modal
// var modal = document.getElementById("myModal");
// // Get the input that opens the modal
// var btn = document.getElementById("myBtn"); 
// // Get the span that closes
// var span = document.getElementsByClassName("close")[0];

// if (btn) {
//     btn.onclick = function(event) {
//         event.preventDefault(); // OVO JE KLJUČNO - sprečava osvežavanje stranice
//         modal.style.display = "block";
//     }
// }

// if (span) {
//     span.onclick = function() {
//         modal.style.display = "none";
//     }
// }

// // Zatvaranje na klik van slike
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// 1. Selektujemo sve elemente sa stranice
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn"); 
var span = document.getElementsByClassName("close")[0];
// Ovde hvatamo formu koju smo malopre označili u HTML-u
var forma = document.getElementById("kontaktForma");

// 2. Klik na dugme "POŠALJI"
if (btn && forma) {
    btn.onclick = function(event) {
        // PROVERA: Da li su sva 'required' polja ispravno popunjena?
        if (forma.checkValidity()) {
            event.preventDefault(); // Zaustavlja osvežavanje stranice
            modal.style.display = "block"; // Otvara modal jer je sve OK!
        } else {
            // Ako polja NISU popunjena, NE stavljamo preventDefault i NE otvaramo modal.
            // Puštamo browser da sam pocrveni prazna polja i izbaci oblačić upozorenja.
        }
    }
}

// 3. Zatvaranje modala na "X"
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

// 4. Zatvaranje modala na klik van njega
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// PITANJA

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;

    item.classList.toggle('active');
  });
});

// GLOW EFEKAT

document.querySelectorAll('.rem-galerija img').forEach(img => {
  img.addEventListener('touchstart', () => {
    img.classList.add('active-touch');
    setTimeout(() => img.classList.remove('active-touch'), 1000);
  });
});
