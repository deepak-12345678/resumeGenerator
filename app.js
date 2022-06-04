const name=document.querySelector(".name").value
const phone=document.querySelector(".phno").value
const residential=document.querySelector(".address").value
const education=document.querySelector(".education_degree").value
const other_degree=document.querySelector(".other_degree").value
const uni=document.querySelector(".university").value
const affiliations=document.querySelector(".affiliations").value
const summary=document.querySelector(".prof").value
const post=document.querySelector(".postinput").value
const startdate=document.querySelector(".startdateinput").value
const point=document.querySelector(".pointinput").value
const skill=document.querySelector(".skills").value
const affiliationList = document.querySelector(".new_list")
function clearErrors(){
    {
        
        var remo=document.querySelectorAll('.border')
        for (let item of remo){
            item.classList.remove("border")
        }
        var error=document.querySelectorAll(".formerror")
        for (let item of error){
            item.innerHTML="";
        }
    
        }
    
    }

function setError(errorMsgs,id){
    document.getElementById(id).textContent=errorMsgs;}

function validateForm(){
    var returnVal=true;
    const name=document.querySelector(".name").value
    const phone=document.querySelector(".phno").value
    const residential=document.querySelector(".address").value
    const edu=document.querySelector(".education_degree").value
    const other_degree=document.querySelector(".other_degree").value
    const uni=document.querySelector(".university").value
    const summary=document.querySelector(".prof").value
    clearErrors()
    if (name.length<5){
        const input=document.querySelector(".name")
        setError("*Length of name is too small","fname")
        returnVal=false
        input.classList.add('border')
    }
    if  (name.length>20){
        const input=document.querySelector(".name")
        setError("*Length of name is too big","fname")
        returnVal=false
        input.classList.add('border')
    }
    if (phone.length!==10){
        const inputy=document.querySelector(".phno")
        setError("*Please enter a valid 10 digit mobile number","fphone"   )
        returnVal=false;
        inputy.classList.add('border')
    }
    if (((edu!=="PHD") && (edu!=="B tech") && (edu!=="M tech"))&& (other_degree.length===0)){
        const input=document.querySelector(".other_degree")
        setError("*Please fill atleast one of the blank","degree")
        returnVal=false;
        input.classList.add('border')
    }
    if (residential==""){
        const inputq=document.querySelector(".address")
        setError("*Please enter an address","res")
        returnVal=false;
        inputq.classList.add('border')

    }
    if (uni.length==0){
        const inputz=document.querySelector(".university")
        setError("*Pleasee enter university name with address","uni")
        returnVal=false;
        inputz.classList.add('border')
    }
    
    if (summary.length==0){
        const inpute=document.querySelector(".prof")
        setError("*Please enter your professional summary","summary")
        returnVal=false;
        inpute.classList.add('border')
    }
    
    return returnVal;
}
let new_arr=[];

if (localStorage.getItem('affList')==null){
    localStorage.setItem('affList', JSON.stringify(new_arr))
} else {
    new_arr = JSON.parse(localStorage.getItem('affList'))
}

affiliationList.innerHTML = "";
new_arr.forEach((aff) => {
    var li = document.createElement('li');
    if (aff!==""){
    li.textContent = aff;
    affiliationList.appendChild(li);
    document.querySelector('.affiliations').value="";
}
})

document.querySelector(".addmore").addEventListener("click",(event)=>{
    event.preventDefault()
    if (document.querySelector('.affiliations').value!==""){
    new_arr.push(document.querySelector(".affiliations").value)

    localStorage.setItem('affList', JSON.stringify(new_arr))}

    
    affiliationList.innerHTML = "";
    new_arr.forEach((aff) => {
        var li = document.createElement('li');
        if (aff!==""){
        li.textContent = aff;
        affiliationList.appendChild(li);
        document.querySelector('.affiliations').value="";
    }
    })
})
document.querySelector('.delete').addEventListener("click",(event)=>{
    event.preventDefault();
    new_arr.pop()
    localStorage.setItem('affList',JSON.stringify(new_arr))
    affiliationList.innerHTML="";
    new_arr.forEach((aff)=>{
        var li=document.createElement('li');
        if (aff!==""){
            li.textContent=aff;
            affiliationList.appendChild(li);
        }
    })
    

})



document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();
})

let newArrSkill=[];

if (localStorage.getItem('lsSkills')==null){
    localStorage.setItem('lsSkills', JSON.stringify(newArrSkill))
} else {
    newArrSkill = JSON.parse(localStorage.getItem('lsSkills'))
}

document.querySelector('.bet').innerHTML = "";
newArrSkill.forEach((skelem) => {
    var li = document.createElement('li');
    if (skelem!==""){
    li.textContent = skelem;
    document.querySelector('.bet').appendChild(li);
    document.querySelector('.skills').value="";
}
})

document.querySelector(".skadd").addEventListener("click",(event)=>{
    event.preventDefault()
    if (document.querySelector('.skills').value!==""){
    newArrSkill.push(document.querySelector(".skills").value)

    localStorage.setItem('lsSkills', JSON.stringify(newArrSkill))}

    
    document.querySelector('.bet').innerHTML = "";
    newArrSkill.forEach((skelem) => {
        var li = document.createElement('li');
        if (skelem!==""){
        li.textContent = skelem;
        document.querySelector('.bet').appendChild(li);
        document.querySelector('.skills').value="";
    }
    })
})
document.querySelector('.skdelete').addEventListener("click",(event)=>{
    event.preventDefault();
    newArrSkill.pop()
    localStorage.setItem('lsSkills',JSON.stringify(newArrSkill))
    document.querySelector('.bet').innerHTML="";
    newArrSkill.forEach((skelem)=>{
        var li=document.createElement('li');
        if (skelem!==""){
            li.textContent=skelem;
            document.querySelector('.bet').appendChild(li);
        }
    })
    

})
let history_array=[];

document.querySelector(".ptadd").addEventListener("click",(event)=>{
event.preventDefault()
let new_elem={
    post:document.querySelector('.postinput').value,
    startDate:document.querySelector('.startdateinput').value,
     loca:document.querySelector('.locinput').value,
     poi:document.querySelector('.pointinput').value.split("|")
}
if (localStorage.getItem('history')==null){
    localStorage.setItem('history','[]')

}
var history=JSON.parse(localStorage.getItem('history'))
history_array.push(new_elem)
localStorage.setItem('history',JSON.stringify(history_array))
document.querySelector('.ar4').innerHTML=""
    history_array.forEach((elem)=>{
         var li =document.createElement('li')
         li.innerHTML=`
         <br><ul class="left">
                         <li>Post:${elem.post}</li>
                         <li>Start Date:${elem.startDate}</li>
                     <li>Location:${elem.loca}</li>
                         <li>Points:${elem.poi}</li>
                       </ul>`;
         document.querySelector('.ar4').appendChild(li)
         document.querySelector('.postinput').value=""
         document.querySelector('.startdateinput').value=""
         document.querySelector('.pointinput').value=""
         document.querySelector('.locinput').value=""
         document.querySelector('.left').style.marginLeft="20px"
        })
         
 })
document.querySelector('.delpt').addEventListener("click",(event)=>{
    event.preventDefault();
    history_array.pop()
    localStorage.setItem('history',JSON.stringify(history_array))
    document.querySelector('.ar4').innerHTML="";
    history_array.forEach((ele)=>{
        var li =document.createElement('li')
         li.innerHTML=`
         <br><ul class="left">
                         <li>Post:${ele.post}</li>
                         <li>Start Date:${ele.startDate}</li>
                     <li>Location:${ele.loca}</li>
                         <li>Points:${ele.poi}</li>
                       </ul>`;
         document.querySelector('.ar4').appendChild(li)
         document.querySelector('.left').style.marginLeft="20px"        
    })
})

document.querySelector('.sub').addEventListener("click",()=>{if (validateForm()==true){
    localStorage.setItem('name',JSON.stringify(document.querySelector(".name").value))
    document.querySelector(".name").value=""
    localStorage.setItem('phno',JSON.stringify(document.querySelector(".phno").value))
    document.querySelector(".phno").value=""
    localStorage.setItem('ema',JSON.stringify(document.querySelector(".email").value))
    document.querySelector(".phno").value=""
    localStorage.setItem('address',JSON.stringify(document.querySelector(".address").value))
    document.querySelector(".address").value=""
    localStorage.setItem('education_degree',JSON.stringify(document.querySelector(".education_degree").value))
    document.querySelector(".education_degree").value=""
    localStorage.setItem('prof',JSON.stringify(document.querySelector(".prof").value))
    document.querySelector(".prof").value=""
    localStorage.setItem('other_degree',JSON.stringify(document.querySelector(".other_degree").value))
    document.querySelector(".other_degree").value=""
    localStorage.setItem('university',JSON.stringify(document.querySelector(".university").value))
    document.querySelector(".university").value=""
    document.querySelector('.insert1').innerHTML=JSON.parse(localStorage.getItem('prof'))
document.querySelector('.live').innerHTML=`<i class="fa-solid fa-location-dot"></i> <p class="hep"></p>`
document.querySelector('.hep').textContent=JSON.parse(localStorage.getItem('address'))
document.querySelector('.phoneno').innerHTML=`<i class="fa-solid fa-phone"></i><p class="neck"></p>`
document.querySelector('.neck').textContent=JSON.parse(localStorage.getItem('phno'))
document.querySelector('.ema').innerHTML=`<i class="fa-solid fa-envelope"></i><p class="hes"></p>`
document.querySelector('.hes').textContent=JSON.parse(localStorage.getItem('ema'))
document.querySelector('.james').textContent=JSON.parse(localStorage.getItem('name'))
JSON.parse(localStorage.getItem('lsSkills')).forEach((splem)=>{
    var li=document.createElement('li');
    if (splem!==""){
        li.textContent = splem;
        document.querySelector('.lkj').appendChild(li);}
})
JSON.parse(localStorage.getItem('affList')).forEach((slem)=>{
    var li=document.createElement('li');
    if (slem!==""){
        li.textContent = slem;
        document.querySelector('.abc').appendChild(li);}
})
document.querySelector('.dege').textContent=JSON.parse(localStorage.getItem('education_degree'))
document.querySelector('.uve').textContent=JSON.parse(localStorage.getItem('university'))
JSON.parse(localStorage.getItem('history')).forEach((swen,idx)=>{
    var li=document.createElement('li');
    var li_id=`pop-${idx}`
    li.innerHTML=`<div class="secondary">
    <div class="mainhead"><div class="st1"><b class="pots">${swen.post}&nbsp,&nbsp</b></div><div class="st2">${swen.startDate}</div></div>
    <div class="st3">${swen.loca}</div>
    <div class="st4"><ul class="pop" id="${li_id}"></ul></div>
    </div>`
    // document.querySelector('.pots').textContent=swen.post
    // document.querySelector('.st2').textContent=swen.startDate
    // document.querySelector('.st3').textContent=swen.loca
    document.querySelector('.l1').appendChild(li)
    swen.poi.forEach((clem)=>{
        var pi=document.createElement('li');
        pi.textContent=clem;
        document.getElementById(li_id).appendChild(pi)
    })
    
})
    document.querySelector('.primarybox').style.display="none"
    document.querySelector('.mainbox').style.display="none"
    document.querySelector('.final').style.display="flex"
    document.querySelector('.body').style.backgroundColor="black"
    document.querySelector('.down').style.display="block"
}})
document.querySelector('.down').addEventListener("click",(event)=>{
    window.print()
})
