SMARTCART BACKEND STARTER — READ THIS FIRST

Is ZIP mein front-end demo features aur Supabase ke liye starter SQL schema hai. Shared live database abhi automatically configured nahi hai, kyunki iske liye tumhara apna Supabase project, credentials, account permissions aur setup chahiye.

SHARED PRICE CHANGE KA MATLAB
1. Supabase par project banao: https://supabase.com/
2. SQL Editor kholo aur supabase_schema.sql ko review karke run karo.
3. Website account ko Supabase Auth ke saath integrate karna hoga.
4. Products table ko initial product catalogue se populate karna hoga.
5. Apne verified account ki profile ko admin role do (SQL file ke last comments dekho).
6. Frontend ke product loading aur admin save functions ko Supabase table se connect karna hoga. Tab admin price save karega aur sab users updated price dekh sakenge.

IMPORTANT SECURITY
- Frontend mein Supabase anon/publishable key hi use hoti hai, aur RLS policies required hain.
- service_role/secret key ko kabhi index.html ya script.js mein mat daalna.
- Current admin passcode/localStorage demo ko real security mat samajhna.
- QR/UPI scan ya UPI app open hona payment confirmation nahi hai. Paid status tabhi set ho jab trusted payment provider/backend confirmation mil jaye.
- Auto order timeline in the front-end is a demonstration based on elapsed time, not actual courier tracking.

CURRENT FRONTEND IMPROVEMENTS
- Product details modal with gallery image, product information, stock, rating, related products.
- Vertical order tracking timeline, demo stage advances every 24 hours from order placement.
- Delivery fee calculation (₹49 below ₹999; free at ₹999+), discount and final payable amount.
- Admin low-stock alerts, top-selling report and local activity log.

For a live store, connect real Supabase Auth/database and payment provider verification before accepting customer payments.
