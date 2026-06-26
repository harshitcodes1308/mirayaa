CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  image_url TEXT,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  compare_price DECIMAL(10,2),
  images TEXT[] DEFAULT '{}',
  category_id UUID REFERENCES categories(id),
  stock INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  tags TEXT[] DEFAULT '{}',
  weight_grams DECIMAL(5,2),
  material TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  razorpay_order_id TEXT UNIQUE,
  razorpay_payment_id TEXT,
  razorpay_signature TEXT,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  shipping_address JSONB NOT NULL,
  items JSONB NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  shipping_charge DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'pending',
  payment_status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read products" ON products;
CREATE POLICY "Public read products" ON products FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Admin all products" ON products;
CREATE POLICY "Admin all products" ON products USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Public read categories" ON categories;
CREATE POLICY "Public read categories" ON categories FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Admin all categories" ON categories;
CREATE POLICY "Admin all categories" ON categories USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Customer insert orders" ON orders;
CREATE POLICY "Customer insert orders" ON orders FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Admin all orders" ON orders;
CREATE POLICY "Admin all orders" ON orders USING (auth.role() = 'authenticated');

INSERT INTO categories (name, slug, description, image_url, display_order, is_active)
VALUES
  (
    'Oxidised Affairs',
    'oxidised-affairs',
    'Handcrafted oxidised silver dangles and drops with ceremonial depth.',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=86',
    1,
    true
  ),
  (
    'The Desi Elegance',
    'desi-elegance',
    'Traditional studs with contemporary soul, made for everyday glow.',
    'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=86',
    2,
    true
  ),
  (
    'Daily Wears',
    'daily-wears',
    'Lightweight everyday earrings for college, work, and quick plans.',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=86',
    3,
    true
  )
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  display_order = EXCLUDED.display_order,
  is_active = EXCLUDED.is_active;
