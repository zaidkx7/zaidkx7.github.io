import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const UniBlitzPrivacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="mt-12 text-4xl font-bold text-center mb-5">UniBlitz Privacy Policy</h1>
        <p className="text-lg text-center text-muted-foreground mb-12">Effective Date: May 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="text-foreground/80 leading-relaxed">
            UniBlitz is a Chrome extension designed to enhance your university experience by automating 
            evaluation forms and providing quick access to result pages. Our tool aims to streamline 
            these processes while maintaining the highest standards of privacy and security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Permissions</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            UniBlitz requires the following permissions to function:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80">
            <li>Scripting permissions to automate form interactions</li>
            <li>Access to form elements for automated form filling</li>
            <li>Tab and host access to navigate between university pages</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Usage</h2>
          <p className="text-foreground/80 leading-relaxed">
            We take your privacy seriously. UniBlitz does not collect, store, or share any personal data. 
            All operations are performed locally within your browser, and no information is transmitted 
            to external servers.
          </p>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-foreground/80">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a 
              href="mailto:zaidkx37@gmail.com" 
              className="text-primary hover:underline"
            >
              zaidkx37@gmail.com
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UniBlitzPrivacy; 