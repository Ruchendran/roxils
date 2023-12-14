const express=require("express")


const cors=require("cors")



const sqlite3=require("sqlite3")

const {open}=require("sqlite")


const path=require("path")

const dbPath=path.join(__dirname,"roxils.db")

const app=express()



app.use(express.json())

app.use(cors())






let db=null;

const initiate=async()=>{
    
    
    try{
            db=await open({
                filename:dbPath,
                driver:sqlite3.Database
            })
            app.listen(5000,()=>{
                console.log("It's Running on http://localhost:5000")
            })
    }
    catch(e){
        console.log(`DB error:${e.message}`)

        process.exit(1)
    }
}

initiate();


app.get("/insert",async(request,response)=>{

    const que=`select * from store`;

    const final=await db.all(que);

    const url="https://s3.amazonaws.com/roxiler.com/product_transaction.json"

    const urlData=await fetch(url)

    const jsonData=await urlData.json()

 
   


    if(final.length===0){

       
                
       const Data=jsonData.map(async(s)=>{
        const que1=`insert into store (id,title,price,description,category,image,sold,Date)
        
        values(${s.id},"${s.tile}", ${s.price},"${s.dexcription}","${s.category}","${s.image}",${s.sold},${s.dateOfSale} )
        `;

        const final1=await db.run(que1)
       })


    }
    else{
        console.log("done")
    }
})

app.get("/cata/:month",async(request,response)=>{

    const {month}=request.params;

    const parseMonth=parseInt(month)

    const que1=`select count(id) as first from store where cast(strftime("%m",Date) as int)=${parseMonth} and category="electronics"` ;

    const final1=await db.all(que1)

    const que2=`select count(id) as second from store where cast(strftime("%m",Date) as int)=${parseMonth} and category="women's clothing"` ;

    const final2=await db.all(que2)

    final1[0].second=final2[0].second

    const que3=`select count(id) as third from store where cast(strftime("%m",Date) as int)=${parseMonth} and category="jewelery"` ;

    const final3=await db.all(que3)

    final1[0].third=final3[0].third

        response.send(final1)
})

app.get("/bar/:month",async(request,response)=>{

    const {month}=request.params;

    const parseMonth=parseInt(month)

    const que=`select count(id) as first from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 0<price and price <=100 and sold="true"  `;

    const final =await db.all(que);

    const que1=`select count(id) as second from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 101<=price and price<=200 and sold="true"  `;

    const final1 =await db.all(que1);

    final[0].second=final1[0].second

    const que2=`select count(id) as third from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 201<=price and price<=300 and sold="true"  `;

    const final2 =await db.all(que2);

    final[0].third=final2[0].third

    const que3=`select count(id) as four from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 301<=price and price<=400 and sold="true"  `;

    const final3 =await db.all(que3);

    final[0].four=final3[0].four

    const que4=`select count(id) as five from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 401<=price and price<=500 and sold="true"  `;

    const final4 =await db.all(que4);

    final[0].five=final4[0].five

    const que5=`select count(id) as six from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 501<=price and price<=600 and sold="true"  `;

    const final5 =await db.all(que5);

    final[0].six=final5[0].six


    const que6=`select count(id) as seven from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 601<=price and price<=700 and sold="true"  `;

    const final6 =await db.all(que6);

    final[0].seven=final6[0].seven

    const que7=`select count(id) as eight from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 701<=price and price<=800 and sold="true"  `;

    const final7 =await db.all(que7);

    final[0].eight=final7[0].eight

    
    const que8=`select count(id) as nine from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 801<=price and price<=900 and sold="true"  `;

    const final8 =await db.all(que8);

    final[0].nine=final8[0].nine

    const que9=`select count(id) as ten from store where  cast(strftime("%m",Date) as int)=${parseMonth} and 901<=price  and sold="true"  `;

    const final9 =await db.all(que9);

    final[0].ten=final9[0].ten


   response.send(final)


    

   
})


app.get("/stas/:month",async(request,response)=>{

    const {month}=request.params;

    const parseMonth=parseInt(month)

   
    const que=`
    
    select round(sum(price),0) as total, count(id) as soldNo from store where  cast(strftime("%m",Date) as int)=${parseMonth} and sold="true"  `;

    const final =await db.all(que);

   


    const que1=`
    
    select  count(id) as unSoldNo from store where  cast(strftime("%m",Date) as int)=${parseMonth} and sold="false" 
    `

    const final1=await db.all(que1)



  

     final[0].unSoldNo=final1[0].unSoldNo


     response.send(final)
    

    
})



app.get("/:text/:month",async(request,response)=>{
    
    const {text,month} =request.params;

    const isNu=isNaN(text)

    const parseMonth=parseInt(month)



  if(isNu===false){

    const textParse=parseInt(text)

   const que=`select * from store where price <${textParse} and cast(strftime("%m",Date)as int)=${month} `;

   const final=await db.all(que)

   response.send(final)


  

}
else{
        const que=`select * from store where (title like "%${text}%" or description like "%${text}%") and 
        
        cast(strftime("%m",Date) as int)=${parseMonth}
        `

        const final =await db.all(que);

     
        
        response.send(final)

    
}


   

 



})













module.exports=app;