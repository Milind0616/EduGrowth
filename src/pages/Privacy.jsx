import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

export default function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description="Privacy information for the Edu Growth Partners website." />
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section"><div className="container prose policy">
        <p>This website is designed to collect no personal information through cookies or the institutional health check.</p>
        <h2>Enquiry form</h2><p>The form asks for your name, institution name, email address, message and consent. It asks for this information only so an email enquiry can be prepared and sent by you through your own email application.</p>
        <h2>How email submission works</h2><p>Submitting the form sends the information securely to Web3Forms using your consent. Web3Forms then delivers the enquiry to the configured receiving email address. This website does not directly store submitted form responses.</p>
        <h2>Institutional health check</h2><p>The quiz runs locally in your browser. Your answers are held only in the current page state and are not sent to a server.</p>
        <h2>Cookies and tracking</h2><p>This website does not use tracking cookies or analytics.</p>
        <h2>Commercial use</h2><p>This policy must be reviewed and updated before the website is used commercially, including for a real contact address, data-retention practices and applicable Indian privacy requirements.</p>
      </div></section>
    </>
  )
}
