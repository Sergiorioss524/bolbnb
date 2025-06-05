import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_URL: z.string().url().optional(),
  NEXTAUTH_SECRET: z.string().min(32),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    Object.entries(_env.error.format())
      .map(([name, value]) => {
        if (value && '_errors' in value)
          return `${name}: ${value._errors.join(', ')}\n`;
      })
      .filter(Boolean)
  );
  throw new Error('Invalid environment variables');
}

for (let key of Object.keys(_env.data)) {
  if (!key.startsWith('NEXT_PUBLIC_')) {
    console.log('🔒 Validated server-side env var:', key);
  }
}

export const env = _env.data; 