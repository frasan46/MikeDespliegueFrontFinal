async function inicio(){ 

const response= await fetch("https://cors-anywhere.herokuapp.com/"+"https://fullmike.herokuapp.com/")

  .then(response =>  response.json())
    .then(data =>datas = data);
ul= document.getElementById("ul").innerHTML
console.log(datas)
  for(i in datas){
    let id= datas[i]["_id"]
    document.getElementById("ul").innerHTML+= "<li>" +datas[i]["name"] + " - " + datas[i]["surname"] + " - " + datas[i]["team"] + " - " + datas[i]["position"] + "<button onclick='borrar("+id+")'> borrar</button>"
    
}}

inicio()



async function borrar(id){ 
  alert("adsf")
  const response = await fetch(
    "https://players-cea.herokuapp.com/Players/" + id + "?_method=DELETE",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
  body: JSON.stringify(newPlayer)
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Product Deleted");
      window.location.href = "index.html";
    })
    .catch((error) => console.log(error));
      
  }