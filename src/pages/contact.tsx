import React from "react";
import Container from "../components/container";
import GlobalStyle from "../GlobalStyle";


const ContactPage = () => {
  return (
    <>
      <GlobalStyle />
      <div className="dark text-white" style={{ backgroundColor: "#191d23" }}>
        <Container className="dark:text-white">
            <div className="flex flex-col lg:flex-row">
              <h1>Get in contact</h1>
              <form>
                
              </form>
            </div>
        </Container>
      </div>
    </>
  );
}

export default ContactPage;