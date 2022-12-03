import './style.css';

document.addEventListener("DOMContentLoaded",()=>{
    let lista = document.querySelector(".lista");
    let bekezdes = document.querySelector(".bekezdes");
    let kislista = document.querySelector(".kislista");
    let osszterulet = document.querySelector(".osszterulet");
    let check = document.querySelector(".check");

async function getData(){

    const responese = await fetch('../src/planets.json');
    const data = await responese.json();


    const byName = data.planets.sort((a,b)=>{
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
  
          if(fa<fb){
            return -1;
          }
          if(fa>fb){
            return 1;
          }
          return 0;
    });

   

    //All Planet

    document.querySelector(".allPlanetbtn").addEventListener("click",()=>{
        byName.forEach(element => {
            if(element.dwarf == true){
                lista.innerHTML += `<li><i>${element.name}</i></li>`;
            }else{
                lista.innerHTML += `<li>${element.name}</li>`;
            }
        });
    })

    //TheM
    document.querySelector(".TheMbtn").addEventListener("click",()=>{
        byName.forEach(element => {
            let terulet = element.area;

            console.log(terulet);

            let math = 2 * Math.sqrt(terulet / (4 * Math.PI));

            bekezdes.innerHTML += `${math}; \n`;
        });
    });

    //KisebbNagyobb
    document.querySelector(".kisebbNagyobb").addEventListener("click",()=>{
        kislista.innerHTML=``;
        let firstNumber = document.querySelector(".firstNumber").value;
        let secondNumber = document.querySelector(".secondNumber").value;

        byName.forEach(element=>{
            if(element.area > firstNumber && element.area< secondNumber){
                kislista.innerHTML+=`<li>${element.name}</li>`
            }
        })
        
    });

    //Törpe
    document.querySelector(".torpebtn").addEventListener("click",()=>{
        osszterulet.value=``;
        let all = 0;
        if(check.checked == true){
            byName.forEach(element=>{
                if(element.dwarf == true){
                    all += element.area;
                }
                
            })
            osszterulet.value += `${all}`
        }else{
            byName.forEach(element=>{
                if(element.dwarf == false){
                    all += element.area;
                }
                
            })
            osszterulet.value += `${all}`
        }
    });
}


getData();
})
