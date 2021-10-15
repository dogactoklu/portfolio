import './index.css';
import Card from './components/Card'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyBnSdn1mpxnCOSysRAyBRiyK7nak1SbTZ4",
	authDomain: "portfolio-dogac-to.firebaseapp.com",
	databaseURL: "https://portfolio-dogac-to-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "portfolio-dogac-to",
	storageBucket: "portfolio-dogac-to.appspot.com",
	messagingSenderId: "213293041052",
	appId: "1:213293041052:web:37bd66958df2cb63c53459",
	measurementId: "G-20DPLFSHZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
	return (
		<div className="App">
			<image url="media/backg.jpg" className="backgee">
				<Card 
					text='Deneme' 
					text2='props test2'
				/>
			</image>
		</div>
	);
}

export default App;
