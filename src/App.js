import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './Components/GetStarted/GetStarted.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import Login from './Components/Login/Login.jsx';
import Home from './Components/Home/Home.jsx';
import OverallStats from './Components/OverallStats/OverallStats.jsx';
import HeadtoHead from './Components/HeadtoHead/HeadtoHead.jsx';
import Mostsixes from './Components/Mostsixes/Mostsixes.jsx';
import Mostfours from './Components/Mostfours/Mostfours.jsx';
import Mostfifties from './Components/Mostfifties/Mostfifties.jsx';
import Mosthundreds from './Components/Mosthundreds/Mosthundreds.jsx';
import PlayGames from './Components/PlayGames/PlayGames.jsx';
import FanPolls from './Components/FanPolls/FanPolls.jsx';
import TriviaQuiz from './Components/TriviaQuiz/TriviaQuiz.jsx';
import PlayerQuiz from './Components/PlayerQuiz/PlayerQuiz.jsx';
import MatchPrediction from './Components/MatchPrediction/MatchPrediction.jsx';
import MyTeam from './Components/MyTeam/MyTeam.jsx';
import FantasyHome from './Components/FantasyHome/FantasyHome.jsx';
import AllRounders from './Components/AllRounders/AllRounders.jsx';
import Batsmen from './Components/Batsmen/Batsmen.jsx';
import Bowlers from './Components/Bowlers/Bowlers.jsx';
import Team from './Components/Team/Team.jsx';
import Merchandise from './Components/Merchandise/Merchandise.jsx';
import Cart from './Components/Cart/Cart.jsx';
import Payment from './Components/Payment/Payment.jsx';
import Bill from './Components/Bill/Bill.jsx';
import Retentions from './Components/Retentions/Retentions.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import News from './Components/News/News.jsx';
import Csk from './Components/Csk/Csk.jsx';
import CommunityForum from './Components/CommunityForum/CommunityForum.jsx';
import Mi from './Components/Mi/Mi.jsx';
import Rcb from './Components/Rcb/Rcb.jsx';
import Dc from './Components/Dc/Dc.jsx';
import Rr from './Components/Rr/Rr.jsx';
import Kkr from './Components/Kkr/Kkr.jsx';
import Srh from './Components/Srh/Srh.jsx';
import Pbks from './Components/Pbks/Pbks.jsx';
import Lsg from './Components/Lsg/Lsg.jsx';
import Gt from './Components/Gt/Gt.jsx';
import Auction from './Components/Auction/Auction.jsx';
import Predict from './Components/Predict/Predict.jsx';
import Receipt from './Components/Receipt/Receipt.jsx';
import TicketBooking from './Components/TicketBooking/TicketBooking.jsx';
import TickPayment from './Components/TickPayment/TickPayment.jsx';
import MatchSchedule from './Components/MatchSchedule/MatchSchedule.jsx';
import MemoryGame from './Components/MemoryGame/MemoryGame.jsx';
import AdminLogin from './Components/AdminLogin/AdminLogin.jsx';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard.jsx';
import Scorecard from './Components/Scorecard/Scorecard.jsx';
import Venues from './Components/Venues/Venues.jsx';
import UserProfile from './Components/UserProfile/UserProfile.jsx';
import Leaderboard from './Components/Leaderboard/Leaderboard.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GetStarted />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/overallStats" element={<OverallStats />} />
                <Route path="/headtohead" element={<HeadtoHead />} />
                <Route path="/mostsixes" element={<Mostsixes />} />
                <Route path="/mostfours" element={<Mostfours />} />
                <Route path="/mostfifties" element={<Mostfifties />} />
                <Route path="/mosthundreds" element={<Mosthundreds />} />
                <Route path="/playgames" element={<PlayGames />} />
                <Route path="/fanpolls" element={<FanPolls />} />
                <Route path="/triviaquiz" element={<TriviaQuiz />} />
                <Route path="/playerquiz" element={<PlayerQuiz />} />
                <Route path="/matchprediction" element={<MatchPrediction />} />
                <Route path="/myteam" element={<MyTeam />} />
                <Route path="/fantasyhome" element={<FantasyHome />} />
                <Route path="/allrounders" element={<AllRounders />} />
                <Route path="/batsmen" element={<Batsmen />} />
                <Route path="/bowlers" element={<Bowlers />} />
                <Route path="/team" element={<Team />} />
                <Route path="/merchandise" element={<Merchandise />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/bill" element={<Bill />} />
                <Route path="/retentions" element={<Retentions />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/news" element={<News />} />
                <Route path="/csk" element={<Csk />} />
                <Route path="/communityforum" element={<CommunityForum />} />
                <Route path="/mi" element={<Mi />} />
                <Route path="/rcb" element={<Rcb />} />
                <Route path="/dc" element={<Dc />} />
                <Route path="/rr" element={<Rr />} />
                <Route path="/kkr" element={<Kkr />} />
                <Route path="/srh" element={<Srh />} />
                <Route path="/pbks" element={<Pbks />} />
                <Route path="/lsg" element={<Lsg />} />
                <Route path="/gt" element={<Gt />} />
                <Route path="/auction" element={<Auction />} />
                <Route path="/predict" element={<Predict />} />
                <Route path="/receipt" element={<Receipt />} />
                <Route path="/ticketBooking" element={<TicketBooking />} />
                <Route path="/tickPayment" element={<TickPayment />} />
                <Route path="/matchSchedule" element={<MatchSchedule />} />
                <Route path="/memoryGame" element={<MemoryGame />} />
                <Route path="/adminlogin" element={<AdminLogin />} />
                <Route path="/admindashboard" element={<AdminDashboard />} />
                <Route path="/scorecard" element={<Scorecard />} />
                <Route path="/venues" element={<Venues />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </Router>
    );
}

export default App;
