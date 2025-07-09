import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const format = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard initialisFollowing formatedUserName={format}  userName="FranColapinto" name="Franco Colapinto">
        Franco Colapinto
      </TwitterFollowCard>

      <TwitterFollowCard formatedUserName={format}  userName="PierreGASLY">
        PIERRE GASLY
      </TwitterFollowCard>
    </section>
  );
}
