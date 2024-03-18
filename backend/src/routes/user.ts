import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign} from 'hono/jwt'
import { signinInput, signupInput } from "@manideep1428/meduim-common"


export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();


userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
	datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	const { success } = signupInput.safeParse(body)
	if(!success){
		c.status(413)
		return c.text("Input Error")
	}
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
        name : body.name
			}
		});
    console.log(user)
	const jwt = await sign({ id: user.id , name:user.name}, c.env.JWT_SECRET);
    return c.json({jwt:jwt , message:"SucessFully Signed Up"})    
	} catch(e) {
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})


userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	const { success } = signinInput.safeParse(body)
	if(!success){
		c.status(413)
		return c.text("Input Error")
	}
	const user = await prisma.user.findFirst({
		where: {
			email: body.email
		}
	})
	console.log(user?.password , body.password)
	if(!user) {
		c.json({error :"User Not Found"})
	}
	else if(!user.password===body.password){

	}
	const jwt = await sign({ id: user?.id , name:user?.name}, c.env.JWT_SECRET);
    return c.json({jwt:jwt , message:"SucessFully Signed In"})    
    
})


