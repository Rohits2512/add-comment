localStorage.setItem("data", "[]")
function addComment()
{
    let uname= document.getElementById("username");
    let comm= document.getElementById("comment");

    if(uname.value == "" || comm.value ==""){
        alert("please Enter user name and comment!!!");
        return;
    }

    let element1 = `<div class="box1">
    <p id="un" class="boxdata">${uname.value}</p>
    <p id="cmt" class="boxdata">${comm.value}</p>

      <p id="like" class="boxdata"><span>0 </span><i onclick= "myLike(this);" 
      class="fa fa-thumbs-up likebtn"></i></p>

      <p id="dislike" class="boxdata"><span>0 </span><i onclick="myDislike(this);"
      class="fa fa-thumbs-down likebtn""></i></p>

      <p><span id = "del"><i onclick = "deleteComment(this);" class ="fa fa-trash"></i></span></p>
   
    </div>`

document.querySelector(".comment-box2").innerHTML += element1;


let comment = localStorage.getItem("data");

if(comment == null){
    arr =[];
}else{
    arr = JSON.parse(comment);
}

let obj ={
    name: uname.value,
    comments: comm.value,
    likes: 0,
    dislikes: 0
}

arr.push(obj);

localStorage.setItem("data", JSON.stringify(arr));
uname.value = ""
comm.value = ""


}

function myLike(i){
    let p = i.parentNode
    
    let no = p.children[0]
    no.innerHTML = parseInt(no.innerHTML)+1
    const uname = p.parentNode.children[0].innerHTML
    let arr = JSON.parse(localStorage.getItem("data"))
    for(obj of arr){
        if(obj.name == uname)
            obj.likes += 1
            console.log(p);
    }
    localStorage.setItem("data", JSON.stringify(arr))
}

function myDislike(x){
    let p = x.parentNode
    let no = p.children[0]
    no.innerHTML = parseInt(no.innerHTML)+1
    const uname1 = p.parentNode.children[0].innerHTML
    let arr = JSON.parse(localStorage.getItem("data"))
    for(obj of arr){
        if(obj.name == uname1)
            obj.dislikes += 1
    }
    localStorage.setItem("data", JSON.stringify(arr))
}

function deleteComment(y){
    const uname1 = y.parentNode.parentNode.children[0].innerHTML
    
    let arr = JSON.parse(localStorage.getItem("data"))

    for(let i = 0; i < arr.length; i++){
        if(arr[i].name == uname1){
            arr.splice(i,1);
        }
    }localStorage.setItem("data", JSON.stringify(arr))
    y.parentNode.parentNode.parentNode.remove()
    
}