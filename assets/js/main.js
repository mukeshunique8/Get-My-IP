// // Write your javascript code here
// import team from "../../data/team.json"


// const teamListEl = document.getElementById("teamlist");


// for(const member of team ){

//     // teamListEl.innerHTML += `<li class ="member-list">#${member.id} ${member.name} - ${member.gender} (${member.hobbies.join( ", ")} )</li>`;
//     teamListEl.innerHTML += `<li class="member-list">#${member.id} ${member.name} - ${member.gender} (${member.hobbies.join(", ")})    ${member.parent?  ", ( DAD :"+ member.parent.dad +" )":" "} </li>`;
 
// }
// console.log(teamListEl)



// get the ip address from this url https://ipv4.icanhazip.com 

const ipadddress = document.getElementById('ipAd')

  let xhr =   new XMLHttpRequest()

xhr.onreadystatechange = function (){

    if(this.readyState === 4 && this. status == 200){


        ipadddress.innerHTML = this.response? this.response:"NO DATA"
        console.log(xhr.responseText)

        console.log("OKKKKKKKKKKKKK");
    }
}

xhr.open("GET","https://ipv4.icanhazip.com/")
xhr.send()
