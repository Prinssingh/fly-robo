import { Pencil, Lock, BookOpen, Heart, List, DollarSign, RotateCcw, RefreshCw, Mail } from "lucide-react";



const accountCards = [
    { icon: <Pencil size={36}  className="card-icon" />, text: "Edit your account information",isLink: true, link:"/pages/account/account/EditAccount" },
    { icon: <Lock size={36} className="card-icon" />, text: "Change your password"  ,link:"/pages/account/account/ChangePassword"},
    { icon: <BookOpen size={36} className="card-icon"/>, text: "Modify your address book entries", link:"/pages/account/Address" },
    { icon: <Heart size={36} className="card-icon"/>, text: "Modify your wish list", link:"/pages/account/account/WishList" },
];

  const orderCards = [
    { icon: <List size={36} className="card-icon" />, text: "View your order history",isLink: true, link:"/pages/account/OrderHistory" },
    { icon: <DollarSign size={36} className="card-icon" />, text: "FlyRobo Cashback" },
    { icon: <RotateCcw size={36} className="card-icon" />, text: "View your return requests" },
    { icon: <RefreshCw size={36} className="card-icon" />, text: "Your Transactions" }
  ];

  const newsletterCards = [
    { icon: <Mail size={36} className="card-icon" />, text: "Subscribe / unsubscribe to newsletter" }
  ];


  const cardSections = [
    { title: "", cards: accountCards },
    { title: "My Orders", cards: orderCards },
    { title: "Newsletter", cards: newsletterCards }
];

export default cardSections;
