import type { Metadata } from "next";
import { buildSEO } from "@/lib/seo";
import { LegalShell } from "@/components/layout/LegalShell";

export const metadata: Metadata = buildSEO({
  title: "Terms of Use",
  description:
    "The terms and conditions governing your use of the LectureHead online course platform.",
  path: "/terms",
  noindex: true,
});

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" lastUpdated="June 27, 2026">
      <p>
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of
        the LectureHead website and online course platform (the
        &ldquo;Service&rdquo;) provided by LectureHead (&ldquo;LectureHead,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or
        using the Service, you agree to be bound by these Terms. If you do not
        agree, do not use the Service.
      </p>

      <h2>1. Eligibility &amp; Accounts</h2>
      <p>
        You must be at least 18 years old and able to enter into a binding
        contract to use the Service. You are responsible for the information you
        provide, for maintaining the confidentiality of your account
        credentials, and for all activity that occurs under your account. Notify
        us immediately of any unauthorised use.
      </p>

      <h2>2. The Service</h2>
      <p>
        LectureHead provides tools for creators, coaches, and educators to host,
        sell, and deliver online courses, cohorts, live classes, community, and
        related features. We may add, modify, or discontinue features from time
        to time.
      </p>

      <h2>3. Subscriptions &amp; Payments</h2>
      <ul>
        <li>
          Paid plans are billed in advance on the cycle (monthly or annual) shown
          at checkout. All fees are stated in Indian Rupees (INR) unless
          otherwise specified.
        </li>
        <li>
          Unless stated otherwise, subscriptions renew automatically until
          cancelled. You may cancel at any time; cancellation takes effect at the
          end of the current billing period.
        </li>
        <li>
          Except where required by law, fees already paid are non-refundable.
        </li>
        <li>
          We may change our pricing on prospective notice. Continued use after a
          price change takes effect constitutes acceptance.
        </li>
      </ul>

      <h2>4. Your Content</h2>
      <p>
        You retain ownership of the courses, media, and other content you upload
        (&ldquo;Your Content&rdquo;). You grant us a limited licence to host,
        store, process, and display Your Content solely to operate and provide
        the Service. You represent that you have all rights necessary to upload
        Your Content and that it does not infringe the rights of others.
      </p>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful, infringing, or fraudulent purpose.</li>
        <li>
          Upload content that is illegal, harmful, abusive, or violates
          intellectual property or privacy rights.
        </li>
        <li>
          Attempt to gain unauthorised access to the Service, disrupt it, or
          circumvent its security or usage limits.
        </li>
        <li>Resell or sublicense the Service without our written permission.</li>
      </ul>
      <p>
        We may suspend or terminate accounts that violate these Terms.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        The Service, including its software, design, and trademarks, is owned by
        LectureHead and protected by applicable laws. These Terms do not grant
        you any rights to our intellectual property except the limited right to
        use the Service as permitted here.
      </p>

      <h2>7. Third-Party Services</h2>
      <p>
        The Service may integrate with third-party tools (such as payment
        processors). Your use of those services is governed by their own terms,
        and we are not responsible for them.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis without warranties of any kind, whether express or
        implied. We do not warrant that the Service will be uninterrupted,
        error-free, or secure.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, LectureHead will not be liable
        for any indirect, incidental, special, or consequential damages, or for
        loss of profits, revenue, data, or goodwill, arising from your use of the
        Service. Our total liability for any claim will not exceed the amount you
        paid us in the twelve months preceding the claim.
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate
        your access if you breach these Terms or if necessary to protect the
        Service or other users. Upon termination, your right to use the Service
        ceases immediately.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India, and you agree to the
        exclusive jurisdiction of the courts located in India for any disputes
        arising from these Terms or the Service.
      </p>

      <h2>12. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the &ldquo;Last updated&rdquo; date above. Continued use of the Service
        after changes take effect constitutes acceptance of the updated Terms.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        Questions about these Terms? Contact us at{" "}
        <a href="mailto:support@lecturehead.com">support@lecturehead.com</a>.
      </p>
    </LegalShell>
  );
}
