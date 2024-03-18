import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { decode, sign, verify } from 'hono/jwt'
import { string } from 'zod';


export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	},
    Variables: {
        userId:string
        id:string
    }
}>();

 
blogRouter.use("/*",async(c,next)=>{
  try {
   const authHeader =  c.req.header("Authorization") || "";
   // console.log(authHeader)
   const user =await verify(authHeader,c.env.JWT_SECRET)
    if(user){
       c.set("userId",user.id);  
    }
   await next()
  } catch (error) {
     return c.text("You are not Logged In")
  }
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
   const userId = c.get("userId")
   const body =await c.req.json()
    console.log(body)
   const blog =await prisma.post.create({
     data:{
        title:body.title,
        content:body.content,
        authorId:userId 
     }
   })
   return c.json({sucess :"Sucessfully blog added" ,id:blog.id})
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
   const body =await c.req.json();
   const userId = c.get("userId");
  try {
    const blog =await prisma.post.update({
        where:{
           id:body.id
        },
        data:{
           title:body.title,
           content:body.content,
           authorId:userId //Author ID will extracted form middelware 
         } 
       })
 
  } catch (error) {
    return c.text("Error Occured in Updating,Try Again")
  } 
 })


  
blogRouter.get('/bulk',async (c) => {
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
   try {
    const blog = await prisma.post.findMany({
       select:{
         content:true,
         title:true,
         id:true,
         author:{
            select:{
               name:true
            }
         }
       }
    })
    return c.json({blog})
} catch (error:any) {
return c.text(error) 
   }
})


blogRouter.get('/:id', async(c) => {
   const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
   const id = c.req.param("id")
   try {
    const blog = await prisma.post.findUnique({
        where:{
           id:Number(id)
        },
        select:{
         content:true,
         title:true,
         id:true,
         author:{
            select:{
               name:true
            }
         }
       }
       })
    return c.json({post:blog})   
  } catch (error:any) {
    return c.text("Error Occured To Fetching all Blogs,",error)
  }    
})


// blogRouter.use("/*",async (c,next)=>{
//     const header = c.req.header("authorization") || ""
//     const token = header.split("")[1]
 
//     const response =await verify(token,c.env.JWT_SECRET)
 
//     if(response.id){
//      next();
//     }else{
//      c.status(403)
//      return c.json({error:"Unauthorised"})
//     }
//  })