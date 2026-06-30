import "./globals.css";
import "leaflet/dist/leaflet.css";

import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Guardian AI",
  description: "AI Emergency Response System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <AuthProvider>

          {children}

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

        </AuthProvider>

      </body>
    </html>
  );
}