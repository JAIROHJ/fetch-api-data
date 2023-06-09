import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Users from './Pages/Users';
import Posts from './Pages/Posts';
import Comments from './Pages/Comments';
import All from './Pages/All';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Tools/ScrollToTop';

const Container = styled.div`
	width: min(1200px, 95vw);
	margin: 0 auto;
	position: relative;
	min-height: 100vh;
	padding-top: 9rem;
`;

function App() {
	return (
		<>
			<Container>
				<BrowserRouter>
					<Header />

					<Routes>
						<Route path="/all" element={<All />} />
						<Route path="/users" element={<Users />} />
						<Route path="/posts" element={<Posts />} />
						<Route path="/comments" element={<Comments />} />
						<Route path="*" element={<Navigate to="/users" />} />
					</Routes>

					<ScrollToTop />
				</BrowserRouter>
			</Container>

			<Footer />
		</>
	);
}

export default App;
