import { useState } from "react";

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
          "Some Responsibilites",
          "Some Responsibilites",
          "Some Responsibilites",
        ],
      },
      {
        role: "Role, Company, Location",
        duration: "00/0000-00/0000",
        responsibilities: [
          "Some Responsibilites",
          "Some Responsibilites",
          "Some Responsibilites",
          "Some Responsibilites",
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
        school: " University ",
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

  const handleChange = (section, index, field, value) => {
    const updatedResumeData = { ...resumeData };

    switch (section) {
      case "experience":
        updatedResumeData.experience[index][field] = value;
        break;
      case "education":
        updatedResumeData.education[index][field] = value;
        break;
      case "references":
        updatedResumeData.references[index][field] = value;
        break;
      default:
        updatedResumeData[field] = value;
        break;
    }

    setResumeData(updatedResumeData);
  };

  const downloadResume = () => {
    const resumeHTML = `
      <html>
        <head>
          <title>${resumeData.name}'s Resume</title>
          <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${resumeData.name}</h1>
              <p>${resumeData.title}</p>
            </div>
            <div class="summary">
              <h2>Professional Summary</h2>
              <p>${resumeData.summary}</p>
            </div>
            <div class="experience">
              <h2>Work Experience</h2>
              <ul>
                ${resumeData.experience
                  .map(
                    (exp) => `
                  <li>
                    <h3>${exp.role}</h3>
                    <p>${exp.duration}</p>
                    <ul>
                      ${exp.responsibilities
                        .map((resp) => `<li>${resp}</li>`)
                        .join("")}
                    </ul>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div class="education">
              <h2>Education</h2>
              <ul>
                ${resumeData.education
                  .map(
                    (edu) => `
                  <li>
                    <h3>${edu.school}</h3>
                    <p>${edu.years}</p>
                    <p>${edu.degree}</p>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div class="skills">
              <h2>Additional Skills</h2>
              <ul>
                ${resumeData.skills
                  .map((skill) => `<li>${skill}</li>`)
                  .join("")}
              </ul>
            </div>
            <div class="languages">
              <h2>Languages</h2>
              <ul>
                ${resumeData.languages
                  .map(
                    (lang) => `
                  <li>
                    <h3>${lang.language}</h3>
                    <p>${lang.level}</p>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>
            <div class="references">
              <h2>References</h2>
              <ul>
                ${resumeData.references
                  .map(
                    (ref) => `
                  <li>
                    <h3>${ref.name}</h3>
                    <p>${ref.contact}</p>
                  </li>`
                  )
                  .join("")}
              </ul>
            </div>
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([resumeHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resumeData.name}_Resume.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <div className="header">
        <h1
          contentEditable="true"
          onBlur={(e) =>
            handleChange("header", null, "name", e.target.textContent)
          }
        >
          {resumeData.name}
        </h1>
        <p
          contentEditable="true"
          onBlur={(e) =>
            handleChange("header", null, "title", e.target.textContent)
          }
        >
          {resumeData.title}
        </p>
      </div>
      <div className="summary">
        <h2
          contentEditable="true"
          onBlur={(e) =>
            handleChange("summary", null, "summary", e.target.textContent)
          }
        >
          Professional Summary
        </h2>
        <p
          contentEditable="true"
          onBlur={(e) =>
            handleChange("summary", null, "summary", e.target.textContent)
          }
        >
          {resumeData.summary}
        </p>
      </div>
      <div className="experience">
        <h2>Work Experience</h2>
        <ul>
          {resumeData.experience.map((exp, index) => (
            <li key={index}>
              <h3
                contentEditable="true"
                onBlur={(e) =>
                  handleChange(
                    "experience",
                    index,
                    "role",
                    e.target.textContent
                  )
                }
              >
                {exp.role}
              </h3>
              <p
                contentEditable="true"
                onBlur={(e) =>
                  handleChange(
                    "experience",
                    index,
                    "duration",
                    e.target.textContent
                  )
                }
              >
                {exp.duration}
              </p>
              <ul>
                {exp.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    contentEditable="true"
                    onBlur={(e) => {
                      const updatedResponsibilities = [
                        ...resumeData.experience[index].responsibilities,
                      ];
                      updatedResponsibilities[i] = e.target.textContent;
                      handleChange(
                        "experience",
                        index,
                        "responsibilities",
                        updatedResponsibilities
                      );
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
      <div className="education">
        <h2>Education</h2>
        <ul>
          {resumeData.education.map((edu, index) => (
            <li key={index}>
              <h3
                contentEditable="true"
                onBlur={(e) =>
                  handleChange(
                    "education",
                    index,
                    "school",
                    e.target.textContent
                  )
                }
              >
                {edu.school}
              </h3>
              <p
                contentEditable="true"
                onBlur={(e) =>
                  handleChange(
                    "education",
                    index,
                    "years",
                    e.target.text_content
                  )
                }
              >
                {edu.years}
              </p>
              <p
                contentEditable="true"
                onBlur={(e) =>
                  handleChange(
                    "education",
                    index,
                    "degree",
                    e.target.text_content
                  )
                }
              >
                {edu.degree}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="skills">
        <h2>Additional Skills</h2>
        <ul>
          {resumeData.skills.map((skill, index) => (
            <li key={index}>
              <div
                contentEditable="true"
                onBlur={(e) =>
                  handleChange("skills", null, "skills", e.target.text_content)
                }
              >
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="languages">
        <h2>Languages</h2>
        <ul>
          {resumeData.languages.map((lang, index) => (
            <li key={index}>
              <h3
                contentEditable="true"
                onBlur={(e) =>
                  handleChange(
                    "languages",
                    index,
                    "language",
                    e.target.text_content
                  )
                }
              >
                {lang.language}
              </h3>
              <p
                contentEditable="true"
                onBlur={(e) =>
                  handleChange(
                    "languages",
                    index,
                    "level",
                    e.target.text_content
                  )
                }
              >
                {lang.level}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="references">
        <h2>References</h2>
        <ul>
          {resumeData.references.map((ref, index) => (
            <li key={index}>
              <h3
                contentEditable="true"
                onBlur={(e) =>
                  handleChange(
                    "references",
                    index,
                    "name",
                    e.target.text_content
                  )
                }
              >
                {ref.name}
              </h3>
              <p
                contentEditable="true"
                onBlur={(e) =>
                  handleChange(
                    "references",
                    index,
                    "contact",
                    e.target.text_content
                  )
                }
              >
                {ref.contact}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button className="download-button" onClick={downloadResume}>
        Download Resume
      </button>
    </div>
  );
};

export default Template_2;
