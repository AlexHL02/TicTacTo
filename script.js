var turnof=Math.floor(Math.random() * 2);
let arr=[[0,0,0],[0,0,0],[0,0,0]]
var gamewinner="";

turnofplayer();

function setimg(id)
{
    if(gamewinner=="")
    {
        var x="<img src=\"x.png\" alt=\"\" height=\"90px\" width=\"90px\">"
        var o="<img src=\"o.png\" alt=\"\" height=\"90px\" width=\"90px\">"
        
        if (document.getElementById(id).innerHTML!=x&&document.getElementById(id).innerHTML!=o) {
            if (turnof==0) {
                document.getElementById(id).innerHTML=x;
                setarr(id,1);
                turnof++; 
            } else {
                document.getElementById(id).innerHTML=o;
                setarr(id,2);
                turnof--;
            }
        }
        turnofplayer();
    }
}

function playerWinner(Player)
{
    var winner="<img src=\"winner.png\" alt=\"\" height=\"60px\" width=\"85px\">"
    document.getElementById("p1").innerHTML="";
    document.getElementById("p2").innerHTML="";
    if(Player==0)
    {
        
        document.getElementById("sieger1").innerHTML=winner;
        gamewinner="Player1";
    }
    else
    {
        document.getElementById("sieger2").innerHTML=winner;
        gamewinner="Player2";
    }
}

function winner(Player) {
// arr[a][0]!=0&&arr[a][0]===arr[a][1]&&a[a][2]===arr[a][3] gewinner
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i][0]!=0&&arr[i][0]==arr[i][1]&&arr[i][1]==arr[i][2])
        ||  (arr[0][i]!=0&&arr[0][i]==arr[1][i]&&arr[1][i]==arr[2][i]))
        {
            playerWinner(Player);
        }
    }
    if(arr[0][0]!=0&&arr[0][0]==arr[1][1]&&arr[1][1]==arr[2][2])
    {
        playerWinner(Player);
    }
    if(arr[0][2]!=0&&arr[0][2]==arr[1][1]&&arr[1][1]==arr[2][0])
    {
        playerWinner(Player);
    }    
}

function turnofplayer()
{
    if (turnof==1) {
        document.getElementById("p2").innerHTML="\<\<";
        document.getElementById("p1").innerHTML="";
        winner(0);
    }
    else
    {
        document.getElementById("p1").innerHTML="\<\<";
        document.getElementById("p2").innerHTML="";
        winner(1);
    }
}

function setarr(id,value)
{
    let a=id.substring(0,1);
    let b=id.substring(2,3);
    arr[a][b]=value;
}

function reset()
{
    const buttons=["0,0","0,1","0,2","1,0","1,1","1,2","2,0","2,1","2,2"];
    if(gamewinner!="")
    {
        arr=[[0,0,0],[0,0,0],[0,0,0]];
        gamewinner="";
        turnof=Math.floor(Math.random() * 2);
        document.getElementById("sieger1").innerHTML="";
        document.getElementById("sieger2").innerHTML="";
        buttons.forEach(element => {
            document.getElementById(element).innerHTML="<img src=\"\" alt=\"\">";
        });
        turnofplayer();
    }
}