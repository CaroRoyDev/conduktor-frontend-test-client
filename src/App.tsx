import { Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app.layout";
import TopicsPages from "./pages/topics";
import TopicDataPage from "./pages/topics/topicData";
function App() {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/topics">
            <Route index element={<TopicsPages />} />
            <Route path=":id/topic-data" element={<TopicDataPage />} />
          </Route>
          <Route path="*" element={<h1>No content</h1>} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
