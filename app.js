const url = "http://universities.hipolabs.com/search?name=";
const btn = document.querySelector("button");

 
 
btn.addEventListener("click", async ()=> {
    const country = document.querySelector("input").value;
    const collegeArr = await getCollege(country);
    showColl(collegeArr);
});


function showColl(collegeArr) {
    const list = document.querySelector("#list");
    list.innerHTML = "";
    for(col of collegeArr){
        const li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    };

};

async function getCollege(country) {
   try{
    const res = await axios.get(url + country);
    return res.data;
   }catch(e){
     alert("something wents wrong"+ e)
   };
};

 
