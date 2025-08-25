import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="lg:px-[80px] xl:px-[220px]">
      <div className="bg-[#1a1a1a] p-6 lg:mt-[120px] text-[#888] space-y-5 rounded-[10px]">
        
        {/* ---------------- Privacy Policy ---------------- */}
        <div className="space-y-5">
          {/* Title */}
          <li className="list-none font-semibold text-lg mt-[90px] lg:mt-0">
            Privacy Policy
          </li>

          {/* Effective Date */}
          <li className="list-none font-semibold text-base">
            Effective Date: <span>11/11/2024</span>
          </li>

          {/* Section 1 */}
          <li className="list-none text-base">
            At <span className="text-[#5b7c99]">Vibexio.ai</span>, we respect your
            privacy and are committed to safeguarding your personal,
            organizational, and transactional data. This Privacy Policy explains
            how we collect, use, share, and protect information when you interact
            with our AI-powered products, services, and platforms — whether as an
            individual (B2C) or business client (B2B). By using our website or
            services, you consent to the practices described here.
          </li>

          {/* Section 2 */}
          <li className="list-none text-base">
            We may collect personal details (such as your name, email, phone
            number, and login credentials), organizational data (like business
            type and size), usage information (including logs, device details, and
            AI interaction data), and financial records (processed securely
            through third-party providers). This information helps us provide and
            improve our services, personalize user experiences, manage B2B
            service-level agreements, and comply with legal and regulatory
            obligations.
          </li>

          {/* Section 3 */}
          <li className="list-none text-base">
            Your data may be shared only with trusted third-party service
            providers (such as cloud platforms, payment processors, and analytics
            tools), or when legally required. We never sell your data.
            International transfers are safeguarded through encryption, strict
            contracts, and compliance with global standards including GDPR and
            HIPAA. You also have clear rights — to access, correct, delete, or
            restrict the use of your data, as well as to withdraw consent or lodge
            a complaint with relevant authorities.
          </li>

          {/* Section 4 */}
          <li className="list-none text-base">
            We use cookies and tracking tools to enhance performance, improve
            content relevance, and analyze site usage. You may disable cookies in
            your browser, though some features may be limited. Our services are
            designed for users aged 18+, and we do not knowingly collect
            children’s data without verified parental consent. From time to time,
            we may update this Privacy Policy, with significant changes
            communicated via email or notice on our website. For questions or
            requests, please reach our Data Protection Officer at{" "}
            <span className="text-[#5b7c99]">info@vibexio.ai</span>.
          </li>
        </div>

        {/* ---------------- Terms & Conditions ---------------- */}
        <div className="space-y-5">
          {/* Title */}
          <li className="list-none font-semibold text-lg">
            Terms & Conditions
          </li>

          {/* Section 1 */}
          <li className="list-none text-base">
            Welcome to <span className="text-[#5b7c99]"> VibeXio</span>. By
            accessing or using our website and associated applications (the
            “Site”), you agree to comply with these Terms & Conditions. VibeXio
            may modify or update these Terms at any time, and continued use of
            the Site will be deemed acceptance of such changes.
          </li>

          {/* Section 2 */}
          <li className="list-none text-base">
            Users are responsible for maintaining the confidentiality of login
            credentials provided for restricted sections. Unauthorized use,
            sharing of access, or misuse of the Site may result in suspension or
            termination. While we aim to ensure reliability, the Site and its
            contents are provided on an “as is” and “as available” basis, without
            warranties of accuracy, uninterrupted service, merchantability, or
            fitness for a particular purpose. VibeXio will not be liable for
            losses arising from use of, or inability to use, the Site.
          </li>

          {/* Section 3 */}
          <li className="list-none text-base">
            The Site may contain third-party links or content; VibeXio does not
            endorse nor accept responsibility for external information or
            services. Any unsolicited ideas or submissions made outside of an
            established business relationship will not be considered confidential
            and may be freely used by VibeXio. Users agree to indemnify VibeXio
            against any claims, liabilities, or damages arising from their misuse
            of the Site or violation of these Terms.
          </li>

          {/* Section 4 */}
          <li className="list-none text-base">
            We strive to provide accurate and timely information, but cannot
            guarantee completeness at all times. For details on how your personal
            data is collected, used, and safeguarded, please refer to our{" "}
            <span className="text-[#5b7c99]">Privacy Policy</span>. By continuing
            to use our Site, you acknowledge and accept these Terms & Conditions
            in full.
          </li>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;