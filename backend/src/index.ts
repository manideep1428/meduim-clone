import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blogs';
import { use } from 'hono/jsx';


// Create the main Hono app
const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
		JWT_SECRET: string,
	}
}>();

app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)

export default app;