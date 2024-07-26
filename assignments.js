/*
1. Between 1 to 100 find all even numbers.
even numbers = remainder 0 when divided by 2.


for(let i=1; i<100; i++)
{
    //checking if the number is even ot not
    if(i%2==0)
    {
        console.log(i);
    }
}



2. Find first 100 odd numbers.
odd numbers= remainder 1 when divided by 2

let i=1;
while(i<100)
    {
        //checking if the number id odd or not
        if(i%2==1)
        {
            console.log(i);
        }
        i+=2;
    }


3. Check if the number is prime or not.
prime number= those numbers which are only divisibe by 1 and oneself
Solution:
first ma i<=1 check gareko as 1 ya 1 vanda smalle rnumber primer ra composite hudaina.
tespaxi flag lai storage jastai use garera each time loop run huda a le i lai modulus garisakepaxi remainder 0 auxa ki 
audaina vanera check gareko, ani remainder 0 aayo vane composite hunxa tesaile 
falg ko value false vayera loop stop hunxa ani tala ko if statement through compostine vanera output auxa
 natra loop run vairakhxa ani remainder 0 ayena vane loop end vayera else statement through output prime auxa. 
        


let i=29;
let flag;
if(i<=1)
{
    console.log("Neiter Prime nor Composite");
}
else if(i>1)
{
    //looping from 2 to i  
for(let a=2;a<i;a++)
{
    //checking if i divisible by a or not
    if(i%a==0)
    {
        
        flag= false;

    }
}

if(flag==false)
{
    console.log("The number is Composite");
}
else
{
    console.log("The number is Prime ");
}
}

4. 1 to 100 all prime numbers.
let i,j;
let flag;
for(i=2;i<100;i++)
{
    for(j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag=0;
            break;
        }
        else{
            flag =1;
        }
    
    }
    if(flag===1)
        {
            console.log(i);
        }

}
      5. First 100 prime numbers  */

let i=1,j,k;
let flag;

while(i>=2)
{
    
}