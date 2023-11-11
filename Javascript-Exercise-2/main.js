let homeScore = document.getElementById("home-team-score")
let awayScore = document.getElementById("away-team-score")
dizi = ["Pozisyon ofsayt!","Golden önce faul belirlendi!","Hakem golden önce topun dışarıdan çevrildiğini tespit etti!"];
const pattern = /\s/g;
function myFunction()
{
    homeScore.innerHTML=Number(homeScore.innerHTML)+1;
}
function myFunction2()
{
    awayScore.innerHTML=Number(awayScore.innerHTML)+1;
}
function myFunction3()
{
    if(Number(homeScore.innerHTML)>0)
    {
    alert("Var'dan uyarı geldi!");
    const randomsayi=Math.floor(Math.random()*3);
    alert(dizi[randomsayi])
    alert("Gol iptal edildi!")
    homeScore.innerHTML=Number(homeScore.innerHTML)-1;
    }
}
function myFunction4()
{
    if(Number(awayScore.innerHTML)>0)
    {
    alert("Var'dan uyarı geldi!");
    const randomsayi=Math.floor(Math.random()*3);
    alert(dizi[randomsayi]);
    alert("Gol iptal edildi!")
    awayScore.innerHTML=Number(awayScore.innerHTML)-1;
    }
}
function myFunction5()
{
    const newHomeTeamName=prompt("Yeni Takım Adını Giriniz!");
    if(newHomeTeamName.match(pattern) == null & newHomeTeamName != "")
    {
        document.getElementById("home-team-name").innerHTML = newHomeTeamName;
    }
    else
    {
        alert("Yanlış bir değer girdiniz!")
    }
}
function myFunction6()
{
    const newAwayTeamName=prompt("Yeni Takım Adını Giriniz!");
    if(newAwayTeamName.match(pattern) == null & newAwayTeamName != "")
    {
        document.getElementById("away-team-name").innerHTML = newAwayTeamName;
    }
    else
    {
        alert("Yanlış bir değer girdiniz!")
    }
}
function myFunction7()
{
    let newHomeTeamScore = prompt("Yeni takım skorunu giriniz!(0-100)");
    newHomeTeamScore = Number(newHomeTeamScore);
    if(newHomeTeamScore>=0 & newHomeTeamScore<=100)
    {
        document.getElementById("home-team-score").innerHTML = newHomeTeamScore;
    }
    else
    {
        alert("Yanlış bir değer girdiniz!")
    }
}
function myFunction8()
{
    let newAwayTeamScore = prompt("Yeni takım skorunu giriniz!(0-100)");
    newAwayTeamScore = Number(newAwayTeamScore);
    if(newAwayTeamScore>=0 & newAwayTeamScore<=100)
    {
        document.getElementById("away-team-score").innerHTML = newAwayTeamScore;
    }
    else
    {
        alert("Yanlış bir değer girdiniz!")
    }
}