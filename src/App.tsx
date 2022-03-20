import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LanguageProvider } from "./context/multilingual.context";
import AppLayout from "./layouts/app.layout";
import TopicsPages from "./pages/topics";
import TopicDataPage from "./pages/topics/topicData";
import { TranslationContent as T } from "./context/multilingual.context";

function App() {
  return (
    <>
      <LanguageProvider>
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
      </LanguageProvider>
    </>
  );
}

export default App;
