import Banner from '../Banner/Banner';
import Welcome from '../Welcome/Welcome';
import WelcomeBubble from '../Welcome/WelcomeBubble'
import News from '../News/News';
import Beyond from '../Beyond/Beyond';

export default function Main() {
  return (
    <main className="main">
      <Banner />
      <Welcome />
      <WelcomeBubble />
      <News />
      <Beyond />
    </main>
  );
}