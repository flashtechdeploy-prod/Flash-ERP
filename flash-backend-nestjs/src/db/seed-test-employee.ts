import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as bcrypt from 'bcryptjs';
import { employees } from './schema/employees';
import * as schema from './schema';
import { eq } from 'drizzle-orm';

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const db = drizzle(pool, { schema });

  try {
    const fss_no = '001';
    console.log(`Checking for employee with FSS: ${fss_no}...`);
    
    const existing = await db.select().from(employees).where(eq(employees.fss_no, fss_no));

    if (existing.length === 0) {
      const passwordHash = await bcrypt.hash('password123', 10);
      await db.insert(employees).values({
        employee_id: 'SEC-001',
        fss_no: fss_no,
        full_name: 'Test Employee',
        cnic: '11111-1111111-1',
        password: passwordHash,
        status: 'Active',
      });
      console.log('✅ Seeded test employee:');
      console.log('   FSS Number: 001');
      console.log('   Password:   password123');
    } else {
      console.log('ℹ️ Test employee already exists');
    }
  } catch (err) {
    console.error('❌ Error seeding employee:', err.message);
  } finally {
    await pool.end();
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
