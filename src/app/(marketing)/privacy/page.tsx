import type { Metadata } from "next";
import { buildSEO } from "@/lib/seo";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = buildSEO({
  title: "Privacy Policy",
  description:
    "How LectureHead collects, uses, and protects the personal information of creators and their students.",
  path: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" lastUpdated="June 27, 2026">
      <p>
        This Privacy Policy explains how LectureHead (&ldquo;LectureHead,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses,
        shares, and protects your information when you use our website and our
        online course platform (collectively, the &ldquo;Service&rdquo;). By
        using the Service, you agree to the practices described here.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <h3>Information you provide</h3>
      <ul>
        <li>
          <strong>Account &amp; contact details</strong> — name, email address,
          phone number, and business information when you sign up, book a demo,
          or contact us.
        </li>
        <li>
          <strong>Payment information</strong> — billing details processed
          through our third-party payment providers. We do not store full card
          numbers on our servers.
        </li>
        <li>
          <strong>Content</strong> — courses, media, and other material you
          upload, and information about the students you enroll.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Usage &amp; device data</strong> — IP address, browser type,
          pages visited, and interactions with the Service.
        </li>
        <li>
          <strong>Cookies &amp; similar technologies</strong> — used to keep you
          signed in, remember preferences, and measure performance. See Section
          6.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To provide, operate, and improve the Service.</li>
        <li>To process payments and manage subscriptions.</li>
        <li>
          To respond to enquiries, schedule demos, and provide customer support.
        </li>
        <li>
          To send service updates and, where permitted, marketing
          communications you can opt out of at any time.
        </li>
        <li>To detect, prevent, and address fraud, abuse, or security issues.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>
        We do not sell your personal information. We share it only in these
        limited circumstances:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> — vendors who help us run the
          Service (e.g. hosting, analytics, payment processing, communication
          tools), bound by confidentiality obligations.
        </li>
        <li>
          <strong>Legal requirements</strong> — when required by law, regulation,
          or valid legal process.
        </li>
        <li>
          <strong>Business transfers</strong> — in connection with a merger,
          acquisition, or sale of assets.
        </li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain your information for as long as your account is active or as
        needed to provide the Service, and thereafter as required to comply with
        our legal obligations, resolve disputes, and enforce our agreements.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct,
        update, or delete your personal information, and to object to or restrict
        certain processing. To exercise these rights, contact us using the
        details in Section 9.
      </p>

      <h2>6. Cookies</h2>
      <p>
        We use cookies and similar technologies to operate the Service, remember
        your preferences, and understand usage. You can control cookies through
        your browser settings; disabling some cookies may affect functionality.
      </p>

      <h2>7. Data Security</h2>
      <p>
        We use reasonable technical and organisational measures to protect your
        information. However, no method of transmission or storage is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>8. Children&rsquo;s Privacy</h2>
      <p>
        The Service is intended for businesses and educators. It is not directed
        at children under 13, and we do not knowingly collect personal
        information from them. If you believe a child has provided us
        information, please contact us so we can remove it.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or your information,
        contact us at{" "}
        <a href="mailto:support@lecturehead.com">support@lecturehead.com</a>.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the &ldquo;Last updated&rdquo; date above. Continued use of the
        Service after changes take effect constitutes acceptance of the updated
        policy.
      </p>
    </LegalShell>
  );
}
