SMARTCART - ADMIN FEATURES DEMO
================================

HOW TO RUN
1. Extract this ZIP folder.
2. Open the SmartCart folder in Visual Studio Code.
3. Open index.html with the Live Server extension.
4. Use the site normally for shopping, signup/login, cart, wishlist, filters and demo checkout.

ADMIN DASHBOARD (DEMO ONLY)
1. Click the Admin button in the header.
2. Enter this local demo access code: SC-ADMIN-2026
3. You can view the demo sales summary, add/edit/delete products, update stock,
   update order statuses, create/delete coupons, and enable/disable demo accounts.
4. Admin unlock lasts only for the current browser tab session.

FEATURES INCLUDED
- Product search, category/price/rating filters and sorting.
- Demo checkout and local order history, tracking and cancellation.
- Built-in coupons: WELCOME10 (10% off) and SMART200 (₹200 off on carts of ₹2,000+).
- Admin-created percentage or flat coupons with minimum-cart validation.
- Profile editing and saved delivery addresses.
- Browser-local notifications.
- Demo admin dashboard with product/stock management, order status updates,
  sales/order summaries, coupon management, and demo account enable/disable.

IMPORTANT SECURITY LIMITATION
This is still a front-end/browser-local college project. The admin code is visible in
script.js, browser storage can be edited by users, and demo account passwords/orders
are not protected by a server. It is NOT secure for real customers or real money.
Do not use real passwords, personal customer data, or real payment details.

For a genuine public website, move authentication and role checks to a backend,
use a shared database with strict row-level/server-side access policies, verify stock,
prices and coupons on the server, and integrate a payment gateway with server-side
payment verification. Never put secret API keys in browser JavaScript.

TEST STATUS
JavaScript syntax and ZIP integrity checks passed when this package was prepared.
Interactive browser end-to-end testing should still be done locally with Live Server.


DYNAMIC UPI QR UPDATE
=====================
- The QR payment screen now creates a UPI intent QR using the account details decoded from the provided PhonePe QR:
  UPI ID: 8055767030@axl
  Payee: KRUSHNA KISHOR DHOLE
- The QR amount is generated from the current SmartCart cart total and uses INR.
- QRCode.js is loaded from cdnjs, so an internet connection is needed for QR generation.
- The "Open UPI app" link uses the same amount-bearing UPI payment request.
- IMPORTANT: This does NOT provide automatic payment confirmation. A static personal UPI ID/QR does not notify the website when payment arrives. Confirm payments manually in your payment app, or use an eligible merchant payment gateway with backend order creation and verified server callbacks/webhooks before treating orders as paid.
- The screenshot's QR was decoded to obtain the UPI ID above; the original screenshot is included as phonepe-account-qr.jpg for reference.
- Test with a small amount and verify payee/amount in your UPI app before using. Do not use this demo as a production payment system.
