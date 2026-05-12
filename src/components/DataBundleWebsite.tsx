import { useState } from 'react';
import { MessageCircle, Phone, Wifi, ShieldCheck, Clock3, User, Lock, LayoutDashboard, CreditCard } from 'lucide-react';

export default function DataBundleWebsite() {
  const whatsappLink = 'https://wa.me/233531389498?text=Hello%20RYCONS%20DATA%20HUB%2C%20I%20want%20to%20buy%20a%20data%20bundle';
  
  // Form state
  const [formData, setFormData] = useState({
    network: '',
    phone: '',
    bundle: '',
  });

  const [paymentData, setPaymentData] = useState({
    name: '',
    transactionId: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [paymentFormData, setPaymentFormData] = useState({
    fullName: '',
    email: '',
    amount: '',
  });

  const networks = [
    {
      name: 'MTN',
      color: 'bg-yellow-400 text-black',
      bundles: [
        '1GB - GHS 5.5',
        '2GB - GHS 11',
        '3GB - GHS 15.5',
        '5GB - GHS 24.5',
        '10GB - GHS 45',
        '20GB - GHS 85',
      ],
    },
    {
      name: 'AirtelTigo',
      color: 'bg-red-500 text-white',
      bundles: [
        '1GB - GHS 4.9',
        '2GB - GHS 9.4',
        '5GB - GHS 22',
        '10GB - GHS 42',
        '20GB - GHS 81',
        '100GB - GHS 200',
      ],
    },
    {
      name: 'Telecel',
      color: 'bg-red-700 text-white',
      bundles: [
        '5GB - GHS 25.5',
        '10GB - GHS 44.5',
        '20GB - GHS 83',
        '50GB - GHS 201',
        '100GB - GHS 376',
      ],
    },
  ];

  // Get bundles for selected network
  const getAvailableBundles = () => {
    const selected = networks.find(n => n.name === formData.network);
    return selected ? selected.bundles : [];
  };

  // Handle quick purchase form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle payment form changes
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle login form changes
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle register form changes
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle payment form changes
  const handlePaymentFormChange = (e) => {
    const { name, value } = e.target;
    setPaymentFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle quick purchase submission
  const handleQuickPurchaseSubmit = (e) => {
    e.preventDefault();
    if (!formData.network || !formData.phone || !formData.bundle) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Quick Purchase:', formData);
    // TODO: Integrate with payment gateway
  };

  // Handle payment confirmation
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!paymentData.name || !paymentData.transactionId) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Payment Confirmation:', paymentData);
    // TODO: Verify transaction
  };

  // Handle login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Login:', loginData);
    // TODO: Authenticate user
  };

  // Handle registration
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!registerData.fullName || !registerData.email || !registerData.password) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Register:', registerData);
    // TODO: Create user account
  };

  // Handle payment form submission
  const handlePaymentFormSubmit = (e) => {
    e.preventDefault();
    if (!paymentFormData.fullName || !paymentFormData.email || !paymentFormData.amount) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Payment Form:', paymentFormData);
    // TODO: Integrate with Paystack
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-yellow-50 text-gray-900">
      {/* HEADER */}
      <header className="bg-blue-950 text-white sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-wide">
              RYCON'S DATA HUB
            </h1>
            <p className="text-yellow-300 font-semibold">
              Affordable Non-Expiry Data Bundles
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition px-5 py-3 rounded-2xl flex items-center gap-2 font-bold"
          >
            <MessageCircle size={20} />
            WhatsApp Order
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-semibold mb-6">
            <Wifi size={18} /> Fast & Reliable Internet Packages
          </div>

          <h2 className="text-5xl md:text-6xl font-black leading-tight text-blue-950 mb-6">
            Buy Cheap Data Bundles In Ghana 📱
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Purchase MTN, AirtelTigo and Telecel non-expiry data bundles instantly with secure Mobile Money payment and fast delivery.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition hover:scale-105"
            >
              Order On WhatsApp
            </a>

            <a
              href="#payment"
              className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition hover:scale-105"
            >
              Buy Now
            </a>
          </div>
        </div>

        {/* QUICK PURCHASE FORM */}
        <div className="bg-white rounded-[2rem] shadow-2xl p-8 border border-blue-100">
          <h3 className="text-3xl font-black text-blue-950 mb-8 text-center">
            Quick Purchase Form
          </h3>

          <form onSubmit={handleQuickPurchaseSubmit} className="space-y-5">
            <select
              name="network"
              value={formData.network}
              onChange={handleFormChange}
              className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
            >
              <option value="">Select Network</option>
              {networks.map((net) => (
                <option key={net.name} value={net.name}>
                  {net.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleFormChange}
              className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
            />

            <select
              name="bundle"
              value={formData.bundle}
              onChange={handleFormChange}
              disabled={!formData.network}
              className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg disabled:bg-gray-100"
            >
              <option value="">Select Bundle</option>
              {getAvailableBundles().map((bundle) => (
                <option key={bundle} value={bundle}>
                  {bundle}
                </option>
              ))}
            </select>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl text-xl font-bold shadow-lg transition hover:scale-[1.02]"
            >
              Proceed To Payment
            </button>
          </form>
        </div>
      </section>

      {/* NETWORK BUNDLES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {networks.map((network, index) => (
            <div
              key={index}
              className={`${network.color} rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition duration-300`}
            >
              <h3 className="text-4xl font-black mb-8 text-center">
                {network.name}
              </h3>

              <div className="space-y-4 text-xl font-bold">
                {network.bundles.map((bundle, idx) => (
                  <div
                    key={idx}
                    className="bg-white/20 backdrop-blur-sm rounded-xl p-3"
                  >
                    {bundle}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PAYMENT SECTION */}
      <section id="payment" className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-blue-950 text-white rounded-[2rem] p-10 shadow-2xl">
          <h3 className="text-4xl font-black mb-10 text-center">
            Mobile Money Payment Section 💳
          </h3>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 text-lg">
              <div className="bg-white/10 rounded-2xl p-5">
                <p className="font-bold text-yellow-300 mb-2">MTN MOMO</p>
                <p>Number: 0539026573</p>
                <p>Name: RYCON'S DATA HUB</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <p className="font-bold text-yellow-300 mb-2">Telecel Cash</p>
                <p>Number: 0539026573</p>
                <p>Name: RYCON'S DATA HUB</p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <p className="font-bold text-yellow-300 mb-2">AirtelTigo Money</p>
                <p>Number: 0539026573</p>
                <p>Name: RYCON'S DATA HUB</p>
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-[2rem] p-8 shadow-xl">
              <h4 className="text-2xl font-black mb-6 text-center">
                Confirm Payment
              </h4>

              <form onSubmit={handlePaymentSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={paymentData.name}
                  onChange={handlePaymentChange}
                  className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  type="text"
                  name="transactionId"
                  placeholder="Transaction ID"
                  value={paymentData.transactionId}
                  onChange={handlePaymentChange}
                  className="w-full p-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-950 hover:bg-blue-900 text-white py-4 rounded-2xl text-lg font-bold transition"
                >
                  Submit Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATION & AUTH SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-[2rem] shadow-2xl p-10 border border-gray-100 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <CreditCard className="text-blue-900" size={36} />
            <h3 className="text-4xl font-black text-blue-950">
              Real Payment Integration
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-2xl font-bold text-blue-950 mb-3">
                  Paystack Payment Gateway
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Customers can securely pay online using MTN Mobile Money, Telecel Cash, AirtelTigo Money, Visa or Mastercard.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl">
                <h4 className="text-2xl font-bold text-green-700 mb-3">
                  Automatic WhatsApp Orders
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Once payment is completed, the website automatically redirects customers to WhatsApp with their order details.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8">
              <h4 className="text-2xl font-black text-center mb-6">
                Demo Payment Form
              </h4>

              <form onSubmit={handlePaymentFormSubmit} className="space-y-5">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={paymentFormData.fullName}
                  onChange={handlePaymentFormChange}
                  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={paymentFormData.email}
                  onChange={handlePaymentFormChange}
                  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />

                <input
                  type="number"
                  name="amount"
                  placeholder="Amount (GHS)"
                  value={paymentFormData.amount}
                  onChange={handlePaymentFormChange}
                  className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  step="0.01"
                  min="0"
                />

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl text-xl font-bold transition"
                >
                  Pay With Mobile Money
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* LOGIN & REGISTER SECTION */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white rounded-[2rem] p-10 shadow-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <User className="text-blue-900" size={34} />
              <h3 className="text-3xl font-black text-blue-950">
                User Login
              </h3>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={loginData.email}
                onChange={handleLoginChange}
                className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                className="w-full bg-blue-950 hover:bg-blue-900 text-white py-4 rounded-2xl font-bold text-lg transition"
              >
                Login Account
              </button>
            </form>
          </div>

          <div className="bg-white rounded-[2rem] p-10 shadow-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <Lock className="text-green-600" size={34} />
              <h3 className="text-3xl font-black text-blue-950">
                Create Account
              </h3>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={registerData.fullName}
                onChange={handleRegisterChange}
                className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={registerData.email}
                onChange={handleRegisterChange}
                className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={registerData.password}
                onChange={handleRegisterChange}
                className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold text-lg transition"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>

        {/* ADMIN DASHBOARD */}
        <div className="bg-blue-950 text-white rounded-[2rem] p-10 shadow-2xl mb-16">
          <div className="flex items-center gap-3 mb-10">
            <LayoutDashboard size={38} />
            <h3 className="text-4xl font-black">Admin Dashboard</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <div className="bg-white/10 p-6 rounded-2xl">
              <p className="text-lg text-gray-300">Total Orders</p>
              <h4 className="text-4xl font-black mt-3">128</h4>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              <p className="text-lg text-gray-300">Revenue</p>
              <h4 className="text-4xl font-black mt-3">GHS 12K</h4>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              <p className="text-lg text-gray-300">Users</p>
              <h4 className="text-4xl font-black mt-3">96</h4>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl">
              <p className="text-lg text-gray-300">Pending Orders</p>
              <h4 className="text-4xl font-black mt-3">14</h4>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-[2rem] p-8 overflow-x-auto">
            <h4 className="text-2xl font-black mb-6">Recent Orders</h4>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4">Customer</th>
                  <th>Network</th>
                  <th>Bundle</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4">Daniel Amoah</td>
                  <td>MTN</td>
                  <td>10GB</td>
                  <td className="text-green-600 font-bold">Completed</td>
                </tr>

                <tr className="border-b border-gray-100">
                  <td className="py-4">Michael K.</td>
                  <td>Telecel</td>
                  <td>20GB</td>
                  <td className="text-yellow-500 font-bold">Pending</td>
                </tr>

                <tr>
                  <td className="py-4">Sandra A.</td>
                  <td>AirtelTigo</td>
                  <td>5GB</td>
                  <td className="text-green-600 font-bold">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl text-center">
            <Clock3 className="mx-auto mb-4" size={40} />
            <h4 className="text-2xl font-black text-blue-950 mb-4">
              Fast Delivery
            </h4>
            <p className="text-gray-600">
              Receive your data package within 15 - 45 minutes after payment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-xl text-center">
            <ShieldCheck className="mx-auto mb-4" size={40} />
            <h4 className="text-2xl font-black text-blue-950 mb-4">
              Secure Payments
            </h4>
            <p className="text-gray-600">
              Safe and trusted Mobile Money transactions every time.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-xl text-center">
            <Phone className="mx-auto mb-4" size={40} />
            <h4 className="text-2xl font-black text-blue-950 mb-4">
              24/7 Support
            </h4>
            <p className="text-gray-600">
              Contact us anytime for assistance and fast customer support.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-black mb-5">RYCON'S DATA HUB</h3>

          <p className="text-gray-300 mb-6 text-lg">
            Affordable Data Packages For Everyone In Ghana 🇬🇭
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5 text-lg font-semibold">
            <div className="bg-white/10 px-6 py-4 rounded-2xl">
              📞 CALL: 0539026573
            </div>

            <div className="bg-green-500 px-6 py-4 rounded-2xl text-white">
              🟢 WHATSAPP: 0531389498
            </div>
          </div>

          <p className="text-gray-500 mt-8">
            © 2026 RYCON'S DATA HUB. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}