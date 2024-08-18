import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Template_2 = () => {
  const initialResumeData = {
    name: "Name",
    title: "Professional Title",
    summary: "Summary",
    experience: [
      {
        role: "Role, Company, Place",
        duration: "00/0000-00/0000",
        responsibilities: [
          "Some Responsibilities",
          "Some Responsibilities",
          "Some Responsibilities",
        ],
      },
      {
        role: "Role, Company, Location",
        duration: "00/0000-00/0000",
        responsibilities: [
          "Some Responsibilities",
          "Some Responsibilities",
          "Some Responsibilities",
          "Some Responsibilities",
        ],
      },
    ],
    education: [
      {
        school: "University",
        years: "0000-0000",
        degree: "Degree, University",
      },
      {
        school: "University",
        years: "0000-0000",
        degree: "Degree, Major, University",
      },
    ],
    skills: [
      "Microsoft Office Access",
      "Oracle",
      "PHP 7",
      "MySQL 7",
      "CSS",
      "JavaScript",
      "HTML 5",
    ],
    languages: [
      { language: "A", level: "B2" },
      { language: "B", level: "C1" },
    ],
    references: [
      { name: "ABC", contact: "+123 45 6178 90" },
      { name: "XYZ", contact: "+1234 56 789 0" },
      { name: "PQR", contact: "+123 456 189" },
    ],
  };

  const [resumeData, setResumeData] = useState(initialResumeData);
  const [visibilityButton, setVisibilityButton] = useState(true);

  const handleBlur = (section, index, field, event) => {
    const updatedValue = event.target.textContent;
    const updatedResumeData = { ...resumeData };

    if (index !== null && index !== undefined) {
      updatedResumeData[section][index][field] = updatedValue;
    } else {
      updatedResumeData[section][field] = updatedValue;
    }

    setResumeData(updatedResumeData);
  };

  const handleDownloadPDF = () => {
    setVisibilityButton(false);
    setTimeout(() => {
      const resumeElement = document.querySelector(".resume-container");
      if (resumeElement) {
        html2canvas(resumeElement, { scale: 2 }).then((canvas) => {
          const pdf = new jsPDF("p", "mm", "a4");
          const imgData = canvas.toDataURL("image/png");
          const imgWidth = 210; // A4 width in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          const pageHeight = pdf.internal.pageSize.getHeight();
          let position = 0;
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          position -= pageHeight;

          while (position + imgHeight >= 0) {
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            position -= pageHeight;
          }

          pdf.save("resume.pdf");
          setVisibilityButton(true);
        });
      } else {
        console.error("Resume element not found!");
        setVisibilityButton(true);
      }
    }, 0);
  };

  const handleDownloadPNG = () => {
    setVisibilityButton(false);
    setTimeout(() => {
      const resumeElement = document.querySelector(".resume-container");
      if (resumeElement) {
        html2canvas(resumeElement).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = imgData;
          link.download = "resume.png";
          link.click();
          setVisibilityButton(true);
        });
      } else {
        console.error("Resume element not found!");
        setVisibilityButton(true);
      }
    }, 0);
  };

  return (
    <div className="resume-container border-2 border-gray-900 p-5 mx-auto mt-5 w-[700px] bg-white shadow-lg">
      <div className="header mb-5 p-5 border border-gray-300 bg-gray-100">
        <h1
          contentEditable="true"
          className="text-4xl font-bold text-blue-600"
          onBlur={(e) => handleBlur("name", null, null, e)}
        >
          {resumeData.name}
        </h1>
        <p
          contentEditable="true"
          className="text-2xl"
          onBlur={(e) => handleBlur("title", null, null, e)}
        >
          {resumeData.title}
        </p>
      </div>
      <div className="summary mb-5 p-5 border border-gray-300 bg-gray-100">
        <h2 className="text-3xl font-bold">Professional Summary</h2>
        <p
          contentEditable="true"
          onBlur={(e) => handleBlur("summary", null, null, e)}
        >
          {resumeData.summary}
        </p>
      </div>
      <div className="experience mb-5 p-5 border border-gray-300 bg-gray-100">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <ul className="list-none p-0">
          {resumeData.experience.map((exp, index) => (
            <li key={index} className="mb-2">
              <h3
                contentEditable="true"
                className="font-semibold"
                onBlur={(e) => handleBlur("experience", index, "role", e)}
              >
                {exp.role}
              </h3>
              <p
                contentEditable="true"
                onBlur={(e) => handleBlur("experience", index, "duration", e)}
              >
                {exp.duration}
              </p>
              <ul className="list-disc ml-5">
                {exp.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    contentEditable="true"
                    onBlur={(e) => {
                      const updatedResponsibilities = [
                        ...resumeData.experience[index].responsibilities,
                      ];
                      updatedResponsibilities[i] = e.target.textContent;
                      handleBlur("experience", index, "responsibilities", e);
                    }}
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="education mb-5 p-5 border border-gray-300 bg-gray-100">
        <h2 className="text-3xl font-bold">Education</h2>
        <ul className="list-none p-0">
          {resumeData.education.map((edu, index) => (
            <li key={index} className="mb-2">
              <h3
                contentEditable="true"
                className="font-semibold"
                onBlur={(e) => handleBlur("education", index, "school", e)}
              >
                {edu.school}
              </h3>
              <p
                contentEditable="true"
                onBlur={(e) => handleBlur("education", index, "years", e)}
              >
                {edu.years}
              </p>
              <p
                contentEditable="true"
                onBlur={(e) => handleBlur("education", index, "degree", e)}
              >
                {edu.degree}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills mb-5 p-5 border border-gray-300 bg-gray-100">
        <h2 className="text-3xl font-bold">Additional Skills</h2>
        <ul className="list-none p-0">
          {resumeData.skills.map((skill, index) => (
            <li key={index} className="mb-2">
              <div
                contentEditable="true"
                onBlur={(e) => handleBlur("skills", index, null, e)}
              >
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="languages mb-5 p-5 border border-gray-300 bg-gray-100">
        <h2 className="text-3xl font-bold">Languages</h2>
        <ul className="list-none p-0">
          {resumeData.languages.map((lang, index) => (
            <li key={index} className="mb-2">
              <h3
                contentEditable="true"
                className="font-semibold"
                onBlur={(e) => handleBlur("languages", index, "language", e)}
              >
                {lang.language}
              </h3>
              <p
                contentEditable="true"
                onBlur={(e) => handleBlur("languages", index, "level", e)}
              >
                {lang.level}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="references mb-5 p-5 border border-gray-300 bg-gray-100">
        <h2 className="text-3xl font-bold">References</h2>
        <ul className="list-none p-0">
          {resumeData.references.map((ref, index) => (
            <li key={index} className="mb-2">
              <h3
                contentEditable="true"
                className="font-semibold"
                onBlur={(e) => handleBlur("references", index, "name", e)}
              >
                {ref.name}
              </h3>
              <p
                contentEditable="true"
                onBlur={(e) => handleBlur("references", index, "contact", e)}
              >
                {ref.contact}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {visibilityButton && (
        <div className="flex space-x-4">
          <button
            className="download-button bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleDownloadPDF}
          >
            Download as PDF
          </button>
          <button
            className="download-button bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handleDownloadPNG}
          >
            Download as PNG
          </button>
        </div>
      )}
    </div>
  );
};

export default Template_2;
