import connectDB from '../config/database';
import User from '../models/User';

const seedDatabase = async () => {
  await connectDB();

  await User.deleteMany({});

  await User.create([
    { name: 'John Doe', email: 'john@example.com', password: 'password123' },
    { name: 'Jane Doe', email: 'jane@example.com', password: 'password456' },
  ]);

  console.log('Database seeded!');
  process.exit(0);
};

seedDatabase().catch(console.error);