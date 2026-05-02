import { useState } from "react";
import { CheckCircle, XCircle, Search } from "lucide-react";

export default function CertificateVerification({ id = 'certificate-verification' }) {
  const [certNo, setCertNo] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // fake database (demo)
  const validCertificates = ["IIT-12345", "IIT-67890", "IIT-11111"];

  const handleVerify = () => {
    if (!certNo) return;

    setLoading(true);
    setResult(null);

    setTimeout(() => {
      if (validCertificates.includes(certNo.trim())) {
        setResult({ status: "valid" });
      } else {
        setResult({ status: "invalid" });
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <section id={id} className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 border">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Certificate Verification
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your certificate number to verify authenticity
        </p>

        {/* Input */}
        <div className="flex items-center gap-2 border rounded-lg p-2 focus-within:border-green-500">
          <Search className="text-gray-400" size={18} />

          <input
            type="text"
            placeholder="Enter Certificate Number (e.g. IIT-12345)"
            value={certNo}
            onChange={(e) => setCertNo(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleVerify}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
        >
          {loading ? "Verifying..." : "Verify Certificate"}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 text-center">

            {result.status === "valid" ? (
              <div className="text-green-600 flex flex-col items-center gap-2">
                <CheckCircle size={40} />
                <p className="font-semibold">Certificate is VALID</p>
                <p className="text-sm text-gray-500">
                  This certificate is officially issued by IIT
                </p>
              </div>
            ) : (
              <div className="text-red-500 flex flex-col items-center gap-2">
                <XCircle size={40} />
                <p className="font-semibold">Invalid Certificate</p>
                <p className="text-sm text-gray-500">
                  No record found for this certificate number
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}