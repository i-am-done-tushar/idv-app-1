import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Minus, Trash2, ChevronDown, Eye, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DocumentType {
  id: string;
  name: string;
  selected: boolean;
}

interface Country {
  id: string;
  name: string;
  selected: boolean;
  documentTypes: DocumentType[];
}

export default function DocumentVerification() {
  const navigate = useNavigate();
  
  const [uploadOptions, setUploadOptions] = useState({
    allowUploadFromDevice: false,
    allowCaptureViaWebcam: false,
  });

  const [documentHandling, setDocumentHandling] = useState<'reject' | 'retry'>('reject');

  const [countries, setCountries] = useState<Country[]>([
    {
      id: 'india',
      name: 'India',
      selected: true,
      documentTypes: [
        { id: 'aadhar', name: 'Aadhar Card', selected: false },
        { id: 'pan', name: 'Pan Card', selected: false },
        { id: 'driving', name: 'Driving License', selected: false },
        { id: 'passport', name: 'Passport', selected: false },
      ]
    }
  ]);

  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleBack = () => {
    navigate(-1);
  };

  const handlePrevious = () => {
    navigate("/form-builder");
  };

  const handleNext = () => {
    console.log("Navigate to next step");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setUploadedFiles(prev => [...prev, ...Array.from(files)]);
    }
  };

  const removeUploadedFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const toggleCountryDocumentType = (countryId: string, docTypeId: string) => {
    setCountries(prev => prev.map(country => 
      country.id === countryId 
        ? {
            ...country,
            documentTypes: country.documentTypes.map(docType =>
              docType.id === docTypeId 
                ? { ...docType, selected: !docType.selected }
                : docType
            )
          }
        : country
    ));
  };

  const removeCountry = (countryId: string) => {
    setCountries(prev => prev.filter(country => country.id !== countryId));
  };

  return (
    <div className="flex flex-col items-start bg-white h-screen">
      {/* Header */}
      <div className="flex w-full h-11 px-4 justify-between items-center flex-shrink-0 border-b border-[#DEDEDD] bg-white">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4566b1e4f2b69299156b1f1c61472e06e0ad9666?width=180"
          alt="Logo"
          className="w-[90px] h-7 flex-shrink-0"
        />
        <div className="flex items-center gap-2">
          <div className="flex w-8 h-8 p-2 justify-center items-center gap-2 rounded-full bg-[#F65F7C]">
            <span className="text-white text-xs font-medium leading-[10px]">
              OS
            </span>
          </div>
        </div>
      </div>

      {/* Container */}
      <div className="flex h-[934px] items-start flex-shrink-0 w-full bg-white">
        <div className="flex h-[934px] flex-col items-start flex-1 bg-white">
          {/* Sub Header */}
          <div className="flex flex-col items-start w-full border-b border-[#DEDEDD]">
            {/* Breadcrumbs */}
            <div className="flex h-[38px] px-4 items-center gap-2 w-full">
              <div className="flex items-center gap-2 w-full">
                <div className="flex h-8 justify-center items-center gap-1">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33268 1.51562V4.26932C9.33268 4.64268 9.33268 4.82937 9.40535 4.97198C9.46928 5.09742 9.57122 5.1994 9.69668 5.26332C9.83928 5.33598 10.0259 5.33598 10.3993 5.33598H13.153M9.33268 11.3359H5.33268M10.666 8.66927H5.33268M13.3327 6.66142V11.4693C13.3327 12.5894 13.3327 13.1494 13.1147 13.5773C12.9229 13.9536 12.617 14.2595 12.2407 14.4513C11.8128 14.6693 11.2528 14.6693 10.1327 14.6693H5.86602C4.74591 14.6693 4.18586 14.6693 3.75804 14.4513C3.38171 14.2595 3.07575 13.9536 2.884 13.5773C2.66602 13.1494 2.66602 12.5894 2.66602 11.4693V4.53594C2.66602 3.41583 2.66602 2.85578 2.884 2.42796C3.07575 2.05163 3.38171 1.74567 3.75804 1.55392C4.18586 1.33594 4.74591 1.33594 5.86602 1.33594H8.00722C8.49635 1.33594 8.74095 1.33594 8.97115 1.3912C9.17522 1.44019 9.37028 1.521 9.54928 1.63066C9.75108 1.75434 9.92402 1.92729 10.2699 2.2732L12.3954 4.39868C12.7413 4.74458 12.9143 4.91754 13.0379 5.11937C13.1476 5.29831 13.2284 5.4934 13.2774 5.69747C13.3327 5.92765 13.3327 6.17224 13.3327 6.66142Z"
                      stroke="#515257"
                      strokeWidth="1.09091"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[#505258] text-xs font-medium leading-3">
                    Template
                  </span>
                </div>
                <div className="flex h-8 justify-center items-center gap-2">
                  <span className="text-[#505258] text-xs font-medium leading-3">
                    /
                  </span>
                </div>
                <div className="flex h-8 justify-center items-center gap-1">
                  <span className="text-[#505258] text-xs font-medium leading-3">
                    Create New Template
                  </span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="flex h-12 px-4 py-2 justify-between items-center w-full">
              <div className="flex items-start gap-2">
                <button
                  onClick={handleBack}
                  className="flex w-7 h-7 p-2 flex-col justify-center items-center gap-2 rounded-full bg-[#F1F2F4] hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft
                    size={16}
                    className="text-[#676879]"
                    strokeWidth={2}
                  />
                </button>
                <h1 className="text-[#172B4D] text-xl font-bold leading-[30px]">
                  New Template
                </h1>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex h-8 px-2 py-[9px] justify-center items-center gap-1 rounded bg-white">
                  <div className="w-4 h-4 border border-[#C3C6D4] rounded bg-white"></div>
                  <span className="text-[#505258] text-[13px] font-medium">
                    Mark As Complete
                  </span>
                </div>
                <button className="flex h-8 px-2 py-[9px] justify-center items-center gap-1 rounded border border-[#0073EA] bg-white">
                  <Eye size={16} className="text-[#0073EA]" />
                  <span className="text-[#0073EA] text-[13px] font-medium">
                    Preview
                  </span>
                </button>
                <button className="flex h-8 px-2 py-[9px] justify-center items-center gap-1 rounded border border-[#0073EA] bg-[#0073EA]">
                  <Save size={16} className="text-white" />
                  <span className="text-white text-[13px] font-medium">
                    Save
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="flex w-full px-4 py-3 justify-between items-center border-b border-[#DEDEDD] bg-white">
            <div className="flex justify-between items-center flex-1">
              <button
                onClick={handlePrevious}
                className="flex justify-center items-center gap-1 rounded hover:bg-gray-50 transition-colors p-2"
              >
                <span className="text-[#505258] text-[13px] font-medium">
                  Previous
                </span>
              </button>

              {/* Centered Progress Stepper */}
              <div className="flex justify-center items-center flex-1">
                <div className="flex items-center gap-2">
                  {/* Step 1 - Completed */}
                  <div className="flex flex-col justify-center items-center gap-1.5">
                    <div className="flex p-1.5 justify-center items-center gap-2 rounded-full border-2 border-[#0073EA]">
                      <div className="flex w-8 h-8 p-3 flex-col justify-center items-center gap-2 rounded-full bg-[#0073EA]">
                        <span className="text-white text-base font-bold leading-4">
                          1
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-start gap-2">
                      <span className="text-[#172B4D] text-[13px] font-medium">
                        Form builder
                      </span>
                    </div>
                  </div>

                  {/* Connector */}
                  <div className="w-[120px] h-px bg-[#D0D4E4]"></div>

                  {/* Step 2 - Active */}
                  <div className="flex flex-col justify-center items-center gap-1.5">
                    <div className="flex p-1.5 justify-center items-center gap-2 rounded-full border-2 border-[#0073EA]">
                      <div className="flex w-8 h-8 p-3 flex-col justify-center items-center gap-2 rounded-full bg-[#0073EA]">
                        <span className="text-white text-base font-bold leading-4">
                          2
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-start gap-2">
                      <span className="text-[#172B4D] text-[13px] font-medium">
                        Preview
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="flex justify-center items-center gap-1 rounded hover:bg-gray-50 transition-colors p-2"
              >
                <span className="text-[#505258] text-[13px] font-medium">
                  Next
                </span>
                <ChevronRight
                  size={14}
                  className="text-[#676879]"
                  strokeWidth={2}
                />
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex h-[765px] items-start flex-shrink-0 w-full">
            {/* Sidebar */}
            <div className="flex w-[332px] px-4 py-4 flex-col items-start gap-2 rounded-lg bg-white">
              <div className="flex flex-col items-start gap-8 w-full">
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex pb-2 justify-between items-center w-full">
                    <div className="flex flex-col justify-center items-start gap-2 flex-1">
                      <h3 className="text-[#292F4C] text-[15px] font-bold leading-3">
                        Build your process
                      </h3>
                      <p className="w-full text-[#505258] text-[13px] font-normal leading-5">
                        Create a flow by adding required information fields and
                        verification steps for your users.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[308px] px-7 py-3 items-center gap-2 rounded bg-[#F6F7FB]">
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <div className="flex items-center gap-1 w-full">
                        <h4 className="flex-1 text-[#292F4C] text-sm font-bold leading-[13px]">
                          Personal Information
                        </h4>
                      </div>
                      <div className="flex justify-center items-center gap-2 w-full">
                        <p className="flex-1 text-[#505258] text-[13px] font-normal leading-[18px]">
                          Set up fields to collect basic user details like name,
                          contact.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[308px] px-7 py-3 items-center gap-2 rounded bg-[#CCE5FF] border border-[#DEDEDD]">
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <div className="flex items-center gap-1 w-full">
                        <h4 className="flex-1 text-[#292F4C] text-sm font-bold leading-[13px]">
                          Document Verification
                        </h4>
                      </div>
                      <div className="flex justify-center items-center gap-2 w-full">
                        <p className="flex-1 text-[#505258] text-[13px] font-normal leading-[18px]">
                          Set ID submission rules and handling for unclear
                          files.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex pb-2 justify-between items-center w-full">
                    <div className="flex flex-col justify-center items-start gap-2 flex-1">
                      <h3 className="text-[#292F4C] text-[15px] font-bold leading-3">
                        Add Verification Steps
                      </h3>
                      <p className="w-full text-[#505258] text-[13px] font-normal leading-5">
                        Insert secure verification steps as needed.
                      </p>
                    </div>
                  </div>
                  <div className="flex w-[308px] px-7 py-3 items-center gap-2 rounded opacity-50">
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <div className="flex items-center gap-1 w-full">
                        <h4 className="text-[#292F4C] text-sm font-bold leading-[13px]">
                          Biometric Verification
                        </h4>
                      </div>
                      <div className="flex justify-center items-center gap-2 w-full">
                        <p className="flex-1 text-[#505258] text-[13px] font-normal leading-[18px]">
                          Set selfie retries, liveness threshold, and biometric
                          storage
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resize Handle */}
            <div className="flex w-4 flex-col items-center gap-2.5 h-full bg-white">
              <div className="flex w-px px-1 flex-col items-start gap-2.5 flex-1 bg-[#DEDEDD]"></div>
            </div>

            {/* Main Content Area */}
            <div className="flex w-[1018px] px-4 py-4 flex-col items-start gap-6 h-full bg-white overflow-y-auto">
              <div className="flex flex-col items-start gap-6 w-full">
                {/* Personal Information Accordion */}
                <div className="flex px-2 py-3 flex-col justify-center items-start gap-2 w-full rounded border border-[#D0D4E4] bg-white">
                  <div className="flex items-center gap-2 w-full">
                    <Minus
                      size={18}
                      className="text-[#323238]"
                      strokeWidth={1.5}
                    />
                    <h2 className="text-[#172B4D] text-base font-bold leading-4">
                      Personal Information
                    </h2>
                  </div>
                  <div className="flex px-3 justify-center items-center gap-2.5 w-full ml-7">
                    <p className="flex-1 text-[#505258] text-[13px] font-normal leading-5">
                      Set up fields to collect basic user details like name,
                      contact.
                    </p>
                  </div>
                </div>

                {/* Document Verification Accordion */}
                <div className="flex flex-col items-start w-full rounded border border-[#D0D4E4] bg-white">
                  {/* Accordion Header */}
                  <div className="flex px-2 py-3 flex-col justify-center items-start gap-2 w-full rounded-t">
                    <div className="flex items-center gap-2 w-full">
                      <Minus
                        size={18}
                        className="text-[#323238]"
                        strokeWidth={1.5}
                      />
                      <h2 className="text-[#172B4D] text-base font-bold leading-4">
                        Document Verification
                      </h2>
                    </div>
                    <div className="flex px-3 justify-center items-center gap-2.5 w-full ml-7">
                      <p className="flex-1 text-[#505258] text-[13px] font-normal leading-5">
                        Define how users can submit ID documents and what happens if files are unclear.
                      </p>
                    </div>
                  </div>

                  {/* Accordion Body */}
                  <div className="flex px-9 py-6 flex-col items-start gap-6 w-full">
                    {/* User Upload Options */}
                    <div className="flex flex-col items-start gap-4 w-full">
                      <div className="flex flex-col items-start gap-2 w-full">
                        <h3 className="text-[#172B4D] text-base font-bold leading-3">
                          User Upload Options
                        </h3>
                        <p className="text-[#172B4D] text-[13px] leading-5">
                          Select how users are allowed to submit documents during the process.
                        </p>
                      </div>
                      
                      <div className="flex px-6 py-6 flex-col items-start gap-5 w-full rounded bg-[#F6F7FB]">
                        {/* Allow Upload from Device */}
                        <div className="flex pb-5 flex-col items-start w-full border-b border-[#D0D4E4]">
                          <div className="flex items-start gap-2 w-full">
                            <input
                              type="checkbox"
                              checked={uploadOptions.allowUploadFromDevice}
                              onChange={(e) => setUploadOptions(prev => ({
                                ...prev,
                                allowUploadFromDevice: e.target.checked
                              }))}
                              className="w-[18px] h-[18px] border border-[#C3C6D4] rounded bg-white mt-1"
                            />
                            <div className="flex flex-col items-start gap-2 flex-1">
                              <h4 className="text-[#172B4D] text-[13px] font-medium leading-[18px]">
                                Allow Upload from Device
                              </h4>
                              <p className="text-[#505258] text-[13px] leading-5">
                                Let users upload existing documents directly from their device.
                              </p>
                              {uploadOptions.allowUploadFromDevice && (
                                <div className="flex flex-col gap-2 w-full mt-2">
                                  <input
                                    type="file"
                                    multiple
                                    accept=".pdf,.jpg,.jpeg,.png"
                                    onChange={handleFileUpload}
                                    className="text-[13px] text-[#505258]"
                                  />
                                  {uploadedFiles.length > 0 && (
                                    <div className="flex flex-col gap-1">
                                      {uploadedFiles.map((file, index) => (
                                        <div key={index} className="flex items-center justify-between p-2 bg-white rounded border border-[#D0D4E4]">
                                          <span className="text-[13px] text-[#172B4D]">{file.name}</span>
                                          <button
                                            onClick={() => removeUploadedFile(index)}
                                            className="text-[#676879] hover:text-red-500"
                                          >
                                            <Trash2 size={14} />
                                          </button>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Allow Capture via Webcam */}
                        <div className="flex items-start gap-2 w-full">
                          <input
                            type="checkbox"
                            checked={uploadOptions.allowCaptureViaWebcam}
                            onChange={(e) => setUploadOptions(prev => ({
                              ...prev,
                              allowCaptureViaWebcam: e.target.checked
                            }))}
                            className="w-[18px] h-[18px] border border-[#C3C6D4] rounded bg-white mt-1"
                          />
                          <div className="flex flex-col items-start gap-2 flex-1">
                            <h4 className="text-[#172B4D] text-[13px] font-medium leading-[18px]">
                              Allow Capture via Webcam
                            </h4>
                            <p className="text-[#505258] text-[13px] leading-5">
                              Enable webcam access to allow users to capture documents in real time.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Unreadable Document Handling */}
                    <div className="flex flex-col items-start gap-4 w-full">
                      <div className="flex flex-col items-start gap-2 w-full">
                        <h3 className="text-[#172B4D] text-base font-bold leading-3">
                          Unreadable Document Handling
                        </h3>
                        <p className="text-[#172B4D] text-[13px] leading-5">
                          Choose what action the system should take if a submitted document is not clear or unreadable.
                        </p>
                      </div>
                      
                      <div className="flex px-6 py-6 flex-col items-start gap-5 w-full rounded bg-[#F6F7FB]">
                        {/* Reject Immediately */}
                        <div className="flex pb-5 flex-col items-start w-full border-b border-[#D0D4E4]">
                          <div className="flex items-start gap-2 w-full">
                            <input
                              type="radio"
                              name="documentHandling"
                              checked={documentHandling === 'reject'}
                              onChange={() => setDocumentHandling('reject')}
                              className="w-[18px] h-[18px] border border-[#C3C6D4] rounded-full bg-white mt-1"
                            />
                            <div className="flex flex-col items-start gap-2 flex-1">
                              <h4 className="text-[#172B4D] text-[13px] font-medium leading-[18px]">
                                Reject Immediately
                              </h4>
                              <p className="text-[#505258] text-[13px] leading-5">
                                Skip retry and reject unclear documents without further attempts.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Allow Retries Before Rejection */}
                        <div className="flex items-start gap-2 w-full">
                          <input
                            type="radio"
                            name="documentHandling"
                            checked={documentHandling === 'retry'}
                            onChange={() => setDocumentHandling('retry')}
                            className="w-[18px] h-[18px] border border-[#C3C6D4] rounded-full bg-white mt-1"
                          />
                          <div className="flex flex-col items-start gap-2 flex-1">
                            <h4 className="text-[#172B4D] text-[13px] font-medium leading-[18px]">
                              Allow Retries Before Rejection
                            </h4>
                            <p className="text-[#505258] text-[13px] leading-5">
                              Let users reattempt uploading the document before it's finally rejected.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Supported Countries */}
                    <div className="flex flex-col items-start gap-4 w-full">
                      <div className="flex flex-col items-start gap-2 w-full">
                        <h3 className="text-[#172B4D] text-base font-bold leading-3">
                          Supported Countries for Identity Verification
                        </h3>
                        <p className="text-[#172B4D] text-[13px] leading-5">
                          Only document from these countries are supported.
                        </p>
                      </div>
                      
                      <div className="flex px-6 py-6 flex-col items-start gap-4 w-full rounded bg-[#F6F7FB]">
                        <div className="flex flex-col items-start gap-2 w-full">
                          <label className="text-[#172B4D] text-[13px] font-medium leading-[18px]">
                            Which countries are supported?
                          </label>
                          <div className="relative">
                            <button
                              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                              className="flex h-8 px-3 justify-between items-center w-80 rounded border border-[#C3C6D4] bg-white"
                            >
                              <span className="text-[#676879] text-[13px]">
                                Select Countries
                              </span>
                              <ChevronDown size={10} className="text-[#676879]" />
                            </button>
                          </div>
                        </div>

                        {/* Selected Countries */}
                        {countries.map((country) => (
                          <div key={country.id} className="flex px-3 py-3 flex-col items-start w-full rounded bg-white">
                            <div className="flex justify-between items-center w-full mb-3">
                              <h4 className="text-black text-sm font-medium">
                                {country.name}
                              </h4>
                              <button
                                onClick={() => removeCountry(country.id)}
                                className="flex w-8 h-8 justify-center items-center rounded-full hover:bg-gray-100"
                              >
                                <Trash2 size={18} className="text-[#676879]" />
                              </button>
                            </div>
                            
                            <div className="flex px-3 py-3 items-start content-start gap-2 flex-wrap w-full rounded bg-[#F6F7FB]">
                              {country.documentTypes.map((docType) => (
                                <div
                                  key={docType.id}
                                  className="flex h-8 px-2 justify-center items-center gap-2 rounded-full bg-[#F6F7FB]"
                                >
                                  <input
                                    type="checkbox"
                                    checked={docType.selected}
                                    onChange={() => toggleCountryDocumentType(country.id, docType.id)}
                                    className="w-[18px] h-[18px] border border-[#C3C6D4] rounded bg-white"
                                  />
                                  <span className="text-[#505258] text-[13px] font-medium">
                                    {docType.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
