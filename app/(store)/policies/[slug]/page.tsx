import Link from "next/link";
import { notFound } from "next/navigation";

type PolicySection = {
  title: string;
  body: string[];
};

type Policy = {
  title: string;
  label: string;
  lastUpdated: string;
  intro: string;
  sections: PolicySection[];
};

const policies: Record<string, Policy> = {
  terms: {
    title: "Terms & Conditions",
    label: "Terms",
    lastUpdated: "22/06/2024",
    intro:
      "These Terms of Service explain the conditions that apply when you browse Mirayaa.in, place an order, or use any service provided by Mirayaa.",
    sections: [
      {
        title: "Overview",
        body: [
          "This website is operated by Mansi Srivastava, doing business as Mirayaa. Throughout the site, the terms \"we\", \"us\" and \"our\" refer to Mirayaa.",
          "By visiting our site and/or purchasing something from us, you engage in our Service and agree to be bound by these Terms of Service, including additional policies referenced on the site.",
          "These Terms apply to all users of the site, including browsers, vendors, customers, merchants, and contributors of content. Any new features or tools added to the store will also be subject to these Terms."
        ]
      },
      {
        title: "Online Store Terms",
        body: [
          "By agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence, or that you have consent from a guardian where required.",
          "You may not use our products for any illegal or unauthorized purpose, violate laws in your jurisdiction, or transmit viruses, worms, or destructive code. A breach of these Terms may result in immediate termination of service."
        ]
      },
      {
        title: "General Conditions",
        body: [
          "We reserve the right to refuse service to anyone for any reason at any time.",
          "Your content, excluding credit card information, may be transferred unencrypted over networks and adapted to technical requirements. Credit card information is always encrypted during transfer.",
          "You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without express written permission from us."
        ]
      },
      {
        title: "Accuracy, Completeness & Timeliness",
        body: [
          "We are not responsible if information made available on this site is inaccurate, incomplete, or not current. The material on this site is provided for general information only.",
          "Historical information may be provided for reference only. We may modify site contents at any time, but we have no obligation to update information on the site."
        ]
      },
      {
        title: "Modifications to Service & Prices",
        body: [
          "Prices for products are subject to change without notice.",
          "We reserve the right to modify or discontinue the Service, or any part of it, at any time without notice. We shall not be liable for any modification, price change, suspension, or discontinuance."
        ]
      },
      {
        title: "Products or Services",
        body: [
          "Certain products may be available exclusively online and may have limited quantities. They are subject to return or replacement only according to our Refund Policy.",
          "We make every effort to display product colors and images accurately, but we cannot guarantee that every screen will show colors exactly.",
          "We may limit product sales by person, region, or jurisdiction, limit quantities, change descriptions or pricing, and discontinue products at any time."
        ]
      },
      {
        title: "Billing & Account Information",
        body: [
          "We reserve the right to refuse, limit, or cancel any order. If we change or cancel an order, we may contact you through the email, billing address, or phone number provided at checkout.",
          "You agree to provide current, complete, and accurate purchase and account information, and to update your details so we can complete transactions and contact you when needed."
        ]
      },
      {
        title: "Optional Tools & Third-Party Links",
        body: [
          "We may provide access to third-party tools as is and as available, without warranties, representations, conditions, or endorsement. Your use of optional tools is entirely at your own risk.",
          "Third-party links may direct you to websites not affiliated with Mirayaa. We are not responsible for examining their content, accuracy, policies, products, or services."
        ]
      },
      {
        title: "User Comments & Submissions",
        body: [
          "If you send ideas, suggestions, proposals, plans, contest entries, or other materials, you agree that we may edit, copy, publish, distribute, translate, and otherwise use them without restriction.",
          "You agree that your comments will not violate third-party rights, contain unlawful or abusive material, include malware, or mislead us or others about their origin."
        ]
      },
      {
        title: "Personal Information",
        body: ["Your submission of personal information through the store is governed by our Privacy Policy."]
      },
      {
        title: "Errors, Inaccuracies & Omissions",
        body: [
          "Occasionally information on the site may contain typographical errors, inaccuracies, or omissions related to product descriptions, pricing, promotions, shipping charges, transit times, or availability.",
          "We reserve the right to correct errors, update information, or cancel orders if any information is inaccurate, including after you have submitted an order."
        ]
      },
      {
        title: "Prohibited Uses",
        body: [
          "You are prohibited from using the site for unlawful purposes, to violate regulations or rights, to harass or discriminate, to submit false information, to upload malicious code, to collect personal information, to spam or scrape, or to interfere with security features.",
          "We reserve the right to terminate your use of the Service for violating any prohibited uses."
        ]
      },
      {
        title: "Disclaimer & Limitation of Liability",
        body: [
          "We do not guarantee that your use of the Service will be uninterrupted, timely, secure, or error-free, or that results from the Service will be accurate or reliable.",
          "The Service and all products delivered through it are provided as is and as available, except as expressly stated by us.",
          "Mirayaa and its related parties shall not be liable for direct, indirect, incidental, punitive, special, or consequential damages arising from your use of the Service or products procured through it, to the maximum extent permitted by law."
        ]
      },
      {
        title: "Indemnification",
        body: [
          "You agree to indemnify, defend, and hold harmless Mirayaa and our related parties from any claim or demand arising from your breach of these Terms, documents incorporated by reference, or violation of law or third-party rights."
        ]
      },
      {
        title: "Severability, Termination & Entire Agreement",
        body: [
          "If any provision of these Terms is unlawful, void, or unenforceable, that provision shall be enforced to the fullest extent permitted and the remaining provisions shall remain valid.",
          "These Terms are effective unless terminated by you or us. Obligations and liabilities incurred before termination survive termination.",
          "These Terms and posted policies constitute the entire agreement between you and Mirayaa regarding use of the Service."
        ]
      },
      {
        title: "Governing Law & Changes",
        body: [
          "These Terms and any separate agreements through which we provide Services are governed by the laws of India.",
          "We reserve the right to update, change, or replace any part of these Terms by posting updates on our website. Continued use of the site after changes constitutes acceptance."
        ]
      },
      {
        title: "Contact Information",
        body: ["Questions about the Terms of Service should be sent to contactmirayaa@gmail.com.", "Mirayaa.in, Sector-C1, Lucknow."]
      }
    ]
  },
  privacy: {
    title: "Privacy Policy",
    label: "Privacy",
    lastUpdated: "22/06/2024",
    intro:
      "This Privacy Policy explains how Mirayaa collects, uses, and discloses personal information when you visit Mirayaa.in, use our services, make a purchase, or communicate with us.",
    sections: [
      {
        title: "Scope",
        body: [
          "Mansi Srivastava, doing business as Mirayaa, collects, uses, and discloses personal information when you visit, use our services, make a purchase from Mirayaa.in, or otherwise communicate with us.",
          "By using or accessing the Services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree, please do not use or access the Services."
        ]
      },
      {
        title: "Changes to This Privacy Policy",
        body: [
          "We may update this Privacy Policy from time to time to reflect changes to our practices or for operational, legal, or regulatory reasons. We will post the revised policy on the site and update the last updated date."
        ]
      },
      {
        title: "How We Collect & Use Information",
        body: [
          "We collect personal information from a variety of sources depending on how you interact with us.",
          "We may use information to communicate with you, provide the Services, comply with legal obligations, enforce terms, and protect the Services, our rights, and the rights of users or others."
        ]
      },
      {
        title: "Information You Provide",
        body: [
          "Information you submit may include basic contact details such as name, address, phone number, and email.",
          "Order information may include billing address, shipping address, payment confirmation, email address, and phone number.",
          "Account information may include username, password, and security questions. Shopping and support information may include viewed items, cart items, wishlist items, and details shared with customer support."
        ]
      },
      {
        title: "Cookies & Usage Data",
        body: [
          "We automatically collect certain information about your interaction with the Services, including device information, browser information, network connection, IP address, and site interaction details.",
          "We may use cookies, pixels, and similar technologies to power and improve the site, remember actions and preferences, run analytics, and understand user interaction.",
          "Most browsers accept cookies by default, but you can remove or reject cookies through browser controls. Removing or blocking cookies may affect your experience and site functionality."
        ]
      },
      {
        title: "Information from Third Parties",
        body: [
          "We may obtain information from vendors and service providers who collect information on our behalf, including companies that support our site and services, payment processors, and partners involved in fulfilment, analytics, or advertising.",
          "Any information obtained from third parties will be treated in accordance with this Privacy Policy. We are not responsible for the accuracy of information provided by third parties or for their policies and practices."
        ]
      },
      {
        title: "How We Use Personal Information",
        body: [
          "We use personal information to provide products and services, process payments, fulfil orders, send account or transaction notifications, manage accounts, arrange shipping, facilitate returns or exchanges, and enable reviews.",
          "We may use information for marketing and advertising, including promotional communications and tailored advertising.",
          "We may use information for security and fraud prevention, customer support, and service improvement."
        ]
      },
      {
        title: "How We Disclose Information",
        body: [
          "We may disclose personal information to vendors and third parties who perform services on our behalf, including IT management, payment processing, data analytics, customer support, cloud storage, fulfilment, and shipping.",
          "We may disclose information to business and marketing partners, when you direct us or consent, with affiliates, or in connection with legal obligations, business transactions, enforcement of terms, or protection of rights.",
          "We do not use or disclose sensitive personal information for the purpose of inferring characteristics about you."
        ]
      },
      {
        title: "Generated Content",
        body: [
          "If the Services allow you to post reviews or other user-generated content, content submitted to public areas may be public and accessible by anyone.",
          "We are not responsible for the privacy, security, accuracy, use, or misuse of information you make publicly available."
        ]
      },
      {
        title: "Third-Party Websites & Links",
        body: [
          "Our site may link to websites or platforms operated by third parties. You should review their privacy and security policies before sharing information with them.",
          "Our inclusion of a link does not by itself imply endorsement of the platform, its content, or its owners."
        ]
      },
      {
        title: "Children's Data",
        body: [
          "The Services are not intended to be used by children, and we do not knowingly collect personal information about children.",
          "If you are a parent or guardian of a child who has provided personal information, you may contact us to request deletion."
        ]
      },
      {
        title: "Security & Retention",
        body: [
          "No security measure is perfect or impenetrable, and we cannot guarantee perfect security. We recommend avoiding unsecure channels for sensitive or confidential information.",
          "How long we retain personal information depends on factors such as account maintenance, providing the Services, legal obligations, disputes, and enforcement of agreements."
        ]
      },
      {
        title: "Your Rights & Choices",
        body: [
          "Depending on where you live, you may have rights to access, delete, correct, port, restrict processing of, withdraw consent for, or appeal decisions regarding your personal information.",
          "You may opt out of promotional emails using the unsubscribe option displayed in those emails. We may still send non-promotional emails about your account or orders.",
          "We may need to collect information to verify your identity before processing a request. You may contact us using the details below to exercise available rights."
        ]
      },
      {
        title: "Complaints & International Users",
        body: [
          "If you have complaints about how we process personal information, please contact us using the contact details below.",
          "We may transfer, store, and process personal information outside your country, including through staff, service providers, and partners in other countries."
        ]
      },
      {
        title: "Contact",
        body: ["For questions about privacy practices or this Privacy Policy, email contactmirayaa@gmail.com."]
      }
    ]
  },
  shipping: {
    title: "Shipping Policy",
    label: "Shipping",
    lastUpdated: "22/06/2024",
    intro:
      "This Shipping Policy outlines Mirayaa's shipping process, rates, delivery timelines, and important delivery information for orders placed through the site.",
    sections: [
      {
        title: "Delivery Timeline",
        body: ["We ship all orders within 7-10 working days."]
      },
      {
        title: "Shipping Rates & Delivery Estimates",
        body: [
          "Within the same metro city: Standard shipping at Rs. 85.",
          "To a different metro city: Standard shipping at Rs. 245.",
          "Remote locations: Standard shipping at Rs. 150.",
          "Shipping charges for your order will be calculated and displayed at checkout. Delivery estimates are provided by the shipping carrier and are not guaranteed."
        ]
      },
      {
        title: "Shipping Locations",
        body: ["We currently ship to addresses within India."]
      },
      {
        title: "Shipping Confirmation & Tracking",
        body: [
          "Once your order has shipped, you will receive shipping confirmation with tracking information on our website. Please allow a few hours for the tracking number to become active."
        ]
      },
      {
        title: "Shipping Delays",
        body: [
          "In rare cases, shipping may be delayed due to unforeseen circumstances such as weather, carrier issues, or high order volumes. We will notify you if there is a significant delay."
        ]
      },
      {
        title: "Lost or Stolen Packages",
        body: [
          "We are not responsible for lost or stolen packages. If tracking shows that your package was delivered but you have not received it, please contact the shipping carrier directly to file a claim."
        ]
      },
      {
        title: "Shipping Address Errors",
        body: [
          "It is the customer's responsibility to provide accurate shipping information. Please double-check your shipping address before placing your order.",
          "We are not responsible for orders shipped to incorrect or incomplete addresses provided by the customer."
        ]
      },
      {
        title: "Shipping Charges",
        body: [
          "Shipping charges are non-refundable, except in cases where we have made an error in shipping, such as shipping the wrong item or a damaged item."
        ]
      },
      {
        title: "Contact Us",
        body: ["If you have any questions about our Shipping Policy, please contact us at contactmirayaa@gmail.com."]
      }
    ]
  },
  refund: {
    title: "Refund Policy",
    label: "Refunds",
    lastUpdated: "22/06/2024",
    intro:
      "Mirayaa offers returns, replacements, and refunds only for damaged or defective products, subject to the conditions below.",
    sections: [
      {
        title: "Return Policy",
        body: [
          "We only offer returns and replacements for damaged or defective products. Claims for damaged or defective items must be submitted within 24 hours of delivery.",
          "For replacements, send unboxing videos and pictures of the product showing defects, along with images of the original packaging. For packages lost in transit, claims must be submitted within 7 days after delivery.",
          "To be eligible for a replacement, the item must be in the same condition that you received it, unworn or unused, with tags and original packaging. You will also need the receipt or proof of purchase."
        ]
      },
      {
        title: "Starting a Claim",
        body: [
          "To start a claim or ask a claim-related question, contact us at contactmirayaa@gmail.com or message our Instagram handle @mirayaa.in.",
          "It usually takes 7-10 days for the replacement."
        ]
      },
      {
        title: "Unboxing & Courier Damage",
        body: [
          "Kindly unbox the package carefully. If the package is damaged while opening it with scissors or another sharp object, a replacement will not be possible unless we have the unboxing video or courier cover images.",
          "If you notice damage to the package while receiving it from the courier, mention the damage in the remark while signing. This helps us claim a refund from the courier service."
        ]
      },
      {
        title: "Exceptions",
        body: [
          "If you do not have an unboxing video of the order and we cannot verify the cause, we will not be liable for replacement of such products."
        ]
      },
      {
        title: "Exchanges",
        body: ["No exchanges are available on jewelry items from our store. Only replacements for damaged products are available."]
      },
      {
        title: "Refunds",
        body: [
          "Refunds are available only for customers who receive damaged products. If you receive a damaged item, contact us within 24 hours of delivery at contactmirayaa@gmail.com or through @mirayaa.in on Instagram.",
          "Include unboxing videos, pictures of the damaged product, and images of the original packaging.",
          "If your refund request is approved, we will process the refund to the same account used for the original payment. Please allow 7-10 business days for the refund to be processed and reflected in your account."
        ]
      },
      {
        title: "Contact",
        body: ["For questions or concerns about refunds, contact contactmirayaa@gmail.com or message @mirayaa.in on Instagram."]
      }
    ]
  },
  cancellation: {
    title: "Cancellation Policy",
    label: "Cancellation",
    lastUpdated: "22/06/2024",
    intro:
      "We understand that plans can change. This Cancellation Policy explains when and how you can cancel an order placed with Mirayaa.",
    sections: [
      {
        title: "Cancellation Window",
        body: [
          "You can cancel your order within 24 hours of placing it. To cancel, email contactmirayaa@gmail.com or send a direct message to our Instagram handle @mirayaa.in."
        ]
      },
      {
        title: "No Cancellations After 24 Hours",
        body: [
          "Unfortunately, we cannot accept cancellations if more than 24 hours have passed since you placed your order. Once this window closes, your order will be processed and shipped as scheduled."
        ]
      },
      {
        title: "Contact",
        body: [
          "If you have questions about the cancellation policy, contact us at contactmirayaa@gmail.com or through @mirayaa.in on Instagram."
        ]
      }
    ]
  }
};

const policyLinks = Object.entries(policies).map(([slug, policy]) => ({
  slug,
  label: policy.label
}));

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function generateStaticParams() {
  return Object.keys(policies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = policies[slug];

  return {
    title: policy ? policy.title : "Policy"
  };
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = policies[slug];

  if (!policy) {
    notFound();
  }

  return (
    <main className="mx-page py-12 lg:py-16">
      <section className="grid gap-10 border-b border-[var(--border)] pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:pb-14">
        <div>
          <p className="text-sm text-[var(--gold)]">Mirayaa policies</p>
          <h1 className="mt-4 max-w-[10ch] text-balance font-display text-6xl leading-[0.96] tracking-[-0.025em] text-[var(--ivory)] md:text-7xl">
            {policy.title}
          </h1>
        </div>
        <div className="max-w-3xl self-end">
          <p className="text-sm text-[var(--champagne)]/62">Last Updated- {policy.lastUpdated}</p>
          <p className="mt-5 text-pretty text-base leading-8 text-[var(--champagne)]/82">{policy.intro}</p>
        </div>
      </section>

      <div className="grid gap-10 py-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:py-14">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="Policies" className="grid gap-2 border-y border-[var(--border)] py-4 text-sm">
            {policyLinks.map((item) => (
              <Link
                key={item.slug}
                href={`/policies/${item.slug}`}
                className={`transition-colors duration-200 hover:text-[var(--ivory)] ${
                  item.slug === slug ? "text-[var(--gold)]" : "text-[var(--champagne)]/72"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <article className="divide-y divide-[var(--border)] border-t border-[var(--border)]">
          {policy.sections.map((section) => (
            <section key={section.title} id={sectionId(section.title)} className="grid gap-5 py-8 md:grid-cols-[0.36fr_0.64fr] md:gap-10">
              <h2 className="font-display text-3xl leading-tight text-[var(--ivory)]">{section.title}</h2>
              <div className="grid max-w-3xl gap-4 text-sm leading-7 text-[var(--champagne)]/82">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
