import { db } from '@/db'
import { users } from '@/db/schema'

export default async function Home() {
  const allUsers = await db.select().from(users)

  return <p>{JSON.stringify(allUsers, null, 2)}</p>
}
