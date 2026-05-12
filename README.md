# RYCON'S DATA HUB 📱

Affordable non-expiry data bundles for MTN, AirtelTigo, and Telecel in Ghana.

## 🚀 Features

✅ **Quick Purchase Form** - Select network, phone, and bundle instantly  
✅ **Dynamic Bundle Selection** - Bundles update based on selected network  
✅ **Payment Integration** - Mobile Money and credit card support  
✅ **User Authentication** - Login and registration system  
✅ **Admin Dashboard** - Track orders and revenue  
✅ **WhatsApp Integration** - Direct order confirmation via WhatsApp  
✅ **Responsive Design** - Mobile-first approach with Tailwind CSS  
✅ **Form Validation** - Real-time validation on all inputs  

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ksgbrsqmx8-cloud/rycons-data-hub.git
   cd rycons-data-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   - Visit `http://localhost:3000`

## 🏗️ Project Structure

```
rycons-data-hub/
├── src/
│   ├── components/
│   │   └── DataBundleWebsite.tsx    # Main component
│   ├── pages/
│   ├── app/
│   └── styles/
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎯 Available Routes/Forms

### Quick Purchase Form
- Select network (MTN, AirtelTigo, Telecel)
- Enter phone number
- Select data bundle
- Submit for payment

### Payment Methods
- **MTN MOMO**: 0539026573
- **Telecel Cash**: 0539026573
- **AirtelTigo Money**: 0539026573

### User Accounts
- Login with email and password
- Create new account with full name, email, and password

### Admin Dashboard
- View total orders
- Track revenue
- Monitor users
- Check pending orders
- See recent transaction history

## 🔧 Configuration

### Update Payment Information
Edit `src/components/DataBundleWebsite.tsx` and modify:
- Mobile Money numbers
- WhatsApp contact number
- Business name and branding

### Add More Networks/Bundles
```typescript
const networks = [
  {
    name: 'Network Name',
    color: 'bg-color text-color',
    bundles: [
      '1GB - GHS 5.5',
      // Add more bundles
    ],
  },
];
```

## 🔗 Integration TODOs

The following need backend implementation:

- [ ] `handleQuickPurchaseSubmit()` - Connect to Paystack
- [ ] `handlePaymentSubmit()` - Verify transaction with backend
- [ ] `handleLoginSubmit()` - Authenticate with JWT
- [ ] `handleRegisterSubmit()` - Create user account in database
- [ ] `handlePaymentFormSubmit()` - Process payment gateway
- [ ] WhatsApp auto-redirect after successful payment
- [ ] Order tracking and notification system

## 🌍 Deployment

### Deploy on Vercel

```bash
npm install -g vercel
vercel
```

### Deploy on Netlify

```bash
npm run build
# Deploy the 'out' or '.next' folder
```

## 📞 Support

- **Call**: 0539026573
- **WhatsApp**: 0531389498

## 📝 License

Copyright © 2026 RYCON'S DATA HUB. All Rights Reserved.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests.

## ✨ Technologies Used

- **React 18** - UI library
- **Next.js 14** - Framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vercel** - Deployment

---

Made with ❤️ by RYCON'S DATA HUB
