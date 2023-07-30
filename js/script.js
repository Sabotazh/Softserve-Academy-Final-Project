// do {
//   // setTimeout(location.reload(), 2000)
//   // console.log('Hello!')
// } while (null === localStorage.getItem("reviews"));
fetch('https://jsonplaceholder.typicode.com/posts/2/comments')
  .then((response) => response.json())
  .then((json) => localStorage.setItem("reviews", JSON.stringify(json)));
const reviews = JSON.parse(localStorage.getItem("reviews"));
const reviewsCount = document.getElementsByClassName('profile-circle').length;
const copyrightFooter = `
  <p>Wine Shop &copy; ${new Date().getFullYear()}. Made with <i class="fa fa-heart"></i>by Ivan Sabat</p>
`;

async function logReviews() {
  const response = await fetch(
    "http://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJZz-_kM6HZ0ARSxlSLI_kI7Y");
  const reviews = await response.json();
  console.log(reviews);
}

function clearInput() {

  let email = document.getElementById('email').value;
  let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  email.match(validEmail)
    ? alert(`Thank you ${email} for your subscribe!`)
    : alert(`${email} is not a valid email`);

  document.getElementById('newsletter').reset();
}

document.getElementById('copyrightYear').innerHTML = copyrightFooter;
document.getElementById('subscribe').addEventListener('click', clearInput);

for (let i = 1; i <= reviewsCount; i++) {
  const str = reviews[i]['body'];
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  document.getElementById(`review${i}`).innerHTML = `
  <div class="row">
    <div class="col-lg-3">
      <div class="profile-circle">
        <img src="images/t${i}.png" class="img-circle" alt="">
      </div>
    </div>
    <div class="col-lg-9">
      <p>"${str2 + ' ' + str}."</p>
      <span class="position dart-fs-16">email:</span>
      <span class="name dart-fs-12">${reviews[i]['email']}</span>
    </div>
  </div>
`;
}