import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

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
  const [visibilityButton, setVisibilityButton] = useState(true);

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

  const handleBlur = (e, section, key, index = null) => {
    const updatedValue = e.target.innerText;
    if (index !== null) {
      handleEdit(
        section,
        key.map((item, idx) => (idx === index ? updatedValue : item))
      );
    } else if (typeof key === "string") {
      handleEdit(section, { ...contactInfo, [key]: updatedValue });
    } else {
      handleEdit(section, updatedValue);
    }
  };

  const handleDownloadPDF = () => {
    setVisibilityButton(false);
    setTimeout(() => {
      const resumeElement = document.querySelector(".resume");
      if (resumeElement) {
        html2canvas(resumeElement).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const imgWidth = 210; // A4 width in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
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
      const resumeElement = document.querySelector(".resume");
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
      }
    }, 0);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-5 bg-white border border-gray-300 shadow-md font-sans resume">
      <header className="text-center">
        <h1
          contentEditable="true"
          onBlur={(e) => handleBlur(e, "headerTitle", aboutMe)}
          className="text-2xl text-blue-600"
        >
          John Doe
        </h1>
        <p
          contentEditable="true"
          onBlur={(e) =>
            handleBlur(e, "headerSubtitle", "Web Developer & Designer")
          }
          className="text-gray-600"
        >
          Web Developer & Designer
        </p>
      </header>
      <main className="mt-5">
        <section id="about-me" className="mb-5">
          <h2
            contentEditable="true"
            onBlur={(e) => handleBlur(e, "aboutMe", aboutMe)}
            className="text-xl text-blue-600"
          >
            About Me
          </h2>
          <p
            contentEditable="true"
            onBlur={(e) => handleBlur(e, "aboutMe", aboutMe)}
          >
            {aboutMe}
          </p>
        </section>
        <section id="education" className="mb-5">
          <h2
            contentEditable="true"
            onBlur={(e) => handleBlur(e, "education", education)}
            className="text-xl text-blue-600"
          >
            Education
          </h2>
          <ul className="list-none p-0 m-0">
            {education.map((edu, index) => (
              <li key={index} className="mb-2">
                <h3
                  contentEditable="true"
                  onBlur={(e) =>
                    handleBlur(
                      e,
                      "education",
                      education.map((item, idx) =>
                        idx === index
                          ? { ...item, degree: e.target.innerText }
                          : item
                      )
                    )
                  }
                  className="text-lg text-blue-600"
                >
                  {edu.degree}
                </h3>
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleBlur(
                      e,
                      "education",
                      education.map((item, idx) =>
                        idx === index
                          ? { ...item, university: e.target.innerText }
                          : item
                      )
                    )
                  }
                  className="text-gray-600"
                >
                  {edu.university}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section id="work-experience" className="mb-5">
          <h2
            contentEditable="true"
            onBlur={(e) => handleBlur(e, "workExperience", workExperience)}
            className="text-xl text-blue-600"
          >
            Work Experience
          </h2>
          <ul className="list-none p-0 m-0">
            {workExperience.map((job, index) => (
              <li key={index} className="mb-2">
                <h3
                  contentEditable="true"
                  onBlur={(e) =>
                    handleBlur(
                      e,
                      "workExperience",
                      workExperience.map((item, idx) =>
                        idx === index
                          ? { ...item, jobTitle: e.target.innerText }
                          : item
                      )
                    )
                  }
                  className="text-lg text-blue-600"
                >
                  {job.jobTitle}
                </h3>
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleBlur(
                      e,
                      "workExperience",
                      workExperience.map((item, idx) =>
                        idx === index
                          ? { ...item, company: e.target.innerText }
                          : item
                      )
                    )
                  }
                  className="text-gray-600"
                >
                  {job.company}
                </p>
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleBlur(
                      e,
                      "workExperience",
                      workExperience.map((item, idx) =>
                        idx === index
                          ? { ...item, description: e.target.innerText }
                          : item
                      )
                    )
                  }
                  className="text-gray-600"
                >
                  {job.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section id="references" className="mb-5">
          <h2
            contentEditable="true"
            onBlur={(e) => handleBlur(e, "references", references)}
            className="text-xl text-blue-600"
          >
            References
          </h2>
          <ul className="list-none p-0 m-0">
            {references.map((ref, index) => (
              <li key={index} className="mb-2">
                <h3
                  contentEditable="true"
                  onBlur={(e) =>
                    handleBlur(
                      e,
                      "references",
                      references.map((item, idx) =>
                        idx === index
                          ? { ...item, name: e.target.innerText }
                          : item
                      )
                    )
                  }
                  className="text-lg text-blue-600"
                >
                  {ref.name}
                </h3>
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleBlur(
                      e,
                      "references",
                      references.map((item, idx) =>
                        idx === index
                          ? { ...item, position: e.target.innerText }
                          : item
                      )
                    )
                  }
                  className="text-gray-600"
                >
                  {ref.position}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section id="software-skills" className="mb-5">
          <h2
            contentEditable="true"
            onBlur={(e) => handleBlur(e, "softwareSkills", softwareSkills)}
            className="text-xl text-blue-600"
          >
            Software Skills
          </h2>
          <ul className="list-none p-0 m-0">
            {softwareSkills.map((skill, index) => (
              <li key={index} className="mb-2">
                <p
                  contentEditable="true"
                  onBlur={(e) =>
                    handleBlur(
                      e,
                      "softwareSkills",
                      softwareSkills.map((item, idx) =>
                        idx === index ? e.target.innerText : item
                      )
                    )
                  }
                  className="text-gray-600"
                >
                  {skill}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section id="contact-info" className="mb-5">
          <h2
            contentEditable="true"
            onBlur={(e) => handleBlur(e, "contactInfo", contactInfo)}
            className="text-xl text-blue-600"
          >
            Contact Info
          </h2>
          <ul className="list-none p-0 m-0">
            <li>
              <a href={`mailto:${contactInfo.email}`} className="text-blue-500">
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a href={contactInfo.portfolio} className="text-blue-500">
                {contactInfo.portfolio}
              </a>
            </li>
            <li>
              <p
                contentEditable="true"
                onBlur={(e) =>
                  handleBlur(e, "contactInfo", contactInfo, "address")
                }
                className="text-gray-600"
              >
                {contactInfo.address}
              </p>
            </li>
            <li>
              <p
                contentEditable="true"
                onBlur={(e) =>
                  handleBlur(e, "contactInfo", contactInfo, "phone")
                }
                className="text-gray-600"
              >
                {contactInfo.phone}
              </p>
            </li>
          </ul>
        </section>
      </main>
      {visibilityButton && (
        <div className="">
          <button
            onClick={handleDownloadPDF}
            className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
          >
            Download as PDF
          </button>
          <button
            onClick={handleDownloadPNG}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Download as PNG
          </button>
        </div>
      )}
    </div>
  );
};

export default Template_1;
