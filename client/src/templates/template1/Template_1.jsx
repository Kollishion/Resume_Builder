import { useState } from "react";

const Template_1 = () => {
  const [aboutMe, setAboutMe] = useState(
    "Enthusiastic web developer and designer with a passion for creating dynamic and user-friendly websites. Skilled in HTML, CSS, JavaScript, and various front-end frameworks. Committed to delivering high-quality work with a strong attention to detail."
  );
  const [education, setEducation] = useState([
    {
      degree: "Bachelor of Science in Computer Science",
      university: "University of Example",
    },
  ]);
  const [workExperience, setWorkExperience] = useState([
    {
      jobTitle: "Front-End Developer",
      company: "Tech Company A",
      description: "Worked on developing user interfaces and web applications.",
    },
    {
      jobTitle: "Web Designer",
      company: "Design Studio B",
      description: "Focused on creating responsive and aesthetic web designs.",
    },
  ]);
  const [references, setReferences] = useState([
    { name: "Alice Smith", position: "Senior Developer, Tech Company A" },
    { name: "Bob Johnson", position: "Creative Director, Design Studio B" },
  ]);
  const [softwareSkills, setSoftwareSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Adobe Creative Suite",
  ]);
  const [contactInfo, setContactInfo] = useState({
    email: "johndoe@example.com",
    portfolio: "#",
    address: "123 Main St, City, Country",
    phone: "+123 456 7890",
  });

  const handleEdit = (section, value) => {
    switch (section) {
      case "aboutMe":
        setAboutMe(value);
        break;
      case "education":
        setEducation(value);
        break;
      case "workExperience":
        setWorkExperience(value);
        break;
      case "references":
        setReferences(value);
        break;
      case "softwareSkills":
        setSoftwareSkills(value);
        break;
      case "contactInfo":
        setContactInfo(value);
        break;
      default:
        break;
    }
  };

  const handleDownload = () => {
    const resumeText = `
    About Me:
    ${aboutMe}

    Education:
    ${education
      .map((edu, index) => `${index + 1}. ${edu.degree}, ${edu.university}`)
      .join("\n")}

    Work Experience:
    ${workExperience
      .map(
        (job, index) =>
          `${index + 1}. ${job.jobTitle}, ${job.company} - ${job.description}`
      )
      .join("\n")}

    References:
    ${references
      .map((ref, index) => `${index + 1}. ${ref.name}, ${ref.position}`)
      .join("\n")}

    Software Skills:
    ${softwareSkills.join(", ")}

    Contact Info:
    Email: ${contactInfo.email}
    Portfolio: ${contactInfo.portfolio}
    Address: ${contactInfo.address}
    Phone: ${contactInfo.phone}
    `;

    const blob = new Blob([resumeText], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.txt";
    link.click();
  };
  return (
    <div className="resume">
      <header>
        <h1
          contentEditable="true"
          onBlur={(e) => handleEdit("headerTitle", e.target.innerText)}
        >
          John Doe
        </h1>
        <p
          contentEditable="true"
          onBlur={(e) => handleEdit("headerSubtitle", e.target.innerText)}
        >
          Web Developer & Designer
        </p>
      </header>
      <main>
        <section id="about-me">
          <h2
            contentEditable="true"
            onBlur={(e) => handleEdit("aboutMe", e.target.innerText)}
          >
            About Me
          </h2>
          <p
            contentEditable="true"
            onBlur={(e) => handleEdit("aboutMe", e.target.innerText)}
          >
            {aboutMe}
          </p>
        </section>
        <section id="education">
          <h2
            contentEditable="true"
            onBlur={(e) => handleEdit("education", e.target.innerText)}
          >
            Education
          </h2>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                <h3
                  contentEditable="true"
                  onBlur={(e) =>
                    handleEdit(
                      "education",
                      education.map((edu, idx) =>
                        idx === index
                          ? { ...edu, degree: e.target.innerText }
                          : edu
                      )
                    )
                  }
                >
                  {edu.degree}
                </h3>
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleEdit(
                      "education",
                      education.map((edu, idx) =>
                        idx === index
                          ? { ...edu, university: e.target.innerText }
                          : edu
                      )
                    )
                  }
                >
                  {edu.university}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section id="work-experience">
          <h2
            contentEditable="true"
            onBlur={(e) => handleEdit("workExperience", e.target.innerText)}
          >
            Work Experience
          </h2>
          <ul>
            {workExperience.map((job, index) => (
              <li key={index}>
                <h3
                  contentEditable="true"
                  onBlur={(e) =>
                    handleEdit(
                      "workExperience",
                      workExperience.map((job, idx) =>
                        idx === index
                          ? { ...job, jobTitle: e.target.innerText }
                          : job
                      )
                    )
                  }
                >
                  {job.jobTitle}
                </h3>
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleEdit(
                      "workExperience",
                      workExperience.map((job, idx) =>
                        idx === index
                          ? { ...job, company: e.target.innerText }
                          : job
                      )
                    )
                  }
                >
                  {job.company}
                </p>
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleEdit(
                      "workExperience",
                      workExperience.map((job, idx) =>
                        idx === index
                          ? { ...job, description: e.target.innerText }
                          : job
                      )
                    )
                  }
                >
                  {job.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section id="references">
          <h2
            contentEditable="true"
            onBlur={(e) => handleEdit("references", e.target.innerText)}
          >
            References
          </h2>
          <ul>
            {references.map((ref, index) => (
              <li key={index}>
                <h3
                  contentEditable="true"
                  onBlur={(e) =>
                    handleEdit(
                      "references",
                      references.map((ref, idx) =>
                        idx === index
                          ? { ...ref, name: e.target.innerText }
                          : ref
                      )
                    )
                  }
                >
                  {ref.name}
                </h3>
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleEdit(
                      "references",
                      references.map((ref, idx) =>
                        idx === index
                          ? { ...ref, position: e.target.innerText }
                          : ref
                      )
                    )
                  }
                >
                  {ref.position}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section id="software-skills">
          <h2
            contentEditable="true"
            onBlur={(e) => handleEdit("softwareSkills", e.target.innerText)}
          >
            Software Skills
          </h2>
          <ul>
            {softwareSkills.map((skill, index) => (
              <li key={index}>
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleEdit(
                      "softwareSkills",
                      softwareSkills.map((skill, idx) =>
                        idx === index ? e.target.innerText : skill
                      )
                    )
                  }
                >
                  {skill}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section id="contact-info">
          <h2
            contentEditable="true"
            onBlur={(e) => handleEdit("contactInfo", e.target.innerText)}
          >
            Contact Info
          </h2>
          <ul>
            <li>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <a href={contactInfo.portfolio} target="_blank">
                Portfolio
              </a>
            </li>
            <li
              contentEditable="true"
              onBlur={(e) =>
                handleEdit("contactInfo", {
                  ...contactInfo,
                  address: e.target.innerText,
                })
              }
            >
              {contactInfo.address}
            </li>
            <li
              contentEditable="true"
              onBlur={(e) =>
                handleEdit("contactInfo", {
                  ...contactInfo,
                  phone: e.target.innerText,
                })
              }
            >
              {contactInfo.phone}
            </li>
          </ul>
        </section>
        <button onClick={handleDownload}>Download Resume</button>
      </main>
    </div>
  );
};

export default Template_1;
