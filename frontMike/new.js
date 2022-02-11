function mandar(){
    let name =document.getElementById("name").value
    let apellido = document.getElementById("apellido").value
    let age = document.getElementById("age").value
    let posi = document.getElementById("posicion").value
    let team = document.getElementById("team").value
    var data={
        name:name,
        surname:apellido,
        age:age,
        position:posi,
        team:team
    }
    alert(name)

    fetch("https://cors-anywhere.herokuapp.com/"+"https://fullmike.herokuapp.com/players" ,  {
        method:"POST",
        mode:"cors",
        body: JSON.stringify(data),
        headers:{
            "content-type": "application/json"
        }
    })
    .then(data=> console.log(data))

    

}














































