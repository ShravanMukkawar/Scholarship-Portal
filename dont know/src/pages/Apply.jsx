import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Document() {
  const [name, setName] = useState("");
  const [Education, setEducation] = useState("");
  const [Gender, setGender] = useState("");
  const [Disability, setDisabilty] = useState("");
  const [income, setIncome] = useState("");
  const [Marksheet, setMarksheet] = useState(null);
  const [Category, setCategory] = useState("");
  const [CategoryDoc, setCategoryDoc] = useState(null);
  const [DisabilityDoc, setDisabilityDoc] = useState(null);
  const [incomeDoc, setIncomeDoc] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = "67096451362370710bde65e0";
    const formData = new FormData();
    formData.append('name', name);
    formData.append('userId', userId);
    formData.append('education', Education);
    formData.append('gender', Gender);
    formData.append('disability', Disability);
    formData.append('income', income);
    formData.append('category', Category);
    
    if (CategoryDoc) formData.append('categoryDoc', CategoryDoc);
    if (DisabilityDoc) formData.append('disabilityDoc', DisabilityDoc);
    if (incomeDoc) formData.append('incomeDoc', incomeDoc);
    if (Marksheet) formData.append('marksheet', Marksheet);

    try {
      const response = await fetch('http://localhost:5000/apply/register', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        setError(errorResponse.message || 'An error occurred during submission');
        return;
      }

      const data = await response.json();
      console.log('Success:', data);
      setError(null);
      navigate('/success-page'); 
    } catch (error) {
      console.error('Error during form submission:', error);
      setError('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-gray-400 to-blue-500">
        <div className="w-[800px] bg-white p-10 shadow-xl mt-11 mb-11">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
            Application Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Name:</label>
                <input
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Gender:</label>
                <select
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  value={Gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="" disabled>Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Education:</label>
                <input
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Enter your Education"
                  value={Education}
                  onChange={(e) => setEducation(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Category:</label>
                <select
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  value={Category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>Select your category</option>
                  <option value="EWS">EWS</option>
                  <option value="SBC">SBC</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OBC">OBC</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Upload Category Doc:</label>
                <input
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  type="file"
                  onChange={(e) => setCategoryDoc(e.target.files[0])}
                />
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Disability:</label>
                <input
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Enter your Disability"
                  value={Disability}
                  onChange={(e) => setDisabilty(e.target.value)}
                />
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Upload Disability Doc:</label>
                <input
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  type="file"
                  onChange={(e) => setDisabilityDoc(e.target.files[0])}
                />
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Income:</label>
                <input
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  type="text"
                  placeholder="Enter your Income"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Upload Income Doc:</label>
                <input
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  type="file"
                  onChange={(e) => setIncomeDoc(e.target.files[0])}
                />
              </div>

              <div className="flex items-center">
                <label className="w-32 text-gray-500 text-lg">Upload Marksheet:</label>
                <input
                  className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 rounded-md"
                  type="file"
                  onChange={(e) => setMarksheet(e.target.files[0])}
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 text-red-500">
                {error}
              </div>
            )}

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
