var turnof=Math.floor(Math.random() * 2);
let arr=[[0,0,0],[0,0,0],[0,0,0]]
var gamewinner="";
// human 0 s:x maximaising; AI 1 s:o minimasing;

turnofplayer(turnof);

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
            } else {
                document.getElementById(id).innerHTML=o;
                setarr(id,2);

            }
            var win= winner(turnof, arr);
            if(win)
            {    
                playerWinner(turnof);
            }
            turnof=1-turnof;
            turnofplayer(turnof);
        }
        minimax(arr);
    }
}

function aimove(bor)
{
    let bestscore=Infinity;
    let bestmove;

    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            if(bor[i][j]==0)
            {
                bor[i][j]=2;
                let score=minmax(bor);
                if(score<bestscore)
                {
                    bestscore=score;
                    bestmove=[i,j];
                }
            }
        }
    }
    return bestmove;
}

function minimax(bor)
{
    let maxscore;
    if(allset(bor))
    {
        return maxscore;
    }
}

function allset(bor)
{
    var a=0;

    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
                if(bor[i][j]==0)
                {
                    return false;
                }
        }
    }
    return true;
}

function setarr(id,value)
{
    let a=id.substring(0,1);
    let b=id.substring(2,3);
    arr[a][b]=value;
}

function turnofplayer(turnplayer)
{
    if (turnplayer==1) {
        document.getElementById("p2").innerHTML="\<\<";
        document.getElementById("p1").innerHTML="";
        //let a=aimove(arr);
        //setimg(a[0]+","+a[1])
    }
    else
    {
        document.getElementById("p1").innerHTML="\<\<";
        document.getElementById("p2").innerHTML="";
    }
}


function winner(Player,board) 
{
    // arr[a][0]!=0&&arr[a][0]===arr[a][1]&&a[a][2]===arr[a][3] gewinner
        for (let i = 0; i < arr.length; i++) {
            if ((board[i][0]!=0&&board[i][0]==board[i][1]&&board[i][1]==board[i][2])
            ||  (board[0][i]!=0&&board[0][i]==board[1][i]&&board[1][i]==board[2][i]))
            {
                return true;
            }
        }

        if(board[0][0]!=0&&board[0][0]==board[1][1]&&board[1][1]==board[2][2])
        {
            return true;
        }
        if(board[0][2]!=0&&board[0][2]==board[1][1]&&board[1][1]==board[2][0])
        {
            return true;
        }    
        return false;
}

function playerWinner(Player)
{
    var winner="<img src=\"winner.png\" alt=\"\" height=\"60px\" width=\"85px\">"
    document.getElementById("p1").innerHTML="";
    document.getElementById("p2").innerHTML="";
    if(Player==0)
    {
        
        document.getElementById("sieger1").innerHTML=winner;
        gamewinner="Player_1";
    }
    else
    {
        document.getElementById("sieger2").innerHTML=winner;
        gamewinner="Player_2";
    }
}

function reset()
{
    const buttons=["0,0","0,1","0,2","1,0","1,1","1,2","2,0","2,1","2,2"];
    
        arr=[[0,0,0],[0,0,0],[0,0,0]];
        gamewinner="";
        turnof=Math.floor(Math.random() * 2);
        document.getElementById("sieger1").innerHTML="";
        document.getElementById("sieger2").innerHTML="";
        buttons.forEach(element => {
            document.getElementById(element).innerHTML="<img src=\"\" alt=\"\">";
        });
        turnofplayer(turnof);
}