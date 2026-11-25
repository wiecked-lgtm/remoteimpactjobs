/*
  Remote Impact Jobs: all content in one file.
  Weekly update: add the new issue at the TOP of ISSUES and its jobs to JOBS.
  category: "marketing" | "communications" | "also"
  deadline: "YYYY-MM-DD" (job disappears from /jobs after this day) or null for rolling / no deadline
  ukPermit: true adds "UK work permit required"
  Embargo: an issue and its jobs appear on the site on the Friday after "date" (date + 3 days).
  To show it on another day, add webFrom: "YYYY-MM-DD" to the issue.
*/
window.RIJ = {
  ISSUES: [
    {
      n: 1,
      date: "2026-11-24",
      webFrom: "2026-11-24",
      title: "Issue #1: 16 remote impact jobs in marketing and communications",
      intro: `
        <p><strong>Welcome to the very first issue of Remote Impact Jobs in Marketing &amp; Communications!</strong></p>
        <p>Every week, I collect remote roles in marketing and communications at organisations working on climate, democracy, culture, education and tech for good. All of them are open to people living in Europe, and I check each listing before it goes out.</p>
        <p>I'm Stephanie, a marketing and communications professional with more than 15 years of experience at NGOs, cultural institutions and start-ups. I started this newsletter because most remote job boards are built for the US, and good impact roles in Europe are hard to find.</p>
        <p><strong>This week: sixteen remote jobs, eight in marketing (including the job of the week) and eight in communications, plus two hybrid picks.</strong></p>`,
      alsoTitle: "Also worth a look (hybrid)",
      practice: {
        title: "💡 Practice note: Do the WhatsApp maths before you pitch it",
        html: `
          <p>WhatsApp is in many marketing plans for 2027, but the costs are often underestimated. Since July 2025, Meta has charged for every marketing message delivered through the WhatsApp Business Platform, and the rate depends on the recipient's country. For a number in Germany, it is currently about 11 cents per message. In much of Western Europe, it is around 5 cents. One campaign message to 10,000 German contacts therefore costs over 1,100 euros every time you send it. Since October 2026, replies in the chat also count, once you go over 1,000 a month.</p>
          <p>If you want to test WhatsApp without that budget, start with a WhatsApp Channel. It is free and doesn't expose your followers' phone numbers. Use the paid API for messages that really need to land in someone's chat, and calculate the cost per send before you promise any results.</p>`
      },
      closing: `
        <p><strong>This is the first issue, so your feedback really counts.</strong> <a href="mailto:mail@stephanie-wieck.com">Write to me</a> and tell me which roles or topics you would like to see more of.</p>
        <p>Know someone who should see this? Share this page. Thank you for reading.</p>`
    }
  ],

  JOBS: [
    { issue: 1, jobOfWeek: true, category: "marketing", title: "Head of Marketing", org: "Wikimedia Foundation", field: "Tech for Good",
      meta: "Remote in 8 European countries · No deadline", deadline: null,
      desc: "Wikimedia is looking for a Head of Marketing to grow the audience of Wikipedia and its sister projects. You can work from Germany, France, Italy, the Netherlands, Poland, Spain, Switzerland or the UK. Pay is set by country; the US range (143,478 to 217,585 USD) is only a guide.",
      url: "https://job-boards.greenhouse.io/wikimedia/jobs/8127761" },

    { issue: 1, category: "marketing", title: "Field Marketing Manager, Firefox Enterprise", org: "Mozilla", field: "Tech for Good",
      meta: "Remote in Germany or France · No deadline", deadline: null,
      desc: "Help Firefox win business customers across Germany and the EU. A B2B role with a public-interest product.",
      url: "https://www.mozilla.org/en-US/careers/position/gh/8360433/" },
    { issue: 1, category: "marketing", title: "Senior Marketing Manager", org: "Enode", field: "Climate",
      meta: "Remote-first in Europe · No deadline", deadline: null,
      desc: "A climate tech company working on the energy transition. Remote-first across Europe, with an optional office in Oslo.",
      url: "https://jobs.ashbyhq.com/enode/f3674a79-1c5e-4078-8f50-26de047fa794" },
    { issue: 1, category: "marketing", title: "Director of External Relations, Marketing & Communications", org: "Oak National Academy", field: "Education",
      meta: "Remote, UK · UK work permit required · 110,660 GBP + 11% pension · Deadline 13 Dec", deadline: "2026-12-13", ukPermit: true,
      desc: "Lead on marketing, communications and external relations at the public body that provides free lesson resources to teachers across England. UK residence required.",
      url: "https://app.beapplied.com/apply/x5uyq17ipv" },
    { issue: 1, category: "marketing", title: "(Junior) Growth Associate", org: "Ostrom", field: "Climate",
      meta: "Berlin or remote · Salary not listed · No deadline", deadline: null,
      desc: "Entry-level growth role at a Berlin start-up that makes it easy to switch to clean, fair electricity. Listed as Berlin or remote.",
      url: "https://www.ostrom.de/careers?ashby_jid=c2073b43-69b3-41d2-b914-d8fbf17dc8eb" },
    { issue: 1, category: "marketing", title: "GTM Product Marketing Lead", org: "tem", field: "Climate",
      meta: "Remote, UK · UK work permit required · Salary not listed · No deadline", deadline: null, ukPermit: true,
      desc: "Lead go-to-market and product marketing at a company that connects businesses directly with renewable energy generators.",
      url: "https://jobs.ashbyhq.com/tem/98ab1a3d-9ee3-4de0-9010-6cef5cb84760" },
    { issue: 1, category: "marketing", title: "Campaign Manager", org: "tem", field: "Climate",
      meta: "Remote, UK · UK work permit required · Salary not listed · No deadline", deadline: null, ukPermit: true,
      desc: "Run multi-channel brand campaigns from brief to final asset, including budgets, agencies, freelancers and events. A good fit for people with two to four years of experience in marketing, at an agency or in creative production.",
      url: "https://jobs.ashbyhq.com/tem/df267b27-dd61-4e06-8ff9-f9f5aa6d7057" },
    { issue: 1, category: "marketing", title: "Growth Lead, Sell Side", org: "tem", field: "Climate",
      meta: "Remote, UK · UK work permit required · Salary not listed · No deadline", deadline: null, ukPermit: true,
      desc: "Drive growth for a company rebuilding how energy is bought and sold to make it transparent and fair. You will lead product marketing and go-to-market for the side of the business that works with renewable generators.",
      url: "https://jobs.ashbyhq.com/tem/6ee9acf0-80ef-4dbd-8657-b6260df8f1b5" },

    { issue: 1, category: "communications", title: "Communications Lead, Wikimedia Enterprise (Contract)", org: "Wikimedia Foundation", field: "Tech for Good",
      meta: "Remote in 8 European countries · No deadline", deadline: null,
      desc: "Lead communications for the commercial arm of Wikimedia, which provides Wikipedia data to large tech companies. Six-month contract, can be extended.",
      url: "https://job-boards.greenhouse.io/wikimedia/jobs/8248898" },
    { issue: 1, category: "communications", title: "Campaigner", org: "Campact", field: "Democracy",
      meta: "Remote in Germany · Based on TVöD E13 · No deadline", deadline: null,
      desc: "Run campaigns for one of Germany's largest civil society movements. German required. Two-year contract.",
      url: "https://jobs.talents4good.org/jobs/785232846-campaigner*innen" },
    { issue: 1, category: "communications", title: "Senior Communications Manager", org: "Every Casualty Counts", field: "Human rights",
      meta: "Fully remote, 0.6 FTE · 24,285 GBP (40,476 GBP full-time) · Deadline 20 Dec", deadline: "2026-12-20",
      desc: "Lead communications and marketing at a small human rights charity that records every casualty of armed conflict. The role starts with a 12-month contract. Apply by email with your CV and a cover letter; the details are in the job description. The organisation is based in the UK. Anyone living outside the UK should check whether employment is possible before applying. The team offers an informal, confidential conversation for this purpose.",
      url: "https://everycasualty.org/wp-content/uploads/2026/11/Senior-Communications-Manager-JD-2026.pdf" },
    { issue: 1, category: "communications", title: "Writer", org: "Our World in Data", field: "Science communication",
      meta: "Oxford or remote · 80,000 to 120,000 GBP · Rolling", deadline: null,
      desc: "Write about the world's biggest problems for a research publication read by millions. Office in Oxford, remote work possible, with some overlap with UK hours.",
      url: "https://ourworldindata.org/hiring-writer-2026" },
    { issue: 1, category: "communications", title: "Principal, Executive Communications", org: "Wikimedia Foundation", field: "Tech for Good",
      meta: "Remote in 8 European countries · US range 144,765 to 220,063 USD · No deadline", deadline: null,
      desc: "Shape communications for Wikimedia's leadership. Remote from the same eight European countries, working to US Eastern hours.",
      url: "https://job-boards.greenhouse.io/wikimedia/jobs/8138079" },
    { issue: 1, category: "communications", title: "Communications and Content Officer", org: "European Broadcasting Union (EBU)", field: "Public service media",
      meta: "Fully remote in the EEA · Salary not listed · Deadline 3 Jan 2027", deadline: "2027-01-03",
      desc: "Tell the stories of EBU Sport and Eurovision Sport for the alliance of Europe's public service media. Press releases, media relations, social-first content and video. Fully remote within the EEA.",
      url: "https://ebujobs.teamtailor.com/jobs/8726000-communications-and-content-officer" },
    { issue: 1, category: "communications", title: "Policy Communications Lead, Europe", org: "Mozilla", field: "Tech for Good",
      meta: "Remote in Belgium · No deadline", deadline: null,
      desc: "Lead Mozilla's public messaging on privacy, AI, open source and competition in Europe, including media relations and spokesperson preparation.",
      url: "https://www.mozilla.org/en-US/careers/position/gh/8248212/" },
    { issue: 1, category: "communications", title: "Global Director of Strategic & Political Communications", org: "Our Common Home", field: "Climate",
      meta: "Fully remote worldwide, some European hours · Salary not listed · No deadline", deadline: null,
      desc: "Build a global communications function that helps trusted local voices make caring for nature mainstream. You will work with partner organisations in around 19 countries.",
      url: "https://ourcommonhome.teamtailor.com/jobs/8102703-global-director-of-strategic-political-communications" },

    { issue: 1, category: "also", title: "Manager*in Community Growth Wikipedia", org: "Wikimedia Deutschland", field: "Tech for Good",
      meta: "Berlin, 1 to 2 office days a week", deadline: null,
      url: "https://wikimedia-deutschland.career.softgarden.de/jobs/68672118/Manager-in-Community-Growth-Wikipedia-all-genders-/" },
    { issue: 1, category: "also", title: "Campaigner:in/Referent:in für Gasausstieg in Kommunen", org: "Umweltinstitut München", field: "Climate",
      meta: "Munich, partly remote · 30 to 39 hours a week · Deadline 7 Dec", deadline: "2026-12-07",
      url: "https://umweltinstitut.org/wp-content/uploads/2026/11/20261119_Ausschreibung-Referentin-kommunaler-Gasausstieg.pdf" }
  ]
};
