import express from 'express'
import pg from 'pg'
import cors from 'cors'


const app = express()
app.use(cors());
app.use(express.json())

const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"xyzpvtltd",
     password:"A1b2c3d4e5@",
     port:5432,
});
db.connect();

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.get('/updateAllData', async function (req, res) {
//   try {
//    var result = await db.query("SELECT * FROM transportation");
//    result.rows.forEach( async row => {
//       const {id,v_no,vname,kmwith_dr,with_dr_rent,kmwithout_dr,withoutdr_rent,v_total} = row;
    
//       const result1 = await db.query("UPDATE transportation SET v_no=$2,vname=$3,kmwith_dr=$4,with_dr_rent=$5,kmwithout_dr=$6,withoutdr_rent=$7,v_total=$8   WHERE id = $1",
//         [id,v_no,vname,kmwith_dr,with_dr_rent,kmwithout_dr,withoutdr_rent,v_total]);
//       console.log(result1);
//     });
   
//    res.json(result.rows);
// } catch (error) {
// console.log(error)   
// }
//  })

app.post('/addEmployee', async function (req, res) {
   
let {v_no,vname,kmwith_dr,with_dr_rent,kmwithout_dr,withoutdr_rent,v_total} = req.body;

v_total = (kmwith_dr * with_dr_rent ) + (kmwithout_dr * withoutdr_rent)
    // console.log(req.body);
    try {
     const result =await db.query("INSERT INTO transportation (v_no,vname,kmwith_dr,with_dr_rent,kmwithout_dr,withoutdr_rent,v_total) VALUES ($1,$2,$3,$4,$5,$6,$7)", [v_no,vname,kmwith_dr,with_dr_rent,kmwithout_dr,withoutdr_rent,v_total])
     console.log(result.rows)
     res.json("success")
 } catch (error) {
  console.log(error)   
 }
   })

   app.get('/employeeData', async function (req, res) {
   
    try {
     const result =await db.query("SELECT * FROM transportation");
     //console.log(result.rows)
     res.json(result.rows)
 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/delete', async function (req, res) {

    console.log(req.body)
   
    try {
     const result =await db.query("DELETE FROM transportation WHERE id = $1",[req.body.id])
     //console.log(result.rows)
     res.json("success")

 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/getUpdateData', async function (req, res) {
 
    console.log(req.body)
   
    try {
     const result =await db.query("SELECT * FROM transportation WHERE id = $1",[req.body.id])
    //  console.log(result.rows[0])
     res.json(result.rows[0])
     
 } catch (error) {
  console.log(error)   
 }
   })


   app.post('/Update', async function (req, res) {
 
    console.log(req.body)
let {id,v_no,vname,kmwith_dr,with_dr_rent,kmwithout_dr,withoutdr_rent,v_total} = req.body
   
    try {
     const result =await db.query("UPDATE transportation SET v_no=$2,vname=$3,kmwith_dr=$4,with_dr_rent=$5,kmwithout_dr=$6,withoutdr_rent=$7,v_total=$8  WHERE id = $1",
     [id,v_no,vname,kmwith_dr,with_dr_rent,kmwithout_dr,withoutdr_rent,v_total])
    //  console.log(result.rows[0])
    //  console.log(result.rows)
     res.json("success")
     
 } catch (error) {
  console.log(error)   
 }
   })







   app.post('/addEmployee1', async function (req, res) {
   
   let {en,ename,mearnings,yearnings,type} = req.body;
yearnings = mearnings*12

        // mearnings =mearnings + mearnings;
        //   yearnings = yearnings + mearnings * 12;
   
    try {
     const result =await db.query("INSERT INTO employee (en,ename,mearnings,yearnings,type) VALUES ($1,$2,$3,$4,$5)",[en,ename,mearnings,yearnings,type]);
     //console.log(result.rows)
     res.json("success")
 } catch (error) {
  console.log(error)   
 }
   })

   app.get('/employeeData1', async function (req, res) {
   
    try {
     const result =await db.query("SELECT * FROM employee");
     //console.log(result.rows)
     res.json(result.rows)
 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/delete1', async function (req, res) {

    console.log(req.body)
   
    try {
     const result =await db.query("DELETE FROM employee WHERE id = $1",[req.body.id])
     //console.log(result.rows)
     res.json("success")

 } catch (error) {
  console.log(error)   
 }
   })

   app.post('/getUpdateData1', async function (req, res) {
 
    console.log(req.body)
   
    try {
     const result =await db.query("SELECT * FROM employee WHERE id = $1",[req.body.id])
    //  console.log(result.rows[0])
     res.json(result.rows[0])
     
 } catch (error) {
  console.log(error)   
 }
   })


   app.post('/Update1', async function (req, res) {
 
    console.log(req.body)
 let {id,en,ename,mearnings,yearnings,type} = req.body
 yearnings = mearnings*12
    try {
     const result =await db.query("UPDATE employee SET en=$2, ename=$3, mearnings=$4, yearnings=$5, type=$6 WHERE id = $1",
     [id,en,ename,mearnings,yearnings,type])
    //  console.log(result.rows[0])
    //  console.log(result.rows)
     res.json("success")
     
 } catch (error) {
  console.log(error)   
 }
   })





   app.post('/addEmployee2', async function (req, res) {
   
    let {vname,vnumber,model,ipremium,aservicecharg,emission} = req.body;
    
    //  yearnings = mearnings * 12;
     try {
      const result =await db.query("INSERT INTO vehicle (vname,vnumber,model,ipremium,aservicecharg,emission) VALUES ($1,$2,$3,$4,$5,$6)",[vname,vnumber,model,ipremium,aservicecharg,emission]);
      //console.log(result.rows)
      res.json("success")
  } catch (error) {
   console.log(error)   
  }
    })
 
    app.get('/employeeData2', async function (req, res) {
    
     try {
      const result =await db.query("SELECT * FROM vehicle");
      //console.log(result.rows)
      res.json(result.rows)
  } catch (error) {
   console.log(error)   
  }
    })
 
    app.post('/delete2', async function (req, res) {
 
     console.log(req.body)
    
     try {
      const result =await db.query("DELETE FROM vehicle WHERE id = $1",[req.body.id])
      //console.log(result.rows)
      res.json("success")
 
  } catch (error) {
   console.log(error)   
  }
    })
 
    app.post('/getUpdateData2', async function (req, res) {
  
     console.log(req.body)
    
     try {
      const result =await db.query("SELECT * FROM vehicle WHERE id = $1",[req.body.id])
     //  console.log(result.rows[0])
      res.json(result.rows[0])
      
  } catch (error) {
   console.log(error)   
  }
    })
 
 
    app.post('/Update2', async function (req, res) {
  
     console.log(req.body)
  let {id,vname,vnumber,model,ipremium,aservicecharg,emission} = req.body
  // yearnings = mearnings * 12;
     try {
      const result =await db.query("UPDATE vehicle SET vname=$2, vnumber=$3,model=$4, ipremium=$5, aservicecharg=$6, emission=$7 WHERE id = $1",
      [id,vname,vnumber,model,ipremium,aservicecharg,emission])
     //  console.log(result.rows[0])
     //  console.log(result.rows)
      res.json("success")
      
  } catch (error) {
   console.log(error)   
  }
    })





   app.listen(3001)