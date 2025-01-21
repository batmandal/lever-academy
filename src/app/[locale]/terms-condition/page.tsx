const termsAndConditions = [
  {
    title: "1. General",
    text: "Lever’s web application and related services (collectively referred to as the “Service”) are operated by Lever, Inc. (“Lever,” “us,” or “we”). Access to and use of the Service are subject to the following Terms and Conditions of Service (“Terms and Conditions”). By accessing or using any part of the Service, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions, including any future updates. Lever may revise, update, or modify these Terms and Conditions at its discretion.If such changes occur, we will post a notice on the web application for at least 7 days after the changes are made and indicate at the bottom of these Terms and Conditions the date they were last updated. Any revisions will become effective either (i) at the end of the 7-day notification period or (ii) the first time you access or use the Service after the changes, whichever comes first. If you do not agree to comply with these Terms and Conditions, you are not authorized to use or access the Service.",
    note: {
      noteTitle: "PLEASE NOTE:",
      noteText:
        "These Terms and Conditions include a mandatory arbitration clause for dispute resolution under certain circumstances. This means disputes will be resolved individually through arbitration, not via jury trials or class action lawsuits.",
    },
  },
  {
    title: "2. Description of Website and Service",
    text: "The Service allows users to access and use a variety of educational services, including learning or practicing a language. Lever may, in its sole discretion and at any time, update, change, suspend, make improvements to or discontinue any aspect of the Service, temporarily or permanently.",
  },
  {
    title: "3. Acceptable Use of the Services",
    text: "You are responsible for your use of the Services, and for any use of the Services made using your account. Our goal is to create a positive, useful, and safe user experience. To promote this goal, we prohibit certain kinds of conduct that may be harmful to other users or to us. When you use the Services, you must comply with our Community Guidelines.",
  },
  {
    title: "4. Additional Terms",
    text: "Some of our Services have additional terms and conditions (“Additional Terms”). Where Additional Terms apply to a Service, we will make them available for you to read through your use of that Service. By using that Service, you agree to the Additional Terms.",
  },
  {
    title: "5. Registration",
    text: "In connection with registering for and using the Service, you agree (i) to provide accurate, current and complete information about you and/or your organization as requested by Lever; (ii) to maintain the confidentiality of your password and other information related to the security of your account; (iii) to maintain and promptly update any registration information you provide to Lever, to keep such information accurate, current and complete; and (iv) to be fully responsible for all use of your account and for any actions that take place through your account.",
  },
  {
    title: "6. Submission of Content",
    text: "As a condition of submitting any ratings, reviews, information, data, text, photographs, audio clips, audiovisual works, translations, flashcards, or other materials on the Service (collectively, “Content”), you hereby grant to Lever a full-paid, royalty free, perpetual, irrevocable, worldwide, nonexclusive, transferable, and sublicensable license to use, reproduce, copy, adapt, modify, merge, distribute, publicly display, and create derivative works from the Content; incorporate the Content into other works; and sublicense through multiple tiers the Content. You acknowledge that this license cannot be terminated by you once your Content is submitted to the Service. You represent that you own or have secured all legal rights necessary for the Content submitted by you to be used by you, Lever, and others as described and otherwise contemplated in these Terms and Conditions. You understand that other users will have access to the Content and that neither they or Lever have any obligation to you or anyone else to maintain the confidentiality of the Content. You will not upload, display, or otherwise provide on or through the Service any Content that: (i) is libelous, defamatory, abusive, threatening, harassing, hateful, offensive, or otherwise violates any law or infringes upon the right of any third party (including copyright, trademark, privacy, publicity, or other personal or proprietary rights); (ii) in Lever’s sole judgment, is objectionable, restricts or inhibits any other person from using the Service, or may expose Lever or its users to any harm or liability of any kind; or (iii) violates Lever’s Community Guidelines.",
  },
  {
    title: "7. Payment Processors",
    text: "All financial transactions made in connection with the Service will be processed by a third party in accordance with their respective terms of use, privacy policy, and/or any applicable payment terms and conditions. We encourage you to learn about the practices of such third party. In no event will Lever be responsible for the actions or inactions of any third party payment processor, including, but not limited to, system downtime or payment service outages.",
  },
  {
    title: "8. Refund Policy",
    text: "All payments are nonrefundable. There are no refunds or credits for Virtual Items or partially used membership periods. However, Lever may grant refunds or credits on a case-by-case basis at our sole discretion. Lever’s grant of a refund or credit in one instance does not obligate Lever to provide a refund or credit in the future, under any circumstances. If you cancel your periodic subscription to a paid Lever service, you will continue to have access to the service through the end of your current billing period.",
  },
  {
    title: "9. Miscellaneous",
    text: 'These Terms and Conditions constitute the entire agreement between Lever and you concerning the subject matter hereof. In the event that any of the Terms and Conditions are held by a court or other tribunal of competent jurisdiction to be unenforceable, such provisions shall  be limited or eliminated to the minimum extent necessary so that these Terms and Conditions shall otherwise remain in full force and effect. A waiver by Lever or you of any provision of these Terms and Conditions or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. Lever may assign its rights or obligations under these Terms and Conditions without condition. These Terms and Conditions will be binding upon and will insure to the benefit of Lever and you, and Lever’s and your respective successors and permitted assigns. Lever Education ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our AI-based education platform (the "Website"). Please read this policy carefully to understand our practices regarding your personal information and how we will treat it.',
  },
];
const TermsCondition = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="w-screen h-[50vh] flex flex-col items-center justify-center">
        <h2 className="font-bold text-4xl">Terms and condition for service</h2>
        <p className="text-textsecondary mb-14 text-lg">
          Please note that these Terms and Conditions of Service were last
          revised in January _____, 2025.
        </p>
      </section>
      <section className="w-[1000px] flex flex-col ">
        <div className="flex flex-col gap-12">
          {termsAndConditions.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-4">
                <h2 className="font-bold text-4xl">{item.title}</h2>
                <p className="text-textsecondary text-lg">{item.text}</p>
                {item.note ? (
                  <div className="flex pl-[32px] gap-2">
                    <h3 className="whitespace-nowrap font-bold text-lg">
                      {item.note.noteTitle}
                    </h3>
                    <p className="text-textsecondary text-lg">
                      {item.note.noteText}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default TermsCondition;
