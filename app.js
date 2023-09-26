let btn = document.querySelector("button");
let url ="http://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async()=>{ //async function
    let link = await getImage();  //calling getImage and will wait for valid data
    console.log(link); //print img
    let img = document.querySelector("#output");
    img.setAttribute("src", link); //source attribute's value is set to the link
    console.log(link);
});

async function getImage(){
    try {
        let res = await axios.get(url);  //API Call     
        return res.data.message; //returns img
    } catch(e){
        console.log("error-",e);
        return "No Image found";
    }
}