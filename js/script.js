// console.log("hello world")

const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phone = data.data;

  displayPhone(phone);
};

const displayPhone = (phones) => {
  const devicesId = document.getElementById("devices-info");
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card  bg-base-100 shadow-xl pt-5 `;
    phoneCard.innerHTML = ` <figure><img src="${phone.image}" alt="Shoes" class="py-6 px-16 rounded-lg bg-teal-100" /></figure>
                         <div class="card-body">
                           <h2 class="card-title">${phone.phone_name}</h2>
                           <p>${phone.slug}</p>
                           <div class="card-actions justify-center">
                             <button class="btn btn-primary">Buy Now</button>
                           </div>
                         </div>`;

    devicesId.appendChild(phoneCard);
  });
};

loadPhone();
