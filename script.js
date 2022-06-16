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
            
            var win= winner(arr);
            if(win)
            {
            //    let score=scoreboard(arr);
            //    console.log(score);    
                playerWinner(turnof);
            }
            if(allset(arr))
            {
                playerWinner(-1);
            }
            turnof=1-turnof;
            turnofplayer(turnof);
        }
        //minimax(arr);
    }
}

function aimove(minormax)
{
    var board=arr;
    bestmove=Infinity;
    var Bmove;
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            if(board[i][j]==0)
            {
                board[i][j]=2;
                let move=minimax(true,board);
                console.log(move+" "+i+","+j)
                if(move<bestmove)
                {
                    bestmove=move;
                    Bmove=[i,j];
                }
                board[i][j]=0;
            }
        }
    }
    console.log(Bmove);
    return Bmove;
}

function minimax(ismaxi, bor2)
{
    var bor3=bor2;
    let best;
    if(allset(bor3)||winner(bor3))
    {
        let score=scoreboard(bor3);
        return score;
    }

    if(ismaxi)
    {
        best=-Infinity;
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                if(bor3[i][j]==0)
                {
                    bor3[i][j]=1;
                    let score= minimax(false,bor3);
                    bor3[i][j]=0;
                    if(score>best)
                    {
                        best= score;
                    }
                }
            }
        }
        return best;
    }
    else
    {
        best=Infinity;
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                if(bor3[i][j]==0)
                {
                    bor3[i][j]=2;
                    let score=minimax(true,bor3);
                    bor3[i][j]=0;
                    if(score<best)
                    {
                        best = score;
                    }
                }
            }
        }
        return best;
    }
}

function scoreboard(board)
{
    let score;
    for (let i = 0; i < 3; i++) {
        if ((1==board[i][1]&&1==board[i][2]&&1==board[i][0])
        ||  (1==board[1][i]&&1==board[2][i]&&1==board[0][i]))
        {
            return score=1;
        }
        
        if ((2==board[i][1]&&2==board[i][2]&&2==board[i][0])
        ||  (2==board[1][i]&&2==board[2][i]&&2==board[0][i]))
        {
           return score=-1;
        }
    }

    if((board[0][0]==1&&1==board[1][1]&&1==board[2][2])
    || (board[0][2]==1&&1==board[1][1]&&1==board[2][0]) )
    {
       return score=1;
    }
     
    if((2==board[1][1]&&2==board[2][2]&&2==board[0][0])
    || (2==board[1][1]&&2==board[2][0]&&2==board[0][2]))
    {
       return score=-1;
    }
    if(allset(board))
    {
        score=0;
    }

    return score;
}


function allset(bor4)
{
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
                if(bor4[i][j]==0)
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
        let a=aimove();
        setimg(a[0]+","+a[1])
    }
    else
    {
        document.getElementById("p1").innerHTML="\<\<";
        document.getElementById("p2").innerHTML="";
    }
}


function winner(board) 
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
    if(Player==1)
    {
        document.getElementById("sieger2").innerHTML=winner;
        gamewinner="Player_2";
    }
    if(Player==-1)
    {
        document.getElementById("sieger1").innerHTML="Unentschieden";
        document.getElementById("sieger2").innerHTML="Unentschieden";
        gamewinner="Unentschieden";
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