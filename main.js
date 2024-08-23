let navbar = document.querySelector(".nav-pages");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
};

//

// const teamMembers = document.querySelectorAll(".team-member");

// teamMembers.forEach((member, index) => {
//   member.addEventListener("mouseenter", () => {
//     teamMembers.forEach((otherMember, otherIndex) => {
//       if (otherIndex !== index) {
//         otherMember.style.display = "none";
//       }
//     });
//   });

//   member.addEventListener("mouseleave", () => {
//     teamMembers.forEach((otherMember) => {
//       otherMember.style.display = "block";
//     });
//   });
// });
