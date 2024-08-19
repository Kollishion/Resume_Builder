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

  const handleInput = (e, section, key = null, index = null) => {
    const updatedValue = e.target.innerText;
    if (index !== null) {
      setWorkExperience((prevWorkExperience) =>
        prevWorkExperience.map((item, idx) =>
          idx === index ? { ...item, [key]: updatedValue } : item
        )
      );
    } else if (key) {
      setContactInfo((prevContactInfo) => ({
        ...prevContactInfo,
        [key]: updatedValue,
      }));
    } else {
      switch (section) {
        case "aboutMe":
          setAboutMe(updatedValue);
          break;
        case "education":
          setEducation((prevEducation) =>
            prevEducation.map((item, idx) =>
              idx === index ? { ...item, degree: updatedValue } : item
            )
          );
          break;
        case "references":
          setReferences((prevReferences) =>
            prevReferences.map((item, idx) =>
              idx === index ? { ...item, name: updatedValue } : item
            )
          );
          break;
        case "softwareSkills":
          setSoftwareSkills(updatedValue.split(","));
          break;
        default:
          break;
      }
    }
  };

  const handleDownloadPDF = () => {
    const buttons = document.querySelector(".resume-buttons");
    buttons.style.display = "none";
    const resumeElement = document.querySelector(".resume");
    if (resumeElement) {
      html2canvas(resumeElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("resume.pdf");
        buttons.style.display = "block"; // Show buttons after download
      });
    } else {
      console.error("Resume element not found!");
    }
  };

  const handleDownloadPNG = () => {
    const buttons = document.querySelector(".resume-buttons");
    buttons.style.display = "none";
    const resumeElement = document.querySelector(".resume");
    if (resumeElement) {
      html2canvas(resumeElement).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imgData;
        link.download = "resume.png";
        link.click();
        buttons.style.display = "block"; // Show buttons after download
      });
    } else {
      console.error("Resume element not found!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-5 bg-white border border-gray-300 shadow-md font-sans resume">
      <header className="text-center">
        <h1
          contentEditable="true"
          onInput={(e) => handleInput(e, "headerTitle")}
          className="text-2xl text-blue-600"
        >
          John Doe
        </h1>
        <p
          contentEditable="true"
          onInput={(e) =>
            handleInput(e, "headerSubtitle", "Web Developer & Designer")
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
            onInput={(e) => handleInput(e, "aboutMe")}
            className="text-xl text-blue-600"
          >
            About Me
          </h2>
          <p contentEditable="true" onInput={(e) => handleInput(e, "aboutMe")}>
            {aboutMe}
          </p>
        </section>
        <section id="education" className="mb-5">
          <h2
            contentEditable="true"
            onInput={(e) => handleInput(e, "education")}
            className="text-xl text-blue-600"
          >
            Education
          </h2>
          <ul className="list-none p-0 m-0">
            {education.map((edu, index) => (
              <li key={index} className="mb-2">
                <h3
                  contentEditable="true"
                  onInput={(e) => handleInput(e, "education", "degree", index)}
                  className="text-lg text-blue-600"
                >
                  {edu.degree}
                </h3>
                <p
                  contentEditable="true"
                  onInput={(e) =>
                    handleInput(e, "education", "university", index)
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
            onInput={(e) => handleInput(e, "workExperience")}
            className="text-xl text-blue-600"
          >
            Work Experience
          </h2>
          <ul className="list-none p-0 m-0">
            {workExperience.map((job, index) => (
              <li key={index} className="mb-2">
                <h3
                  contentEditable="true"
                  onInput={(e) =>
                    handleInput(e, "workExperience", "jobTitle", index)
                  }
                  className="text-lg text-blue-600"
                >
                  {job.jobTitle}
                </h3>
                <p
                  contentEditable="true"
                  onInput={(e) =>
                    handleInput(e, "workExperience", "company", index)
                  }
                  className="text-gray-600"
                >
                  {job.company}
                </p>
                <p
                  contentEditable="true"
                  onInput={(e) =>
                    handleInput(e, "workExperience", "description", index)
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
            onInput={(e) => handleInput(e, "references")}
            className="text-xl text-blue-600"
          >
            References
          </h2>
          <ul className="list-none p-0 m-0">
            {references.map((ref, index) => (
              <li key={index} className="mb-2">
                <p
                  contentEditable="true"
                  onInput={(e) => handleInput(e, "references", "name", index)}
                  className="text-gray-600"
                >
                  {ref.name}
                </p>
                <p
                  contentEditable="true"
                  onInput={(e) =>
                    handleInput(e, "references", "position", index)
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
            onInput={(e) => handleInput(e, "softwareSkills")}
            className="text-xl text-blue-600"
          >
            Software Skills
          </h2>
          <ul className="list-none p-0 m-0">
            {softwareSkills.map((skill, index) => (
              <li key={index} className="mb-2 text-gray-600">
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section id="contact-info" className="mb-5">
          <h2
            contentEditable="true"
            onInput={(e) => handleInput(e, "contactInfo")}
            className="text-xl text-blue-600"
          >
            Contact Info
          </h2>
          <p
            contentEditable="true"
            onInput={(e) => handleInput(e, "contactInfo", "email")}
            className="text-gray-600"
          >
            {contactInfo.email}
          </p>
          <p
            contentEditable="true"
            onInput={(e) => handleInput(e, "contactInfo", "portfolio")}
            className="text-gray-600"
          >
            {contactInfo.portfolio}
          </p>
          <p
            contentEditable="true"
            onInput={(e) => handleInput(e, "contactInfo", "address")}
            className="text-gray-600"
          >
            {contactInfo.address}
          </p>
          <p
            contentEditable="true"
            onInput={(e) => handleInput(e, "contactInfo", "phone")}
            className="text-gray-600"
          >
            {contactInfo.phone}
          </p>
        </section>
      </main>
      <div className="resume-buttons flex justify-center mt-5">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg mr-2"
        >
          Download PDF
        </button>
        <button
          onClick={handleDownloadPNG}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Download PNG
        </button>
      </div>
    </div>
  );
};

export default Template_1;
