import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import ComponentDocs from "@/pages/ComponentDocs";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<ComponentDocs />} />
            <Route path="/components/:componentName" element={<ComponentDocs />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
