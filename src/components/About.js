import VSK from "./profile";
export default function About() {
  return (
    <>
      <div className="container" >
        <h2 className="my-3">
          <strong>About Us</strong>
        </h2>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-3">
              <VSK />
              <h5 className="card-title mt-3">Developed by Saikiran Vodela</h5>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">About iNoteBookbyVSK</h5>
                <p style={{ fontSize: "13xpx" }}>
                iNoteBookbyVSK is a versatile tool designed to streamline the way you manage and secure your notes. Whether for personal reflection or professional documentation, iNoteBookbyVSK allows you to write and organize notes effortlessly. One of its key features is the ability to store your notes securely in the cloud. This ensures that your data is not only safe but also accessible from any device, anywhere in the world.

With iNoteBookbyVSK, you can easily edit or delete your notes as needed, providing you with the flexibility to keep your information up-to-date and relevant. Additionally, the platform supports tagging, enabling you to categorize your notes with relevant labels for easier retrieval and organization.

Privacy and security are paramount in iNoteBookbyVSK. The system employs a robust set of credentials and security measures, built using the MERN stack—MongoDB, Express.js, React.js, and Node.js. This combination of technologies ensures that your notes are not only well-protected but also managed efficiently. The MERN stack provides a comprehensive framework for maintaining secure user authentication and data protection, giving you peace of mind as you manage your notes.

In summary, iNoteBookbyVSK offers a seamless experience for writing, organizing, and securing notes, backed by modern technology to ensure your information is always protected and easily accessible.
                </p>
                <p>Thank you for visiting iNoteBookbyVSK.</p>

                <div class="row">
                  <div class="col-auto my-1">
                    <a
                      href="https://www.linkedin.com/in/sai-kiran-vodela-12713a213/"
                      target={"_blank"}
                      className="btn btn-primary"
                    >
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </div>
                  <div class="col-auto my-1">
                    <a
                      href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftMStJmZZwPMPKvDVmvDmGNSndSjKbdcLjMvSGbFFWlWptnxBgLsCKXcTZDKnplxZSgKL"
                      className="btn btn-danger"
                    >
                      <i className="fas fa-envelope"></i> Gmail
                    </a>
                  </div>
                  <div class="col-auto my-1">
                    <a
                      href="https://github.com/kiranvodela"
                      target={"_blank"}
                      className="btn btn-dark"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
