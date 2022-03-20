import { Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { LanguageProvider } from "./context/multilingual.context";
import AppLayout from "./layouts/app.layout";
import TopicsPages from "./pages/topics";
import TopicDataPage from "./pages/topics/topicData";
import { TranslationContent as T } from "./context/multilingual.context";
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
              <Route
                path="*"
                element={
                  <h1>
                    <T contentId={"nocontent"} />
                  </h1>
                }
              />
            </Routes>
          </AppLayout>
        </Auth0Provider>
      </LanguageProvider>
    </>
  );
}

export default App;
