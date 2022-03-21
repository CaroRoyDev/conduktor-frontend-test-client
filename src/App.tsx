import { Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { LanguageProvider } from "./context/multilingual.context";
import AppLayout from "./layouts/app.layout";
import TopicsPages from "./pages/topics";
import TopicDataPage from "./pages/topics/topicData";
import { Error404 } from "./components";

import "./App.css";

function App() {
  return (
    <>
      <LanguageProvider>
        <Auth0Provider
          domain="conduktor-coding-challenge.eu.auth0.com"
          clientId="2BczaMeSZzUhOfRfDOFG5QXcfaXQUjmE"
          redirectUri={window.location.origin}
        >
          <AppLayout>
            <Routes>
              <Route path="/topics">
                <Route index element={<TopicsPages />} />
                <Route path=":id/topic-data" element={<TopicDataPage />} />
              </Route>
              <Route path="*" element={<Error404 />} />
            </Routes>
          </AppLayout>
        </Auth0Provider>
      </LanguageProvider>
    </>
  );
}

export default App;
