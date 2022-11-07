import Header from "./components/Header";
import CodeTasks from "./components/CodeTasks";
import GitHubTasks from "./components/GitHubTasks";

function App() {
  return (
    <>
      <Header />
      <main>
        <CodeTasks />
        <GitHubTasks />
      </main>
    </>
  );
}

export default App;
