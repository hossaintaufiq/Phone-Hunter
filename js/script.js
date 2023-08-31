// console.log("hello world")

const loadPhone = async (searchText,isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phone = data.data;

  displayPhone(phone,isShowAll);
};

const displayPhone = (phones,isShowAll) => {
  const devicesId = document.getElementById("devices-info");

  devicesId.textContent= '';
  // show all buttons 
  const showAllButtons = document.getElementById('show-all-button');
   if(phones.length>12 && !isShowAll){
    showAllButtons.classList.remove('hidden');
   }
   else(
    showAllButtons.classList.add('hidden')
   )

  // declaring new value for phone if show all button doesn't appear 
  if(!isShowAll){
    phones= phones.slice(0,12);

  }
  

  //  loop of the phone 
  phones.forEach((phone) => {
    // console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card  bg-base-100 shadow-xl pt-5 `;
    phoneCard.innerHTML = ` <figure><img src="${phone.image}" alt="Shoes" class="py-6 px-16 rounded-lg bg-teal-100" /></figure>
                         <div class="card-body">
                           <h2 class="card-title">${phone.phone_name}</h2>
                           <p>Best phone Available</p>
                           <div class="card-actions justify-center">
                             <button class="btn btn-primary" onclick="displayModal('${phone.slug}') "=>Buy Now</button>
                           </div>
                         </div>`;

    devicesId.appendChild(phoneCard);
    loadingFucntion(false);
  });
};
// new modal section 
const displayModal = async(id)=>{
  console.log(id);

  const phoneDetails = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await phoneDetails.json();

  console.log(data);

  const phoneData= data.data;
  displayModalDetails(phoneData)
}

//  modal details 
const displayModalDetails =(phoneData)=>{
  modalFunction.showModal();
  console.log(phoneData)
}

// new search button

const searchHandle = (isShowAll) => {

  loadingFucntion(true);
  const searchField = document.getElementById("search-text");

  const searchText = searchField.value;
  loadPhone(searchText,isShowAll);



  // console.log(searchText);
};


// loading function 
const loadingFucntion = (istrue)=>{

  const loadingSpeanner = document.getElementById('loading-bar');

  
    if(istrue){
      loadingSpeanner.classList.remove('hidden');
    }
    else{
      loadingSpeanner.classList.add('hidden');
    }
}


const handleShowAll = () => {

  searchHandle(true);

  console.log('show all');
}
// loadPhone();
